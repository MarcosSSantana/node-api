// import { ProductModel } from "../model";
import Product from "../model/Product";
import { ModelStatic } from "sequelize";

export class ProductServices {
    constructor(private productModel: ModelStatic<Product>) { }
    async getAll() {
        return await this.productModel.findAll();
    }

    async getById(id: number) {
        return await this.productModel.findByPk(id);
    }
}