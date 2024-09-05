
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}

function compute() {
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var amount = principal + interest;
    var result = document.getElementById("result");

    var year = new Date().getFullYear + years;
}
