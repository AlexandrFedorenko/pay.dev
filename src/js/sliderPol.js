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
