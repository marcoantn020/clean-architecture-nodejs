import { ICreateUserRepository, IGetUserByUsernameRepository } from "../../../core/repository/User";
import { IEncrypter } from "../../contracts/encrypter";
import { created, IHttpResponse } from "../../utils/http-util";
import { InvalidParamError } from "../helper/errors";
import { badRequest } from "../helper/errors/http-error";
import { MissingParamError } from "../helper/errors/missing-param-error";

interface IRequest {
    name: string
    username: string
    password: string
    passwordConfirmation: string
}

export class CreateUserUseCase {
    constructor (
        private readonly repositoryCreate: ICreateUserRepository,
        private readonly repositoryGetUsername: IGetUserByUsernameRepository,
        private readonly encrypter: IEncrypter
        ) {}

    async execute(input: IRequest): Promise<IHttpResponse> {
        try {

            const requiredFields = ['name', 'username', 'password', 'passwordConfirmation']
            for (const field of requiredFields) {
            if (!input[field] || input[field] == "") {
                return badRequest(new MissingParamError(field))
                }
            }

            const { name, username, password, passwordConfirmation} = input
            const usernameExists = await this.repositoryGetUsername.getUsername(username)
            
            
            if (usernameExists) {
                return badRequest(new InvalidParamError("username already exists"))
            }

            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError("the password is not the same"))
            }

            const passwordHash = await this.encrypter.encrypt(password)
            await this.repositoryCreate.create({
                name,
                username, 
                password: passwordHash
            })

            return created("User created with success.")
        } catch (error) {
            return error 
        }
    }
}