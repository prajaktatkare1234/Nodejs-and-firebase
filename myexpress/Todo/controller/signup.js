var express= require('express');
var app=express();
 var router=express.Router();

var firebase=require('../Config/config.js');
var UsersRef = firebase.database().ref();
signupObj = require('../model/signup');
signup = new signupObj();
router.post('/',function(req,res)
{
  console.log("I am in controller");

    signup.signupUser(req, function(err,result){
        if(err){
          console.log("controller error",err);
            res.send({"status": false,"message": err});					}
        else {
          console.log(result);
          console.log("gfdgfdgs");

            res.send({"status": true,"message": "Successfully Registered" ,"session":true});
        }


});
});
module.exports=router;
