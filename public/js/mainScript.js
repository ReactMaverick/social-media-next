$(document).ready(() => {
    //For Header Appearing in Homepage on Scrolling
    var $lazy = $('#header.lazy-load')

    // console.log($lazy);

    if ($lazy && ($lazy.length > 0)) {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                if (!$lazy.hasClass('visible')) {
                    $lazy.addClass('visible');
                };

            } else {
                if ($lazy.hasClass('visible')) {
                    $lazy.removeClass('visible');
                };

            }
        });
    };

    // Incremental Counter
    var $incrementalCounter = $("#incrementalCounter")

    if ($incrementalCounter && ($incrementalCounter.length > 0)) {
        $incrementalCounter.incrementalCounter();
    };

    setTimeout(() => {
        $(".slideDown, .slideUp").addClass('appear');
    }, 500);


})