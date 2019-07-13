const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const users = require("./routes/users");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

// Serve static assets in production (react)
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	// Get ANYTHING that is not the api routes above
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
