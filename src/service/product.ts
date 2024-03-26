import Product from "../model/Product";
import { ModelStatic } from "sequelize";

export class ProductServices {
    constructor(private productModel: ModelStatic<Product>) { }
    async getProducts() {
        return await this.productModel.findAll();
    }

    async getProductById(id: number) {
        return await this.productModel.findByPk(id);
    }

    async createProduct(product: any) {
        const fields = ["name", "price", "quantity"];

        fields.forEach((field) => {
            if (!product[field]) {
                throw new Error(`Missing field ${field}`);
            }
        });

        await this.productModel.create(product);
    }
}