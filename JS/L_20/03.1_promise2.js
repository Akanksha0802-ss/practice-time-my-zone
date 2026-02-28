//promise doh type keh hoteh h pehle promise koh likhaa jaata h phir promise koh consume kiya jaata h
//promise two part meh chlta h pehla defination, dushra consumption(keh teen tarikeh h .then , .catch, .finally), agr fullfill ho raha h toh then se consume kr loh, agr error aa raha h toh catch se consume kr loh, agr kuch bhi ho raha h last meh finally chlana h
//likhne keh liye always used constructor method
//this is promise defination
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("success due to bad request");
//     }, 2000);
// });
//console.log(promise);

// promises1.then((data) => {
//   console.log("promise resolved"); 
// });

//---------------------
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject("rejected due to bad request");
//     }, 2000);
// });

// promise1
//   .then((data) => {
//     console.log("promise resolved");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })
//     .finally(() => {
//         console.log("promises completed");
//     });

//------------------------------ ye hoteh h dynamic promises

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("success due to bad request");
//     }, 2000);
// });

// promise1
//   .then((data) => {
//     console.log("promise resolved");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })
//     .finally(() => {
//         console.log("promises completed");
//     });

//--------------------------------
//ab eshe aapkoh data niklana h task ki trh he smjh loh
//ye  code maine kiya h , baad meh aur smjhna h
//  let response = fetch("https://dummyjson.com/products")
//   .then((data) => {
//       console.log("promise resolved");
//   })
//   .catch((err) => {
//       console.log("error", err);
//   })
//   .finally(() => {
//       console.log("promises completed");
//   });

//   console.log(response);
  

//this three are root cause of asynchronous programming
//------------------------------------------------------

//using fetch esh chij se data nikal kr dikha skteh ho

    // fetch("https://dummyjson.com/products").then(())

    // let promise1 = Promise.resolve("successful");
    // console.log(promise1);
    //----------------------

     // let promise1 = Promise.reject("successful");
    // console.log(promise1);
    //--------------------
  //ye gfg ka article h pdhyna promise keh methods -> https://www.geeksforgeeks.org/javascript/javascript-promise/
//methods hmesha array of promises lehta h
    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //promise all

    // Promise.all([promises1, promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });

    //OUTPUT: rejection
    
