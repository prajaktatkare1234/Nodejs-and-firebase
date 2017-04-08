var firebase=require('../Config/config.js');
 ref = firebase.database().ref();

  function login(){

   }
login.prototype.LoginUser = function(req, cb){
console.log("model LoginUser");
  var email=req.body.email;
  var pwd=req.body.pwd;
  req.checkBody('email',"email cant be empty").notEmpty();
  var errors = req.validationErrors();
  if (errors) {

   cb(errors[0].msg,null)
  }
  req.checkBody('pwd',"password cant be empty").notEmpty();
  var errors = req.validationErrors();
  if (errors) {

   cb(errors[0].msg,null)
  }

       ref.orderByChild("email").equalTo(email).once("value",function(snap){
        // var session_login=req.session;
         if(snap.val()!==null){
          snap.forEach(function(User_detail){
              var UserObj=User_detail.val();
             if(UserObj.pwd==pwd)
             {
                cb(null,UserObj);
              }
            else {
              var err="Login failed"
              cb(err,null);
           }
            });
        }
         else {
           var err="Login failed"
           cb(err,null);
         }
       });
};

module.exports = login;
