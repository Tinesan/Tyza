const express = require("express");
const config = require("config");
const path = require("path");

const app = express();

const PORT = config.get("port");

app.use("/", express.static(path.resolve(__dirname, "../", "build")));
app.get("*", (_, res) =>
  res.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
);

app.listen(PORT || 5000, () => console.log("App was started"));
