import express from 'express';
import productsRouter from './routes/product_route.js';
import mongoose from 'mongoose';
import 'dotenv/config';


// make database connection
await mongoose.connect(process.env.MONGO_URL);


//Create an express app
const app = express();

// Use global middlewares
app.use(express.json());

//Use routes
app.use('/api/v1', productsRouter);

//Listen for incoming request
app.listen(3002, () => {
    console.log('Server is listening on port 3002');
});