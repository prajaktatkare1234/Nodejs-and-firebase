var express= require('express');
var app=express();
 var router=express.Router();




router.use('/signup',require('./signup'));
router.use('/login',require('./login'));
router.use('/getall',require('./getall'));

module.exports=router;
