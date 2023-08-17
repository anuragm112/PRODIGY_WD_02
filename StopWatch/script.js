
let displayTime=document.querySelector(".timerDisplay")
let stopBtn=document.getElementById('stopbtn');
let startBtn=document.getElementById('startbtn');
let resetBtn=document.getElementById('resetbtn');

let[milliseconds,seconds,minutes]=[0,0,0];
let timer=null;

startBtn.addEventListener('click',function(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopWatch,10);
});

stopBtn.addEventListener('click',function(){
   clearInterval(timer);
});

resetBtn.addEventListener('click',function(){
   clearInterval(timer);
   [milliseconds,seconds,minutes]=[0,0,0];
   displayTime.innerHTML="00:00:00";
});

function stopWatch(){
    milliseconds++;
    if(milliseconds==100){
        milliseconds=0;
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
} 
       let milli=milliseconds<10?`0${milliseconds}`: milliseconds;
       let mint=minutes<10?`0${minutes}`: minutes;
       let sec=seconds<10?`0${seconds}`:seconds;
      displayTime.innerHTML=`${mint} : ${sec} : ${milli}`;


}
