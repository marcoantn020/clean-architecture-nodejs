
import { NextFunction, Request, Response } from "express";

export async function authentication (
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send()
    }

    const [,user] = token.split(" ")

    if (user === "admin") {
        return next()
    }

    return res.status(401).send()
}