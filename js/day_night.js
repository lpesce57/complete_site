//created with the help of ChatGPT, comments note the areas it helped with
window.addEventListener("load", function() {
  backgroundFunc();
});

function backgroundFunc() {
  let currentTime = new Date().getHours();

  //Helped assist with finding a variable to represent night times, all other are considered day
  const isNight = currentTime >= 18 || currentTime < 5;

  //Helped me load my image in the right way, because it did not load the same way as the CSS or HTML images did
  let night = new Image();
  night.src = '../images/night.jpg';

  let day = new Image();
  day.src = '../images/day.jpg';

  if (isNight) {
    document.querySelector("main").style.backgroundImage = night;
  } else {
    document.querySelector("main").style.backgroundImage = day;
  }
}
