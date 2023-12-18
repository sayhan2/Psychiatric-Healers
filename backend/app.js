const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
const homeroute=require('./home');
app.use('/', homeroute);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
