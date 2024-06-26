import { randomUUID } from 'node:crypto'

export class Product {
  public id: string
  public name: string
  public price: number

  constructor(id: string, name: string, price: number) {
    this.id = id ?? randomUUID()
    this.name = name
    this.price = price
  }
}
