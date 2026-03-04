//Object
//this is a simple object
//first is stactic method and second is constructor method
//This is static method to write object
// let obj = {
//     fname: "vikas",
//     lname: "thakur",
//     age: 25,
// };

import { log } from "console";

//this is constructor method
// let obj1 = new Object();
// obj.userName = "mayunk"
//you can put anything it will behave like a normal object
//hm enkeh baare meh baat nhi krege that is come in constructor joh OOPS meh kaam aata h, whenever we are using constructor, destructor, class, inheritance,prototype they are part of OOPS programming, we are not dealing with object right now, we are dealing in object

//read operation

console.log(obj); //pura object print ho jayega with keys and values

console.log(obj.lname);
//agr object meh data push krna ho that time we used dot operator, jb value nikalni ho tb bhi hm used krteh dot operator but this is a single dot operator yaad rhna.abhi hm pdhege three dot operator jise hm spread operator and rest operator bhi bolteh h
console.log(Object.keys(obj)); //se saari keys print ho jayegi but not values
console.log(Object.values(obj)); //you will be finding only values
console.log(Object.entries(obj)); //sb key values both print ho jayege

//CRUD opeartion meh -> Create ho gya , read ho gya , Update ho gya, Delete not used
//Qs. arises can we update that?
//primitive data types kis trh ki memory used krta h stack

//Stack used krta h Shadowing, apkeh variable ka clone bna lehta h, jb bhi aap ush particular value meh change kr rahe hoteh h, jiskoh redeclaration ya reinitalization kehteh h ushe purane wale value meh koi frk nhi pdta h, that is called shadowing, aap agr shadow meh change kr rahe ho toh apkeh original meh change nhi hoga. but object eskoh follow nhi krta h because object used heap memory jiskoh kehteh h reference kind of data type reference meh kya hota h bhaiya ek trf dump hota h joh reference pass kiya jaata h wo original refernce hota h ,here reassign meh copy nhi bnega direct original meh change hoga.

//lets do in updation
Object.fname = "akash";
console.log(obj); //object keh andr hm update kiye h aur update hua h original meh but var ,let ,const meh aisa nhi tha vaha hmhe copy milta h ushme changes hoteh h original meh nhi hota h

//reassignment kr rahe h
let obj1 = obj;
console.log(obj1);

// let obj1 = obj;
// obj1.lname = "singh";
// console.log(obj1); //singh
// console.log(obj); //singh


//ye code sehe bhi complex ho skta h but kb, jb aap baat krteh h mdoern javascript meh API calling ki, Object means API
// let obj = {
//     name: "vikas",
//     age: 25,
//     salary: 1234567,
//     address: {
//         town: "etawah",
//         state: "up",
//         mobile: {
//             countrycode: "+91",
//             number: 12345678,
//         },
//     },
// };

//everything in API that comes on the screen is a response whenever a request goes it will complete the cycle that is response it can be error, data ,image, it can be msg hi hello kuch bhi, it can be blank screen it can be something kuch bhi
//whenever req goes, response will be coming from the server
//req keh saath ek header jaata h and ek action jaata h
//Network tab -> Header -Request URL means link, uri bhi bolteh h, url, uri, connection string bhi bolteh h, end point bhi kehteh h , link bhi kehteh h, http req bhi kehteh h

//Status Code-> 200ok means everything is going ok ok when data is load successfully in the browser thats why its converted into 200 ok code
//error hoga url meh -> toh 404 not found ayega hmhare source code meh, its client side error joh ki user se hua glti 

//Headers means information about request and information about response (simple information about server and information about browser)

//dikat ayi shallow copy and deep copy meh
let obj = {
    name: "vikas",
    age: 25,
    salary: 12345,
    address: {
        town: "etawah",
        state: "up",
    },
};

//first tarika
//for printing, we have
//this is a normal tarika object keh value koh nikalna
console.log(obj.address.town);

//second tarika
const { age } = obj; //age aise nikal skteh h, kya aisa kr skteh h
//can u print town from this object?

//third tarika ->this is called the destructuring of the object , which is object of destructuring
const {
    obj: {
        address: { town }, //here mujhe object meh se address meh se sirf town chaiye aur baaki state koh as it is chod doh thats what is called Rest parameter
    },
} = obj

//agr mujhe bde part meh se chota part chahiye, baaki ka mujhe as it is chodna h that means bdee data meh se I am picking some of the data, rest of the data is untouched thats what is called rest parameter


//Rest Paramater
//Example of Rest parameter is agr pile of boxes yha pde huye h ek array aise boxes lge huye h I want first and second aur rest koh aise he chod doh, agr maine first aur second koh baahar nikal liya wo kya bn gyi value aur bache huye chije abhi bhi kya h array that means jb bhi aap rest parameter ka used krteh h joh bhi aap bahar nikla lehteh h wo bn jaati h value, aur bachi huyi chije apna format aur type of apna, aur apna method kbhi nhi badalti h, wo abhi bhi ek array rahega For example

