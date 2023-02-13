const axios = require("axios");

async function makeApiRequest() {
  const accessToken = await authenticate();

  try {
    const response = await axios.get(`https://api.github.com/repos/SiyaaJhawar/demo/issues`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

makeApiRequest();



