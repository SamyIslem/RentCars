const express = require("express");
const cors = require("cors");
const app = express();

const indexRoutes = require("./routes/index.routes");

app.use(cors());

app.use(express.json());

app.use("/", indexRoutes);

app.listen(3000, () => {
  console.log("====================================");
  console.log("Port 3000");
  console.log("====================================");
});
