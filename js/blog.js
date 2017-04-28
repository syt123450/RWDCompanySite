/**
 * Created by ss on 2017/4/22.
 */
$(document).ready(function($){



	$(".panel-body").on("click",function(e){
		var link= $(this).data("link");

		
		$('[id^=blog_content-]').hide();
		$('#blog_content-'+link).show();
	});

});