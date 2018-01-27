$(document).ready(function(){
  $( "#target" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
    $.ajax({
      url: "../server/index.js",
      success: function(result) {
        console.log('hello')
        //$("#div1").html(result);
      }
    });
  });
});
