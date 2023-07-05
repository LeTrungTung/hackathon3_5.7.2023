const bodyParser = require("body-parser");
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user.route");

// middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// route
app.get("/", (req, res) => {
  res.status(200).send("Hello Hackathon3");
});

// handle err

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server express running http://localhost:${PORT}`);
});
