import { ProductModel } from "../model/product";

export class ProductServices {
    constructor(private productModel: ProductModel) { }
    async getAll() {
        return await this.productModel.getAll();
    }
}