colR1 = 1;
colR2 = 2;
colR3 = 1;
colR4 = 1;
colR5 = 1;
colR6 = 1;

function bodyLoad() {
    var col1 = ['brown', 'red', 'orange', 'yellow'];
    var randCol1 = col1[Math.floor(Math.random() * col1.length)];
    if (randCol1 === 'brown')
        colR1 = 1;
    else if (randCol1 === 'red')
        colR1 = 2;
    else if (randCol1 === 'orange')
        colR1 = 3;
    else if (randCol1 === 'yellow')
        colR1 = 4;

    var col2 = ['black', 'red', 'orange', 'violet'];
    var randCol2 = col2[Math.floor(Math.random() * col2.length)];
    if (randCol2 === 'black')
        colR2 = 1;
    else if (randCol2 === 'red')
        colR2 = 2;
    else if (randCol2 === 'orange')
        colR2 = 3;
    else if (randCol2 === 'violet')
        colR2 = 7;

    colR3 = 0;

    var col3 = ['black', 'yellow', 'red', 'green'];
    var randCol3 = col3[Math.floor(Math.random() * col3.length)];
    if (randCol3 === 'black')
        colR4 = 0;
    else if (randCol3 === 'yellow')
        colR4 = 4;
    else if (randCol3 === 'red')
        colR4 = 2;
    else if (randCol3 === 'green')
        colR4 = 5;

    var col4 = ['silver', 'gold', 'yellow', 'grey'];
    var randCol4 = col4[Math.floor(Math.random() * col4.length)];
    if (randCol4 === 'silver')
        colR5 = 10;
    else if (randCol4 === 'gold')
        colR5 = 5;
    else if (randCol4 === 'yellow')
        colR5 = 4;
    else if (randCol4 === 'grey')
        colR5 = 0.05;

    var col5 = ['red', 'brown', 'violet', 'blue'];
    var randCol5 = col5[Math.floor(Math.random() * col5.length)];
    if (randCol5 === 'red')
        colR6 = 50;
    else if (randCol5 === 'brown')
        colR6 = 100;
    else if (randCol5 === 'violet')
        colR6 = 5;
    else if (randCol5 === 'blue')
        colR6 = 10;

    $('#d1').css('background-color', randCol1);
    $('#d2').css('background-color', randCol2);
    $('#d3').css('background-color', 'black');
    $('#d4').css('background-color', randCol3);
    $('#d5').css('background-color', randCol4);
    $('#d6').css('background-color', randCol5);

    /* var rValues = resistorValue(colR1, colR2, colR3, colR4, colR5, colR6);*/
    console.log(colR1);
    console.log(colR2);
    console.log(colR3);
    console.log(colR4);
    console.log(colR5);
    console.log(colR6);
    /* console.log(rValues);*/
}

function bandColour(e, bandiD, rectID) {
    e.preventDefault();
    this.blur();
    window.focus();

    console.log($(this).data('value'));
    console.log($(this).text());
    var col = $(this).text();

    /*    $(bandiD).css('background-color', col);
        $('bandID').css('visibility', 'hidden');*/
    $(rectID).css('background-color', col).addClass('noborder');
}

function updateResValuesOnColourChange() {
    if ($('#bands_6').prop('checked')) {
        rValues = resistorValue(colR1, colR2, colR3, colR4, colR5, colR6);
        console.log(rValues);
    }
    if ($('#bands_5').prop('checked')) {
        rValues = resistorValue(colR1, colR2, colR3, colR4, colR5);
        console.log(rValues);
    }
    if ($('#bands_4').prop('checked')) {
        rValues = resistorValue(colR1, colR2, colR4, colR5);
        console.log(rValues);
    }
    return rValues;
}

function displayResistorMetrics(rValues) {
    $('.res_val').html(rValues[0]);
    $('.res_unit').html(rValues[1]);
    $('.tol_val').html(rValues[2]);
    $('.tol_unit').html(rValues[3]);
    $('.range_val').html(rValues[6]);
    $('.temp_val').html(rValues[4]);
    $('.temp_unit').html(rValues[5]);
}

