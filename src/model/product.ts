import fs from "fs/promises";
import path from "path";

export class ProductModel {
    private async read() {
        const products = await fs.readFile(path.join(__dirname, "./products.json"), "utf-8");
        return JSON.parse(products);
    }

    async getAll() {
        return await this.read();
    }
}