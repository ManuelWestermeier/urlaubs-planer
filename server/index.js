import useAuth from "./use/auth.js";
import express from "express";
import getCreateAccount from "./get/auth/create-account.js";
import getLogin from "./get/auth/login.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next(null);
});

app.use(useAuth);

app.get("/auth/login", getLogin);

app.get("/auth/create-account", getCreateAccount);

app.get("/auth/create-account", (req, res) => {});

app.listen(8080);

process.on("uncaughtException", (err) => console.log(err));