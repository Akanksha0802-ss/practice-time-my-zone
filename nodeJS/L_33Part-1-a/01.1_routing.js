//already understand about EJS ->html pages koh embed kr stkeh h apne req and res keh saath
//already understand headers
//already understand status code

//ab we undertstand how to make route

//this is a basic server how we create we know it which is below code:
// import express from "express";

// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`server started at port ${PORT}`);
// });

//------------------------------
//what is psotmanAPI -> it is API testing tool
// import express from "express";

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   //res.status(200).send("welcome to akanksha page");
//   //2nd way to write
//   res.status(201).json({ name: "akanksha", age: 24 })
// });

// //home route

// app.get("/home", (req, res) => {
//   res.status(200).send("welcome to Aknaksha page");
// });

// app.listen(PORT, () => {
//   console.log(`server started at port ${PORT}`);
// });

//----------------------
//in API we have 4 types of opeartion which we perform CRUD operation -this operation is perform in mongoDB not in API
//CRUD opeartion when We have database
//in API we perform operation GET,POST(means data upload),PUT,DELETE and PATCH, UPDATE also
//this below code thrown error login wala , when I using POSTMAN API for testing
//I pass like this using POST hit this link- http://localhost:3000/login ->body -> raw ->json format 
// //{
//     "username": "Akanksha",
//     "password": "12345"
// }

//error is this in status server peh-> TypeError: Cannot read properties of undefined (reading 'username')

// import express from "express";

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   //   res.status(200).send("welcome to home page");
//   res.status(201).json({ name: "vikas", age: 26 });
// });

// //home route

// app.get("/home", (req, res) => {
//   res.status(200).send("welcome to home page");
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   res.status(200).json({ username, password });
// });
// app.listen(PORT, () => {
//   console.log(`server started at port ${PORT}`);
// });

//----------------
//in this code we introduced middleware
//error is gone show like this -> {"username":"Akanksha","password":"12345"}
import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json()); //added new line

app.get("/", (req, res) => {
  //   res.status(200).send("welcome to home page");
  res.status(201).json({ name: "vikas", age: 26 });
});

//home route

app.get("/home", (req, res) => {
  res.status(200).send("welcome to home page");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.status(200).json({ username, password });
});
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});


//for start sever automatic use this line in terminal of vs code->nodemon 01.1_routing.js
//for first time or one time start server write this ->node 01.1_routing.js