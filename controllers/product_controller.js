import { ProductModel } from "../models/product_model.js";

export const addProduct = async (req, res, next) => {
  try {
    // Upload product image
    // Validate prodcut information
    // Save product information in database
    const result = await ProductModel.create(req.body);
    // Return response
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    //Fetch products from database
    const result = await ProductModel.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res,next) => {
  try {
    const product = await ProductModel.findByIdAndUpdate( req.params.id, req.body, { new: true });
  
    if (product) 
    {
      res.status(200).json(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error)
    
  }
};

export const deleteProduct = async (req, res, next) => {
 try {
     const product = await ProductModel.findByIdAndDelete(req.params.id);
   
     if (product) {
       res.status(200).json(product);
     } else {
       res.status(400).send("product not found");
     }
 } catch (error) {
    next(error)
    
 }
};
