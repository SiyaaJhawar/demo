
const axios = require('axios');

// Using import statement

axios.post('/repos/:owner/:repo/issues', {
  title: 'Hi',
  body: 'Issue created by github app'
}, {
  params: {
    owner: 'SiyaaJhawar',
    repo: 'demo'
  }
}).then(response => {
  console.log(response.data)
}).catch(error => {
  console.error(error)
})





