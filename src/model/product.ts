import fs from "fs/promises";
import path from "path";
import { Product } from "../types/product";


export class ProductModel {
    private async read() {
        const products = await fs.readFile(path.join(__dirname, "./products.json"), "utf-8");
        return JSON.parse(products);
    }

    async getAll() {
        return await this.read();
    }

    async getById(id: number) {
        const products = await this.read();
        const product = products.find((p: Product) => p.id === id);

        if (!product) {
            throw new Error("Product not found");
        } else {
            return product;
        }
    }
}