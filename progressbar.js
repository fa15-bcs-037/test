// Target the item using the class as the selector.
// Single animation
$('.box1').animate({left: 400}, 1000);
// Chained animation
$('.box2').animate({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
}).animate({
    top: 50,
    left: 300,
    width: 50,
    height: 50,
}).animate({
    top: 150,
    left: 300,
    width: 400,
    height: 120,
}).animate({
    top: 70,
    left: 10,
    width: 50,
    height: 50,
});
// jQuery knows not to start animations until the animation before has completed