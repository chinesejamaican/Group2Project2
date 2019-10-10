let tes1 = 10;
var x;
var xx;
var xxx;
var xl;
var xll;
var xlll;
let stpTime = false;
let stpTime1 = false;
let stpTime2 = false;

function runTimeFrwrd() {
  x = setInterval(timeeFwrd, 1000);
}
function runTimeFrwrd1() {
  xx = setInterval(timeeFwrd1, 1000);
}

function runTimeFrwrd2() {
  xxx = setInterval(timeeFwrd2, 1000);
}

function timeeFwrd() {
  if (stpTime === true) {
    clearInterval(x);
  }
  tt = document.getElementById("i0");
  let ttime = 0;
  ttime = tt.value;
  let ta = [];
  ta = ttime.split(":");
  let time = new Date(2019, 1, 1, 0, ta[0], ta[1], 00);
  time.setSeconds(time.getSeconds() + 1);
  let min = time.getMinutes();
  let sec = time.getSeconds();
  tt.value = min + ":" + sec;
}

function timeeFwrd1() {
  if (stpTime1 === true) {
    clearInterval(xx);
  }
  tt1 = document.getElementById("i1");
  let ttime1 = 0;
  ttime1 = tt1.value;
  let ta1 = [];
  ta1 = ttime1.split(":");
  let time1 = new Date(2019, 1, 1, 0, ta1[0], ta1[1], 00);
  time1.setSeconds(time1.getSeconds() + 1);
  let min1 = time1.getMinutes();
  let sec1 = time1.getSeconds();
  tt1.value = min1 + ":" + sec1;
}

function timeeFwrd2() {
  if (stpTime2 === true) {
    clearInterval(xxx);
  }
  tt2 = document.getElementById("i2");
  let ttime2 = 0;
  ttime2 = tt2.value;
  let ta2 = [];
  ta2 = ttime2.split(":");
  let time2 = new Date(2019, 1, 1, 0, ta2[0], ta2[1], 00);
  time2.setSeconds(time2.getSeconds() + 1);
  let min2 = time2.getMinutes();
  let sec2 = time2.getSeconds();
  tt2.value = min2 + ":" + sec2;
}

function runTimeBack() {
  xl = setInterval(timeeBack, 1000);
}

function runTimeBack1() {
  xll = setInterval(timeeBack1, 1000);
}

function runTimeBack2() {
  xlll = setInterval(timeeBack2, 1000);
}

function timeeBack() {
  if (stpTime === true) {
    clearInterval(xl);
  }
  ttb = document.getElementById("i0");
  let ttimeb = 0;
  ttimeb = ttb.value;
  let tab = [];
  tab = ttimeb.split(":");
  let timeb = new Date(2019, 1, 1, 0, tab[0], tab[1], 00);
  timeb.setSeconds(timeb.getSeconds() - 1);
  let minb = timeb.getMinutes();
  let secb = timeb.getSeconds();
  ttb.value = minb + ":" + secb;
}

function timeeBack1() {
  if (stpTime1 === true) {
    clearInterval(xll);
  }
  ttb1 = document.getElementById("i1");
  let ttimeb1 = 0;
  ttimeb1 = ttb1.value;
  let tab1 = [];
  tab1 = ttimeb1.split(":");
  let timeb1 = new Date(2019, 1, 1, 0, tab1[0], tab1[1], 00);
  timeb1.setSeconds(timeb1.getSeconds() - 1);
  let minb1 = timeb1.getMinutes();
  let secb1 = timeb1.getSeconds();
  ttb1.value = minb1 + ":" + secb1;
}

function timeeBack2() {
  if (stpTime2 === true) {
    clearInterval(xlll);
  }
  ttb2 = document.getElementById("i2");
  let ttimeb2 = 0;
  ttimeb2 = ttb2.value;
  let tab2 = [];
  tab2 = ttimeb2.split(":");
  let timeb2 = new Date(2019, 1, 1, 0, tab2[0], tab2[1], 00);
  timeb2.setSeconds(timeb2.getSeconds() - 1);
  let minb2 = timeb2.getMinutes();
  let secb2 = timeb2.getSeconds();
  ttb2.value = minb2 + ":" + secb2;
}

function set() {
  alert(
    "Enter time in 00:00 format, if you want to change the time from going up to down first click stop then choose if you want to go up or down"
  );
}

function whichBt(e) {
  let target = e.target;

  switch (target.id) {
    case "set0":
      set();
      break;
    case "set1":
      set();
      break;
    case "set2":
      set();
      break;
    case "cUp0":
      stpTime = false;
      runTimeFrwrd();
      break;
    case "Dwn0":
      stpTime = false;
      runTimeBack();
      break;
    case "stp0":
      stpTime = true;
      break;
    case "cUp1":
      stpTime1 = false;
      runTimeFrwrd1();
      break;
    case "Dwn1":
      stpTime1 = false;
      runTimeBack1();
      break;
    case "stp1":
      stpTime1 = true;
      break;
    case "cUp2":
      stpTime2 = false;
      runTimeFrwrd2();
      break;
    case "Dwn2":
      stpTime2 = false;
      runTimeBack2();
      break;
    case "stp2":
      stpTime2 = true;
  }
}

document.addEventListener("click", function(e) {
  whichBt(e);
});
