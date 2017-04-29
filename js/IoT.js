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
    // connect();
    //
    // $(window).unload(function(){
    //     disconnect();
    // });
});
