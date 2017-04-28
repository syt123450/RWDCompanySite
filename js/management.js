/**
 * Created by ss on 2017/4/22.
 */
$(function () {

    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();
    $("#div5").hide();
    $("#div6").hide();

    $("#span1").click(function () {

        $("#div1").fadeIn("slow");

    });
    $("#span2").click(function () {

        $("#div2").fadeIn("slow");

    });
    $("#span3").click(function () {

        $("#div3").fadeIn("slow");

    });
    $("#span4").click(function () {

        $("#div4").fadeIn("slow");

    });
    $("#span5").click(function () {

        $("#div5").fadeIn("slow");

    });
    $("#span6").click(function () {

        $("#div6").fadeIn("slow");

    });


    $("#span7").click(function () {

        $("#div1").fadeOut("slow");

    })
    $("#span8").click(function () {

        $("#div2").fadeOut("slow");

    })
    $("#span9").click(function () {

        $("#div3").fadeOut("slow");

    })
    $("#span10").click(function () {

        $("#div4").fadeOut("slow");

    })
    $("#span11").click(function () {

        $("#div5").fadeOut("slow");

    })
    $("#span12").click(function () {

        $("#div6").fadeOut("slow");

    });

    // connect();
    //
    // $(window).unload(function () {
    //     disconnect();
    // });

});