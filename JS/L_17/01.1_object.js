//what is Rest parameter hmne kl pdha tha, why we used rest parameter

//Object ki two properties hoti h-> Object.seal and object.freeze

//kbhi kbhi object bhi resistance show krta h resistance means whenever u are changing they will not allow to change

//object does not understand this key , ye key string format meh hota jise object koh smjh meh aye like name is a key - "name" 

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

// obj.name = "akash";
// console.log(obj);
//output: { name: 'akash', age: 25, salary: 12345 }

//object.freeze

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

// obj.name = "akash";
// Object.freeze(obj); //here freeze means value modification not allowed, but insertion is allowed
// obj.name = "avinash";
// console.log(obj);

//output: { name: 'avinash', age: 25, salary: 12345 }


//object.seal

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };
// obj.name = "akash";
// Object.seal(obj); //but here seal meh modification is allowed but new entity insertion is not allowed 
// obj.name = "avinash";
// obj.address = "delhi";
// console.log(obj);

//output: { name: 'avinash', age: 25, salary: 12345 }


//object andr keh andr kuch aise properties h name h salary h
//ye simple object nhi h shallow copy hm kaha achieve kr rahe the , single object meh koi dikat we are using spread operator 
// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

//problem arises when we have nested object ek object keh andr duhra object h
//here I want to reflect two changes by my makng a copy

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

//vhi wali problem joh object meh ho rahi thi hmesha se dono meh changes
//Output
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


//kl hmne spread operator pdha tha
// but we are making copies using spread operator
// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };
// let obj1 = {...obj}; //yha ek empty object bna rahe the obj1 se aur eshme spread kise kr rahe the object koh like this {...obj}
// obj1.name = "akash";
// obj1.address.town = "kanpur";
// console.log(obj);
// console.log(obj1);

//still we are facing same issue output same he ayega

//Output
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



//joh bhi changes hm first wale meh kr rahe h purane wale copy meh reflect nhi ho raha h upr wale meh vikas rahega niche wale meh akash he rahega 

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };
// // let obj1 = obj; 
// let obj1 = {...obj}; //yha ek empty object bna rahe the obj1 se aur eshme spread kise kr rahe the object koh like this {...obj}
// obj1.name = "akash";
// obj1.address.town = "kanpur"; //whatever changes in second copy that is nested copy wo nhi bach raha tha dono meh kanpur changes ho jayega
// console.log(obj);
// console.log(obj1);

//still we are facing same issue output same he ayega

//Output
// {
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



//imp. info shallow copy spread opeartor se bna skteh ho and assignment se bhi lekin jb deep copy aap achieve krne jaoge yaani ki clone achive krrne jaoge properly ushme spread opeartor used nhi hota h
//u can not achive deep copy using normal methods n spread operator used ayega, n rest kuch bhi nhi uskeh two alg method chlteh h:-
//first method and best method is structured clone, yaani clone kaise hoga ek structure meh
//sbse pehle ek top layer hoga, jitna bhi layer meh object hoge sb as it is clone hoga but chahe upr wale layer meh change kro ya niche wali layer but purane wale changes nhi hoga
//deep copy means deep inside the copy ho jayega


//shallow copy using spread...
// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };

//first method and best method is structured clone, here clone kaise hoga structured meh
// let obj1 = obj;
// let obj1 = { ...obj };
//let obj1 = structuredClone(obj); //here structuredClone method h, eshe bolteh h modern layer of deep copy , ek method yaad rkhna jiska name h structuredClone joh krta kya h cloning krta h, ek copy bnaata h structured manner meh sbse pehle bnayega upper layer, phir dekhega ek aur layer h uski copy bnaakr rkh lega , but whatever layer u are changing doesnt matter because dono ek separate copy h old wala preserve krkeh rkhta h but hmlog naye wale meh aap changes reflect kra skteh h, chahe top peh changes kre khi bhi kre , original wale meh changes nhi hoga

// obj1.name = "akash";
// obj1.address.town = "kanpur";
// console.log(obj);
// console.log(obj1);

//output 
// {
//   name: 'vikas',     
//   age: 25,
//   salary: 12345,     
//   address: { town: 'etawah', state: 'up' }
// }
// {
//   name: 'akash',     
//   age: 25,
//   salary: 12345,     
//   address: { town: 'kanpur', state: 'up' }
// }
//deep copy koh achive krne keh liye: only two method 
//first is structuredclone method 
//second is JSON method

//ye h second method , ye imp h ,this is JSON method logo koh ye yaad nhi rehta h
//eshme bhi same result rahega aap dono keh changes koh prevent kr payege
//deep copy achiev krne keh doh tarikeh h
//arrays of object that is called json format
let obj = {
  name: "vikas",
  age: 25,
  salary: 12345,
  address: {
    town: "etawah",
    state: "up",
  },
};

//let obj1 = JSON.stringify(obj); //esh line se pura object convert ho jayega string keh form meh ,aur pura format change hogya string meh aur string koan sa datatype h primitive kya used krta h stack memory
//pehel jaano json.stringify krta kya h, json ek object ka format aur uskoh maine string meh convert kiya object sbse pehle kya tha non-primitive data type joh ki heap used kr raha tha , jaise he maine string meh convert kiya wo bn gya primitive data type aur ye used krta h stack memory , stack meh cloning krne ki chinta nhi hoti h kyu ye orginal meh change nhi krta h uski copy bnaa kr dehta h, aur string wapas ushi form meh laa rahe h using json.parse mtlb jis structure  meh wo gya tha ushi structure meh suhe wapas laa doh thats what deep copy ka dushra method
// let obj1 = JSON.parse(JSON.stringify(obj));
// obj1.name = "akash";
// obj1.address.town = "kanpur";
// console.log(obj);
// console.log(obj1);



//let obj1 = JSON.stringify(obj);
//let obj2 = JSON.parse(obj1);
//console.log(obj2);

// let obj1 = JSON.parse(JSON.stringify(obj));
//console.log(typeof obj1); //output object but still it is behaving like a string

//heap ka concept ghr pr pdhna heap memory kaise assign krti h

//shallow and deep copy
//shallow copy we achieve using spread operator

//shallow copy hm kaise achived krteh h using spread operator, jisme hm krteh kya first layer ki copy bnateh h ,second layer koh reference pass krteh h upr ka clone maine bnaa liya h andr change krna h toh original meh change kro thats why andr keh changes dono meh reflect ho rahe the
//phir aya structured clone