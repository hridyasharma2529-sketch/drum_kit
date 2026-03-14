drum_buttons=document.querySelectorAll(".drum").length;

for (i=0; i<drum_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonInnerHTML= this.innerHTML;
        Makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    )
    };

    document.addEventListener("keydown",function(event){
        Makesound(event.key);
        buttonAnimation(event.key);
    });
    
function Makesound(key){
    switch(key){

        case"w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        case "s":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        }
};


function buttonAnimation(currentkey){
    var act_button= document.querySelector("."+currentkey);
    act_button.classList.add("pressed");

setTimeout(function(){
    act_button.classList.remove("pressed");
}
, 20);}
