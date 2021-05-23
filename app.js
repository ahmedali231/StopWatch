// function timer(){
//     console.log("runnig")
// }
// setInterval(timer,1000)

// function timeOut(){
//     console.log("this is timeout")
// }
// setTimeout(timeOut,3000)

// setInterval(function(){
//     console.log('Run')
// },1000)

var msec = 0;
var sec  = 0;
var min  = 0;
var hour = 0;
var msechead  = document.getElementById('msec')
var sechead  = document.getElementById('sec')
var minhead  = document.getElementById('min')
var hourhead  = document.getElementById('hour')
var btn = document.getElementById('dis')

var interval;


function timer(){
    msec++
    msechead.innerHTML = msec
    if(msec ==100){
        sec++
        sechead.innerHTML = sec + "s"
        msec = 00
    }
    else if(sec == 60){
        min++
        minhead.innerHTML = min + "m"
        sec = 00
    }
    else if(min == 60){
        hour++
        hourhead.innerHTML = hour + "h"
        min = 00

    }
}







function start(){
    interval = setInterval(timer,10)
    btn.disabled = true
}

function paus(){
    clearInterval(interval)
    btn.disabled = false

}
function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
msechead.innerHTML = msec;
sechead.innerHTML= sec;
minhead.innerHTML= min;
hourhead.innerHTML = hour;
clearInterval(interval)
btn.disabled = false;

}

