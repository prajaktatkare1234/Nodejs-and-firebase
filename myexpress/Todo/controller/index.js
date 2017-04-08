var express= require('express');
 var router=express.Router();




router.use('/signup',require('./signup'));
router.use('/login',require('./login'));
router.use('/getall',require('./getall'));
router.use('/welcome',require('./welcome'));
router.use('/logout',require('./logout'));


module.exports=router;
