// SLIDER JS START
var counter = 2;
var i = 1;
setInterval(function () {
  document.getElementById("rad" + counter).checked = true;
  console.log(counter);
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// SLIDER JS END