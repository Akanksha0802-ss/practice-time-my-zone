//first setup of mongoDB 
//MnogoDB Atlas ->install step
//mongoDB setup start -install mongoDB compass install in your local machine, so you can used offline also prefer this
//in vscode install package-> npm install mongoose
//mongoose give the functionality of ODM

//writing this code we created a server
// import express from "express"
// import mongoose from "mongoose"

// const PORT = 3000;
// const app = express();

// app.get("/", (req, res) => {
//     res.end("hi from server");
// });

// app.listen(PORT, () => {
//     console.log("server started");
// });

//------------------------------
//this is the basic way to connect with the database using mongoose
import express from "express"
import mongoose from "mongoose"

const PORT = 3000;
const app = express();

//mongo connection

mongoose
  .connect(
    "mongodb+srv://akankshasingh91259:Akanksha26@cluster0.h0mss3o.mongodb.net/"
)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
    res.end("hi from server");
});

app.listen(PORT, () => {
    console.log("server started");
});

//now frontend is connected with backend API and backend connected with driver which is database, now we are in server client architecture
//tommorrow we understand?
//what is schema, actually what is mongoDB, setup done 
//ODM,ORM,Mongoose shell,what is indexing, aggregation pipeline kya hota h, how to write schema, Modal how to create and new user plus CRUD opeartion how to perform in mongoDB

//Topic u study
//ORM and ODM kya hota h
//why BSON is good or bad as compare to JSON

//I install mongoDB compass in my local machine but it didnt run, but I will try, although setup is done! 