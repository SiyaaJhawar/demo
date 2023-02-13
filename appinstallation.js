
const axios = require("axios");

async function createInstallationToken(appId, privateKey, INSTALLATION_ID) {
  const jwt = require("jsonwebtoken");

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss: appId
  };
  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

  const response = await axios.post(`https://api.github.com/app/installations/34148902/access_tokens`, {}, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.token;
}

createInstallationToken("APP_ID", "PRIVATE_KEY", "INSTALLATION_ID").then(token => {
  console.log(token);
});









