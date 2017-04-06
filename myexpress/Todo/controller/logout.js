var express= require('express');
// var app=express();
// var session=require('express-session')
 var router=express.Router();

router.get('/',function(req,res)
{  console.log(req.session);
  req.session=null;

  res.send({"status":false})

});
module.exports=router;
