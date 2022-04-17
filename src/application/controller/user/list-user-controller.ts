import { ListUsersRepositorySQL } from "../../../infra/database/pg-promise/repository/user/list-user-repository";
import { UserAdapter } from "../../adapter/user/user-adapter";
import { ListUserUsecase } from "../../usecase/user/list-user-usecase";


export class ListUserController {

    static async handle() {
        const listUserRepository = new ListUsersRepositorySQL()
        const listUserUsecase = new ListUserUsecase(listUserRepository)
        const users = await listUserUsecase.execute()
        return UserAdapter.userListAdapterResponse(users.body)
    }
}