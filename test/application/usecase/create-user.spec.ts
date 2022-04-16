import { IEncrypter } from "../../../src/application/contracts/encrypter"
import { CreateUserUseCase } from "../../../src/application/usecase/user/create-user-usecase"
import { ICreateUserRepository } from "../../../src/core/repository/User"
import { UserDTO } from "../../../src/core/repository/User/user-dto"
import { Bcrypt } from "../../../src/infra/helper/encripter"
import { GetUserByUsernameRepositoryMemory, UserCreateRepositoryMemory } from "../../mock/repository-user"

class MockErroUserCreate implements ICreateUserRepository{
    create (user: UserDTO): Promise<void> {
        return new Promise((resolve, reject) => reject(new Error()))
    }
}

interface sutTypes {
    sut: CreateUserUseCase
    repositoryCreate: UserCreateRepositoryMemory
    repositoryGetUsername: GetUserByUsernameRepositoryMemory
    encrypter: IEncrypter
  }
  const makeSut = (): sutTypes => {
    const repositoryCreate = new UserCreateRepositoryMemory()
    const repositoryGetUsername = new GetUserByUsernameRepositoryMemory()
    const encrypter = new Bcrypt(12)
    const sut = new CreateUserUseCase(repositoryCreate,repositoryGetUsername, encrypter)
    return {
      sut,
      repositoryCreate,
      repositoryGetUsername,
      encrypter
    }
  }
  
  describe('User', () => {
    test('Should be create user', async () => {
      const { sut } = makeSut()
      const result = await sut.execute( {name: "marco", username: "marco020", password: "password", passwordConfirmation: "password"})
      expect(result.body).toBe( `User created with success.`)
    }) 
  
    test('Should be return throw error if username already exists', async () => {
        const { sut } = makeSut()
        const result = await sut.execute({name: "marco", username: "marco", password: "password",  passwordConfirmation: "password"})
        expect(result.body).toBe("Invalid param:: username already exists") 
    })

    test('Should be return throw error if password different from passwordConfirmation', async () => {
        const { sut } = makeSut()
        const result = await sut.execute({name: "marco", username: "marco123", password: "password",  passwordConfirmation: "password3"})
        expect(result.body).toBe("Invalid param:: the password is not the same")
    })

    test('Should be return throw error if missing params', async () => {
        const { sut } = makeSut()
        const result = await sut.execute({name: null,username: "marco123", password: "password",  passwordConfirmation: "password3"})
        expect(result.body).toBe("Missing param: name")
    })
  
    test('Should be return throw error if repository fails ', async () => {
      try {
        const errorCreateUser = new MockErroUserCreate()
        const repositoryGetUsername = new GetUserByUsernameRepositoryMemory()
        const encrypter = new Bcrypt(12)
        const sut = new CreateUserUseCase(errorCreateUser ,repositoryGetUsername, encrypter)
        
        await sut.execute({name: "Marco", username: "marco123", password: "password",  passwordConfirmation: "password3"})
      } catch (error) {
        expect(error).rejects.toThrowError()
      }
          
    })
  })