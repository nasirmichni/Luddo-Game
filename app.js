let x = 0;
total = 0;
function rollTheDisk(){
x  = Math.random() * 6 + 1;
document.querySelector(".digit").innerHTML = Math.trunc(x);
x = Math.trunc(x);
if(true){
    let diskImg = document.querySelector(".image");
    diskImg.src = `images/dice-${x}.png`;
}
total += x;
if(total >= 100){
    alert("You have won the game");
    total = 0;
}
document.querySelector(".scoreBox").innerHTML = `Your total score is ${total}`;
}