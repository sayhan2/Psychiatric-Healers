const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const routes = require('./routes');
app.set('views', path.join(__dirname, 'views'));
const port=3002;
app.use(express.static('public'));
app.use('/', routes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
module.exports = app;
