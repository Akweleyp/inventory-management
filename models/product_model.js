// const mongoose = require('mongoose');
import mongoose, { model } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    supplier: { type: String, required: true }
});

export const ProductModel = model('product',ProductSchema);
