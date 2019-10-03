let tes1 = 10;
var x;
function runTime(){
    x = setInterval(timee, 1000);
}

function timee () {
    tt = document.getElementById('test');
    let ttime = 0;
    ttime = tt.innerHTML;
    let ta = [];
    ta = ttime.split(":");
    let time = new Date(2019,1,1,0,ta[0],ta[1],00)
    time.setSeconds(time.getSeconds()- 1)
    let min = time.getMinutes()
    let sec = time.getSeconds();
    tt.innerHTML = min+":"+sec;
    
}

window.addEventListener("load", runTime);