// let arr = [1, 2, 3, 4, 5];

//hof
//they receive the callback function
//they return a function as a result

//map
//kisi ne ye nhi pucha how this ele work interviwer yhi puchta h
// arr.map((ele) => { 
//     console.log(ele * 5);
// });
// console.log(arr);

//filter

arr.filter((ele) => {
    if(ele % 2 == 0) {
        console.log(ele);    
    }
});

//reduce
// let result = arr.reduce((acc, ele) => {
//     return acc + ele;
// });
// console.log(result);

//--------------------------
let arr = [1, 2, 3, 4, 5, 6, 7];

let arr2 = [12, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {}

for (let i = 0; i < arr2.length; i++) {}

//agr hm aise he bnateh rahe hr array keh liye toh
//whenever for loop iteration come to your program what increases -> execution time that is time complexity
//conditional and iteration dono scenario meh bdhta h time complexity, jaha peh time complexity bdhta h vaha peh code readibility aapki gir jaati h, jb aapkeh code ki readbility gir jayegi toh apka debugging time bdh jaata h, code he debug nhi kr payege toh apka code optimize nhi ho payega
//everythings comes to end with the optimization
//kl hm deal krege apna higher order function kaise bnateh h
//kl pdhkeh aana fetch function, bom(browser object model)
