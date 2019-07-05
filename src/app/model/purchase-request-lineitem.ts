import { Product } from '@model/product.class';
import { PurchaseRequest } from '@model/purchase-request';
export class PurchaseRequestLineItem {
    id: number;
    purchaseRequest: PurchaseRequest;
    product: Product;
    quantity: number;

    constructor(inId: number, pr: PurchaseRequest, p: Product, qty: number) {
        this.id = inId;
        this.purchaseRequest = pr;
        this.product = p;
        this.quantity = qty;
    }
}