import { IGetUserByUsernameRepository } from "../../../core/repository/User";
import { config } from "../../../infra/config/config";
import { UserAdapter } from "../../adapter/user/user-adapter";
import { IEncrypter } from "../../contracts/encrypter";
import { ITokenGenerate } from "../../contracts/token";
import { IHttpResponse, ok } from "../../utils/http-util";
import { InvalidParamError } from "../helper/errors";
import { badRequest } from "../helper/errors/http-error";
import { MissingParamError } from "../helper/errors/missing-param-error";

interface IRequest {
    username: string
    password: string
}

export class LoginUsecase {

    constructor(
        private readonly getUserByUsernameRepository: IGetUserByUsernameRepository,
        private readonly encrypter:  IEncrypter,
        private readonly token:  ITokenGenerate
        ) {}

    async execute(input: IRequest): Promise<IHttpResponse> {
        const requiredFields = ['username', 'password']
        for (const field of requiredFields) {
            if (!input[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
        const { username, password } = input
        const userExist = await this.getUserByUsernameRepository.getUsername(username)
        if (!userExist) {
            return badRequest(new InvalidParamError("User/Password"))
        }

        const isValidPassword = await this.encrypter.compare(password, userExist.password)
        if (!isValidPassword) {
            return badRequest(new InvalidParamError("User/Password"))
        }

        const token = this.token.generate(config.key, String(userExist.id))
        return ok({"token": token, user: UserAdapter.userAdapterResponse(userExist).body})
    }
}