 

var timeout;

function myFunction() {

    timeout = setTimeout(showPage, 8000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";

  document.getElementById("container").style.display = "initial";
  document.body.style.background = "white"

  //do this in jquery soon
}







 $(document).ready(function(){ 
    //     var timeout;
    //     timeout = setTimeout(showPage, 2000);

        
    //     jQuery(window).load(function() {
    //         $( '#loader' ).fadeOut();
    //         $('#container').fadeIn();
    //     });


    //     $('#nav-toggle').click(function(){
		  //   $('#nav-toggle').toggleClass('is-active');
		  //   $('.left-navigation').toggleClass('is-active');
		  // });

        // $("#sidebar").stick_in_parent();

        $('#intro').flowtype({
             minimum   : 50,
             maximum   : 120,
             minFont   : 12,
             maxFont   : 40,
             fontRatio : 30
        });

});

