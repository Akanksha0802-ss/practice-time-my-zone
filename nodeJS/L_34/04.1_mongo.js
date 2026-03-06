// import express from "express";
// import mongoose from "mongoose";

// const PORT = 3000;
// const app = express();

// //mongo connection

// mongoose
//   .connect(
//     "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/"
//   )
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.get("/", (req, res) => {
//   res.end("hii from server");
// });

// app.listen(PORT, () => {
//   console.log("server started");
// });


//L_34
// import express from "express";
// import mongoose from "mongoose";

// const PORT = 3000;
// const app = express();
// app.use(express.json()); //data will pass a json format

// //mongo connection

// mongoose
//   .connect(
//     "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/"
//   )
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Schema

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// //model
// const User = mongoose.model("User", UserSchema);

// //CRUD operation
// //create
// app.post("/register", async (req, res)=> {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     const newUser = new User({ username, password });
//     const savedUser = await newUser.save();
//     if(!savedUser)
//       return res.status(404).json({message: "something went wrong" });
//     res.status(201).json({ message: "user created successfully" });
//   } catch (err) {
//     res.status(500).json({err: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.end("hii from server");
// });

// app.listen(PORT, () => {
//   console.log("server started");
// });

//------------------------
//using bcrpt library for securing password
//read this docs of npm for bcrpt: https://www.npmjs.com/package/bcrypt
//install this pakage of bcrypt-> npm i bcrypt
//First operation of crud which is C -> done CREATE operation with bcryption

// import express from "express";
// import mongoose from "mongoose";
// // import bcrypt from "bcryptjs";
// import bcrypt from "bcrypt";

// const PORT = 3000;
// const app = express();
// app.use(express.json()); //data will pass a json format

// //mongo connection

// mongoose
//   .connect(
//     "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/akanksha"
//   )
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Schema

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// //model
// const User = mongoose.model("User", UserSchema);

// //CRUD operation
// //create
// app.post("/register", async (req, res)=> {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     const savedUser = await newUser.save();
//     if(!savedUser)
//       return res.status(404).json({message: "something went wrong" });
//     res.status(201).json({ message: "user created successfully" });
//   } catch (err) {
//     res.status(500).json({err: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.end("hii from server");
// });

// app.listen(PORT, () => {
//   console.log("server started");
// });

//--------Read Operation
//in API meh read operation is different ->this synchronous process, and database differ to perform read operation ->this asynchronous process
// import express from "express";
// import mongoose from "mongoose";
// // import bcrypt from "bcryptjs";
// import bcrypt from "bcrypt";

// const PORT = 3000;
// const app = express();
// app.use(express.json()); //data will pass a json format

// //mongo connection

// mongoose
//   .connect(
//     "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/akanksha"
//   )
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Schema

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// //model
// const User = mongoose.model("User", UserSchema);

// //CRUD operation
// //create
// //for create the data we used POST
// app.post("/register", async (req, res)=> {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     const savedUser = await newUser.save();
//     if(!savedUser)
//       return res.status(404).json({message: "something went wrong" });
//     res.status(201).json({ message: "user created successfully" });
//   } catch (err) {
//     res.status(500).json({err: err.message });
//   }
// });

// //read
// //for reading the data we used GET

// app.get("/allusers", async (req, res) => {
//     try {
//         const users = await User.find();
//         if(!users)
//             return res.status(400).json({ message: "something went wrong" });
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ err: err.message });
//     }
// });

// app.get("/", (req, res) => {
//   res.end("hii from server");
// });

// app.listen(PORT, () => {
//   console.log("server started");
// });

//-------update operation using PUT
// import express from "express";
// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const PORT = 3000;
// const app = express();
// app.use(express.json()); //data will pass a json format

// //mongo connection

// mongoose
//   .connect(
//     "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/akanksha"
//   )
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Schema

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// //model
// const User = mongoose.model("User", UserSchema);

// //CRUD operation
// //create
// //for create the data we used POST
// app.post("/register", async (req, res)=> {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     const savedUser = await newUser.save();
//     if(!savedUser)
//       return res.status(404).json({message: "something went wrong" });
//     res.status(201).json({ message: "user created successfully" });
//   } catch (err) {
//     res.status(500).json({err: err.message });
//   }
// });

// //read
// //for reading the data we used GET

// app.get("/allusers", async (req, res) => {
//     try {
//         const users = await User.find();
//         if(!users)
//             return res.status(400).json({ message: "something went wrong" });
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ err: err.message });
//     }
// });

// //put
// //for updating the data we used PUT method

// app.put("/update/:id", async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updatedUser) return res.status(404).json({ err: "user not found" });
//     res.status(200).json({ message: "user updated " });
//   } catch (err) {
//     res.status(400).json({ err: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.end("hii from server");
// });

// app.listen(PORT, () => {
//   console.log("server started");
// });


//----------using Delete method
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const PORT = 3000;
const app = express();
app.use(express.json()); //data will pass a json format

//mongo connection

mongoose
  .connect(
    "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/akanksha"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

//model
const User = mongoose.model("User", UserSchema);

//CRUD operation
//create
//for create the data we used POST
app.post("/register", async (req, res)=> {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    if(!savedUser)
      return res.status(404).json({message: "something went wrong" });
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    res.status(500).json({err: err.message });
  }
});

//read
//for reading the data we used GET

app.get("/allusers", async (req, res) => {
    try {
        const users = await User.find();
        if(!users)
            return res.status(400).json({ message: "something went wrong" });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

//put
//for updating the data we used PUT method

app.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ err: "user not found" });
    res.status(200).json({ message: "user updated " });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//delete
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "something went wrong" });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.get("/", (req, res) => {
  res.end("hii from server");
});

app.listen(PORT, () => {
  console.log("server started");
});

//this all are actual CRUD operation using database
//4 operation done
//mongoDB shell done
//aggregation in mongoDB done ->nice pizza example


//tommorow ->JWT and CI/CD pipeline topic bache h
//yup validation
//formick used as a library for form handling->its react library
//yup and formick combine together