let tes1 = 10;
var x;
let stop = false;

function runTimeBack(id){
    x = setInterval(timeeBck(id), 1000);
}

function timeeBck (id) {
    if(stop === true){
        return;
    }
    tt = document.getElementById(id);
    let ttime = 0;
    ttime = tt.value;
    let ta = [];
    ta = ttime.split(":");
    let time = new Date(2019,1,1,0,ta[0],ta[1],00)
    time.setSeconds(time.getSeconds() - 1)
    let min = time.getMinutes()
    let sec = time.getSeconds();
    tt.value = min+":"+sec;
    
}

function runTimeFwrd(id){
    x = setInterval(timeeFwrd(id), 1000);
}

function timeeFwrd (id) {
    if(stop === true){
        return;
    }
    tt = document.getElementById(id);
    let ttime = 0;
    ttime = tt.value;
    let ta = [];
    ta = ttime.split(":");
    let time = new Date(2019,1,1,0,ta[0],ta[1],00)
    time.setSeconds(time.getSeconds() + 1)
    let min = time.getMinutes()
    let sec = time.getSeconds();
    tt.value = min+":"+sec;
    
}


function stopTime (){
    stop = true;
}






function whoClicked(event) {
 let target = event.target;

 switch (target.id){
    case cu1:
        runTimeFwrd(i1)
        break;
    case cd1:
        runTimeBack(i1)
        break;
    case st1:
        stopTime();

 }


}


document.getElementsByTagName("body").addEventListener("click", function(event) {
    whoClicked(event);
});

