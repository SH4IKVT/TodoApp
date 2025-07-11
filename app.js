// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let day = "";
let list=['Create food','Eat food','Go to shopping'];
let work_list =[];


app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  day=today.toLocaleDateString("en-US",options)
  // Render 'list.ejs' and pass the day
  res.render("list", { title: day ,newListitems:list });
});


app.get("/work",(req,res)=>{
  res.render("list",{title:"Work-section",newListitems:work_list});
});

app.post("/",(req,res)=>{
  list.push(req.body.newitem);
  res.redirect("/");
})

app.post("/work",(req,res)=>{
  work_list.push(req.body.newitem);
  res.redirect("/work");
});


app.listen(3000, () => {
  console.log("3000 port working");
});