$(document).ready(function () {
    $('select').prop('selectedIndex', -1);
    /*var colR = colR1, colR24 = colR2, colR3 = colR3, colR4 = colR4, colR5 = colR5, colR6 = colR6;*/
    var rValues = resistorValue(colR1, colR2, colR3, colR4, colR5, colR6);
    //console.log(rValues);
    displayResistorMetrics(rValues);

    $('#bands_4').click(function () {
        $('#bands_4switch').prop('checked', true);
        $('.sw4').addClass('animated pulse');
        $('.sw5').removeClass('animated pulse');
        $('.sw6').removeClass('animated pulse');
        $('#bands_5switch').prop('checked', false);
        $('#bands_6switch').prop('checked', false);
        $('#d1').fadeIn("slow");
        $('#d2').fadeIn("slow");
        $('#d3').fadeOut("slow");
        $('#d4').fadeIn("slow");
        $('#d5').fadeIn("slow");
        $('#d6').fadeOut("slow");

        rValues = resistorValue(colR1, colR2, colR4, colR5);
        //console.log(rValues);
        displayResistorMetrics(rValues);
    });

    $('#bands_5').click(function () {
        $('#bands_5switch').prop('checked', true);
        $('.sw5').addClass('animated pulse');
        $('.sw4').removeClass('animated pulse');
        $('.sw6').removeClass('animated pulse');
        $('#bands_4switch').prop('checked', false);
        $('#bands_6switch').prop('checked', false);
        $('#d1').fadeIn("slow");
        $('#d2').fadeIn("slow");
        $('#d3').fadeIn("slow");
        $('#d4').fadeIn("slow");
        $('#d5').fadeIn("slow");
        $('#d6').fadeOut("slow");

        rValues = resistorValue(colR1, colR2, colR3, colR4, colR5);
        //console.log(rValues);
        displayResistorMetrics(rValues);
    }).promise().done(function () {
    });

    $('#bands_6').click(function () {
        $('#bands_6switch').prop('checked', true);
        $('#bands_5switch').prop('checked', false);
        $('#bands_4switch').prop('checked', false);
        $('.sw6').addClass('animated pulse');
        $('.sw5').removeClass('animated pulse');
        $('.sw4').removeClass('animated pulse');
        $('#d1').fadeIn("slow");
        $('#d2').fadeIn("slow");
        $('#d3').fadeIn("slow");
        $('#d4').fadeIn("slow");
        $('#d5').fadeIn("slow");
        $('#d6').fadeIn("slow");

        rValues = resistorValue(colR1, colR2, colR3, colR4, colR5, colR6);
        // console.log(rValues);
        displayResistorMetrics(rValues);
    });

    if ($('#bands_4').prop('checked')) {
        $('#bands_4switch').prop('checked', true);
        $('#bands_5switch').prop('checked', false);
        $('#bands_6switch').prop('checked', false);
        $('#d3').fadeOut("slow");
        $('#d6').fadeOut("slow");
    } else if ($('#bands_5').prop('checked')) {
        $('#bands_5switch').prop('checked', true);
        $('#bands_4switch').prop('checked', false);
        $('#bands_6switch').prop('checked', false);
        $('#d6').fadeOut("slow");
    } else if ($('#bands_6').prop('checked')) {
        $('#bands_5switch').prop('checked', false);
        $('#bands_4switch').prop('checked', false);
        $('#bands_6switch').prop('checked', true);

        // fallback
        rValues = resistorValue(colR1, colR2, colR3, colR4, colR5, colR6);
        console.log(rValues);
    }


    // band 1
    $('#band1').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band1', '#d1');
        colR1 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });

    // band 2

