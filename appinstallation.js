const axios = require('axios');


const installationId = 292855;


const accessToken = '***';


const title = 'Example issue';
const body = 'This is an example issue created using the GitHub API.';


axios.post(`https://api.github.com/repos/SiyaaJhawar/demo/issues`, {
  title: title,
  body: body
}, {
  headers: {
    'Authorization': `token ${accessToken}`,
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'SiyaaJhawar App',
    'X-OAuth-Scopes': 'demo',
    'X-Accepted-OAuth-Scopes': 'demo'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });




















