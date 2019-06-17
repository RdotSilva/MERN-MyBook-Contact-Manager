const express = require("express");
const connectDB = require("./config/db");

const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) =>
	res.json({ msg: "Welcome to the ContactKeeper API..." })
);

// Define Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
