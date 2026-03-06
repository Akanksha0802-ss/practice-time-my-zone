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
// import express from "express";
// import multer from "multer";
// import fs from "fs"

// const PORT = 3000;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });


// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// app.post("/login", upload("dp"), (req, res) => {
//     res.end("file uploaded");
//     //  //console.log(req.body);
// });
// app.listen(PORT, () => 
//     console.log(`server started at port ${PORT}`));

//
//----------------------- 
//case2. disk storage multer
// import express from "express";
// import multer from "multer";
// import fs from "fs"

// const PORT = 3000;
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // const upload = multer({ dest: "uploads/" });

// // const storage = multer.diskStorage({
// //    destination: function (req, file, cb) {
// //     cb(null, "uploads/");
// //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     cb(null, file.filename + "-" * uniqueSuffix);
// //    },
// //    filename: function (req, file, cb) {
// //        cb(null, Date.now() + "-" + file.original(name));
// //    },

// // });

// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// app.post("/login", upload("dp"), (req, res) => {
//     res.end("file uploaded");
//     //  //console.log(req.body);
// });

// app.listen(PORT, () => 
//     console.log(`server started at port ${PORT}`));

//------------------------------------
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });
// //disk storage from multer format perseveration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.end("hii from server");
});

app.post("/login", upload.single("dp"), (req, res) => {
  res.end("file uploaded");
  //   console.log(req.body);
});
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
