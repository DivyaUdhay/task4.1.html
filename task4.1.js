//1. Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//2.How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar:",myvar);
//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname;
var lastname;
var maritalstatus;
var country;
var age;
//4.Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname,lastname,maritalstatus,country,age;
//5. Declare variables and assign string, boolean, undefined and null data types
//var name="john";
//var Maritailstatus=true;
//var Country;
//var age=nill;
//6. Convert the string to integer
//parseint()
myString = '129' 
console.log(parseInt(myString)) // expected result: 129
//Number()
console.log(Number("10"));
//Plus sign(+)
const x = 15;
const y = -15;
console.log(+x); // expected output: 15
console.log(+y); // expected output: -15
console.log(+''); // expected output: 0

var isSunday = true;
var isMonday = false;
var isTuesday = false;
var isWednesday = true;
var isThursday = true;
var isFriday = false;


function greetFriend() {
  if (isSunday === true && isMonday === false  && isTuesday=== false && isWednesday === false && isThursday === false && isFriday === false) {
    return `Good morning, Happy Sunday`;
  } else if (isSunday === false && isMonday === true  && isTuesday=== false && isWednesday === false && isThursday === false && isFriday === false) {
    return `Good morning, Happy Monday`;
  } else if (isSunday === false && isMonday === false  && isTuesday=== true && isWednesday === false && isThursday === false && isFriday === false) {
    return `Good morning, Happy Tuesday`;
  } else if (isSunday === false && isMonday === false  && isTuesday=== false && isWednesday === true && isThursday === false && isFriday === false) {
    return `Good morning, Happy Wednesday`; 
  } else if (isSunday === false && isMonday === false  && isTuesday=== false && isWednesday === true && isThursday === true && isFriday === false) {
    return `Good morning, Happy Thursday`;  
  } else if (isSunday === false && isMonday === false  && isTuesday=== false && isWednesday === true && isThursday === false && isFriday === true) {
    return `Good morning, Happy Friday`; 
  } else {
    return `Hi friend!`;
  }
}

console.log(greetFriend());

//Task 2: Simple Programs todo for Operators
//Square of a number
let A= Math.sqrt(4);console.log(A);
let B = Math.sqrt(9);console.log(B);
let C = Math.sqrt(16);console.log(C);
let D = Math.sqrt(25);console.log(D);
let E = Math.sqrt(36);console.log(E);

//Swapping 2 numbers
let X = 4;
let Y = 2;
let temp;

//swap variables
temp = X;
X = Y;
Y = temp;

console.log(`The value of a after swapping: ${X}`);
console.log(`The value of b after swapping: ${Y}`);

//Addition of 3 numbers
let x1 = 5;
let y1 = 2;
let z1 = 3;
let sum = x1+y1+z1;
console.log(`sum of three is:`,sum);

//Celsius to Fahrenheit conversion
var cTemp = 60; 
var cToFahr = cTemp * 9 / 5 + 32
console.log(`${cTemp}°C is ${cToFahr}°F.`);

//Meter to miles
var meter = 5;
var mile = meter / 1.609;
console.log(mile);
//Pounds to kg
var pound = 5;
var kg=pound/2.2046;
console.log("5Pound to kg:",kg);
//Calculate Batting Average
var scoredRun = 100;
var timesOut=3;
var battingAverage = scoredRun/timesOut;
console.log("Batting Average is:",battingAverage);
//Calculate five test scores and print their average
var Test1Score = 120;
var Test2Score = 200;
var Test3Score = 150;
var Test4Score = 250;
var Test5Score = 300;
var TestAverageScore = (Test1Score+Test2Score+Test3Score+Test4Score+Test5Score)/5;
console.log("5 Test's AverageScore is:",TestAverageScore);
//Power of any number x ^ y.
