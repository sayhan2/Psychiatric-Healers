const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const port=3002;
app.use(express.static('public'));
const homeroute=require('./home');
app.get('/', (req, res) => {
    res.render('index'); // This will render views/index.ejs
  });
app.use('/', homeroute);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
module.exports = app;