//Rest paramter and spread operator what is difference between - there is no difference simple is three dot , its depend on the situation
//spread operator means kisi chij koh failana , I am suing array and object to spread it to make a copy of it
//spread opeartor means we are making the copy

//ek mere pass array h ushme value bhari huyi h aur ek aur array joh khaali pda hua h, ek kaam kro bhri wali joh array h uskoh faila doh khaali wale array meh that means we are making copy that is called spread operator

//why we are using spread, we are solving one problem that is shadowing

//...
//rest ki baat krteh h
//i have array of fruits and I want to print apple only
//first mtlb pehela uthaa loh, aur rest mtlb baaki ka chod doh but in array form
// let arr = ["apple", "banana", "cherry", "mango"];

// let [first, ...rest] = arr;
// console.log(first); //output: apple
// console.log(rest); //output: ['banana', 'cherry', 'mango'] its shown in array form


let arr = ["apple", "banana", "cherry", "mango"];

let [first, second, ...rest] = arr;
console.log(first); //output: apple
console.log(second); //banana
console.log(rest); //['cherry', 'mango']
console.log(rest[0]); //cherry

//apple and banana will be separate value, bache huye kya h array keh form meh this one ['cherry', 'mango'] that is called destructring mtlb data destructure kr rahe h joh mujhe chaiye unkoh meh bahar nikla liya, joh bacha huya kya h rest
//ye qs kisi keh dimag meh aya ki mujhe rest meh se niklana h jaise cherry niklana h toh kaise niklage unkoh aise niklage console.log(rest[0]);

//Rest used kiya jaata multiple argument handling meh
//function kya hota h u know block of code

// function sum(a, b) {
//     return a+b;
// }

// let res = sum(2, 3);
// console.log(res); //output 5

//kya tmhe lgta h kisi api ya array ,kisi meh bhi kya doh value ka he sum ho skta h
//aap socho yhaa argument 4 5 6 kitne bhi ho skteh h hm kitna he likh payege 100 huye toh kya kroge thats why hm rest parameter koh laaateh h

function sum(a, b, c) { //here argumnet can be never ending, toh hmhara function bhi toh etna capable hona chaiye joh ki never ending argument koh jhel paye thats when rest parameter come to the picture
    return a+b;
}

// function sum(...rest){
//     return a + b;
// }

//bahut bache aise bhi likhteh h taaki confused n ho 
// function sum(...args) {
//     return a + b;
// }

// let res = sum(2, 3, 5, 5, 7);
// console.log(res); 

//jaha peh apkoh ek se  jada argument handle krne hoteh  function meh vaha used krteh h rest that is the primary purpose of the rest


function sum(...args){
    let sum = 0;
    for (let i = 0; i <args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// let res = sum(2, 3);
// console.log(res); ///output 5

// let res = sum(2, 3, 4, 5);
// console.log(res); //14

let res = sum(2, 3, 4, 5, 2, 7, 8, 9,); //aise hm kitna argument likhege aap he socho million meh ho toh there was a problem function ka kaam kya h aapki chije aasan krna , function keh saath pehli chij collide huyi Rest parameter that made calculation much easier to handle more than one argument, mere pass 1000 agument ya million mujhe chinta krne ki jarurat he nhi h
console.log(res);

//Rest parameter used in two ways:-
//first parameter desctructuring krna ho
//second multible argument handle krna ho kkisi function meh


//whenever we used something akela that come to the picture of spread operator
//this is the property of stack, array used stack memory
// let arr = [1, 2, 3, 4,5,6];

// let arr1 = arr;

//-------------
// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [...arr];
// console.log(arr1);


// let obj = {
//     name: "vikas",
//     age: 25,
// };
// let obj1 = {...obj };
// console.log(obj1);

//--------------------------
// let obj1 = {
//     name: "vikas",
//     age: 25,
// };

// let obj2 = obj1;
// obj2.age = 26;
// console.log(obj2);
// console.log(obj1);
//eshme original meh changes because of heap but mujhe ye solve krna h ki mere original meh change n jaha krna h bs vhi ho , phir spread operator vaha aata h

//--------------------------
// let obj1 = {
//     name: "vikas",
//     age: 25,
// };

// let obj2 = { ...obj1 };
// obj2.age = 26;
// console.log(obj2);
// console.log(obj1);

//--------using array
let arr1 = [1, 2, 3, 4,5];

let arr2 = [...arr1];
arr2.push(6);
console.log(arr1);
console.log(arr2);

//jb hm spread operator se copies bnayi that is called spread operator 
//shallow copies is only made using spread operator




//three dot operator hm abhi pdhege -> spread operator and rest operator
