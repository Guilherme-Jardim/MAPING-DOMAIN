import { randomUUID } from 'node:crypto'

export class Client {
  public id: string
  public name: string
  public email: number

  constructor(id: string, name: string, email: number) {
    this.id = id ?? randomUUID()
    this.name = name
    this.email = email
  }
}
