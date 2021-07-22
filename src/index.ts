import express from "express";
import "reflect-metadata";
import Server from "./server";

const app = express();
const PORT = 8000;
new Server().listen(PORT);
