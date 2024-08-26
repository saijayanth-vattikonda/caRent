const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use("/", express.static(path.join(__dirname, "../frontend")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://carent-frontend.vercel.app"],
    methods: ["POST", "GET"],
  })
);
app.options("*", cors());

const uRoutes = require("./routes/userRoute.js");
const cRoutes = require("./routes/carRoute.js");

app.use("/user", uRoutes);
app.use("/car", cRoutes);

app.get("/car/getData", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/results.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/admin.html"));
});

app.use((err, req, res, next) => {
  console.log(err);

  if (typeof err == "string") {
    return res.status(400).send({
      message: err,
    });
  }

  return res.status(400).send({
    message: err.message,
  });
});

module.exports = app;
