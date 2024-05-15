import { randomUUID } from 'node:crypto'

export class PurchaseOrderItem {
  public productId: string
  public quantity: number
  public name: string
  public productPrice: number

  constructor(
    productId: string,
    quantity: number,
    name: string,
    productPrice: number,
  ) {
    this.productId = productId
    this.quantity = quantity
    this.name = name
    this.productPrice = productPrice
  }
}

export class PurchaseOrder {
  public id: string
  public supplierId: string
  public amount?: number
  public items: PurchaseOrderItem[]

  constructor(id: string, supplierId: string, items: PurchaseOrderItem[]) {
    this.id = id ?? randomUUID()
    this.supplierId = supplierId
    this.amount = items.reduce(
      (sum, item) => sum + item.productPrice * item.quantity,
      0,
    )
    this.items = items
  }
}
