import { ProductModel } from "../model/product";

export class ProductServices {
    constructor(private productModel: ProductModel) { }
    async getAll() {
        return await this.productModel.getAll();
    }

    async getById(id: number) {
        return await this.productModel.getById(id);
    }
}