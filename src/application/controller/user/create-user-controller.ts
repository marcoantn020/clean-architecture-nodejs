import { UserDTO } from "../../../core/repository/User/user-dto";
import { CreateUserUseCase } from "../../usecase/user/create-user-usecase";


export class createUserController {
    
    static async handle(params: any, body: UserDTO) {
        const repository = null // new RepositoryUser()
        const create = new CreateUserUseCase(repository)
        const user = await create.execute({name: body.name, email: body.email, user: body.user, password: body.password})
        return user
    }
}