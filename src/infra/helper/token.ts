import { ITokenGenerate } from "../../application/contracts/token";
import { sign } from "jsonwebtoken";

export class Token implements ITokenGenerate {
    generate (key: string, id: string): string {
        return sign({}, key, {
            subject: id,
            expiresIn: '1d'
        })
    }
}