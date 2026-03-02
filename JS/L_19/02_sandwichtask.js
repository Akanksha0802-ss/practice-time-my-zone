//SandwichTask
//Task-you have to make a sandwich operation using callback and delay and each process will take increasing order of time
//each function run after the delay 2, 4, 5, 6 sec ka delay hoga in all the four function and last mehh likh kr ayega your sandwich is ready


//pehla toh ye structure bahut complex bn gya jiskoh hm bolteh h Pyramid of DOM
//dushra eshi koh call back hell kehteh h, means multiple call back ek dushre keh andr baithe huye h this is called nested call back hell ye sb problem toh aa rahi thi saath saath meh aa raha thainversion of Control problem makeSandwich n chle toh eshi peh toh sb dependent h
//esh problem ka root cause kya tha, eska root cause h ki hm ek function keh andr dushre function koh pass kr rahe h, here call back ka defination kya tha we can pass our function into argument of another function that is the root cause, ki hm kisi function keh andr dushre function koh pass kr rahe h by trusting bindly on the first function, eshi proble se hmhe smasay ho rahi thi that problem is name Invesrion of control, callback hell, pyramid of DOM, call back, call back chaining ye sb problem ho rahi thisirf ek function keh vjh se jb hm ek function dushre function keh andr pass kr rahe h
//ab hm problem koh solve krege passing of a function se move kr gye attaching of a function peh
//attaching function is like this makeSandwich.applySauce
//atttaching of a function is called Promises

function makeSandwich(bread, cb) {
  setTimeout(() => {
    console.log("Making the bread" + bread);
    // cb();
  }, 2000);
}

function applySauce(sauce, cb) {
  setTimeout(() => {
    console.log("applying the sauce" + sauce);
    cb();
  }, 3000);
}

function stuffing(stuff, cb) {
  setTimeout(() => {
    console.log("stuffing is done with" + stuff);
    cb();
  }, 4000);
}

function grilled(temp, cb) {
  setTimeout(() => {
    console.log("grilling is done at temp" + temp);
    cb();
  }, 5000);
}

function serving(plate, cb) {
  setTimeout(() => {
    console.log("serving of  plate of " + plate);
    cb();
  }, 6000);
}


makeSandwich("brown bread", () => {
  applySauce(("mayo"), () => {
     stuffing("panner", () => {
       grilled("high", () => {
        serving("bamboo", () => {
            console.log("your response is completed");
       });
      });
    });
  });
});

//------------------------------------------


//Task-2 Call back used krkeh tmhe bnana kya h ek api call krna h aur uskeh upr tmhe 3 function define krna h


function fetchData() {
  const response = fetch("https://dummyjson.com/products");
  console.log(response);
}
fetchData();