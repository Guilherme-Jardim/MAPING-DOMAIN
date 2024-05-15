import { randomUUID } from 'node:crypto'

export class PurchaseOrder {
  public id: string
  public supplierId: string
  public amount: number

  constructor(id: string, supplierId: string, amount: number) {
    this.id = id ?? randomUUID()
    this.supplierId = supplierId
    this.amount = amount
  }
}
