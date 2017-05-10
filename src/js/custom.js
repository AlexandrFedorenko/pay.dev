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

    //tabs
    $('#myTab a:first').tab('show');

    // //tabs scroll item
    // function doSomething() {
    //     var winPos = $(window).scrollTop();
    //     var headingPos = $('#myTab').offset().top;
    //     if (winPos >= headingPos - 100) {
    //         $(".tab-content").addClass("overflo");
    //     }
    // }
    // $(window).scroll(doSomething);

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

//popup otziv
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name'
    });

    //popup registration
    $('.popup-with-form2').magnificPopup({
        type: 'inline',
        focus: '#login'
    });

//validate popup otziv
    $("#myform").validate({

        rules:{

            nameOtz:{
                required: true
            },

            mess:{
                required: true
            }
        },

        messages:{

            nameOtz:{
                required: ""
            },

            mess:{
                required: ""
            }

        }

    });

    //validate popup registration
    $("#myform2").validate({

        rules:{

            login:{
                required: true
            },

            pass:{
                required: true
            }
        },

        messages:{

            login:{
                required: ""
            },

            pass:{
                required: ""
            }

        }

    });

    //validate page registration
    $("#register").validate({

        rules:{

            namePageReg:{
                required: true
            },

            phone:{
                required: true
            },
            emailReg:{
                required: true
            },
            passReg:{
                required: true
            },
            passLast:{
                required: true,
                equalTo: "#passReg"
            }
        },

        messages:{

            namePageReg:{
                required: ""
            },

            phone:{
                required: ""
            },
            emailReg:{
                required: ""
            },
            passReg:{
                required: ""
            },
            passLast:{
                required: ""
            }

        }

    });

//scroll select
    $(".jq-selectbox ul").niceScroll({
        cursorcolor: '#c8c8c8',
        borderRadius:"4px",
        cursorwidth :"8px",
        cursorheight: 13,
        cursorminheight:13,
        scrollspeed:100,
        mousescrollstep:100,
        cursorborder :"1px solid #e5c02f",
        horizrailenabled:false
    });


});
//preloader
$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});

// masked input page register
jQuery(function($){
    $("#phone").mask("+7(999) 999 99 99",{placeholder:" "});
});

//polzunok hours

//on/off block
$("#inpDate").click(function () {
    $("#blockTime").slideToggle();
});

$(document).ready(function(){
    $( "#slider" ).slider({
        value : 0,//Значение, которое будет выставлено слайдеру при загрузке
        min : 0,//Минимально возможное значение на ползунке
        max : 24,//Максимально возможное значение на ползунке
        step : 1,//Шаг, с которым будет двигаться ползунок
        create: function( event, ui ) {
            val = $( "#slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
            $( "#hours" ).html( val );//Заполняем этим значением элемент с id contentSlider
        },
        slide: function( event, ui ) {
            $( "#hours" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider

        }
    });

//polzunok minutes


    $( "#slider2" ).slider({
        value : 0,//Значение, которое будет выставлено слайдеру при загрузке
        min : 0,//Минимально возможное значение на ползунке
        max : 59,//Максимально возможное значение на ползунке
        step : 1,//Шаг, с которым будет двигаться ползунок
        create: function( event, ui ) {
            val = $( "#slider2" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
            $( "#min" ).html( val );//Заполняем этим значением элемент с id contentSlider
        },
        slide: function( event, ui ) {
            $( "#min" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
        }
    });

    $('#redy').click(function () {
        var hours = $('#hours').html();
        var min = $('#min').html();
        var result = hours + ":" + min;
        $('#inpDate').val(result);
        $("#blockTime").slideToggle();
    });

    $('#now').click(function () {
        var date = new Date();
        var time = date.getHours()+':'+date.getMinutes();
        $('#inpDate').val(time);
        $("#blockTime").slideToggle();
    });

});

//click redy polzunok


