//conditional means output based on second condition, ya toh condition true hogi ya false hogi

//if
// let age = 19;
// if(age>18) {
//     console.log("You are eligible to vote");
// }


//if else
// let age = 18;
// if(age>18) {
//     console.log("You are eligible to vote");
// } else {
    // console.log("you are not eligible to vote because of age");
//}

    
//let age = 18;
// if(age> 10){
//     console.log("you are eligible to vote");
// } else if(age === 18) {
//     console.log("you can vote but u r a teenager");
// } else {
//     console.log("invalid age");
// }



//Alternative is Ternary Operator ->why it is study , that is single line conditional statement
// let age = 18;
// console.log(age >=18 ? "you can vote" : "cant vote");

//switch
//break is termination of condition thats why we used break
let age = 18;
switch (age) {
    case 10:
        console.log("age is 10");
        break;
    case 18:
        console.log("can vote but age is just 18")
        break;
    default:
        console.log("enter valid age");
}


//whenever If else and iteration is coming, complexity bdh jaati h uskoh hm bachne keh liye hm recursion used krteh h for loop keh jgh and if else se bachne keh liye hm used krteh switch statement

//Qs2->Grade Calculator krna h