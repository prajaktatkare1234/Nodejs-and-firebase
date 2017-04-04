var express= require('express');
var app=express();
 var router=express.Router();


var firebase=require('../Config/config.js');
var UsersRef = firebase.database().ref();
var  arr=[];

router.get('/',function(req,res)
{
  UsersRef.on("value", function(snapshot) {
    // res.send(snapshot.val());
    snapshot.forEach(function(Users){
      arr.push(Users.val());

    })

    res.send(arr);
  });



})


module.exports=router;
