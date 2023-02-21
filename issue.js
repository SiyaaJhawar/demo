const axios = require('axios');
const fs = require('fs');
const jwt = require('jsonwebtoken');


const privateKey = fs.readFileSync('private.key.enc');


const appId = 292855;

const installationId =34148902 ;


const now = Math.floor(Date.now() / 1000);


const payload = {
  iat: now,
  exp: now + 60,
  iss: appId
};


const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });


axios.post(`https://api.github.com/app/installations/34148902/access_tokens`, {}, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.machine-man-preview+json'
  }
})
  .then(response => {
    console.log(response.data.token);
  })
  .catch(error => {
    console.error(error);
  });
