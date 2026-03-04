//REST
//layered system
//stateless
//cacheable
//code on demand
//client server behave

// import express from "express";
// const PORT = 3000;

// const api = express();

// api.get("/", (req, res) => {
//   res.status(200).json({ message: "hii from home page" });
// });

// api.listen(PORT, () => {
//   console.log("server started");
// });

//------------------
// import express from "express";
// const PORT = 3000;

// const api = express();

// api.get("/", (req, res) => {
//   res.status(200).json({ message: "hii from home page" });
// });

// api.listen(PORT, () => {
//   console.log("server started");
// });

//----------------------
// import express from "express";
// const PORT = 3000;

// const api = express();

// api.get("/", (req, res) => {
//   res.status(200).json({ message: "hii from home page" });
// });

// api.post("/login", (req, res) => {
//     res.status(201).json({ message: "new user added successfully"});
// })

// api.listen(PORT, () => {
//   console.log("server started");
// });


//---------------------------I want to serve this file product.json data into api.js file meh? how we will do , first way fs module and second tarika is ejs
//first we will try using  fs module
import express from "express";
import fs from "fs";
const PORT = 3000;

const api = express();

api.get("/", (req, res) => {
  res.status(200).json({ message: "hii from home page" });
});

api.get("/product", (req, res) => {
  fs.readFile("./products.json", (err, data) => {
    if (err) {
      res.status(400).json({ error: "something went wrong" });
    }
    //res.status(200).json(data); //data already json format me h, by default joh data ayega product ka wo buffer meh aata h but in json format
    res.status(200).send(data);
  });
});

api.post("/login", (req, res) => {
    res.status(201).json({ message: "new user added successfully"});
})

api.listen(PORT, () => {
  console.log("server started");
});

//Noted:
//aap khud ka api bhi bnaa skteh ho, pehle product.json naam ka folder bnao ya file , medical se related bna doh, e-commerce se related bnaa doh ya course se related bna doh, dummy.json se uthaa kr ushme images change kr doh, pixels se utha loh ya unsplash se utha loh bs link he toh daalni h

//task kya h khud ki API bnani h, api same yhi but hm data apna khud ka feed krege, chatgpt se product.json koh joh data h , same data bnwao hospital ka dwaiyo ka data, ab data hm layege kaha se

//using this website - https://mockaroo.com/ ->this website gererate any data in any format
//we used render webiste - https://dashboard.render.com/login (in render website we host the backend, its free, to connect through the own Github) to host the our file to make our own api -> so we can make our

//make your own api ->I am making api for india travelling places-> name is IncredibleIndiaAPI