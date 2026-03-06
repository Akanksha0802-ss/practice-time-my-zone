//what is the difference between ,PUT,PATCH and UPDATE
//advanced concept take sir->nodemailer and multer(multer meh dono type wala multer (1.disk storage wala multer), 2. normal multer
//problem is that which I transfer the data which is only text,xml,application based data anything which we set as a header to give browser
//we want to send the body request -> when we request the data using POST its attached to through the body, ab we want send the data which is in  multimedia(it means multipart data -> this multipart data nodeJS not directly handle) format not text
//what is multer->multer is npm package joh ki hmhe disk storage dehta h for handling the multimedia
//database hmhare file koh BSON format meh rkhta h ->this is the format of mongoDB which store any data in the form of BSON, BSON format we cant not store image for that multer come

//link of multer install:-> https://www.npmjs.com/package/multer

//link of dotenv install:-> https://www.npmjs.com/package/dotenv

//we can used multer in two ways first is static storage and second is disk storage

//here multer used as a static storage 

// import express from "express";
// import dotenv from "dotenv";
// import multer from "multer";
// import { log } from "console";

// const app = express();
// dotenv.config();

// app.get("/", (req, res) => {
//     res.end("hi from server");
// });
// app.listen(process.env.PORT, () => {
//     console.log("server started");
// });

//---------------------
// import express from "express";
// // import dotenv from "dotenv";
// import multer from "multer";


// const app = express();
// // dotenv.config();
// const PORT = 3000;
// app.use(express.json());
// // //app.use(express.urlencoded);

// app.get("/", (req, res) => {
//     res.end("hi from server");
// });
// app.post("/upload", (req, res) => {
//     console.log(req.body);
//     res.end("file uploaded");
// });
// app.listen(PORT, () => {
//     console.log("server started");
// });

//---------------
// import express from "express";
// import multer from "multer";
// import fs from "fs"

// const PORT = 3000;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "/uploads"});


// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// app.post("/login", upload("dp"), (req, res) => {
//     res.end("file uploaded");
//     //  console.log(req.body);
// });
// app.listen(PORT, () => 
//     console.log(`server started at port ${PORT}`));

//----------------------- 
//case1.static multer
//how to run ->go to POSTMAN API ->POST->http://localhost:3000/login->body->formdata->write dp key keh jgh, and tect keh jgh choose file then value keh jfh pass this your any image link c:\Users\Akanksha singh\Desktop\myFavShoes.jpeg ->send it ->postmanapi keh sever peh output is file uploded then ->check vs code keh uploads folder meh image wala file jayegi wo kis format meh h  buffer format meh this will do multer, data allow h but file apki currupted form meh hogi, this is not the orginal name of the file go and check in uploads folder


// import express from "express";
// import multer from "multer";
// import fs from "fs"
// import path from "path";

// const PORT = 3000;
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });


// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// //here using static multer
// app.post("/login", upload.single("dp"), (req, res) => {
//     res.end("file uploaded");
//     //  //console.log(req.body);
// });

// app.listen(PORT, () => 
//     console.log(`server started at port ${PORT}`));


//----------------------- 
//case2. disk storage multer
//we are used disk storage multer keh andr ka disk storage ->here disk mtlb library ka local storage
//same process static ki trh postmanAPI meh test krne keh every step are same->good to go
//this sir code is not running
// import express from "express";
// import multer from "multer";
// import fs from "fs"
// import path from "path";

// const PORT = 3000;
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // const upload = multer({ dest: "uploads/" });

// //disk storage from multer format preservation
// const storage = multer.diskStorage({

//    destination: function (req, file, cb) {
//     cb(null, "uploads/");
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.filename + "-" * uniqueSuffix);
//    },

//    filename: function (req, file, cb) {
//        cb(null, Date.now() + "-" + file.originalname);
//    },
// });

// const upload = multer({ storage: storage });

// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// app.post("/login", upload.single("dp"), (req, res) => {
//     res.end("file uploaded");
//     //  //console.log(req.body);
// });

// app.listen(PORT, () => 
//     console.log(`server started at port ${PORT}`));


//case2: code not runnining ,this is chatgpt code which fix and now its running
import express from "express";
import multer from "multer";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads/");
   },

   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
   }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
   res.end("hi from server");
});

app.post("/login", upload.single("dp"), (req, res) => {
   res.end("file uploaded");
});

app.listen(PORT, () => {
   console.log(`server started at port ${PORT}`);
});



//case1 and case2 try both of them
//note: mongoDb never take JSON format data, it take BSON format data