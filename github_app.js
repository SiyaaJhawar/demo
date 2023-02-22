require('dotenv').config()
const { Octokit } = require('@octokit/core')
const jwt = require('jsonwebtoken')

const appId = process.env.APP_ID
const privateKey = require('fs').readFileSync('private.key.enc')

const now = Math.floor(Date.now() / 1000)
const payload = {
  iat: now,
  exp: now + (10 * 60), 
  iss: appId
}
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })

const octokit = new Octokit({ auth:token,username: 'SiyaaJhawar',password: 'Siyaa@12345'})
octokit.request('GET /user').then(response => {
  console.log(response.data.login)
})



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

