import { Router } from "express";
import { statusRouter } from "./status/calls";

export const routerV1 = Router();

routerV1.use("/status", statusRouter);