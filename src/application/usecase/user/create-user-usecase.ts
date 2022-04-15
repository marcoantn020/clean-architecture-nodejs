import { ICreateUserRepository } from "../../../core/repository/User";
import { UserDTO } from "../../../core/repository/User/user-dto";


export class CreateUserUseCase {
    constructor (private readonly repository: ICreateUserRepository) {
        this.repository = repository
    }

    async execute(input: UserDTO): Promise<string> {
        return "ok"
    }
}