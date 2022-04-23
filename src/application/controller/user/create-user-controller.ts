import UserCreateRepositorySQL from "../../../infra/database/pg-promise/repository/user/user-create-repository";
import UserGetUsernameRepositorySQL from "../../../infra/database/pg-promise/repository/user/user-get-username-repository";
import { Bcrypt } from "../../../infra/helper/encripter";
import { CreateUserUseCase } from "../../../core/usecase/user/create-user-usecase";


export class CreateUserController {
    
    static async handle(params: any, body: any) {
        const repositoryCreate = new UserCreateRepositorySQL()
        const repositoryGetUsername = new UserGetUsernameRepositorySQL()
        const encrypter = new Bcrypt(12)
        const create = new CreateUserUseCase(repositoryCreate, repositoryGetUsername, encrypter)
        const user = await create.execute({
            name: body.name,
            username: body.username, 
            password: body.password,
            passwordConfirmation: body.passwordConfirmation
            })
        return user
    }
}