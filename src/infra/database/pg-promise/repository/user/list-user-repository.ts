import { UserEntity } from "../../../../../core/entity/User";
import { IListUserRepository } from "../../../../../core/repository/User";
import database from "../../database";

export class ListUsersRepositorySQL implements IListUserRepository {
    async list():Promise<UserEntity[]> {
        try {
            return await database.manyOrNone('SELECT * FROM tbl_users ORDER BY id ASC')
        } catch (error) {
            return error.message
        }
    }

}