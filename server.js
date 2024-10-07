const conn = require("./connect");
const express = require("express");
const cors = require("cors");
const { postRoutes } = require("./postRoutes");
const { userRoutes } = require("./userRoutes");

const corsOptions = {
	origin: ["https://blog-buster-mdhr.onrender.com"],
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(postRoutes);
app.use(userRoutes);

app.listen(PORT, async () => {
	await conn.connectToServer();
});