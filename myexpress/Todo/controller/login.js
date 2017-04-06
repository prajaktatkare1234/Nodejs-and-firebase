var express= require('express');
var app=express();
// var session=require('express-session')
 var router=express.Router();

// var session_login;
var firebase=require('../Config/config.js');
var UsersRef = firebase.database().ref();
router.post('/',function(req,res)
{
  var email=req.body.email;
  var pwd=req.body.pwd;
  // console.log(email);
UsersRef.orderByChild("email").equalTo(email).once("value",function(snap){
  // var session_login=req.session;
  if(snap.val()!==null){
    snap.forEach(function(x){

         var p=x.val();


      if(p.pwd==pwd){

        req.session=p;

        res.send({"status":true,"message":"logged in successfully","session":true })
        console.log(req.session);


      }
      else {
          res.send({"status":false,"message":"login failed" })
      }
    })
  }
  else {
    res.send({"status":false,"message":"login failed" })
  }

})
})

module.exports=router;
