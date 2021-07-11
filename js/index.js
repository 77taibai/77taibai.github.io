'use strict'

$(window).resize(resize);
$(document).ready(resize)

function resize() {
    let docWidth = $("body").width();
    let aboutHeight = $("#about").height();
    let pyHeight = $("#py").height();
    $("#top_div").css("width", docWidth - 30);
    $("#jinrishici").css({"width":docWidth / 2 - 35, "left":docWidth / 2 + 20});
    $("#about").css("width", docWidth / 2 - 20);
    $("#email").css({"width":docWidth / 2 - 20, "top":aboutHeight + 118});
    $("#py").css({"width":docWidth / 2 - 35, "left":docWidth / 2 + 20});
    $("#by").css({"width":docWidth - 30, "top":pyHeight + 180});
}
