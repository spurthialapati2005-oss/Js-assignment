import {Schema, model} from 'mongoose';

//Create product schema (pid, productName, price)
const productSchema = new Schema({
    pid:{
        type:String,
        required:[true, 'Product ID is required'],
        unique:true,
        minLength:[3, 'Product ID must be at least 3 characters long'],
        maxLength:[10, 'Product ID cannot exceed 10 characters']
    },
    productName:{
        type:String,
        required:[true, 'Product name is required'],
        minLength:[4, 'Product name must be at least 4 characters long'],
        maxLength:[50, 'Product name cannot exceed 50 characters']
    },
    price:{
        type:Number,
        required:[true, 'Price is required'],
        min:[0, 'Price should be a positive value']
    },
},{
    strict:"throw",
    timestamps:true
});

//create user model with that Schema
export const ProductModel = model("product", productSchema);