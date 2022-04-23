import { LoginUsecase } from "../../../../src/core/usecase/login/login-usecase"
import { Bcrypt } from "../../../../src/infra/helper/encripter"
import { Token } from "../../../../src/infra/helper/token"
import { GetUserByUsernameRepositoryMemory } from "../../../mock/repository-user"

interface sutTypes {
    // getUserByUsernameRepository: GetUserByUsernameRepositoryMemory
    sut:LoginUsecase
}

const makeSut = (): sutTypes => {
    const getUserByUsernameRepository = new GetUserByUsernameRepositoryMemory()
    const encripter= new Bcrypt(12)
    const token = new Token()
    const sut = new LoginUsecase(getUserByUsernameRepository, encripter, token)
    return {
        sut
    }
}

describe('Login', () => {
  test('should be return missing param username',async () => {
        const { sut } = makeSut()
        const result = await sut.execute({username: null, password: '123456'})
        expect(result.body).toBe("Missing param: username")
  })

  test('should be return missing param password',async () => {
        const { sut } = makeSut()
        const result = await sut.execute({username: "marco", password: null})
        expect(result.body).toBe("Missing param: password")
  })

  test('should be return inavalid param if username',async () => {
        const { sut } = makeSut()
        const result = await sut.execute({username: "marco2", password: "123456"})
        expect(result.body).toBe("Invalid param:: User/Password")
  })

  test('should be return inavalid param if password',async () => {
        const { sut } = makeSut()
        const result = await sut.execute({username: "marco", password: "12345"})
        expect(result.body).toBe("Invalid param:: User/Password")
  })
})
