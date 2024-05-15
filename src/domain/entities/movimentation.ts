import { randomUUID } from 'node:crypto'

export class Movimentation {
  public productId: string
  public typeId: string
  public type: string
  public quantity: number

  constructor(
    productId: string,
    typeId: string,
    type: string,
    quantity: number,
  ) {
    this.productId = productId ?? randomUUID()
    this.typeId = typeId ?? randomUUID()
    this.type = type
    this.quantity = quantity
  }
}
