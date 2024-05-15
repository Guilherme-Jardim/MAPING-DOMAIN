import { randomUUID } from 'node:crypto'

export class Stock {
  public productId: string
  public name: string
  public quantity: number

  constructor(productId: string, name: string, quantity: number) {
    this.productId = productId ?? randomUUID()
    this.name = name
    this.quantity = quantity
  }
}
