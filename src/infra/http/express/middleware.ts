import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../../config/config";


export default async (request: Request, response: Response, next: any) => {
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
        return response.status(401).json({ error: `User not authorized!` });
    }

    const [, token] = authorizationHeader.split(" ");


    try {
        verify(token, config.key)
        return next();
    } catch (error) {
        return response.json({ error: "Token jwt invalid!" })
    }

}