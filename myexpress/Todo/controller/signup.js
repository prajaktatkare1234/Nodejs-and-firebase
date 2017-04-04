var express= require('express');
var app=express();
 var router=express.Router();

var firebase=require('../Config/config.js');
var UsersRef = firebase.database().ref();

router.post('/',function(req,res)
{
  var d=new Date();
  console.log(d);
 // postman.setEnvironmentVariable('date',d);
  var name=req.body.name;
  var email=req.body.email;
  var pwd=req.body.pwd;
  var repwd=req.body.pwd;
  // var date=req.body.date;
  console.log("prajakta");
  console.log(repwd);



  if( name==undefined ||  name=="" ||  name==null)
  {

  res.send({"status":true,"message":"name can't be empty"});

  }
  // req.checkBody('name',"name cant be empty").notEmpty();
  else if(email==undefined ||email=="" ||email==null)
  {
  res.send({"status":true,"message":"email can't be empty"});
  }
  else if( pwd==undefined ||  pwd==""|| pwd==null)
  {
  res.send({"status":true,"message":"password can't be empty"});
  }
  else if(pwd!==repwd){
    res.send({"status":true,"message":"passwords are not same"});
  }


  else
  {
req.checkBody('email', "Enter a valid email address.").isEmail();
var errors = req.validationErrors();
if (errors) {
  res.send(errors);
  return;
}
req.checkBody('pwd',"Enter at least 4 and less than 8 characters").matches(/[a-z]{5,8}$/);
var errors = req.validationErrors();
if (errors) {
  res.send(errors);
  return;
}
UsersRef.orderByChild('email').equalTo(email).once("value",function(s){
if(s.val()===null){

    UsersRef.child(name).set({
        email:email,
        pwd:pwd,
         date:d+""
      });
      res.send({
        "status":true,"message":"successfully"
      })
  }
  else {
    res.send({
      "status":false,"message":"Email already exist"
    });
  }
});


}
});
module.exports=router;
