const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const port = process.env.SERVER_PORT || 3005;
require("dotenv/config");
let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use("/", router);

app.listen(port, () => {
  console.log("listening to port: " + port);
});
