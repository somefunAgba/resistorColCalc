"use strict";

function resistorValue(band1, band2, band3, band4, band5, band6) {
    var bandX = "";
    var bandVal = 0;
    var tolVal = 0;
    var tempCVal = "";
    var unit = '&ohm;';
    var percent = '%';
    var t_unit = '';

    // console.log(arguments.length);

    if (arguments.length < 4) {
        console.error('Invalid Resistor');
        return -1;
    }

    if (arguments.length === 4) {
        band5 = 1;
        band6 = 1;
        for (var i = 0; i < 2; i++) {
            bandX += arguments[i];
        }
        // console.log(bandX);
        bandVal += Number(bandX);
        bandVal *= Math.pow(10, arguments[2]);
        //console.log(bandVal);

        tolVal = arguments[3];
    } else if (arguments.length === 5) {
        band6 = 1;
        for (i = 0; i < 3; i++) {
            bandX += arguments[i];
        }
        // console.log(bandX);
        bandVal += Number(bandX);
        bandVal *= Math.pow(10, arguments[3]);
        //console.log(bandVal);

        tolVal = arguments[4];

    } else if (arguments.length === 6) {
        for (i = 0; i < 3; i++) {
            bandX += arguments[i];
        }
        //console.log(bandX);
        bandVal += Number(bandX);
        bandVal *= Math.pow(10, arguments[3]);
        // console.log(bandVal);

        tolVal = arguments[4];
        tempCVal = arguments[5];
        t_unit += 'ppm/K';
    }

    bandVal = String(bandVal);
    var multiplier = Math.pow(10, 3); // used to prevent floating point errors in javascript

    if (bandVal.length >= 4 && bandVal.length < 7) {
        bandVal = Math.trunc((bandVal / Math.pow(10, 3)) * multiplier) / multiplier;
        unit = 'k ' + unit;
    }
    if (bandVal.length >= 7 && bandVal.length < 10) {
        bandVal = Math.trunc((bandVal / Math.pow(10, 6)) * multiplier) / multiplier;
        unit = 'M ' + unit;
    }
    if (bandVal.length >= 10) {
        bandVal = Math.trunc((bandVal / Math.pow(10, 9)) * multiplier) / multiplier;
        unit = 'G ' + unit;
    }

    var maxVal = Math.trunc((bandVal + (bandVal * tolVal * Math.pow(10, -2))) * multiplier) / multiplier;
    var minVal = Math.trunc((bandVal - (bandVal * tolVal * Math.pow(10, -2))) * multiplier) / multiplier;

    var rangeVal = "" + String(minVal) + " - " + String(maxVal) + " " + unit;

    tolVal = "± " + tolVal;

    //console.log(bandVal, unit);
    //console.log(tolVal, percent);
    //console.log(rangeVal);
    //console.log(tempCVal, t_unit);

    return [bandVal, unit, tolVal, percent, tempCVal, t_unit, rangeVal];
}

/*
var resVal = resistorValue(1, 0, 0, 4, 0.05);
resVal = resistorValue(2, 2, 0, 4, 5, 10);
console.log(resVal);
*/
