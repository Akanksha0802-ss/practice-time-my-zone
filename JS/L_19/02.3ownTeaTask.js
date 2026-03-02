//teamaking Task -> created by me to learn the concept of call back
// START
//  ↓
// Boil Water
//  ↓
// Add Tea
//  ↓
// Add Milk + Sugar
//  ↓
// Boil
//  ↓
// Strain
//  ↓
// Serve
//  ↓
// END

// function makingTea(ingredients, cb) {
//     console.log(`we are making the ${ingredients}`);
//     cb();
// }

// function boilWater(cb) {
//   console.log("we are boliling water to add ingredients of Tea");
//   cb();
// }

// function addTea(cb) {
//     console.log("we are adding Tea chayePatti");
//     cb();
    
// }

// function addMilkSugar(cb) {
//     console.log("we are adding milk with Sugar");
//     cb();
// }

// function boilingTime(cb) {
//     console.log("then, Boiling process is going on");
//     cb();
// }

// function teaStraintime(cb) {
//     console.log("All done time of strain the Tea");
//     cb();
// }

// function servingTea(cb) {
//     console.log("tea is Ready for serving, enjoy It");
//     cb();
// }

// makingTea("masalaTea", () => {
//     boilWater(() => {
//         addTea(() => {
//             addMilkSugar(() => {
//                 boilingTime(() => {
//                     teaStraintime(() => {
//                          servingTea(() => {
//                             console.log("all process are done");
                            
//                          });
//                     });
//                 });
//             });
//         });
//     });
// })

;

//making this task using setTimeout
function makingTea(ingredients, cb) {
    setTimeout(() => {
        console.log(`we are making the ${ingredients}`);
    }, 2000)
    //cb();
}

function boilWater(cb) {
    setTimeout(() => {
       console.log("we are boliling water to add ingredients of Tea");
    }, 3000)
  //cb();
}

function addTea(cb) {
    setTimeout(() => {
       console.log("we are adding Tea chayePatti");
    }, 4000);
    
    //cb();
}

function addMilkSugar(cb) {
     setTimeout(() => {
       console.log("we are adding milk with Sugar");
    }, 5000);
    

    //cb();
}

function boilingTime(cb) {
     setTimeout(() => {
       console.log("then, Boiling process is going on");
    }, 6000);
    

    //cb();
}

function teaStraintime(cb) {
    setTimeout(() => {
       console.log("All done time of strain the Tea");
    }, 7000);
    
    //cb();
}

function servingTea(cb) {
    setTimeout(() => {
       console.log("tea is Ready for serving, enjoy It");
    }, 6000);
    
    //cb();
}

makingTea("masalaTea", () => {
    boilWater(() => {
        addTea(() => {
            addMilkSugar(() => {
                boilingTime(() => {
                    teaStraintime(() => {
                         servingTea(() => {
                            console.log("all process are done");
                            
                         });
                    });
                });
            });
        });
    });
});