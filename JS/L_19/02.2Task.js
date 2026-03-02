//Task-you have to make a sandwich operation using callback and delay and each process will take increasing order of time
//each function run after the delay 2, 4, 5, 6 sec ka delay hoga in all the four function and last mehh likh kr ayega your sandwich is ready

//Sandwich Task
// function makeSandwich(breadToast) {
//     console.log(`we are starting the making process of sandwich ${breadToast}`);  
// }

// function prepareStuffing() {
//     console.log("we are making stuffing to spread on breadToast");   
// }

// function bakingTime() {
//     console.log("We are baking the bread");
// }

// function serve() {
//     console.log("Yes, its serving Time");    
// }

//output meh kuch bhi nhi aya meh run krkeh dekh li hu

//---------------------------------
function makeSandwich(bread, cb) {
    console.log(`we are starting the making process of sandwich ${bread}`);  
    cb();
}

function prepareStuffing(cb) {
    console.log("we are making stuffing to spread on bread"); 
    cb();  
}

function bakingTime(cb) {
    console.log("We are baking the bread");
    cb();
}

function serve(cb) {
    console.log("Yes, its serving Time"); 
    cb();   
}
//output meh kuch bhi nhi aya meh run krkeh dekh li hu, abhi maine eskoh bahar se call he nhi kiya h function koh kaise chlega

//--------------------------------
// function makeSandwich(bread, cb) {
//     console.log(`we are starting the making process of sandwich ${bread}`);  
//     cb();
// }

// function prepareStuffing(cb) {
//     console.log("we are making stuffing to spread on bread"); 
//     cb();  
// }

// function bakingTime(cb) {
//     console.log("We are baking the bread");
//     cb();
// }

// function serve(cb) {
//     console.log("Yes, its serving Time"); 
//     cb();   
// }

// makeSandwich("toastBread", () => {
//     prepareStuffing(() => {
//         bakingTime(() => {
//             serve(() => {
//                 console.log("all process are done, Enjoy it!");
                
//             })
//         })
//     })
// })


//----------------------------
//but task meh hmhe delay krkeh print krana h saare process koh, yhaa mujhe setTime out ka bhi used krna h
//nested function ki trh h
function makeSandwich(brownBread, cb) {
    setTimeout(() => {
      console.log(`we are starting the making process of sandwich ${brownBread}`); 
    }, 2000)
    cb();
}

function prepareStuffing(cb) {
    setTimeout(() => {
      console.log("we are making stuffing to spread on bread");  
    }, 3000)
    cb(); 
}

function bakingTime(cb) {
    setTimeout(() => {
        console.log("We are baking the bread");
    }, 4000)
    cb();
}

function serve(cb) {
    setTimeout(() => {
      console.log("Yes, its serving Time"); 
    }, 5000)
    cb();
}

makeSandwich("toastBread", () => {
    prepareStuffing(() => {
        bakingTime(() => {
            serve(() => {
                console.log("all process are done, Enjoy it!");
                
            })
        })
    })
})
