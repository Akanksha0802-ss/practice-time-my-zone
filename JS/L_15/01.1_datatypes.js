//How GEC work-> first memory allocation, second code execution
// agr variable var se decalred h toh undefiened milega
// let and const h toh tdz , jb tk uski value initalized nhi ho rahi h tb tk

//javascript dynamically typed language, data type define hoge execution keh time ya memory allocation keh time

// data types in js

//1. Primitive Data Types 
//Primitive means single value holder
// number
// let a = 20;

// let salary = 123.56;

//string
// let name = "vikas kumar thakur";

//boolean means either true or false
// let isLoggedIn = true;

// let isLoggedOut = false;

//null and undefined meh difference

//null meh agr like Agra=0 it means assigning value is zero, agr kisi variable koh pending meh dikhana that time used undefined like Agra = undefined, jb apkoh explicit ush jgh koh bhrna with khaali jgh vaha likh doh null(empty space) like Agra= null

// null
// let value = null;

//undefined
// let number; 

//Examples of stack
// let a = 20;

// let b = a;
// b = 10;
// console.log(a); output 20
// console.log(b); 10


//2. Reference Data Types
//object
//array
//function


//OBJECT
//Two tarika hota h object koh create krne keh first tarika to create object, key calue meh data hota h
//Example of Object ,it uses heap memory
//this is the ES6 methods of creating the object, modern method
//this is object-in this way we can create object , eskoh kehteh h ES6 method of creating the object ,yaani ECMMA Script joh modern method h

// let person = {
//     name: "vikas",
//     age: 25,
//     salary: 12345,
// };

//second method to create object using constructor 
// jaha likha ho new means constructor
//two methods hota h one is constructor method and second is (ES6 method) ECMA Script method

let person = {
    name: "vikas",
    age: 25,
    salary: 12345,
};
console.log(person); //Output: { name: 'vikas', age: 25, salary: 12345 }

let obj1 = new Object();
obj1.name = "vikas";
obj1.age = 24;
console.log(obj1); // Output: { name: 'vikas', age: 24 }



//If interviewer say define an object ,flex krne keh liye u can write all this code, its shows that your OOPS concept is good and you know it.
// let person = {
//     name: "vikas",
//     age: 25,
//     salary: 12345,
// };
// console.log(person);
console.log(person.name); //jb hmhe sirf key print krna ho toh eshe to sirf values print hogi OUTPUT: vikas
//when u used object, there are few methods in object which is object.keys, object.values, object.entries
//ye sb yaad rkhna plz
console.log(Object.keys(person)); //output: [ 'name', 'age', 'salary' ]
console.log(Object.values(person)); //output: [ 'vikas', 25, 12345 ]
console.log(Object.entries(person)); //here entries means key value dohno deh dehga Output: [ [ 'name', 'vikas' ], [ 'age', 25 ], [ 'salary', 12345 ] ]
// console.table(Object.entries(person)); // Output: ├─────────┼──────────┼─────────┤
// │ 0       │ 'name'   │ 'vikas' │
// │ 1       │ 'age'    │ 25      │
// │ 2       │ 'salary' │ 12345   │
// └─────────┴──────────┴─────────┘

//Constructor method
//make object using constructor
//jaha new likha it means that is constructor
// let obj1 = new Object();//obj1 naam meh saari object constructor ki property aa gyi h 
// obj1.name = "vikas";
// obj1.age = 24;
// console.log(obj1);



 //array
 //Array hmhara sirf ek he jgh kaam aata , jb hm API meh kaam krteh h, wo bhi tb ek jgh jise hm kehteh h Array of object
// let arr = [1, 2, 3, 4, 5];

//constructor method in array using new keyword
// let arr1 = new Array();



//function 
//function imp h ye kaam ka h, saara time function peh he beetana h beacuse React pura punction h, Node, express, mongo ye sb pure function h, koi bhi beena function keh kaam nhi hoga
//function 4 ya 5 types se used hoteh h, scoping, lexical environment, closures, call back, async/await, fetch, promise sb function meh aata h isliye function is a first class citizens
//Real Javascript start from the function
//Javascript is pure logic
//function simple defination write one time use anywhere and its piece of code
//agr function koh same file meh meh used krna h toh hm directly aap call krteh h, agr hmhe function koh dushri file meh used krna hota h toh vaha peh hm package koh hm import/export krteh h
//function is most important and most beutiful thing in Javascript
// function{} -> function name keh aage curly braces lga diya its a function defination or function expression
// function()-> function name keh aage () parenthesis lga diya its a function call