//Method of promise
//methods hmesha array of promises lehta h
    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.resolve("rejection");

    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    //-------------------------------------

    //first method is promise.all
    //it received array of promise

    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //promise.all
    // Promise.all([promises1, promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });
    //output: rejection

    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.resolve("rejection");

    // //promise.all
    // Promise.all([promises1, promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });

    //OUTPUT: [ 'success', 'success2', 'rejection' ] 

    //-------------------------------
    //  let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //second method is promise.allsettled
    // Promise.allsettled([promises1, promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });


    //-------------------------------------
    // let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //third method is Promise.race
    // Promise.race([promises1, promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });
    // //output success

    //in case agr Promises1 wali line n ho toh 
    //  let promises1 = Promise.resolve("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //third method is Promise.race
    // Promise.race([promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });
    //output success2


    //----------------------------------
    //promise.any
    //  let promises1 = Promise.reject("success");

    // let promises2 = Promise.resolve("success2");

    // let promise3 = Promise.reject("rejection");

    // //third method is Promise.any
    // Promise.race([promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });
    // //output success2



    // let promises1 = Promise.reject("success");

    // let promises2 = Promise.reject("success2");

    // let promise3 = Promise.reject("rejection");

    // //third method is Promise.any
    // Promise.race([promises2, promise3])
    //   .then((res) => {
    //     console.log(res);
    // })
    //    .catch((err) => {
    //     console.log(err);
    // });
    //output Aggregate error
    


     let promises1 = Promise.resolve("success");

    let promises2 = Promise.reject("success2");

    let promise3 = Promise.resolve("rejection");

    //third method is Promise.any
    Promise.race([promises2, promise3])
      .then((res) => {
        console.log(res);
    })
       .catch((err) => {
        console.log(err);
    });


    //if you are doing same things using call back toh kya hota 

    //apicalling->buffer->json()->filter()->index().print()
    fetch("https://api.github.com/users/kushvijay234")
    .then((response) => {
      if(!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json();
    })
    .then((data) => {
      console.log("data is being processed");
      return data;
    })
     .then((data) => {
      console.log("data is being filtered");
      return data;
    })
    .then((data) => {
      console.log("data is being filtered");
      return data;
    })
    .then((data) => {
      console.log("data is being mapped");
      return data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((data) => {
      console.log("There was a problem with the fetch opeartion:", error);
    })
    .finally(() => {
      console.log("Fetch operation completed");
    });
    


    //call back keh saath dikat thi -> call hell ->Promise peh aa gye kya mil gya Promise Chaining(eskoh bhi reject kr diya, we dont used promises now a days) -> we used Async and await(async and wait are working on promises)
    //async and await are just a syntaticall sugar over promises(promises koh assaani se likhne ka tarika bn gya Async and await)

    //async
    //this function return promise that means every asynchronous function goes into process returns me a promise
    // async function fetchData() {
    //   const response = fetch("https://api.github.com/users/kushvijay234");
    // }
    // fetchData();
    //output meh promise pending

    //async and await both used
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/kushvijay234");
      console.log(response);
      console.log("ahjdns");
    }
    fetchData(); //ab data aa jayega

    //------------------
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/kushvijay234");
      if(!response.ok) {
        console.log("data was available");
      }

      const data = await response.json();
      //console.log(data);
      const sortData = await data.sort();
      console.log(sortData);
      
    }
    fetchData(); //ab data aa jayega

    //esh function koh pdhna much easier h as a compare to callback and promises

    //hmne teeno tool smjh liye kiskeh modern Javascript keh and asynchrouns js
    //1. call back defination -> wo function joh kise dushre function meh as an argument pass kiye jaa ske aur uskoh dubara wapas bula skeh, call back ka mtlb hota h later ek baar defined kiya baad meh call krege
    //2. dushra aya promises -> kyu aye the becoz nested structure form ho rahe tha , jb aapkoh processes hiercahy me set krni hoti thi toh wo bn gya call back hell, pyramid of DOM, nested call back, static call back hell ..tb hm lekr aye promise koh 
    //3. promise -> rather than passing the function ab hm function koh attach krteh h, tb complexity decrease ho gyi but ek chij bdh gyi .chaining, hr promises keh liye line lg gyi thi tm eska wait kro toh line lg gyi thi promises ki that is also the complexity issue, but promise is a good thing hm function pass nhi kr rahe the hm function attach kr rahe the, likhne ka traika change kr diya hmne using async and wait

    //promlem: iwant to show the html ab data koh sho nhi krana h
    //ab data koh print nhi krna h like this
    //  async function fetchData() {
    //   const response = await fetch("https://api.github.com/users/kushvijay234");
    //   if(!response.ok) {
    //     console.log("data was available");
    //   }

    //   const data = await response.json();
    //   //console.log(data);
    //   const sortData = await data.sort();
    //   console.log(sortData);
      
    // }
    // fetchData(); //ab data aa jayega


    //ab data koh show nhi krna h, i want to print html, card,id vegra sb aa raha h data meh but I want to show html, ab aap sochege ye kaise krege vaha aata h DOM, yhaa peh ek he problem thi hm data koh client side render nhi kr paa rahe the , two trh ki rendering hoti h client side and server side
       async function fetchData() {
      const response = await fetch("https://api.github.com/users/kushvijay234");
      if(!response.ok) {
        console.log("data was available");
      }

      const data = await response.json();
      console.log(data); //this is raw data kya hm ui peh dikhaa skteh h no, beuatyfull dikhta h client side meh, but client side meh ui dikhta h
      
      
    }
    fetchData();

    //next class meh pdh kr aana h bom, nodelist and html collection meh differnce kya h