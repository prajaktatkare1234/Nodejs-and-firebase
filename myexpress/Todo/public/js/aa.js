$(document).ready(function() {

  $('body').on("click", "#logout", (function() {
    $.ajax({
        url: "http://localhost:8081/logout",
        type: "GET",

        success: function(response) {
          if(response.status==false)
          {
          console.log(response);
            index();
          }
        },
        complete: function(xhr, status) {
            console.log("the request is complete!");
        },
});
  }));


});


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
