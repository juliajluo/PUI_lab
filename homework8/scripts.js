 $(document).ready(function(){                    


        $('#nav-toggle').click(function(){
		    $('#nav-toggle').toggleClass('is-active');
		    $('.left-navigation').toggleClass('is-active');
		  });

        $("#sidebar").stick_in_parent();

   });




