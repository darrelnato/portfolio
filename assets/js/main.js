$(document).ready(function() {

	$(".burger").on("click",function(e){
		$( this ).toggleClass( "cross" );
		$( '#hidden-menu' ).toggleClass( "show" );
    });

    $(".hm-link").click(function() {
    	$( ".burger" ).removeClass( "cross" );
    	$( '#hidden-menu' ).removeClass( "show" );
    });

  $('.tilt-js').tilt({
    perspective: 10000,
    scale: 1.1
  })
});