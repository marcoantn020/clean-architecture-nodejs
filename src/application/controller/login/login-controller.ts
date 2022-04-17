import UserGetUsernameRepositorySQL from "../../../infra/database/pg-promise/repository/user/user-get-username-repository";
import { Bcrypt } from "../../../infra/helper/encripter";
import { Token } from "../../../infra/helper/token";
import { LoginUsecase } from "../../usecase/login/login-usecase";


export class LoginController {

    static async handle(params: any, body: any){
        const getUserByUsernameRepository = new UserGetUsernameRepositorySQL()
        const encrypter = new Bcrypt(12)
        const tokenGenerate = new Token()
        const loginUsecase = new LoginUsecase(getUserByUsernameRepository, encrypter, tokenGenerate)
        const token = await loginUsecase.execute({username: body.username, password: body.password})
        return token

    }
}