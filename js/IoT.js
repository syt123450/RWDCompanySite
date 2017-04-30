/**
 * Created by ss on 2017/4/22.
 */
$(function () {
	$("#downloadBrochure").hide();
	$("#downloadWhitePaper").hide();

	$("#BrochureButton").click(function () {
		$("#downloadBrochure").fadeIn("slow");
	});

	$("#WhitePaperButton").click(function () {
		$("#downloadWhitePaper").fadeIn("slow");
	});

	$("#span01").click(function () {
		$("#downloadBrochure").hide();
	});

	$("[type=reset]").click(function () {
		$("#downloadBrochure").hide();
		$("#downloadWhitePaper").hide();
	});


	$("#span02").click(function () {
		$("#downloadWhitePaper").hide();
	});


	$("#downloadBrochure").find("a").click(function (e) {
		$("#downloadBrochure").hide();
		var first = $("#downloadBrochure").find("[name=firstName]").val();
		var last = $("#downloadBrochure").find("[name=lastName]").val();
		var email = $("#downloadBrochure").find("[name=email]").val();

		var data = JSON.stringify({
			firstName: first,
			lastName: last,
			email: email
		});
		$.ajax({
			url: "/API/create",
			method: "post",
			contentType: "application/json; charset=utf-8",
			async: true,
			data: data,
			dataType: 'json',
			success: function (data) {
					$("#downloadBrochure").find("form").remove();
					$("#downloadBrochure").append("<div class='title'>"+data.message+"</div>");
					$("#downloadBrochure").show();
			}
		});



	});

	$("#downloadWhitePaper").find("a").click(function (e) {
		$("#downloadWhitePaper").hide();
		var first = $("#downloadWhitePaper").find("[name=firstName]").val();
		var last = $("#downloadWhitePaper").find("[name=lastName]").val();
		var email = $("#downloadWhitePaper").find("[name=email]").val();

		var data = JSON.stringify({
			firstName: first,
			lastName: last,
			email: email
		});

		$.ajax({
			url: "/API/create",
			method: "post",
			contentType: "application/json; charset=utf-8",
			async: true,
			data: data,
			dataType: 'json',
			success: function (data) {
					$("#downloadWhitePaper").find("form").remove();
					$("#downloadWhitePaper").append("<div class='title'>"+data.message+"</div>");
					$("#downloadWhitePaper").show();
			}
		});

	});
	
	$("form").find('input').change(function(){

		if($(this).parent().find("[name=firstName]").val()!=""&&$(this).parent().find("[name=lastName]").val()!=""&&$(this).parent().find("[name=email]").val()!=""){
			$(this).parent().find(".btn-info").removeClass("disabled");
		}else{
			$(this).parent().find(".btn-info").addClass("disabled");
		}
	});

	connect();

	$(window).unload(function () {
		disconnect();
	});

});