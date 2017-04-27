
$(document).ready(function($){
	  $('#carousel').carousel({
			interval: 5000
		});
 
	$('[id^=carousel-selector-]').click( function(){
	  var id_selector = $(this).attr("id");
	  var id = id_selector.substr(id_selector.length -1);
	  id = parseInt(id);
	  $('#carousel').carousel(id);
	
	
	  $('[id^=carousel-selector-]').addClass('unselected');
	  $(this).removeClass('unselected');
		
	});

	// when the carousel slides, auto update
	$('#carousel').on('slid.bs.carousel', function (e) {
		console.log("daf");
	  var id = $('li.active').data('slide-to');
	  id = parseInt(id);
	 	
		$('[id^=carousel-selector-]').addClass('unselected');
	  $('[id=carousel-selector-'+id+']').removeClass('unselected');
	});
});