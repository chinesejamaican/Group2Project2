var inputMin = 0;
var displayValue = document.getElementById("value");
displayValue.innerHTML = inputMin;
var counter,
  direction = "down",
  time = inputMin * 60,
  sec = document.getElementById("sec"),
  min = document.getElementById("min"),
  set = document.getElementById("set"),
  down = document.getElementById("down"),
  up = document.getElementById("up"),
  stop = document.getElementById("stop");

set.addEventListener("click", function() {
  inputMin = prompt("Enter Number of Minutes Between 1 - 30");
  displayValue.innerHTML = inputMin;
  time = inputMin * 60;
});

up.addEventListener("click", function() {
  counter = setInterval(count, 1000);
  direction = "up";
  time = 0;
});

down.addEventListener("click", function() {
  counter = setInterval(count, 1000);
  direction = "down";
});

stop.addEventListener("click", function() {
  clearInterval(counter);
});

function count() {
  if (direction == "down") {
    time--;
    if (time <= 0) {
      clearInterval(counter);
    }
  } else {
    time++;
    if (time >= inputMin * 60) {
      clearInterval(counter);
    }
  }

  min.innerHTML = Math.floor(time / 60);
  var secValue = time % 60;
  secValue = ("0" + secValue).slice(-2);
  sec.innerHTML = secValue;
  //   document.getElementById("timer").innerHTML = min + ":" + sec;
}
