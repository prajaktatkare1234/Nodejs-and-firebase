var express= require('express');
// var app=express();
// var session=require('express-session')
 var router=express.Router();

// var firebase=require('../Config/config.js');
// var UsersRef = firebase.database().ref();
router.get('/',function(req,res)
{

// var session=req.session;
console.log("in welcome.js",req.session);
if(req.session.email==undefined){
res.send({"status":false});
}
else{
  res.send({"status":true})
}








});
module.exports=router;
