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

	$("#cancel1").click(function () {
		$("#downloadBrochure").hide();
	});

	$("#span02").click(function () {
		$("#downloadWhitePaper").hide();
	});

	$("#cancel2").click(function () {
		$("#downloadWhitePaper").hide();
	});

	$("#downloadBrochure").find("a").click(function (e) {
		var first = $("#downloadBrochure").find("[name=firstName]").val();
		var last = $("#downloadBrochure").find("[name=lastName]").val();
		var email = $("#downloadBrochure").find("[name=emmail]").val();

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
				if (data.message == "success" || data.message == "Success") {

					$("#downloadBrochure").find("form").html("<h3>Thank you for providing contacts.</h3>");
				}
			}
		});

	});

	$("#downloadWhitePaper").find("a").click(function (e) {

		var first = $("#downloadWhitePaper").find("[name=firstName]").val();
		var last = $("#downloadWhitePaper").find("[name=lastName]").val();
		var email = $("#downloadWhitePaper").find("[name=emmail]").val();

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
				if (data.message == "success" || data.message == "Success") {

					$("#downloadWhitePaper").find("form").html("<h3>Thank you for providing contacts.</h3>");
				}
			}
		});

	});
});