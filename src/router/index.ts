import { Router } from "express";
import { ProductModel } from "../model/product";
import { ProductServices } from "../service/product";
import { ProductController } from "../controller/product";

const router = Router();

const model = new ProductModel();
const services = new ProductServices(model);
const controller = new ProductController(services);

router.get("/products", (request, response) => {
    return controller.getProducts(request, response);
})


export default router;