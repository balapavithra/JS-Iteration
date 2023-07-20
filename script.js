const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];


//------------Question 1------------>
const alter = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];
alter.sort(function(a, b){return a - b});
document.getElementById("qus1").innerHTML = "1) a) Second smallest element in the given array: " + alter[1] +"<br>" + "b) Second largest element in the given array: " + alter[9] ;



//------------Question 5------------>
const threex = numbers.map(multy);

document.getElementById("qus5").innerHTML ="5)Numbers array multiple by 3: " + threex;

function multy(value) {
  return value * 3;
}