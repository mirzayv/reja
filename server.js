console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

const user = {
  name: "Bruce",
  profession: "Software Engineer",
  work: "Software Engineer in BIG TECH",
  age: 22,
  residence: "S.Korea",
  adress: "S.Korea, Seoul",
  languages: ["Uzbek", "Korean", "English"],
  skills: ["Html", "Css", "Js", "NodeJS", "Python"],
  extra_skills: [
    "Bootstrap, Materialize",
    "Styling, Sass",
    "Django, Flask",
    "GIT Knowledge",
  ],
  work_place: "IT Company",
  about_me:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque.",
  city: "Tashkent",
};

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
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
