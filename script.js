var generateNumber = Math.round(Math.random()*100);
console.log(generateNumber);

function fun1(){
    location.reload();
}

let tries = document.querySelector("#play");
var a=1;
tries.onclick = () => {
    a++;
    console.log(a);
}

function playMusic(){
    let audio = new Audio("audio.mp3");
    audio.loop = true;
    CloseBtn.addEventListener("click",function(){
        audio.pause();    // without end the audio it will stop.
        // audio.loop = false; // if close the victory window the audio will play at the end where the audio is finish.
    });
    audio.play();
}

let result = document.getElementById("display");
let CloseBtn = document.getElementById("closeBtn");
CloseBtn.addEventListener("click",function(){
    result.classList.remove("display");
});

function fun3(){
    var userValue = document.getElementById("inputNumber").value;
    console.log(userValue);
    if(generateNumber == userValue){
        document.getElementById("p1").innerHTML = "You won the match";
        document.getElementById("chanse").innerHTML=`You take ${a} attemps to win`;
        playMusic();
        result.style.display="block";
    }
    else if(generateNumber < userValue){
        document.getElementById("p1").innerHTML = "Value is High";
        document.getElementById("chanse").innerHTML=`You take ${a} attemps`;
    }
    else if(generateNumber > userValue){
        document.getElementById("p1").innerHTML = "Value is Low";
        document.getElementById("chanse").innerHTML=`You take ${a} attemps`;
    }
}