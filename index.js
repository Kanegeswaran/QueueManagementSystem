const express= require("express");
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "/templates");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
// app.use(express.static(path.join(__dirname,'/public/styles')));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login",async(req,res)=>{

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
