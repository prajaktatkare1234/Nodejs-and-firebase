$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8081/welcome",
        type: "GET",
        // headers:{"Content-Type":"application/json"},
        dataType:"",
        // data: obj,
        success: function(response) {
         console.log('the page was loaded', response);
             console.log(response);
             if(response.status==true)
            {
              welcome();
            }
            // else {
            //   index();
            // }
          },
        error: function(error) {
            console.log('the page was not loaded', error);
            console.log(obj);
        }
    });


    $('body').on("click", "#log", (function() {

        var name = $("#Username").val();
        var pwd = $("#lpwd").val();
        if(name=="")
        {
            $('span').remove();
            $('#Username').after('<span class="error"> Enter email</span>');
            return;
          }
            $('span').remove();
          var inputVal = $('#Username').val();
          var emailReg = /[a-z0-9._-]+@[a-z]+\.+[a-z]{2,3}$/;
          if (!emailReg.test(inputVal)) {
              $('#Username').after('<span class="error">Invalid Email </span>');
              return;
          }

        if(pwd=="")
        {
          $('span').remove();
          var a ="Enter password";
          $("#lpwd").after('<span class="error"><br>'+a+'</span>');
          return;

        }

        var obj = {
            email: name,
            pwd: pwd

        };

        $.ajax({
            url: "http://localhost:8081/login",
            type: "POST",
            // headers:{"Content-Type":"application/json"},
            dataType:"JSON",
            data: obj,
            success: function(response) {
                console.log('the page was loaded', response);
                console.log(response);
                console.log("my response",response);
                $('span').remove();
                var a =response.message;
                $("#d3").after('<span class="error"><br>'+a+'</span>');

                if(response.session==true){
                  welcome();

                }


            },
            error: function(error) {
                console.log('the page was not loaded', error);
                console.log(obj);
            }
        });
    }));

    $('body').on("click", "#reg", (function() {
        // alert("hdfcds");
        // console.log("jdfsg");
        var name = $("#name").val();
        var email=$("#email").val();
        var pwd = $("#pwd").val();
        var repwd=$("#repwd").val();



            $('span').remove();
            if(name==""){
              $('#name').after('<span class="error"> Enter name</span>');
              return;
            }
            var inputVal = $('#name').val();
            var name = /[a-zA-Z]{4,}$/;
            if (!name.test(inputVal)) {
              //alert("inavalid name");
              //console.log("hghjhj");
                $('#name').after('<span class="error">Enter name correctly</span>');
                return;
            }




            $('span').remove();
            if(email==""){
              $('#email').after('<span class="error"> Enter email</span>');
              return;
            }
            var inputVal = $('#email').val();
            var emailReg = /[a-z0-9._-]+@[a-z]+\.+[a-z]{2,3}$/;
            if (!emailReg.test(inputVal)) {
                $('#email').after('<span class="error">Invalid Email </span>');
                return;
            }



            $('span').remove();
            if(pwd==""){
              $('#pwd').after('<span class="error"> Enter password </span>');
              return;
            }
            var inputVal = $('#pwd').val();
            var pwd = /[a-z]{5,8}$/;
            if (!pwd.test(inputVal)) {
                $('#pwd').after('<span class="error">password must have atleast 5 characters and less than 8 </span>');
                return;
            }
            $('span').remove();
            if(repwd==""){
              $('#repwd').after('<span class="error"> Re-type password</span>');
              return;
            }
            var inputVal = $('#pwd').val();
            // var pwd = /[a-z]{4,8}$/;
            if (inputVal!==repwd) {
                $('#repwd').after('<span class="error">Passwords are not same </span>');
                return;
            }





          var obj = {
            name:name,
            email:email,
            pwd: pwd,
            //repwd:repwd

        };

        $.ajax({
            url: "http://localhost:8081/signup",
            type: "POST",
            // headers:{"Content-Type":"application/json"},
            dataType:"JSON",
            data: obj,
            success: function(response) {
                console.log('the page was loaded', response);
              // console.log(response);
                $('span').remove();
                var a =response.message;
                $("#reg").after('<span class="error"><br>'+a+'</span>');
                // console.log(response);
                if(response.status===true){
                  index()
                }
                //
              },
            error: function(error) {
                console.log('the page was not loaded', error);
                console.log(obj);
            }
        });

    }));




});
function welcome() {
    // alert("hii");
    $.ajax({
        url: "/html/welcome.html",
        type: "GET",
        datatype: "html",
        success: function(response) {
            console.log('the page was loaded', response);
            $('body').html(response);
            // console.log("response in welcome",response);
            console.log('the page was not loaded', response);
        },
        complete: function(xhr, status) {
            console.log("the request is complete!");
        },

    });
}



function index()
{
  $.ajax({
      url: "index.html",
      type: "GET",
      datatype: "html",
      success: function(response) {
          console.log('the page was loaded', response);
          $('body').html(response);
          console.log('the page was not loaded', response);
      },
      complete: function(xhr, status) {
          console.log("the request is complete!");
      },

  });
}
