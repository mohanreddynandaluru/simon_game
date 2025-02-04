
let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let colors = ['yellow','purple','green','red'];
let highest=0;
let high = document.querySelector('.highest');
document.addEventListener("keypress", function() {
    
    if (started == false) {
        console.log("game start");
        started = true;
        levelup();
        high.innerHTML = `highest score : ${highest}`;
    }


});


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    // ramdom color
    let raminx = Math.floor(Math.random()*4);
    console.log(raminx);
    let ramcolor = colors[raminx];
    console.log(ramcolor);
    let rambtn = document.querySelector(`.${ramcolor}`);
    gameseq.push(ramcolor);
    console.log(gameseq);
    btnflash(rambtn);

    console.log(rambtn);


}



function btnflash(btn){
    console.log("flash");
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    },500);

}

function checkans(idx){
    console.log(level);

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over!your score is <b> ${level} </b> <br> press any key to start`;
        reset();
    }
}   
function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}
function reset(){
    if (highest<level) {
        highest = level;
        high.innerHTML = `congratulations! <br> you got highest score : ${highest}`;

    }

    started = false;
    level = 0;
    

    // red flash 
    let body = document.querySelector('body');
    body.classList.add('gameover')
    setTimeout(function () {
        body.classList.remove('gameover');
    },300);
    let seq = document.querySelector('.seq');
    seq.innerText = '';
    for(let color of gameseq){
        seq.append(`${color}, `);
    }
    seq = document.querySelector('.seq2');
    seq.innerText = '';
    for(let color of userseq){
        seq.append(`${color}, `);
    }
    userseq = [];
    gameseq = [];

}