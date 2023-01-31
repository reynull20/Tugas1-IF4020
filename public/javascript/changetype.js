$(".btn-primary").on("click", function (event) {
    var prev = $('.active');
    prev.addClass("disable");
    prev.removeClass("active");

    $(this).addClass("active");
    $(this).removeClass("disable");
})