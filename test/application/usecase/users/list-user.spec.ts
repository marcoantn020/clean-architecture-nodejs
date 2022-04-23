import { ListUserUsecase } from "../../../../src/core/usecase/user/list-user-usecase"
import { UserEntity } from "../../../../src/core/entity/User"
import { ListUsersRepositoryMemory } from "../../../mock/repository-user"

const fakeUsers: UserEntity[] = [
    {id: 1, name: "marco", username: "marco", password: "password", created_at: new Date(), updated_at: new Date()}  ]

interface SutTypes {
  sut: ListUserUsecase
}

const makeSut = (): SutTypes => {
  const repositoryListUsers = new ListUsersRepositoryMemory()
  const sut = new ListUserUsecase(repositoryListUsers)
  return {
    sut
  }
}

describe('List users', () => {
  test('Should be return clients', async () => {
    const { sut } = makeSut()
    const result = await sut.execute()
    expect(result.body).toEqual(fakeUsers)
  })
})
