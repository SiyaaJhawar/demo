const { Octokit } = require('@octokit/core')
const octokit = new Octokit({ auth: token })

octokit.request('POST /repos/:owner/:repo/issues', {
  owner: 'SiyaaJhawar',
  repo: 'demo',
  title: 'Hi',
  body: 'Issue created by github app'
}).then(response => {
  console.log(response.data)
}).catch(error => {
  console.error(error)
})





