// https://github.com/shiven-nayee/scrolling_stars
// Idea from: https://codepen.io/saransh/pen/BKJun?editors=0100

// Counts the number of stars once it generates 100 stars it removes the interval
// The top determines how far the stars can go before the animation resets
// The left is randomly chosen so the star is added randomly on the screen
var num1 = 0;
function makeSmallStars() {
  let star = $('<div>').addClass('smallStar');
  star.appendTo($('.space'));
  const randomNum = Math.floor(Math.random() * 1000);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num1 += 1;
  if(num1 > 100) {
    clearInterval(smallStars);
    console.log('cleared 1');
  }
}

var num2 = 0;
function makeMediumStars() {
  let star = $('<div>').addClass('mediumStar');
  star.appendTo($('.space'));
  const randomNum = Math.floor(Math.random() * 1500);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num2 += 1;
  if(num2 > 75) {
    clearInterval(mediumStars);
    console.log('cleared 2');
  }
}

var num3 = 0;
function makeLargeStars() {
  let star = $('<div>').addClass('largeStar');
  star.appendTo($('.space'));
  const randomNum = Math.floor(Math.random() * 1000);
  // const randomNum = Math.floor(Math.random() * 1000);
  const coordinates = { top: 700, left: randomNum };
  star.offset(coordinates);
  num3 += 1;
  if(num3 > 50) {
    clearInterval(largeStars);
    console.log('cleared 3');
  }
}

$('.winter').click(function() {
  console.log('clicked');
  $(".space").css({"background-image": "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"});
  $(".smallStar").css({"border": "1px transparent solid", "border-radius": "100%"});
  $(".mediumStar").css({"border": "1px transparent solid", "border-radius": "100%"});
  $(".largeStar").css({"border": "1px transparent solid", "border-radius": "100%"});
});

$('.original').click(function() {
  console.log('clicked');
  $(".space").css({"background": "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"});
  $(".smallStar").css({"border": "none"});
  $(".mediumStar").css({"border": "none"});
  $(".largeStar").css({"border": "none"});
});

var smallStars = setInterval(makeSmallStars, 500);
var mediumStars = setInterval(makeMediumStars, 500);
var largeStars = setInterval(makeLargeStars, 500);
