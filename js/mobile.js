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
	$("#downloadBrochure").find("[type=submit]").click(function (e) {
		e.preventDefault();
		console.log("lalal")
		var first = $("#downloadBrochure").find("[name=firstName]").val();
		var last = $("#downloadBrochure").find("[name=lastName]").val();
		var email = $("#downloadBrochure").find("[name=emmail]").val();

		var data = JSON.stringify({
			firstname: first,
			lastname: last,
			email: email
		});

		$.post("", data, function (data, status) {
			if (status == "OK" || status == 200) {
				var url = URL.createObjectURL(data);
				var $a = $('<a />', {
					'href': url,
					'download': 'brochure.pdf',
					'text': "click"
				}).hide().appendTo("body")[0].click();

				$("#downloadBrochure").find("form").html("<h3>Start to download the file</h3>");
			}
		})

	});

	$("#downloadWhitePaper").find("[type=submit]").click(function (e) {
		e.preventDefault();
		console.log("lalal")
		var first = $("#downloadBrochure").find("[name=firstName]").val();
		var last = $("#downloadBrochure").find("[name=lastName]").val();
		var email = $("#downloadBrochure").find("[name=emmail]").val();

		var data = JSON.stringify({
			firstname: first,
			lastname: last,
			email: email
		});

		$.post("", data, function (data, status) {
			if (status == "OK" || status == 200) {
				var url = URL.createObjectURL(data);
				var $a = $('<a />', {
					'href': url,
					'download': 'brochure.pdf',
					'text': "click"
				}).hide().appendTo("body")[0].click();

				$("#downloadBrochure").find("form").html("<h3>Start to download the file</h3>");
			}
		});

	});
});