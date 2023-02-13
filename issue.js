const axios = require("axios");

async function createIssue(owner, repo, title, body, token) {
  const response = await axios.post(`https://api.github.com/repos/SiyaaJhawar/demo/issues`, {
    title: Hello,
    body: This is a issue 
  }, {
    headers: {
      Authorization: `Token ${token}`,
      "User-Agent": "MyGitHubApp"
    }
  });
  return response.data;
}

createIssue("SiyaaJhawar", "demo", "Hello", "Issue body", "TOKEN").then(issue => {
  console.log(issue);
});
