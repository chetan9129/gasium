const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const dbconfig = require("./db");
const gasesRoute = require("./routes/gasesRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// console.log(process.env.MONGOURL);
app.use("/api/gases", gasesRoute);
app.use("/api/gas", gasesRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port 5000"));
