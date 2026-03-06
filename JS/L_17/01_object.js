
//object.freeze

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

// obj.name = "akash";
// Object.freeze(obj);
// obj.name = "avinash";
// console.log(obj);
//object.seal

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };
// obj.name = "akash";
// Object.seal(obj);
// obj.name = "avinash";
// obj.address = "delhi";
// console.log(obj);

//shallow copy using spread...
let obj = {
  name: "vikas",
  age: 25,
  salary: 12345,
  address: {
    town: "etawah",
    state: "up",
  },
};

// let obj1 = obj;
// let obj1 = { ...obj };
// let obj1 = structuredClone(obj);
// let obj1 = JSON.stringify(obj);
// let obj2 = JSON.parse(obj1);
// console.log(obj2);

// let obj1 = JSON.parse(JSON.stringify(obj));
// console.log(typeof obj1);
// // obj1.name = "akash";
// // obj1.address.town = "kanpur";
// // console.log(obj);
// // console.log(obj1);