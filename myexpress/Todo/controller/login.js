var express= require('express');
var app=express();
 var router=express.Router();

var firebase=require('../Config/config.js');
loginObj = require('../model/login');
login = new loginObj();
router.post('/',function(req,res)
{
  console.log("I am in controller");
  var data ={
        email:req.body.email,
          pwd:req.body.pwd

        }
    login.LoginUser(req, function(err,result){
        if(err){
          console.log(err);
            res.send({"status": false,"message": err});					}
        else {
          console.log(result);
          req.session=result;
            res.send({"status": true,"message": "Successfully login" ,"session":true});
        }
    // });
// }
});
});
module.exports=router;
