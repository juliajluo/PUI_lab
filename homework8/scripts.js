 $(document).ready(function(){                    


        $('#nav-toggle').click(function(){
		    $('#nav-toggle').toggleClass('is-active');
		    $('.left-navigation').toggleClass('is-active');
		  });

        // $("#sidebar").stick_in_parent();

        $('#intro').flowtype({
             minimum   : 50,
             maximum   : 120,
             minFont   : 12,
             maxFont   : 40,
             fontRatio : 30
        });



   });




