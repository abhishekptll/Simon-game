let gameSeq= [];
let userSeq= [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h3 =document.querySelector("h3");

document.addEventListener("keypress", ()=>{
    if(started === false){
        console.log("game started");
        started= true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}



function levelup(){
    userSeq =[];
    level++;
    h3.innerText =`level ${level}`;

    let rendIdx = Math.floor(Math.random()*3);
    let rendcolor = btns[rendIdx];
    let rendbtn =document.querySelector(`.${rendcolor}`);

    // console.log(rendIdx);
    // console.log(rendcolor);
    // console.log(rendbtn);
    gameSeq.push(rendcolor);
    console.log(gameSeq);
    // rendom btn
    gameflash(rendbtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
         setTimeout(levelup,1000);
       }
    }else{
        h3.innerText =`Game Over! your score was ${level}\n press any key to restart `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}


function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(let btns of allbtn){
    btns.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
        highScore = parseInt(storedHighScore, 10);
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
});

// Update high score in localStorage
if (level < highScore) {
    highScore = level;
    localStorage.setItem("highScore", highScore);
    highScoreElement.innerText = `High Score: ${highScore}`;
    console.log(highScore);
}