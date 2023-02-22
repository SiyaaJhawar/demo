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

const octokit = new Octokit({ auth: token })
octokit.request('GET /user').then(response => {
  console.log(response.data.login)
})
