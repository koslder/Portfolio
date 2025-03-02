$(document).ready(function () {
    // Handle click events on navigation links
    $('nav a').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        var target = $(this).attr('href'); // Get the target section ID
        if ($(target).length) {
            // Hide all sections
            $('section').removeClass('section-show');

            // Show the target section
            $(target).addClass('section-show');

            // Smooth scroll to the target section
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 350);
        }
    });

    // Show the default section on page load
    if (window.location.hash) {
        var initialSection = $(window.location.hash);
        if (initialSection.length) {
            $('section').removeClass('section-show');
            initialSection.addClass('section-show');
        }
    }
});

$(document).ready(function () {
    // Show the button when the user scrolls down 100px from the top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});