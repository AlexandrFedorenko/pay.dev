$(function () {
//SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

//Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;
//dragstart-none
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

//show hover bars

    $("#hoverBars").hover(
        function () {
            $('.wrapHoverBars', this).fadeIn("fast");
        },
        function () {
            $('.wrapHoverBars', this).fadeOut("fast");
        });

    if (window.matchMedia('(max-width: 768px)').matches) {
        $("#hoverBars").click(function () {
            $(".wrapHoverBars").slideToggle();
        });
    }

    //slick slider index
    $('.mainSlider').slick({
        dots:false,
        arrows:true,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    //tabs
    $('#myTab a:first').tab('show');

    //tabs scroll item
    function doSomething() {
        var winPos = $(window).scrollTop();
        var headingPos = $('#myTab').offset().top;
        if (winPos >= headingPos - 100) {
            $(".tab-content").addClass("overflo");
        }
    }
    $(window).scroll(doSomething);

   //scroll otziv

    $('#js-scroolOtz').on('click',function (e) {
        e.preventDefault();
        var scrollOt =  $('#js-otziv').offset().top;
        $("html,body").animate({
            scrollTop:scrollOt
        }, 1000);
    });


    //nise scroll
        $("html").niceScroll({
            cursorcolor: '#000000'
        });
    $(".tab-content").niceScroll({
        cursorcolor: '#000000',
        horizrailenabled:false
    });



});
//preloader
$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});



