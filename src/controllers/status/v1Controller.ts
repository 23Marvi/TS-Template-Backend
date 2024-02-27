import { Request, Response } from "express";

export async function getStatus(req: Request, res: Response): Promise<void> {
    try {
        res.status(200).send({ message: "OK" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}