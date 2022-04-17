import { UserEntity } from "../../entity/User";
import { UserDTO } from "./user-dto";

export interface IListUserRepository {
    list: () => Promise<UserEntity[]>
}

export interface ICreateUserRepository {
    create: (user: UserDTO) => Promise<void>
}

export interface IGetUserByUsernameRepository {
    getUsername: (username: string) => Promise<UserEntity>
}

