const express = require('express');
const axios = require('axios');
const app = express();
const port = 1234;
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.get('/repo', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/repos/lostboyz923/yo-millertime', {
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://127.0.0.1:${port}`);
});

