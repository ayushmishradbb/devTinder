const express = require("express");

const app = express();

// app.get("/user", (req, res) => {
//   res.send({ firstName: "Ayush", lastName: "Mishra" });
// });

// app.post("/user", (req, res) => {
//   //saving the data to the database
//   res.send("Data saved successfully to the DB");
// });

// app.delete("/user", (req, res) => {
//   //saving the data to the database
//   res.send("Data deleted successfully to the DB");
// });

// app.use("/hello",(req,res)=>{
//     res.send("Hello from the server hello");
// })

// app.get("/ab?c", (req, res) => {                                     //works for both the routes "/abc" and "/ac" as "b" becomes optional
//   res.send({ firstName: "Ayush", lastName: "Mishra" });
// });

// app.get("/ab+c", (req, res) => {                                     //works for both the routes "/abbfbnsdc" and "/abc" as "+" you can add as many char as you want
//   res.send({ firstName: "Ayush", lastName: "Mishra" });
// });

//"/.*fly$" means that you add anything before the word fly, ex works with "/butterfly"
//      "/s/"  anywhere the char s conatins it works

// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Ayush", lastName: "Mishra" });
// });

//node can handle multiple responses

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Console Log from first function");
//     //what if we dont send any response so we just do
//     next();
//     //res.send("Hello from the server hello");
//   },
//   (req, res) => {
//     console.log("Console form second function");
//     res.send("Hello from function 2");
//   }
// );

//get the differecne of app.use and app.all
//without using middlewares

// app.get("/admin/getAllData", (req, res) => {
//   const token = "xyzabc";               //here if the token is xyz it gets authorized
//   const isAdminAuthorized = token === "xyz";

//   if (isAdminAuthorized) {
//     res.send("Data sent successfully");
//   } else {
//     res.status(401).send("Unauth Req");
//   }
// });

// app.get("/admin/deleteAllData", (req, res) => {
//   res.send("Deleted all Data");
// });

const { adminAuth, userAuth } = require("./middlewares/auth");

//Handling middlewares
app.use("/admin", adminAuth);
//app.use("/user", userAuth);

app.get("/user", userAuth, (req, res) => {
  //here it is used single handedly without middleware bcz only one functon is here
  res.send("Data sent successfully");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("Data sent successfully");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("Deleted all Data");
});

app.listen(3000, () => {
  console.log("Server lsitening on 3000");
});
