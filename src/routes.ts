import { Application } from "express";
import v1 from "./api/v1/routes";

export default function routes(app: Application): void {
  app.use("/v1", v1);
}
