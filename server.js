console.log("Hello world");
const express = require("express");
const app = express();
const http = require("http");

// 1 kirish codelar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sesseion code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
// Post malumotni ozi bilan birga olip keladi va Date base ga yozadi
app.post("/create-item",(req,res)=>{
  console.log(req.body);
  res.json({test: "Hello world"})

})

// Date base dan malumot olish uchun get ishlatilinadi
app.get("/",function(req,res){
  res.render('harid')
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server on ${PORT}`);
});
