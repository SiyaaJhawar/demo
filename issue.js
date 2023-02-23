const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKeyPath = 'C:\Users\swgu\Downloads\siyaajhawar-app.2023-02-22.private-key';
const privateKey = fs.readFileSync(privateKeyPath);

const payload = { data: 'example data' };
const options = { algorithm: 'RS256' };


const encodedJWT = jwt.sign(payload, privateKey, options);

console.log(encodedJWT);


