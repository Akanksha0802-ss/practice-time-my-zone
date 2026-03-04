//error in this code->me, sir ka ok chl raha h 
// import express from "express";

// const PORT = 3000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.listen[PORT, () => {
//     console.log(`server started at port ${PORT}`);
// }];

//---------------
// import express from "express";

// const PORT = 3000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });

//------------------------
// import express from "express";

// const PORT = 3000;

// const app = express();
// app.use(express.json());

//middleware
// here I want to make a custom middleware joh ki ek logger ki trh kaam kre
// app.use((req, res, next) => {
//   console.log("middleware called");
//  //next(); -> comment this and run
// });
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });

//------------first line satisfy in middleware it can execute any code
//run this code in terminal -> type->node --watch 02.1_middleware.js
// import express from "express";

// const PORT = 3000;

// const app = express();
// app.use(express.json());

// //middleware
// //here I want to make a custom middleware joh ki ek logger ki trh kaam kre
// app.use((req, res, next) => {
//   console.log("middleware called");
//   next(); 
// });
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });

//----------------------run this code, and used postmanAPI for testing choose->POST->http//localhost:3000/login ->go to the Body and type like this or paste this line
// {
//   "username":"vikas",
//   "password":"1234"
// }
//and postmanAPI keh OUTPUT meh unauthorised ayega because password match he nhi kiya

//case:2 -> agr pass kroge right password like this
// {
//   "username":"vikas",
//   "password":"vikas123"
// }
//output will be like this:-becoz password is match {"username":"vikas","password":"vikas123"}


//what we make this is a validator we can say logger also
// import express from "express";

// const PORT = 3000;

// const app = express();
// app.use(express.json());

// //middleware
// //here I want to make a custom middleware joh ki ek logger ki trh kaam kre
// app.use((req, res, next) => {
//   //console.log("middleware called");
//   //below two line initally it is my database, here we are create our local database
//   let username ="vikas";
//   let password = "vikas123"
//   if (req.body.username != username || req.body.password != password) {
//     res.status(401).send("unauthorized")
//   }
//   next(); 
// });
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });

// //----------------------if I pass like this in postmanAPI but eshme issue h, else keh andr pass krege next() koh
// // {
// //   "username":"",
// //   "password":""
// // }
// import express from "express";

// const PORT = 3000;

// const app = express();
// app.use(express.json());

// //middleware - here two middleware ka check lga rahi hu

// app.use((req, res, next) => {
//   //console.log("middleware called");
//   //below two line initally it is my database
//   // let username ="vikas";
//   // let password = "vikas123"
//   //agr dono meh se ek bhi khaali h toh ya dono empty ho toh middleware1 called ho jayega and middleware2 called ho jayega and postmanAPI output is ->it is not allowed
//   if (req.body.username == "" || req.body.password == "") {
//     console.log("middleware1 called");
//     res.status(401).send("its not allowed")
//   }
//   next(); 
// });

// app.use((req, res, next) => {
//   if (req.body.username != "vikas" || req.body.password != "vikas123") {
//     console.log("middleware2 called");
//     res.status(401).send("its not authorized")
//   }
//   next(); 
// });
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });


//---------------------
//----------------------if I pass like this in postmanAPI but eshme issue h, else keh andr pass krege next() koh
// {
//   "username":"",
//   "password":""
// }
// import express from "express";

// const PORT = 3000;

// const app = express();
// app.use(express.json());

// //middleware - here two middleware ka check lga rahi hu

// app.use((req, res, next) => {
//   //console.log("middleware called");
//   //below two line initally it is my database
//   // let username ="vikas";
//   // let password = "vikas123"
//   //agr dono meh se ek bhi khaali h toh ya dono empty ho toh middleware1 called ho jayega and postmanAPI output is ->it is not allowed
//   if (req.body.username == "" || req.body.password == "") {
//     console.log("middleware1 called");
//     res.status(401).send("its not allowed")
//   } else {
//     next(); 
//   }
// });

// app.use((req, res, next) => {
//   if (req.body.username != "vikas" || req.body.password != "vikas123") {
//     console.log("middleware2 called");
//     res.status(401).send("its not authorized")
//   }
//   next(); 
// });
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
// });

//read this DOCS->https://expressjs.com/en/guide/using-middleware.html

//-------------------------

//every route peh hm khud ka middleware lga skteh h khud peh agr route middleware lgaoge toh app keh saath .use nhi krna h , tb hm used krege GET/POST ye sb

//-----how u can change the request object, stackoverflow kro aur btao
//abhi toh terminal meh -> like this server started at port 3000 aur undefined aa raha h

import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  //console.log("middleware called");
  //below two line initally it is my database
  // let username ="vikas";
  // let password = "vikas123"
  if (req.body.username == "" || req.body.password == "") {
    console.log("middleware1 called");
    req.body.age = 26;
    res.status(401).send("its not allowed")
  } else {
    next(); 
  }
});

app.use((req, res, next) => {
  if (req.body.username != "vikas" || req.body.password != "vikas123") {
    console.log("middleware2 called");
    req.body.age = 26;
    res.status(401).send("its not authorized")
  } else {
    next(); 
  }
});

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.status(200).json({ username, password });
});
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});

//Today is HOLI 04/March/2026->not going home becoz I have no JOB and working on myself, missing my family, I am not deserving to go home and enjoy, some time I have SELFDOUBT on myself which I am doing its worth it or not,and also sometime I feel ab nhi ho payega - but I am doing doing..!->this is what I feel right now.