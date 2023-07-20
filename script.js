const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];

//------------Question 1------------>


//------------Question 5------------>
const threex = numbers.map(multy);

document.getElementById("qus5").innerHTML ="5)Numbers array multiple by 3: " + threex;

function multy(value) {
  return value * 3;
}