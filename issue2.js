
const axios = require('axios');

// Using import statement


axios.request('POST /repos/:owner/:repo/issues', {
  owner: 'SiyaaJhawar',
  repo: 'demo',
  title: 'Hi',
  body: 'Issue created by github app'
}).then(response => {
  console.log(response.data)
}).catch(error => {
  console.error(error)
})





