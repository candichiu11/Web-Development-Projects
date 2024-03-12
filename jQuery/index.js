// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

$("h1").click(function() {
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").css("color", "purple");
});

$(document).keydown(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});