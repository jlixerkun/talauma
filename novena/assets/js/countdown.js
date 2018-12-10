var xmas = 'December 25, 2018 00:00';
var endDate = new Date('December 25, 2018 00:00');
var primaNovena = new Date (' December 24, 2018 19:54');
var url;
setInterval(function(){
    let timeLeft = (parseInt(endDate - Date.now())/1000);
    daysTo          = parseInt(timeLeft/86400);
    timeLeft        = timeLeft % 86400;
    hoursTo         = parseInt(timeLeft / 3600);
    timeLeft        = timeLeft % 3600;
    minutesTo       = parseInt(timeLeft / 60);
    secondsTo       = parseInt(timeLeft % 60);

    switch (daysTo) {
        case 7 :
            url =  'dia2.html'
            break;
        case 6:
            url = 'dia3.html'
            break;
        case 5:
            url = 'dia4.html'
            break;
        case 4: 
            url = 'dia5.html'
            break;
        case 3:
            url = 'dia6.html'
            break;
        case 2:
            url = 'dia7.html'
            break;
        case 1:
            url = 'dia8.html'
            break;
        case 0 : 
            url = 'dia9.html'
            break;
        default:
            url = 'dia1.html';
            string = 'Ya comienza la novena'
    }
    document.getElementById('daysTo').innerText         = daysTo;
    document.getElementById('hoursTo').innerText        = hoursTo;
    document.getElementById('minutesTo').innerText      = minutesTo;
    document.getElementById('secondsTo').innerText      = secondsTo;
    document.getElementById('rezar').setAttribute('href',url);
},1000);