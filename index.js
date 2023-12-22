const express = require("express");
require("dotenv").config();
require("./src/config/db");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const usersRouters = require("./src/routers/userRouters");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", usersRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
