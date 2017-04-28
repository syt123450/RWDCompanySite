/**
 * Created by ss on 2017/4/22.
 */
$(document).ready(function($){



	$(".panel-body").on("click",function(e){
		var link= $(this).data("link");
		console.log(link);
		$.get("blogcontent",
			  {link:link},
			  function(data,status){
			$("#blog_content").html("<div><h3>"+data.title+"</h3></div>");
			$("#blog_content").html("<div><p>"+data.author+" posted on "+data.timestamp+"</p></div>");
			$("#blog_content").html("<div><p>"+data.content+"</p></div>");
		})
	});

    // connect();
    //
    // $(window).unload(function(){
    //     disconnect();
    // });
});