const axios = require('axios');


const owner = 'SiyaaJhawar';
const repo = 'demo';


const accessToken = '***';


axios.get(`https://api.github.com/repos/SiyaaJhawar/demo/issues`, {
  headers: {
    'Authorization': `token ${accessToken}`,
    'Accept': 'application/vnd.github.v3+json'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
