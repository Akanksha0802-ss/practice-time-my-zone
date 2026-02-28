// --- CREATING OUR OWN HIGHER-ORDER FUNCTION ---

// Let's define some salary arrays.
// let salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// let salary2 = [100, 200, 300, 400, 500];

function calculateTenPercent(salary) {
  return salary * 0.1;
}
// let result = salary.map(calculateTenPercent);
// console.log(result);
//OUTPUT: [100, 200, 300, 400, 500, 600, 700]

function calculateTwentyPercent(salary) {
  return salary * 0.2;
}

// let result = salary.map(calculateTwentyPercent);
// console.log(result);
//output: [200, 400, 600, 800, 1000, 1200, 1400]


//upr wala toh sb likh lehege, but apkoh ye nice wala sikhna h
//ab hm likh rahe h HOF ka behind the scenes yaani map

// function calculateTax(salary, cb) {
//   let res = [];
//   for (let i = 0; i < salary.length; i++) {
//     res.push(cb(salary[i]));
//   }
//   return res;
// }

// let result = calculateTax(salary2, calculateTenPercent);
//console.log(result); //OUTPUT: [ 10, 20, 30, 40, 50 ]

//map, reduce, filter behind the scene ye used krteh h
Array.prototype.calculateTax = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

// let result = calculateTax(salary2, calculateTenPercent);

let salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
let salary2 = [100, 200, 300, 400, 500];
// Calling the method from the Array.prototype.
let result = salary2.calculateTax(calculateTwentyPercent);

console.log(result); //output [ 20, 40, 60, 80, 100 ]
console.log(salary2); //output [ 100, 200, 300, 400, 500 ]



// console.log(this); output: {} 

// function show() {
//     console.log(this);
// }
// show();

// "use strict";
// let show = () => {
//     console.log(this);
// };
// show(); //output {}

"use strict";
function show() {
    let a = 10;
    console.log(this.a);
}
show(); //output: undefined

//in L_19 hmne kya dekh liya tha currying, map, reduce , filter
//Sir ask what exactly currying is? - > Its functional programming approach, jaha ek he function multiple arguments se deal kr raha tha, ki function koh easy kr diya ki ,ek he bnda h wo ek argument se deal kro hr ek keh argument keh liye different function bnaa diya tha, jise hm functional programming approachh kehteh h jise data abstraction bahut aasan ho gya 

//L_20
//hof aatach hmesha hota h array keh saath using .
//hmne kitne type keh function dekh liya normal function, arrow function, dekh liya, anonymous function dekh liya, call back function dekh liya, higher order function dekh liya, ab hm dekeheg IIFE function

//IIFE function

// (function show() {
//   console.log("hii");
// })();

(function show2() {
  console.log("hii2");
})();
show();

