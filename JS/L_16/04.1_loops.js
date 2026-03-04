//three type keh loop we study while , do-while, for loop
//but here we study 6 types of loop -> for loop, while loop, do-while loop, for-each loop, for-in loop, for of loop

//lekin hmhare kaam keh h loops(for, while, do-while, for_each(array), for_in(object))

//for loop
//for (let i = 0; i < 10; i++) {
    //console.log(i);
//}

//output 0 1 2 3 4 5 6 7 8 9 

//while and do while loop 
//difference kya h while meh pehle condition check hogi, then statement print hoga but in do while meh ek baar statement print kra he dehga condition check krne se pehle

//but we are looking for each jiskoh hm bolteh h higher order function(HOF) - for each koh hm pdhateh h higher order function meh jisme 3 hoteh HOF that is map , filter, reduce


//this is array which we defined and I want to print those indexes
//fisrt method for loop lgayaege and array ki length tk iterate krege, we will print perfectly fine but
//whenever talk about modern JS
let arr = [1, 2, 3, 4, 5];
arr.forEach((ele) => {
  console.log(ele);
});

//for each behind the scene for loop used kr raha h
//forEach(); //aisa kahi likha tha means we are invoking for each

//aur esh function keh andr ek aur function which is arrow function joh ki anonymous function h jiska koi naam nhi hota 
//ek function keh andr dushra function what it is called , it is called HIGHER ORDER FUNCTION.
//whenever a function is able to receive another function into in his argument , parenthisis keh andr a, b,c likh doh argument he toh h like this forEach(a,b,c) ya 1 2 3 likh doh argument he toh bn gye, ab ye aise ho gya h forEach(()) ab, esh argument meh kya daal rahe ek aur function joh function forEach keh andr jaaata h that is called Callback function aur joh function eskoh received krta h wo kehlata h Higher Order Function. Callback kaha se aa gya that is the starting of the Asynchronous Programming

forEach(()=>{

})

//hmhe Higher Order function sirf 3 he hota h yhi pta rehta h, bahut saare function h joh HOF hoteh h
//map means second condition keh based peh array koh transform krana 
//filter means value koh filter krna
//reduce 
//ye koi bhi bta dehga 
//kya tm khud ka HOF bnaa skteh ho
//we study how to make our own HOF, if u know how to write HOF then u will realised ki map, reduce, filter actually meh kaam kaise krteh h
//sir said- meh as a interviewr bacho se puchta hu Can u explain me how filter works, You cannot explain how Filter works

//function koh to iterate kr nhi skteh h, so we take object
//for in loop
let obj = {
  name: "vikas",
  age: 25,
  salary: "123456",
};

for (let key in obj) {
  console.log(key, obj[key]);
}

//for loop of is not suggested one


//basic complete
//ab start hoga object
//for of kisi bhi iterator peh lgaa doh chlega but ye prefer nhi kiya jaata kyuki ye common h
//kyuki dekho hmhare pass named function tha kyu arrow function koh leh kr aa gye kyuki, normal function likhne meh mehnat jada lgti h rather then writing one one line of expression or code
//jaha peh bhi block aata h , hm block se bachteh h, in javascript hmhe bachna block se , jitna jada block likhoge utna jada memory leak hoga, block means memory , script, jitna jada block, utna jada memory, utna jada time complexity, utna hard program, utna jada memory leakage, everythings comes bottom line is memory leakage, maine dikaya tha jise app ka size bdh jaata h.
//expression always single line hona chahiye