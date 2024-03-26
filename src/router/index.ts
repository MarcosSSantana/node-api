import { Router } from "express";
import { ProductServices } from "../service/product";
import { ProductController } from "../controller/product";
import Product from "../model/Product";

const router = Router();

const services = new ProductServices(Product);
const controller = new ProductController(services);

router.get("/products", (request, response) => {
    return controller.getProducts(request, response);
});

router.get("/products/:id", (request, response) => {
    return controller.getProductById(request, response);
});

router.post("/products", (request, response) => {
    return controller.createProduct(request, response);
});

export default router;