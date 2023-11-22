//created with the help of ChatGPT, comments note the areas it helped with
window.addEventListener("load", function() {
  backgroundFunc();
});

function backgroundFunc() {
  let body = document.body;
  let currentTime = new Date().getHours();

  //Helped assist with finding a variable to represent night times, all other are considered day
  const isNight = currentTime >= 18 || currentTime < 5;


  if (isNight) {
    body.classList.remove('day');
    body.classList.add('night');
  } 
  else {
    body.classList.remove('night');
    body.classList.add('day');
  }
}
