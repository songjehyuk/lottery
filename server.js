import express from 'express';
const app = express();

import path from 'path';
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, './dist')));

app.listen(3000, () => {
  console.log('server port 8080...');
});

app.get('*', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') });
});
