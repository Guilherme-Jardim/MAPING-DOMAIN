import { randomUUID } from 'node:crypto'

export class Sale {
  public id: string
  public clientId: string
  public amount: number

  constructor(id: string, clientId: string, amount: number) {
    this.id = id ?? randomUUID()
    this.clientId = clientId
    this.amount = amount
  }
}
