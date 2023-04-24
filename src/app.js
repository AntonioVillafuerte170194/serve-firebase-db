const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

// const { db } = require("./firebase");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.create({
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// // middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// // Routes
app.use(require("./routes/index"));

// // Static files
app.use("/public", express.static(path.join(__dirname, "public")));
// app.get("/",async(req ,res) => {
//   const querySnapshot = await db.collection("contacts").get()
//   console.log(querySnapshot.docs[0].data())
//   res.send("hello")
// })

module.exports = app;
