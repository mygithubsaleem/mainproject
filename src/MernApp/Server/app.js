const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello world from server...");
});
app.listen("3000", () => {
	console.log("server is running  at post 3000... ");
});

const middleware = (req, res, next) => {
	console.log("hello my middle ware...");
	next();
};

app.get("/MernAboutus", middleware, (req, res) => {
	res.send("hello world from mern about us...");
});
app.get("/MerContactus", (req, res) => {
	res.send("hello world from mern contact us...");
});
app.get("/MernHome", (req, res) => {
	res.send("hello world from Mern Home...");
});
app.get("/MernLogin", (req, res) => {
	res.send("hello world from Mern Login ...");
});
app.get("/MernLogout", (req, res) => {
	res.send("hello world from Mern Log out...");
});
app.get("/MernSignup", (req, res) => {
	res.send("hello world from Mern sign up...");
});
