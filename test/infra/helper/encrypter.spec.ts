import { IEncrypter } from "../../../src/application/contracts/encrypter"

const makeEncrypter = (): IEncrypter => {
    class EncrypterStub implements IEncrypter {
      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed_password'))
      }
    }
    return new EncrypterStub()
}

describe('Encrypter with bcrypt', () => {
    test('should call Encrypter with correct password', async () => {
        const  encryptHash = makeEncrypter()
        const result = await encryptHash.encrypt('123456')
        expect(result).toBe('hashed_password')
      })
})
