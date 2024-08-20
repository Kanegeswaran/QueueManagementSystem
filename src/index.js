const express= require("express");
const path = require("path");
const hbs = require("hbs");
const collection = require("mongodb");

const templatePath = path.join(__dirname, "../templates");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login",async(req,res)=>{
    const data = {
        name: req.body.name,
        queueNumber: 20
    };

    await collection.insertMany([data]);
    res.render("queue_view");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
