randomNumber1=Math.floor(Math.random()*6)+1;

img_left="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",img_left);

randomNumber2=Math.floor(Math.random()*6)+1;

img_right="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",img_right);

if (randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins!"

}
if(randomNumber1<randomNumber2){
     document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins!"
}
if(randomNumber1==randomNumber2){
     document.getElementsByTagName("h1")[0].innerHTML="Draw!"
}