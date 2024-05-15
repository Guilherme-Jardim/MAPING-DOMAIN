import { PurchaseOrder, PurchaseOrderItem } from '../entities/purchase-order'
import { randomUUID } from 'node:crypto'

interface IntegrateWithSupplierUseCaseRequest {
  supplierId: string
  itemList: PurchaseOrderItem[]
}

export class IntegrateWithSupplierUseCase {
  execute({
    supplierId,
    itemList,
  }: IntegrateWithSupplierUseCaseRequest): PurchaseOrder {
    const purchaseOrder = new PurchaseOrder(randomUUID(), supplierId, itemList)

    return purchaseOrder
  }
}
