//Task-you have to make a sandwich operation using callback and delay and each process will take increasing order of time
//each function run after the delay 2, 4, 5, 6 sec ka delay hoga in all the four function and last mehh likh kr ayega your sandwich is ready


function makeSandwich(bread, cb) {
    setTimeout(() => {
        console.log("Makking the bread" + bread);
        cb();
    }, 2000);
}

function applySauce(sauce, cb) {
    setTimeout(() => {
        console.log("Makking the bread" + bread);
        cb();
    }, 2000);
}

function stuffing(stuff, cb) {
    setTimeout(() => {
        console.log("stuffing is done with" + bread);
        cb();
    }, 4000);
}

function grilled(temp, cb) {
    setTimeout(() => {
        console.log("stuffing is done with" + bread);
        cb();
    }, 5000);
}

function serving(temp, cb) {
    setTimeout(() => {
        console.log("stuffing is done with" + bread);
        cb();
    }, 5000);
}


//-------------------------------------------
//------------------------------- ye meh likhi hu code
function makeSandwich(toastSandwich, cb) {
  console.log(`we are starting the sandwich process and with ${toastSandwich}`);
  cb();
}

function applySauce(cb) {
  console.log("we are applying the sauce on the bread");
  cb();
}

function prepareStuffing(cb) {
  console.log("we are making Stuffing");
  cb();
}

function grilltoastSandwich(cb) {
  console.log("we are baking the toastBread");
  cb();
}

function serveTime(cb) {
  console.log("It's time to serve the toastSandwich");
  cb();
}

// makeSandwich("sandwich", () => {
//   applySauce(() => {
    
//      prepareStuffing(() => {
//        grilltoastSandwich(() => {
//         serveTime(() => {
//             console.log("all process are done ");
//        }, 2000);
//       }, 3000);
//     }, 4000);
//   }, 4000);
// }, 5000);
