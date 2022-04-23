import { UserEntity } from "../../../core/entity/User";
import { IHttpResponse } from "../../../core/utils/http-util";


export class UserAdapter {

    static userAdapterResponse(data: UserEntity): IHttpResponse {
        return {
            statusCode: 200,
            body: {
                id: data.id,
                name: data.name,
                username: data.username,
                created_at: data.created_at,
                updated_at: data.updated_at
            }
        }
    }

    static userListAdapterResponse(data: UserEntity[]): IHttpResponse {
        const list = []
        for (const item of data) {
            list.push({ id: item.id,
                        name: item.name,
                        username: item.username,
                        created_at: item.created_at,
                        updated_at: item.updated_at })
        }
        return {
            statusCode: 200,
            body: list
        }
    }
}