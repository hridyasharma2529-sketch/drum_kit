$("h1").css("color","red"); 
$("button").addClass("big margin-50");

//$("h1").hasClass("big"); --- IGNORE ---    
$("h1").text("Bye");
$("button").html("Don't click me");
$("h1").html("<em>Bye</em>");

//getting the attribute value
//console.log($("img").attr("src")); --- IGNORE ---
//setting the attribute value
//$("a").attr("href","https://www.yahoo.com"); --- IGNORE ---

//adding event listeners

$("h1").click(function(){
    $("h1").css("color","purple");
}); 

//event listener for all buttons
$("input").keydown(function(event){
    $("h1").text(event.key);
});
$("h1").on("mouseover",function(){
    $("h1").css("color","green");
    setTimeout(function(){
        $("h1").css("color","red");
    }, 500);
});

// before() and after() methods
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

//remove() method
//$("button").remove(); --- IGNORE ---

//hide() and show() methods
$("button").on("click", function(){
    $("h1").hide();
});
// $("button").hide(); --- IGNORE ---
//$("button").show(); --- IGNORE ---

//toggle() method
//$("button").toggle(); --- IGNORE ---

//fadeIn() and fadeOut() methods
//$("button").fadeOut(); --- IGNORE ---
//$("button").fadeIn(); --- IGNORE ---

//slideUp() and slideDown() methods
//$("button").slideUp(); --- IGNORE ---
//$("button").slideDown(); --- IGNORE ---

//animate() method
//$("button").animate({opacity: 0.5}); --- IGNORE ---(numeric values only)
//$("button").animate({margin: "20px"}); --- IGNORE ---

//multiple animations
//$("button").animate({opacity: 0.5}).animate({margin: "20px"}); --- IGNORE ---
//$("button").slideUp().slideDown().animate({opacity: 0.5, margin: "20px"}); --- IGNORE ---

//prepend() and append() methods
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");