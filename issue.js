const jwt = require('jsonwebtoken');


const payload = {
  iss: '292855',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
};


const privateKey = process.env.PRIVATE_KEY;


const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log(token);


