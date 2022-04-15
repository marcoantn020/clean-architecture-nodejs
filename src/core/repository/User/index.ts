import { UserEntity } from "../../entity/User";
import { UserDTO } from "./user-dto";

export interface IGetUserRepository {
    get: () => Promise<UserEntity>
}

export interface ICreateUserRepository {
    get: (user: UserDTO) => Promise<void>
}

