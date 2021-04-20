$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('menu > h1').addClass('collapsed');
    }
    else
    {
        $('menu > h1').removeClass('collapsed');
    }
});