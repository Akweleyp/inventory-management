// import { Router } from "express";
import { Router } from "express";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product_controller.js";

//Create product router
const productsRouter = Router();

//Define routes
productsRouter.post('/products', addProduct);

productsRouter.get('/products', getProducts);

productsRouter.patch('/products/:id', updateProduct);

productsRouter.delete('/products/:id', deleteProduct);

//Export router
export default productsRouter; 
