$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why, hey, what's up?</li>");
    $("li").css("background-color","green");

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>get lost.</li>");
    $("ul#webpage").prepend("<li>Woh. ok. fine</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>freakin stop it</li>");
    $("ul#webpage").prepend("<li>FREAKING FREAKING!</li>");
  });


});
