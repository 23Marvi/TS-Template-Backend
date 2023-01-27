import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import { config } from "../config/config";

export function checkJwtToken(req: Request, res: Response, next: NextFunction): void {
    if (!req.headers.authorization) {
        res.status(401).send();
        return;
    } else {
        const token = req.headers.authorization;
        const publicKey = fs.readFileSync(config.publicJwtKey);
        const result = jwt.verify(token, publicKey, { algorithms: ["RS256"] });

        if (!result) {
            res.status(401).send();
        } else {
            next();
        }
    }
}