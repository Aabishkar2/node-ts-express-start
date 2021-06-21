import express from "express";
import "reflect-metadata";
import Server from "./server";

const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));

new Server().listen(PORT);
