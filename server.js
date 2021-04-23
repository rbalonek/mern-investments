const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const investmentsRoutes = require("./routes/investments");
const userRoutes = require("./routes/users");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

///Use Routes
app.use("/api/", investmentsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", require("./routes/auth"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is root!"));
