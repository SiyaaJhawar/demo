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
