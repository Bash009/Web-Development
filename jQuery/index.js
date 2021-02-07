// alert('Hello Me.');

// $(document).ready(function(){
    // $("h1").css("color","red");
// });

// $("h1");

// To be added Game
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
function nextSequence() {
    var a = Math.floor(Math.random() * 4);
    return a;
    
}
var t = buttonColours();
var randomNumber = buttonColours[t];
gamePattern.push(randomNumber);

