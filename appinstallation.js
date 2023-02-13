
const axios = require("axios");
const appId = process.env.APP_ID;
const installationId = process.env.INSTALLATION_ID;
const privateKey = process.env.PRIVATE_KEY;

async function createInstallationToken(appId, privateKey, installation_Id) {
  const jwt = require("jsonwebtoken");

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss: 292855
  };
  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

  const response = await axios.post(`https://api.github.com/app/installations/ process.env.INSTALLATION_ID/access_tokens`, {}, {
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









