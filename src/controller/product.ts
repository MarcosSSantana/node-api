import { ProductServices } from "../service/product";
import { Request, Response } from "express";

export class ProductController {
    constructor(private services: ProductServices) { }

    async getProducts(_req: Request, res: Response) {
        try {
            const products = await this.services.getAll();
            res.status(200).json(products);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getProductById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await this.services.getById(parseInt(id));
            res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}