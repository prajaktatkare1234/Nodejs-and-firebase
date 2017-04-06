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

                if(response.session==true){
                  welcome();

                }

                // if(response.status==true)
                // {

              // }
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

          var obj = {
            name:name,
            email:email,
            pwd: pwd,
            repwd:repwd

        };

        $.ajax({
            url: "http://localhost:8081/signup",
            type: "POST",
            // headers:{"Content-Type":"application/json"},
            dataType:"JSON",
            data: obj,
            success: function(response) {
                console.log('the page was loaded', response);
                // console.log(response.message);
                $('span').remove();
                var a =response.message;
                $("#reg").after('<span class="error"><br>'+a+'</span>');
                console.log(response);
            },
            error: function(error) {
                console.log('the page was not loaded', error);
                console.log(obj);
            }
        });

    }));
    // $('body').on("click", "#logout", (function() {
    //   $.ajax({
    //       url: "http://localhost:8081/logout",
    //       type: "GET",
    //
    //       success: function(response) {
    //         if(response.status==true)
    //         {
    //           index();
    //         }
    //       },
    //       complete: function(xhr, status) {
    //           console.log("the request is complete!");
    //       },
    //
    //   });
// }));



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


// function logout()
// {
//   $.ajax({
//       url: "index.html",
//       type: "GET",
//       datatype: "html",
//       success: function(response) {
//           console.log('the page was loaded', response);
//           $('body').html(response);
//           console.log('the page was not loaded', response);
//       },
//       complete: function(xhr, status) {
//           console.log("the request is complete!");
//       },
//
//   });
// }

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
