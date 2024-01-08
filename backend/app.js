const express=require('express');
const app=express();
const path=require('path');
require('dotenv').config();
const bodyParser=require('body-parser');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Import routes
const routes=require('./routes');
app.use('/',routes);
// Start the server
const port=3002;
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`);
});
module.exports = app;
