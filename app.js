var display = document.getElementById("inp");

function getval(a){
    console.log(a);
display.value += a;
}
function clear(){
    display.value = "";
}
function totalvalue(){

    var a = eval(display.value)
    display.value = a;
}
function boxchange(a){
    a.className = nextbox;
    }