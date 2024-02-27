import { Router } from "express";
import * as statusV1 from "../../../controllers/status/v1Controller";

export const statusRouter = Router();

/**
 * @swagger
 *
 * /status:
 *   get:
 *     description: Get status
 *     tags:
 *       - Status
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
statusRouter.get("/", statusV1.getStatus);