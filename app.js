console.log("Web server is Started");
const express = require("express");
const app = express();


const db = require("./server").db();

// 1 kirish codelar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Sesseion code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
// Post malumotni ozi bilan birga olip keladi va Date base ga yozadi
app.post("/create-item", (req, res) => {});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// Date base dan malumot olish uchun get ishlatilinadi
app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
