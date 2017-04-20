var firebase=require('../Config/config.js');
 ref = firebase.database().ref();

  function signup(){

   }
   signup.prototype.signupUser = function(req, cb){
       var d=new Date();
       var name=req.body.name;
     var email=req.body.email;
     var pwd=req.body.pwd;
     req.checkBody('name',"name cant be empty").notEmpty();

     req.checkBody('email',"email cant be empty").notEmpty();

     req.checkBody('pwd',"pwd cant be empty").notEmpty();

     req.checkBody('email', "Enter a valid email address.").isEmail();


     var errors = req.validationErrors();
     if (errors) {
       console.log(errors);
      cb(errors[0].msg,null)
     }
     else{
      //  console.log("jhfdsf");
     ref.orderByChild("email").equalTo(email).once("value",function(s){

     if(s.val()===null){


         ref.push().set({
            name:name,
             email:email,
             pwd:pwd,
              date:d+""


           });
           cb(null,email)

       }
       else {

        cb("Email already exist",null)
       }





  })
}
 }
 module.exports = signup;
//req.checkBody('pwd',"Password should have at least 5 and less than 8 characters").matches(/[a-z]{5,8}$/);
