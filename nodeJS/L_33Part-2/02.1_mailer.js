//first in vs code terminal install this package-> npm install nodemailer 

// import express from "express";
// import nodemailer from "nodemailer";

// const app = express();
// app.use(express.json());

// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("hii from server");
// });

// //transporter setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "vikasskumar20012001@gmail.com",
//     pass: "password",
//   },
// });

// const mailOptions = {
//   from: "vikassskumar20012001@gmail.com",
//   to: "god07skill@gmail.com",
//   subject: "test mail",
//   text: "hii this is test email",
// };
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("email sent");
// });
// app.listen(PORT, () => {
//   console.log(`server is running at port ${PORT}`);
// });

//----------------------
import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hii from server");
});

//transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akanksha1.singh24@gmail.com",
    pass: "warning",
  },
});

const mailOptions = {
  from: "akanksha1.singh24@gmail.com",
  to: "lucifershivamylucifer@gmail.com",
  subject: "test mail",
  text: "Hi, Happy holi",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("email sent");
});
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

//whatever it take time implementation is must of above code of mailer, configuration doing also a one art.

//what actually ODM is lets understand
//nxt topic is mongoDb, ab half backend is go with mongoDb
//server client architecture->we have 3 entity first is client which is called frontend, second is resource/server, third is DB database
//client itself is also a server
//server means is a logical unit where data is processed
//we understand how to create API-in api we have done read opeartion, create operation done, but update and delete not done yet becoz it require database for this operation
//we want setup of mongoDB so we can perform this operation of UPDATE and DELETE
//mongoDB setup start -install mongoDB Atlas compass install in your local machine, so you can used offline also prefer this