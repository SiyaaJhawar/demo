const axios = require('axios');
const jwt = require('jsonwebtoken');

const createInstallationToken = async () => {
  const app_id = process.env.APP_ID;
  const installation_id = process.env.INSTALLATION_ID;
  const private_key = process.env.PRIVATE_KEY;

  const payload = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (10 * 60),
    iss: app_id,
  };
  
  const jwtToken = jwt.sign(payload, private_key, { algorithm: 'RS256' });
  
  try {
    const response = await axios.post(`https://api.github.com/app/installations/installation_id/access_tokens`, {}, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/vnd.github+json',
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};















