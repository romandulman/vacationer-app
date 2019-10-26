"use strict";

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const router = require("./routes/index");
const db = require("./models").sequelize;
const helmet = require("helmet");
const passport = require("passport");
const multer = require('multer');

require("./config/passport.config");
const app = express();

app.use(cors()); //cors Remove in Productions
app.use(helmet()); // Minimal Security
// Sequalize connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    //db.sync()
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.use('/uploads',express.static('uploads'));

app.use(passport.initialize());

app.use("/users", router.usersRouter);

/*app.get('/!*',(req,res)=>{
    res.sendFile(path.join(_dirname, 'public', 'index.html'))
});*/

app.use(
  "/vacations",
  passport.authenticate("jwt", { session: false }),
  router.vacationsRouter
);

module.exports = app;
