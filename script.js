function makebubble(){
var bub = "";
//making many bubbles using for loop
for(let i =1;i<=104;i++){
    var num = Math.floor(Math.random()*10);
    console.log(num);
    bub += `<div class="bubble">${num}</div>`
    
}
document.querySelector("#whitespace").innerHTML = bub;
}

var time = 60;
function timer(){
    var settime = setInterval(function(){
        if(time>0){
        time --;
        document.querySelector("#timevalue").textContent = time;}
        else{
            clearInterval(settime);
            document.querySelector("#whitespace").innerHTML = `<h1>Game over</h1>`;
        }
    },1000)
}

var rn = 0;
function newhitval(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = rn ;
}

var score = 0 ;
function increaseScore(){
    
    document.querySelector("#scorevalue").textContent = score ;
    score += 10;
}

document.querySelector("#whitespace").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    console.log(clickednum);
    if(clickednum === rn ){
        increaseScore();
        newhitval();
        makebubble();
    }
});

makebubble();
timer();
newhitval();
increaseScore();
