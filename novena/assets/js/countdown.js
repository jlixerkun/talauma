// var xmas = new Date('December 25, 2018 00:00');
var xmas = 'December 25, 2018 00:00';

/*
function countdown(endDate) {
    let days, hours, minutes, seconds;
    
    endDate = new Date(endDate).getTime();
    
    if (isNaN(endDate)) {
      return;
    }

    setInterval(calculate, 1000);
    var timeLeft = parseInt((endDate - Date.now())/1000);

    function calculate() {
        
        // seconds = timeLeft/1000;
        days =  timeLeft/86400;
        timeLeft =( timeLeft % 86400);
        // timeLeft = timeLeft%86400000;


        console.log(timeLeft, days);


        // console.log('hola');
        
        // let startDate = new Date();
        // startDate = startDate.getTime();
        // let timeRemaining = parseInt((endDate - startDate) / 1000);
        // if (timeRemaining >= 0) {
        //     days = parseInt(timeRemaining / 86400);
        //     timeRemaining = (timeRemaining % 86400);

        //     hours = parseInt(timeRemaining / 3600);
        //     timeRemaining = (timeRemaining % 3600);
            
        //     minutes = parseInt(timeRemaining / 60);
        //     timeRemaining = (timeRemaining % 60);
            
        //     seconds = parseInt(timeRemaining);

        //     document.getElementById("daysTo").innerHTML = parseInt(days, 10);
        //     document.getElementById("hoursTo").innerHTML = ("0" + hours).slice(-2);
        //     document.getElementById("minutesTo").innerHTML = ("0" + minutes).slice(-2);
        //     document.getElementById("secondsTo").innerHTML = ("0" + seconds).slice(-2);

        // } else {
        //     return;
        // }
    }
} 

countdown(xmas);*/


var endDate = new Date('December 25, 2018 00:00');
var primaNovena = new Date (' December 24, 2018 19:54');
// var timeLeft = 100000;
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