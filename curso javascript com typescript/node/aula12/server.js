/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.emit("DB connected"))
  .catch((error) => console.log(error));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(flash());

app.use(routes);

app.on("DB connected", () => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
