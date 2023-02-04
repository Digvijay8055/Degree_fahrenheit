let Degree = document.getElementById("Degree");
let Fahrenheit = document.getElementById("Fahrenheit");

function myfun() {
  var result = Degree.value;
  if(result>0){
  // console.log("deg",Degree);
  console.log("result", result);
  var algo = (result * 9) / 5 + 32;
  console.log("algo", algo);
  Fahrenheit.value = algo;
  // console.log(inch);
}
}
function myfun1() {
  result = Fahrenheit.value;
  if(result>0){
  var algo = ((result - 32) * 5) / 9;
  Degree.value = algo;
  }
}
