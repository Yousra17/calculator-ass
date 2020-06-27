

function Number(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}
function Result(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

