$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("🥳Happy birthay Ali <br> Eres la mejor. <br> Te Quiero❤️").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

