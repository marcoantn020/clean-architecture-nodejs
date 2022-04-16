import { UserEntity } from "../../src/core/entity/User"
import { ICreateUserRepository, IGetUserByUsernameRepository } from "../../src/core/repository/User"
import { UserDTO } from "../../src/core/repository/User/user-dto"

let users: UserEntity[] = [
    {id: 1, name: "marco", username: "marco", password: "password", created_at: new Date(), updated_at: new Date()}
]

export class UserCreateRepositoryMemory implements ICreateUserRepository
{
    async create (user: UserDTO): Promise<void> {
        users.push({id: 2,name: user.name, username: user.username, password: user.password, created_at: new Date(), updated_at: new Date()})
    }
}

export class GetUserByUsernameRepositoryMemory implements IGetUserByUsernameRepository
{
    async getUsername (username: string): Promise<UserEntity> {
        return users.filter(user => user.username.includes(String(username)))[0]
    }
}


// export class UserCreateRepositoryMemory implements ICreateUserRepository,
// {
//     users: UserEntity[] = [
//         {id: 1, name: "marco", email: "email@mail.com", user: "marco", password: "password", created_at: new Date(), updated_at: new Date()}
//     ]
    
//     async create (user: UserDTO): Promise<void> {
//         try {
//             this.users.push({id: 2,name: user.name, email: user.email, user: user.user, password: user.password, created_at: new Date(), updated_at: new Date()})
//         } catch (error) {
//             throw new Error()
//         }
//     }


    // async getOne (data: IGet): Promise<ClientEntity> {
    //     try {
    //         return this.users.find(client => client.id == data.id)
    //     } catch (error) {
    //         throw new Error()
    //     }
    // }

    // async get (): Promise<ClientEntity[]> {
    //     try {
    //         return this.users
    //     } catch (error) {
    //         throw new Error()
    //     }
    // }

    // async getByEmail (data: string): Promise<UserEntity> {
    //     try {
    //         return this.users.filter(client => client.email.includes(String(data)))[0]
    //     } catch (error) {
    //         throw new Error()
    //     }
    // }

    // update (data: IUpdate): Promise<void> {
    //     try {
    //         const clientIndex = this.users.findIndex(client => client.id === data.id)

    //         if(clientIndex === -1) {
    //             return 
    //         }
    
    //         const client: ClientEntity = Object.assign({
    //             name: data.name,
    //             birthDate: data.birthDate
    //         })
    
    //         this.clients[clientIndex] = client
    //     } catch (error) {
    //         throw new Error()
    //     }

    // }


    // async delete (data: IGet): Promise<void> {
    //     try {
    //         const clientIndex = this.clients.findIndex(client => client.id === data.id)
    //         this.clients.splice(this.clients[clientIndex].id, 1)
    //     } catch (error) {
    //         throw new Error()
    //     }
    // }
// }

