import { IntegrateWithSupplierUseCase } from './integrate-with-supplier'
import { PurchaseOrderItem } from '../entities/purchase-order'

test('create a purchase order with items', () => {
  const integrateWithSupplier = new IntegrateWithSupplierUseCase()

  const items = [
    new PurchaseOrderItem('product-1', 10, 'Product 1', 100.0),
    new PurchaseOrderItem('product-2', 20, 'Product 2', 200.0),
    new PurchaseOrderItem('product-3', 30, 'Product 3', 300.0),
  ]

  const purchaseOrder = integrateWithSupplier.execute({
    supplierId: 'supplier-1',
    itemList: items,
  })

  const expectedTotalAmount = items.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0,
  )

  expect(purchaseOrder.items.length).toBe(items.length)
  expect(purchaseOrder.amount).toBe(expectedTotalAmount)
})
