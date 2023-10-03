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
app.post("/create-item", (req, res) => {
  console.log("user entered / create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0])
  });
});

// author page
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// Date base dan malumot olish uchun get ishlatilinadi
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        req.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
