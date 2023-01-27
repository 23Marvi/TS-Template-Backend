import { Router } from "express";
import * as statusV1 from "../../../controllers/status/v1Controller";

export const statusRouter = Router();

statusRouter.get("/", statusV1.getStatus);