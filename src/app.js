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

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Ayush", lastName: "Mishra" });
});

app.listen(3000, () => {
  console.log("Server lsitening on 3000");
});
