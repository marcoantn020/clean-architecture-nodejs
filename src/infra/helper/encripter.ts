import bcrypt, { compare } from 'bcrypt'
import { IEncrypter } from '../../application/contracts/encrypter'

export class Bcrypt implements IEncrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }
  async compare (value: string, hash: string): Promise<boolean> {
    return await compare(value, hash)
  }

  async encrypt (value: string): Promise<string> {
    const hashPassword = await bcrypt.hash(value, this.salt)
    return hashPassword
  }
}