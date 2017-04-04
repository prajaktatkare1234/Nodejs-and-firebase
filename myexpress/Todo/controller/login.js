var express= require('express');
var app=express();
 var router=express.Router();


var firebase=require('../Config/config.js');
var UsersRef = firebase.database().ref();
router.post('/',function(req,res)
{
  var email=req.body.email;
  var pwd=req.body.pwd;
  console.log(email);
UsersRef.orderByChild("email").equalTo(email).once("value",function(snap){
  if(snap.val()!==null){
    snap.forEach(function(x){

         var p=x.val();


      if(p.pwd==pwd){
        res.send({"status":true,"message":"logged in successfully" })

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
