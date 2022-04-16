import { ICreateUserRepository } from "../../../../../core/repository/User";
import { UserDTO } from "../../../../../core/repository/User/user-dto";
import database from "../../database";

export default class UserCreateRepositorySQL implements ICreateUserRepository
{
    async create(data: UserDTO): Promise<void> {
        try {
            await database.query('INSERT INTO tbl_users (name, username, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5);', [
                data.name,
                data.username,
                data.password,
                new Date(),
                new Date()
            ]);
        } catch (error) {
            return error.message
        }   
    }
}