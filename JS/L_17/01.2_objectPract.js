//Example-1
// let obj = {
//   name: "akanksha",
//   age: 23,
//   salary: 30000,
// };

// obj.name = "ankita";
// console.log(obj);

// { name: 'ankita', age: 23, salary: 30000 }
//object is heap memory joh ki direct orginal meh changes krta h isliye

//Example 2
//----------------------------------
//object.freeze
// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

// obj.name = "akanksha";
// Object.freeze(obj); //here freeze means value modification not allowed, but insertion is allowed
// obj.name = "ankita";
// console.log(obj);
// output { name: 'akanksha', age: 25, salary: 12345 }  

//Example 3
//-----------------------------------
//object.seal

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 30000,
// };
// obj.name = "akash";
// Object.seal(obj); //but here seal meh modification is allowed but new entity insertion is not allowed 
// obj.name = "akanksha";
// obj.address = "varanasi"; //yha new entity insert kr rahe h ye not allowed h
// console.log(obj);

//output: { name: 'akanksha', age: 25, salary: 30000 }


//Example 4
//nested object - mtlb ek object keh andr dushra object
// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };
// let obj1 = obj; //here this method is not allowed, because of assignment operator here equal to is assignment opeartor but we are copies using spread operator
// obj1.name = "akash";
// obj1.address.town = "kanpur";
// console.log(obj);
// console.log(obj1);
//output - mere  hisab se jaha value change kr rahe h changes hone chahiye , but yhaa name change ho raha h , but address nested meh wo bhi changes ho raha 
// {
//   name: 'akash',
//   age: 25,
//   salary: 12345,
//   address: { town: 'kanpur', state: 'up' }
// }
// {
//   name: 'akash',
//   age: 25,
//   salary: 12345,
//   address: { town: 'kanpur', state: 'up' }
// }


//Example 5
//using spread operator
//kl hmne spread operator pdha tha but we are making copies using spread operator, lekin same problem hm face krege vhi changes dono meh he hoge same upr wale example ki trh
let obj = {
  name: "vikas",
  age: 25,
  salary: 12345,
  address: {
    town: "etawah",
    state: "up",
  },
};
let obj1 = {...obj}; //yha ek empty object bna rahe the obj1 se aur eshme spread kise kr rahe the object koh like this {...obj}
obj1.name = "akash";
obj1.address.town = "kanpur";
console.log(obj);
console.log(obj1);

//output:
//  {
//   name: 'vikas',
//   age: 25,
//   salary: 12345,
//   address: { town: 'kanpur', state: 'up' }
// }
// {
//   name: 'akash',
//   age: 25,
//   salary: 12345,
//   address: { town: 'kanpur', state: 'up' }
// }