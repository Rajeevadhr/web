/**
 * Created by rajeeva on 3/7/18.
 */

$(document).ready(function () {
    $("button").click(function () {
        $("p").toggle(800);
    });

    var para = $("p");
    para.on({
        "click": function () {
            $(this).css("background-color","red")
        },
        "mouseenter": function () {
            $(this).css("background-color","yellow")
        }
    });
});