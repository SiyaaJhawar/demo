const axios = require('axios');
const fs = require('fs');
const jwt = require('jsonwebtoken');


const privateKey = fs.readFileSync('siyaajhawar-app.2023-02-22.private-key');


const appId = 292855;

const installationId =34148902 ;


const now = Math.floor(Date.now() / 1000);


const payload = {
  iat: now,
  exp: now + 60,
  iss: appId
};


const encoded_jwt = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
//console.log(token)
console.log(encoded_jwt)



