const express = require("express");
const path = require("path");
const hbs = require("hbs");
const collection = require("mongodb");
const fs = require("fs");

const templatePath = path.join(__dirname, "/templates");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static('assets'));

let = usernames = [];

app.get("/", (req, res) => {
  res.render("login");
});

fs.readFile('./assets/files/namelist.txt', 'utf-8', (err, data) => {
  if(err){
    console.error(err);
    return;
  }
  usernames = data.split('\n').map(name => name.trim());
});

app.post("/login",async(req,res)=>{
    // const data = {
    //     name: req.body.name,
    //     queueNumber: 20
    // };

    // await collection.insertMany([data]);
    res.render("queue_view");
});

app.get("/autocomplete", (req, res) => {
  const query = req.query.q.toLowerCase();
  const filteredUsernames = usernames.filter(name => name.toLowerCase().startsWith(query));
  res.json(filteredUsernames);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
