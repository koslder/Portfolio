$(document).ready(function () {
    $('nav a').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        if ($(target).length) {

            $('section').removeClass('section-show');

            $(target).addClass('section-show');

            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 350);
        }
    });

    if (window.location.hash) {
        var initialSection = $(window.location.hash);
        if (initialSection.length) {
            $('section').removeClass('section-show');
            initialSection.addClass('section-show');
        }
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const navLink = document.querySelectorAll('.menu nav ul li a')

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    navLink.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
        })
    });
});

$(document).ready(function () {
    const hamburger = $('#hamburger');
    const menu = $('#menu');
    const navLinks = $('.menu nav ul li a');

    hamburger.on('click', function () {
        menu.toggleClass('active');
    });

    navLinks.on('click', function () {
        menu.removeClass('active')
    });
});