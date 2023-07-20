const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];


//------------Question 1------------>
const alter = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];
alter.sort(function (a, b) { return a - b });
document.getElementById("qus1").innerHTML = "1) a) Second smallest element in the given array: " + alter[1] + "<br>" + "b) Second largest element in the given array: " + alter[9];


//------------Question 2------------>

let x = [];
let n = numbers.forEach(n => {
  if (n % 7 === 0)
    x.push(n);
});
document.getElementById("qus2").innerHTML = "2)The element divisible by 7 are " + x;


//------------Question 3------------>

let first = numbers.find(divten);

document.getElementById("qus3").innerHTML = "3)The first element divisible by 10 is " + first;

function divten(value) {
  return value % 10 ==0;
}


//------------Question 4------------>

{let position = numbers.indexOf(7);

document.getElementById("qus4").innerHTML = "4)The element position of 7 in number array is " + position;}


//------------Question 5------------>

const threex = numbers.map(multy);

document.getElementById("qus5").innerHTML = "5)Numbers array multiple by 3: " + threex;

function multy(value) {
  return value * 3;
}


//------------Question 6----------->

let divseven = numbers.every(divbyseven);

document.getElementById("qus6").innerHTML = "6)This statement was " + divseven;

function divbyseven(value) {
  return value % 7 == 0;
}


//-----------Question 7------------>

{let lastposition = numbers.lastIndexOf(49);

  document.getElementById("qus7").innerHTML = "7)The end position of 49 in number array is " + lastposition;}
  

//-----------Question 8------------>

let divthree = [];
let a = numbers.map(a => {
  if (a % 3 === 0)
    divthree.push(a);
});
document.getElementById("qus8").innerHTML = "8)The element divisible by 3 are " + divthree;


//-----------Question 9------------>

let sum = numbers.reduce(myFunction);

document.getElementById("qus9").innerHTML = "9)The sum is " + sum;

function myFunction(total, value) {
  return total + value;
}