$(document).ready(() => {
    //For Header Appearing in Homepage on Scrolling
    var lazy = $('#header.lazy-load')

    console.log(lazy);

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            lazy.addClass('visible');
        } else {
            lazy.removeClass('visible');
        }
    });
})

