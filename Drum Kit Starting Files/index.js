var audio = new Audio("./sounds/tom-1.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    var button = document.querySelectorAll(".drum")[i];
    button.addEventListener("click", function () {
           this.style.color = "white";
             
    });
}
