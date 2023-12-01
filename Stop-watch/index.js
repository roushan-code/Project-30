
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const milisecond = document.querySelector(".miliseconds");
const btn1 = document.querySelector(".start");
const btn2 = document.querySelector(".stop");

let sec = 0, min=0,hr=0,ms=0;
let intervalId;

let opposite = false;
let firstTime = true;

const startWatch = ()=>{
    opposite = !opposite;
    console.log(opposite);
    // opposite ? btn1.innerText = "Stop": btn1.innerText = "Resume";

    if(opposite){
        btn1.innerText = "Stop";
        start();
    }else{
        btn1.innerText = "Resume"
        stopWatch();
    }
    
}

function start(){
    intervalId = setInterval(()=>{
        if(ms<99){
            ms++;
        }
        else if(min>=59){
            hr++;
            min=0;
        }
        else if(sec>=59){
            sec = 0;
            min++;
        }else{
            ms=0;
            sec++;
        }
        const seconds = String(sec).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");
        const miliseconds = String(ms).padStart(2, "0");
        
        // console.log(`${hours}:${minutes}:${seconds}:${miliseconds}`);
        // clock.innerText =`${hours}:${minutes}:${seconds}`;
        hour.innerText =`${hours}`;
        minute.innerText =`${minutes}`;
        second.innerText =`${seconds}`;
        milisecond.innerText =`${miliseconds}`;
    }, 10)
};

const stopWatch = ()=>{
    clearInterval(intervalId);
};

const reset = ()=>{
    stopWatch();
    sec = 0, min=0,hr=0,ms=0;
    hour.innerText =`00`;
    minute.innerText =`00`;
    second.innerText =`00`;
    milisecond.innerText =`00`;
    opposite = false;
    firstTime = true;
    btn1.innerText = "Start";
}