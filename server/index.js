const express = require("express");
const path = require("path");
const router = require("./routes/routes");
require('dotenv/config');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const port = 3005;
console.log(process.env.SERVER_PORT);

app.use("/", router);

app.listen(port, () => {
  console.log("listening to port: " + port);
});