//    $('#d2').click(function () {
//        if ($("#band2").attr("size") >= 6) {
//            $("#band2").css('opacity', 0).attr("size", 1);
//        } else {
//            $("#band2").css('opacity', 50).attr("size", 6).focus();
//        }
//    });
//    });
//    $('#band2').on('click', function(e) {
//        e.preventDefault();
//        this.blur();
//        window.focus();
//    }).change(function () {
//        console.log($(this).children('option:selected').index());
//        console.log($(this).children('option:selected').text());
//        var col = $(this).children('option:selected').text();
//        $('#band2').css('background-color', col);
//        //$('#band2').css('visibility', 'hidden');
//        $('#d2').css('background-color', col).addClass('noborder');
//    }).on("blur", function() {
//        $("#band2").attr("size", 1).css('opacity', 0);
//    }).on("click", function() {
//        $("#band2").attr("size", 1).css('opacity', 0);
//    });
    /*    $('#d2').click(function () {
            if ($("#band2").attr("size") >= 6) {
                $("#band2").css('opacity', 0).attr("size", 1);
            } else {
                $("#band2").css('opacity', 50).attr("size", 6).focus();
            }
        });

        $('#band2').on('click', function(e) {
            e.preventDefault();
            this.blur();
            window.focus();
        }).change(function () {
            console.log($(this).children('option:selected').index());
            console.log($(this).children('option:selected').text());
            var col = $(this).children('option:selected').text();
            $('#band2').css('background-color', col);
            //$('#band2').css('visibility', 'hidden');
            $('#d2').css('background-color', col).addClass('noborder');
        }).on("blur", function() {
            $("#band2").attr("size", 1).css('opacity', 0);
        }).on("click", function() {
            $("#band2").attr("size", 1).css('opacity', 0);
        });*/

    $('#band2').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band2', '#d2');
        colR2 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });

    // band 3

    $('#band3').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band3', '#d3');
        colR3 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });

    // band 4
    $('#band4').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band4', '#d4');
        colR4 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });


    // band 5

    $('#band5').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band5', '#d5');
        colR5 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });

    // band 6

    $('#band6').find('a').on('click', function (e) {
        bandColour.call(this, e, '#band6', '#d6');
        colR6 = $(this).data('value');
        rValues = updateResValuesOnColourChange();
        displayResistorMetrics(rValues);
    });


    // Dashboard Results fallback
    /*displayResistorMetrics(rValues);*/

});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function toggleDrop6() {
    document.getElementById("band6").classList.toggle("showDrop");
}

function toggleDrop5() {
    document.getElementById("band5").classList.toggle("showDrop");
}

function toggleDrop4() {
    document.getElementById("band4").classList.toggle("showDrop");
}

function toggleDrop3() {
    document.getElementById("band3").classList.toggle("showDrop");
}

function toggleDrop2() {
    document.getElementById("band2").classList.toggle("showDrop");
}

function toggleDrop1() {
    document.getElementById("band1").classList.toggle("showDrop");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!$(e.target).hasClass('dropbtn')) {

        var myDropdown1 = document.getElementById("band1");
        var myDropdown2 = document.getElementById("band2");
        var myDropdown3 = document.getElementById("band3");
        var myDropdown4 = document.getElementById("band4");
        var myDropdown5 = document.getElementById("band5");
        var myDropdown6 = document.getElementById("band6");

        if (myDropdown1.classList.contains('showDrop')) {
            myDropdown1.classList.remove('showDrop');
        } else if (myDropdown2.classList.contains('showDrop')) {
            myDropdown2.classList.remove('showDrop');
        } else if (myDropdown3.classList.contains('showDrop')) {
            myDropdown3.classList.remove('showDrop');
        } else if (myDropdown4.classList.contains('showDrop')) {
            myDropdown4.classList.remove('showDrop');
        } else if (myDropdown5.classList.contains('showDrop')) {
            myDropdown5.classList.remove('showDrop');
        } else if (myDropdown6.classList.contains('showDrop')) {
            myDropdown6.classList.remove('showDrop');
        }
    }
};
