// scope 
//scope are many types 
//first is global scope means joh bahar h
//global scope 
//global scope means joh global meh defined h wo sbka h, kahi se bhi bulao ye accessiable h

// let a = 10; //global scope
// console.log(a); //10

// let a = 10; //global scope
// {
//     console.log(a);  //output: 10 kyu pta h n joh global meh wo sbka h
// }

//joh gloabl h wo sbka h
// let a = 10;
function test() {
    console.log(a); //output: 10 kyu pta h n joh global meh wo sbka h
}
test();


//2. Block scope
{
    let a = 10;

    const b = 20;

    var c = 40;
    // console.log(a, b, c); output 10 20 40
}

// console.log(a, b, c); //Reference error a is not defined, ek chij aap bhul gye javascript synchronous language h line by line execute hota h , pehel let a = 10 wali line execute hogi joh ki error h first line meh bhi aage ki line kaise execute hogi, let block scope h hm uskoh bahar se access nhi kr skteh h isliye error aya h
//console.log(c); //40 why output is 40 var is not a block scope hm var koh bahar se access kr skteh h but , agr function hota toh nhi kr skteh bahar se access, function keh andr var restricted h
//console.log(a); //Reference error a is not defined
//agr var ki declaration function keh andr nhi hua h toh uskoh hm bahar se bhi access kr skteh h andr se bhi remember this.

//let and const is a block scoped and var is a function scoped
// var sirf respect krta h function ki, jaha function dikhege he will stop phir uskoh bahar se access nhi kr skteh h jb var mera function block keh andr declared hoga tb not access from outside

//ye meh khud se bnayi hu
function funName() {
    var d = 20; 
    console.log(d);
}


// function test() {
//     let a = 10;
//     console.log(a); //10
// }
// test();


function test() {
    let a = 10;
}
//test();
console.log(a); //Reference error: a is not defined

//function is a block of code, ye extra protection lekr baitha hua h let aur const eshme se bahar nhi nikl skteh h
//var only block se bahar nikl skta h , function se bahar nhi nikl skta h.

//var case using function
function test() {
    var a = 10; //var only respect krta h function ki, yhaa var ki power khtm ho jaati h
    // console.log(a);
}
//test();
console.log(a); //Reference error


//lexical scope
// let a = 10; //global scope

// function test() {
//     console.log(a); //10 output kyu aa raha h aise kaise ho gya, error aana chahiye ki let koh hm uskeh block scope se he access kr skteh h bahar se nhi ye kaise possible hua
// }
// test();

//next example
// let a = 10;

// function outer() {

//     function inner() {
//         let a = 20;
//         console.log(a); // output is 20
//     }
//     inner();
// }
// outer();

//Next example
let a = 10; //global scope

function outer() {

    function inner() {
        console.log(a); // output is 10
    }
    inner();
}
outer();


// function outer() {
//     let a = 30;
//     function inner() {
//         console.log(a); // output is 30
//     }
//     inner();
// }
// outer();

function outer() {
    function inner() {
        console.log(a); // output Reference error a is not defined
    }
    inner();
}
outer();

//after this one concept will come that is lexical scope

//lexical scope 
//lexical means hierarchy, hieracrchy means chain vise upr chahdhna, eshme ye ek ek hierarch upr chadhega nichhe se pehele apne scope meh jhaak kr dekehega agr uskoh value nhi mili toh apne parent keh pass jayega kya unkeh scope meh pdi h value a ki agr nhi milega toh wo bolega grandparents se pucho kya unkeh pass h 
//lexical scope chaining - chain will be formed ek keh upr ek fsaya h to find the scope, it is called scope chaining, scope find krne keh chakar meh ek dushre keh chain connect krteh jaata h that particular thing is scope chaining
//lexical scope -> 1. global scope , 2. block scope 3. function scope, 4. lexical scope -kbhi bhi lexical scope nhi pucha jaata h, it will be ask as lexical environment.
//environment is different things and scope is different
//lexical means inner child having the access of outer child scope as well yaani apne parent ka bhi scope rkhta h

//what is the difference between scope and environment
//scope means reach dhundoge kaha tk
function outer(){
    //let a = 30;
    function inner() {
        //let a = 20;
        console.log(a);
    }
    inner();
}
//test();
outer();


//after this closures comes to the picture
//in GEC meh maine tmhe ek chij pdhai thi niyam btaya tha jaise function return statement encounter krta h, wo mark and sweep algorithm se bahar kr diya jata h
//Example
function outer() {
    let a = 10;

    function inner() {
        console.log(a); //output 10
    }
    inner(); //esh outer koh invoked n kru ,return kra du, below example
}
outer();




// //example
// function outer() {
//     let a = 10;

//     function inner() {
//         console.log(a); //output: [Function: inner]
//     }
//     return inner; //return means program terminate ho raha h , function ka nature hota return krna n ki print krna , but sb yhaa peh value he expect kr rahe the , yhaa bs call lgane keh jgh return kraa diya
// }
// let res = outer();
// console.log(res);



//Example
//example
function outer() {
    let a = 10;

    function inner() {
        console.log(a);  //10
    }
    return inner; 
}
let res = outer();

const res1 = res();
console.log(res1); //undefined
// console.log(res);


//after this closures comes to the picture
//in GEC meh maine tmhe ek chij pdhai thi niyam btaya tha jaise function return statement encounter krta h, wo mark and sweep algorithm se bahar kr diya jata h 
