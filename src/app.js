const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const verifyToken = require("./middlewares/verify_jwt_token");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/users", verifyToken, usersRouter);

module.exports = app;
