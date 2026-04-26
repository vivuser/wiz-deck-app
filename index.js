const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/version', (req, res) => {
  res.json({
    sha: process.env.SHA || 'local',
    branch: process.env.BRANCH_NAME || 'main',
    deployedAt: process.env.DEPLOYED_AT || new Date().toISOString(),
  });
});

// 👇 start server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});