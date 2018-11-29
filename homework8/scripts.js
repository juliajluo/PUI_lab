 

// var timeout;

// function myFunction() {
//     timeout = setTimeout(showPage, 1200);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("container").style.display = "block";

//   // document.body.style.background = "white"
//   //do this in jquery soon
// }

// function pageFunction() {
//     timeout = setTimeout(showPage2, 500);
// }

// function showPage2() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("container").style.display = "block";
//   // document.body.style.background = "white"
//   //do this in jquery soon
// }






 $(document).ready(function(){ 
        // var timeout;
        // timeout = setTimeout(showPage, 2000);

        
        // jQuery(window).load(function() {
        //     $('#loader').fadeOut();
        //     $('#container').fadeIn();
        // });

        $(window).on("load", function() {
            $('#loader').fadeOut('slow');
            $('#container').fadeIn(8000);
            $('#navigation').addClass('animated fadeIn delay-2s');
        });


        $('#nav-toggle').click(function(){
		    $('#nav-toggle').toggleClass('is-active');
		    $('.left-navigation').toggleClass('is-active');
		  });

        // $("#sidebar").stick_in_parent();
        // console.log("hello");

        // $('#intro-text').flowtype({

        //      minimum   : 505,
        //      maximum   : 1200,
        //      minFont   : 12,
        //      maxFont   : 40,
        //      fontRatio : 30
        // });

});

