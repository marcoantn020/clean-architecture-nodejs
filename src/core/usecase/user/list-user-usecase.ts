import { IListUserRepository } from "../../repository/User";
import { IHttpResponse, notFound, ok } from "../../utils/http-util";


export class ListUserUsecase {

    constructor(private readonly listUserRepository: IListUserRepository){}

    async execute(): Promise<IHttpResponse> {
       try {
            const users = await this.listUserRepository.list()
            if (!users) {
                return notFound()
            }
            return ok(users)
       } catch (error) {
           return error.message
       }
    }
}