import exp from 'express'
import { UserModel } from '../Models/UserModel.js';
import { ProductModel } from '../Models/ProductModel.js';
//import { Types } from 'mongoose';
export const userRoute = exp.Router();
import { hash } from 'bcryptjs';

//Create user
userRoute.post('/users', async (req, res) => {
    //get newuser from req
    let newUser = req.body;
    //run validator
    await new UserModel(newUser).validate();

    //hash the pswd
    let hashedpassword = await hash(newUser.password,12)
    //replace plain pswd w hashed pswd
    newUser.password=hashedpassword;
    //create new user document
    let newUserDoc = new UserModel(newUser);
    console.log(newUserDoc);
    //save to db
    await newUserDoc.save({validateBeforeSave:false});
    //send res
    res.status(201).send({ message: "New user created" });

})

//Add products to cart
userRoute.put('/user-cart/user-id/:uid/product-id/:pid', async (req, res) => {
    //read uid and pid from url parameters
    let {uid,pid} = req.params; //{uid:"", pid:""}
    try {
    //check user
    let user = await UserModel.findById(uid)
    if(!user){
        return res.status(401).send({message:"User not found"})
    }
    //check the product
    let product = await ProductModel.findById(pid);
    if(!product){
        return res.status(401).send({message:"Product not found"})
    }
    //check if product is already in the cart
      let productInCart = user.cart.find(item => item.product.toString() === pid)

      if (productInCart) {
          // Increment the quantity if product is already in the cart
          productInCart.quantity += 1;
      } else {
          // Add new product to the cart with quantity 1
          user.cart.push({ product: pid, quantity: 1 });
      }
    
    // Save the updated user document
    let modifiedUser = (await user.save());
    res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
    } catch (err) {
    res.status(500).send({ message: "Error occurred", reason: err.message });
}
});

//Read user by id
userRoute.get('/users/:uid', async (req, res) => {
    //read id from url params
    let {uid} = req.params;
    //fetch user from db
    let user = await UserModel.findById(uid).populate('cart.product',"productName price");
    if(!user){
        return res.status(404).send({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"User found", payload: user})
});

/*userRoute.get('/compare/:pid', async (req, res) => {
    let productId = req.params.pid;
    //get product
    let prod = await ProductModel.findById(productId);
    //compare ids
    if(productId === prod._id.toString()){
        console.log("Equal")
    }
    else{
        console.log("Not equal")
    }
});*/