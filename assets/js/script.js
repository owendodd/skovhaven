$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').fadeOut();
    }
    else
    {
        $('.menu').fadeIn();
    }
});