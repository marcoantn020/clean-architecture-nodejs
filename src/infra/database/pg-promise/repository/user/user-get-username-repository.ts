import { UserEntity } from "../../../../../core/entity/User";
import { IGetUserByUsernameRepository } from "../../../../../core/repository/User";
import database from "../../database";

export default class UserGetUsernameRepositorySQL implements IGetUserByUsernameRepository
{
    async getUsername (username: string): Promise<UserEntity> {
        try {
            return await database.oneOrNone('SELECT * FROM tbl_users WHERE username = $1', [username])
        } catch (error) {
            return error.message
        }
    }
}