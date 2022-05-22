(function ($) {
    "use strict";

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
        };
        init();
    }();


    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);



function scrollLogin() {

    let scrollEinterval = null,
        value = 0;

    scrollEinterval = setInterval(scrollFrame, 2)

    function scrollFrame() {
        if (value == 700) {
            clearInterval(scrollEinterval)
            value = 0
        } else {
            value += 10;

            window.scrollTo(0, value);
        }
    }

    $('#registDiv').css('visibility', 'hidden')
    $('#loginDiv').css('visibility', 'visible')





}

function scrollRegist() {

    let scrollEinterval = null,
        value = 0;

    scrollEinterval = setInterval(scrollFrame, 2)

    function scrollFrame() {
        if (value == 1100) {
            clearInterval(scrollEinterval)
            value = 0
        } else {
            value += 10;

            window.scrollTo(0, value);
        }
    }

    $('#loginDiv').css('visibility', 'hidden')
    $('#registDiv').css('visibility', 'visible')


}

function scrollUp() {
    $('#loginDiv').css('visibility', 'hidden')
    $('#registDiv').css('visibility', 'hidden')

    let scrollEinterval = null,
        value = 1500;

    scrollEinterval = setInterval(scrollFrame, 2)

    function scrollFrame() {
        if (value == 0) {
            clearInterval(scrollEinterval)
            value = 1500
        } else {
            value -= 10;

            window.scrollTo(0, value);
        }
    }

}


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    dh = $(document).height();
    wh = $(window).height();
    scrollPrecent = (scroll / (dh - wh)) * 100;

    $("#progressbar").css('height', scrollPrecent + '%')
    // document.getElementById("#progressbar").style.height = `${scrollPrecent}%`

})


console.log($('body').css('height'))