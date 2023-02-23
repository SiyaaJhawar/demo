const jwt = require('jsonwebtoken');


const payload = {
  iss: '292855',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
};


const privateKeyPath = 'siyaajhawar-app.2023-02-22.private-key';
const privateKey = fs.readFileSync(privateKeyPath);
const options = { algorithm: 'RS256' };



const token = jwt.sign(payload, privateKey,options);

console.log(token);


