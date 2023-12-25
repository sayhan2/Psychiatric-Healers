const express=require('express');
const router=express.Router();
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/about', (req, res)=>{
  res.render('about');
});
router.get('/mission', (req, res)=>{
  res.render('mission');
});
router.get('/provider', (req, res)=>{
  res.render('provider');
});
module.exports=router;
