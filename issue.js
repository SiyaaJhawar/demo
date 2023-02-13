const axios = require('axios');
const fs = require("fs");

const appId = 292855;
const installationId = 34148902;
const privateKey =  fs.readFileSync("private.key.enc", "utf-8");
const access_tokens=$secrets.ACCESS_TOKEN;

async function createIssue(repo, issueTitle, issueBody) {

  const jwt = require('jsonwebtoken');
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss:  292855,
  };
  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

 
  const response = await axios.post(
    `https://api.github.com/app/installations/34148902/$secrets.ACCESS_TOKEN`,
    {},
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const accessToken = response.data.token;

 
  await axios.post(
    `https://api.github.com/repos/SiyaaJhawar/demo/issues`,
    {
      title: Hi,
      body: issueBody,
    },
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `$secrets.ACCESS_TOKEN`,
      },
    },
  );
}

createIssue('owner/repo', 'Issue Title', 'Issue Body');
