let currentvalue=" ";
document.querySelector("#display").value = currentvalue;

function one(){
    document.getElementById('one');
    currentvalue += '1';
    document.querySelector("#display").value = currentvalue;

}
function two(){
    document.getElementById('two');
    currentvalue += '2';
    document.querySelector("#display").value = currentvalue;

}
function three(){
    document.getElementById('three');
    currentvalue += '3';
    document.querySelector("#display").value = currentvalue;

}
function four(){
    document.getElementById('four');
    currentvalue += '4';
    document.querySelector("#display").value = currentvalue;

}
function five(){
    document.getElementById('five');
    currentvalue += '5';
    document.querySelector("#display").value = currentvalue;

}
function six(){
    document.getElementById('six');
    currentvalue += '6';
    document.querySelector("#display").value = currentvalue;

}
function seven(){
    document.getElementById('seven');
    currentvalue += '7';
    document.querySelector("#display").value = currentvalue;

}
function eight(){
    document.getElementById('eight');
    currentvalue += '8';
    document.querySelector("#display").value = currentvalue;

}
function nine(){
    document.getElementById('nine');
    currentvalue += '9';
    document.querySelector("#display").value = currentvalue;
}
function zero(){
    document.getElementById('zero');
    currentvalue += '0';
    document.querySelector("#display").value = currentvalue;
}


function clear(){
    currentvalue = '';
    document.querySelector("#display").value = currentvalue;
}
document.getElementById('clear').addEventListener('click', clear);

function add(){
    document.getElementById('add');
    currentvalue += '+';
    document.querySelector("#display").value = currentvalue;
0
}
function subs(){
    document.getElementById('subs');
    currentvalue += '-';
    document.querySelector("#display").value = currentvalue;

}
function multi(){
    document.getElementById('multi');
    currentvalue += '*';
    document.querySelector("#display").value = currentvalue;

}
function div(){
    document.getElementById('div');
    currentvalue += '÷';
    document.querySelector("#display").value = currentvalue;

}
function equal(){
    document.getElementById('equal');
    currentvalue = eval(currentvalue)
    document.querySelector("#display").value = currentvalue;

}
