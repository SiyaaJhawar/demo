const axios = require('axios');

const appId = process.env.APP_ID;
const installationId = process.env.INSTALLATION_ID;
const privateKey = process.env.PRIVATE_KEY;
const access_tokens=process.env.TOKEN;

async function createIssue(repo, issueTitle, issueBody) {

  const jwt = require('jsonwebtoken');
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + (10 * 60),
    iss:  process.env.APP_ID,
  };
  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

 
  const response = await axios.post(
    `https://api.github.com/app/installations/process.env.INSTALLATION_ID/process.env.TOKEN`,
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
        Authorization: `Token ${accessToken}`,
      },
    },
  );
}

createIssue('owner/repo', 'Issue Title', 'Issue Body');
