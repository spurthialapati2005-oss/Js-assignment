import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js';
export const prodRoute = exp.Router();

//route to create 
prodRoute.post('/products', async (req, res, next) => {
    //get newproduct from req
    let newProduct = req.body;
    //create new product document
    let newProductDoc = new ProductModel(newProduct);
    console.log(newProductDoc);
    //save to db
    await newProductDoc.save();
    //send res
    res.status(201).send({ message: "New product created" });
})

//Read products
prodRoute.get('/products',async(req, res) =>{
    //read products from db
    let productsList = await ProductModel.find()
    //send res
    res.status(200).send({message:"Products list", payload:productsList});
})