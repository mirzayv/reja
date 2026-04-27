console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
//const fs = require("fs");

//MongoDB connect
//MongoDB chaqirish
const db = require("./server").db();

/* let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
}); */

//1: Kirsih code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code
//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
/* app.get("/hello", function(req, res)  {
    //res.end(`<h1 style="background: red">Hello World by Komronali</h1>`);
     res.end(`<h1>Hello World</h1>`);
});

app.get("/gift", function(req, res)  {
    //res.end(`<h1 style="background: red">Hello World by Komronali</h1>`);
     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

app.get("/", function(req, res)  {
     res.render('project');
});
 */
/* app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
}); */

app.post("/create-item", (req, res) => {});

app.get("/", function (req, res) {
  res.render("reja");
});
/* app.get("/author", function (req, res) {
  res.render("author", { user: user });
}); */

module.exports = app;
