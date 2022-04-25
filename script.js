function Calculate(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
    }
}
