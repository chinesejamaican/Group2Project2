let tes1 = 10;
var x;
function runTime() {
  x = setInterval(time, 1000);
}

function timee() {
  tt = document.getElementById("i1");
  let ttime = 0;
  ttime = tt.value;
  let ta = [];
  ta = ttime.split(":");
  let time = new Date(2019, 1, 1, 0, ta[0], ta[1], 00);
  time.setSeconds(time.getSeconds() - 1);
  let min = time.getMinutes();
  let sec = time.getSeconds();
  tt.value = min + ":" + sec;
}

let s1 = document.getElementById("s1");
s1.addEventListener("click", runTime);
