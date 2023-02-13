const axios = require("axios");

async function getRepository(owner, repo, token) {
  const response = await axios.get(`https://api.github.com/repos/SiyaaJhawar/demo`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

getRepository("SiyaaJhawar", "demo", "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").then(repository => {
  console.log(repository);
});
