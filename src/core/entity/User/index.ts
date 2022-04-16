export class UserEntity {
    id: number
    name: string
    username: string
    password: string
    created_at: Date
    updated_at: Date

    constructor (
        id: number,
        name: string,
        email: string,
        username: string,
        password: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.name = name
        this.username = username
        this.password = password
        this.created_at = created_at
        this.updated_at = updated_at
    }
}