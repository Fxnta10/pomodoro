let startingMinutes = 25;
let time = startingMinutes * 60;
let startCount; // Variable to hold the interval ID

const countDown = document.getElementById("TickTime");
const date=document.getElementById("date")
const currentDate= new Date();
date.innerHTML=currentDate

function updateDate(){
    const currentDate= new Date();
    date.innerHTML=currentDate
}
setInterval(updateDate,86400000)
function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes} : ${seconds}`;

    if (time > 0) {
        time--;
    } else {
        clearInterval(startCount); // Stop the countdown when it reaches zero
    }
}

// Event listeners for buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const PomodoroButton = document.getElementById("Pomodoro");
const shortBreakButton=document.getElementById("shortbreak")
const longBreakButton=document.getElementById("longbreak")

startButton.addEventListener("click", function() {
    // Clear any existing interval to prevent multiple intervals running simultaneously
    clearInterval(startCount);
    // Start the countdown
    startCount = setInterval(updateCountDown, 1000);
});

stopButton.addEventListener("click", function() {
    // Stop the countdown
    clearInterval(startCount);
});

resetButton.addEventListener("click", function() {
    // Stop the countdown
    clearInterval(startCount);
    // Reset time to startingMinutes
    time = startingMinutes * 60;
    // Update the display
    updateCountDown();
});

// shortBreakButton.addEventListener("click",function(){
//     countDown.innerHTML='5 : 00'
//     startingMinutes=5;
//     time=startingMinutes*60;

//     clearInterval(startCount)

//     // startCount=setInterval(updateCountDown,1000)

// })

const body=document.getElementsByTagName("body")[0];
const header=document.getElementsByClassName("heading")[0]
const timer=document.getElementsByClassName("mainTimer")[0]
const topbuttons1=document.getElementsByClassName("TopButtons")[0]
const topbuttons2=document.getElementsByClassName("TopButtons")[1]
const topbuttons3=document.getElementsByClassName("TopButtons")[2]


PomodoroButton.addEventListener("click",function(){
    countDown.innerHTML='25 : 00'
    startingMinutes=25;
    time=startingMinutes*60;

    header.style.backgroundColor='#97C2D4'
    timer.style.backgroundColor='#97C2D4'
    topbuttons1.style.backgroundColor='#97C2D4'
    topbuttons2.style.backgroundColor='#97C2D4'
    topbuttons3.style.backgroundColor='#97C2D4'
    body.style.color='#0B161B'


    clearInterval(startCount);
})



shortBreakButton.addEventListener("click",function(){
    countDown.innerHTML='05 : 00'
    // var div = document.getElementById('mainTimer');
    // div.style.backgroundColor='#433074'
    // div.style.color='#433074'

    startingMinutes=5;
    time=startingMinutes*60;

    header.style.backgroundColor='#433074'
    timer.style.backgroundColor='#433074'
    topbuttons1.style.backgroundColor='#433074'
    topbuttons2.style.backgroundColor='#433074'
    topbuttons3.style.backgroundColor='#433074'

    body.style.color='#E6F1F5'

    clearInterval(startCount)

    // startCount=setInterval(updateCountDown,1000)

})

longBreakButton.addEventListener("click",function(){
    countDown.innerHTML='15 : 00'
    startingMinutes=15;
    time=startingMinutes*60;

    header.style.backgroundColor='#9C6CC3'
    timer.style.backgroundColor='#9C6CC3'
    topbuttons1.style.backgroundColor='#9C6CC3'
    topbuttons2.style.backgroundColor='#9C6CC3'
    topbuttons3.style.backgroundColor='#9C6CC3'
    body.style.color='#433074'
    
    clearInterval(startCount)

    // startCount=setInterval(updateCountDown,1000)

})


//  Color Flipping when buttons are pressed 


// shortBreakButton.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('shortbreak').addEventListener('click', function() {
//         header.style.backgroundColor='#433074'
//         timer.style.backgroundColor='#433074'
//         body.style.color='#E6F1F5'
//     });
// });

// longBreakButton.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('longbreak').addEventListener('click', function() {
//         header.style.backgroundColor='#9C6CC3'
//         timer.style.backgroundColor='#9C6CC3'
//         body.style.color='#433074'
//     });
// });

