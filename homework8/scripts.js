 $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('#navigation').fadeIn(500);
            } else {
                $('#navigation').fadeOut(500);
            }
        });

        $('#nav-toggle').click(function(){
		    $('#nav-toggle').toggleClass('is-active');
		    $('.left-navigation').toggleClass('is-active');
		  });

        $("#sidebar").stick_in_parent();

   });