//named function 
// function greet() {
//     console.log("hello world");
// } //this is a function defination
// greet(); //function call
//OUTPUT: hello world

//function is always return, function never prints anything, function returns you something then you print the return value

//Example - rather than printing it will return hello World aur apna kaam khtm kr dehga
// function greet() {
//     return "hello world";
// }
// let res = greet();
// console.log(res);
//function hmesa return krta h , ye kuch bhi return kr skta h, function ek string return kr skta h, function ek number return kr skta h, function ek aur function return kr skta h, function ek methods bhi object bhi ,null bhi return kr skta h , but function ek se jada entity return nhi kr skta h , ek time peh ek he chij kr skta h function ek se jada chij return nhi kr skta remeber this
//pehela h named function kyu bolteh h, kyuki eskoh bulane keh liye eska naam ka use kiya jata h


//2. Anonymous function
// //function ka name n ho that is called anonymous function
//function () {
//     console.log("Hello World");
// }

// //this is second method to write the function which is anonymous function
// let sayHi = function () {
//     console.log("Hello World");
// }
// sayHi(); 

//we have pointer to call that is jiskoh hm pointer bolteh h , here caller is sayHi which is variable.
//whenever function is called using variable, it will be treated like variable, variable koh GEC meh jgh milti h undefined when we used var, agr let se h toh TDZ milega
//agr koi function, function keywords se likha gya h uskoh as is it defination milegi, agr wo kisi pointer ya variable se hold ho raha toh uskoh undefined ya TDZ milega thats the basic defination joh execution meh kaam aata h


//function anonymous ka extension h which is IIFE
//IIFE(Immedaite invoked function expression) which is used to prevent global function variable pollution

//3. Arrow function
//Third function is Arrow function
//arrow function is single line of expression
// let greet = () => console.log("hello world");
// greet();

//flat arrow function
//whenever arrow function is holding the parameters and arguments in it. it is called flat arrow funnction
//react is totally based on arrow function
// let greet = (a, b, c, d)=> console.log("hello world");
// greet();


//They give us more one time of function that is called IIFE
//when we need this - jb aapkoh function vhi likhna ho, vhi execute krkeh khtm kr dehna ho
// used and throw that is pollution bachane keh liye
//jaha peh bhi apkoh variable aur function koh pollution se bachana hota h apne program meh then , we used IIFE
// (function test() {
//     console.log("this is a test function");
// })();

//this all are the way of writing the function
//4 function hoteh h, hoteh toh bahut saare function h , abhi used ka yhi function h
// 1.named function 2.arrow function 3. anonymous function 4. IIFE function


// == vs ===
//here loosed comparison operator
// console.log(null == undefined); //true
// //this is strict comparison operator , yhaa data type bhi check krna hota h
// console.log(null === undefined); //false

// //here they are only checking the value
// console.log(2 == "2"); //true
// //here they are checking the value and data types value
// console.log(2 === "2"); //false













//premitive data types used stack memory and non-primitive(Reference) used heap memory
//heap means reference

//javascript is a dynamically typed language that means data type define hoge execution keh time ya memory allocation keh time












//How GEC work-> first memory allocation, second code execution
// agr variable var se decalred h toh undefiened milega
// let and const h toh tdz , jb tk uski value initalized nhi ho rahi h tb tk




// data types in js

// 1.primitive data types ->Single value holder
//Javacript is Dynamically Typed Language means data types defined hoge execution keh time peh ya memory allocation keh time peh.


//bigint
// string 
// boolean 
// null 
// undefined

//2. Reference Data Types
// object 
// array
// function




// let isLoggedIn = true;
// le

// console.log


// let obj1 = new Object();
// obj1.name = "vikas";
// obj1.age = 24;
// console.log(obj1);

//array
// let arr = [1, 2, 3, 4, 5];

// let arr1 = new Array();

//function is most important 
// object is important
//function write one tine and used anywhere and it is a piece of code
// funcion{} this is function expression
// function() this is function call

// function return object, string

function greet() {
    // console.log("hello world");
    return "hello world";
}


// let res = greet();
// 



//name function, arrow function, iife function, normal function
