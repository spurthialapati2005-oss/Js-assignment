import exp from 'express'
import { ProductModel } from '../models/ProductModel.js';
export const productApp = exp.Router();

//Create product
productApp.post('/products', async (req, res) => {
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
productApp.get('/products',async(req, res) =>{
    //read products from db
    let productsList = await ProductModel.find()
    //send res
    res.status(200).send({message:"Products list", payload:productsList});
})

//Read product by ObjectID
productApp.get('/products/:id',async(req, res) =>{
    //get ObjectID from url param
    let objId = req.params.id;
    //find product in db
    let productObj = await ProductModel.findById(objId);
    //send res
    res.status(200).send({message:"Product details", payload:productObj});
})

//update product
productApp.put('/products/:id',async(req, res) =>{
    //get ObjectID from url param
    let objId = req.params.id;
    //get modified product from req 
    let modifiedProduct = req.body;
    //make update 
    let latestProduct = await ProductModel.findByIdAndUpdate(objId, {$set:{...modifiedProduct}},{new:true});
    //send res
    res.status(200).send({message:"Product modified", payload: latestProduct});
});


