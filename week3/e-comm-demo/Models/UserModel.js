import {Schema, model} from 'mongoose';

//create cart Schema
const cartSchema = new Schema({
    product:{
    type: Schema.Types.ObjectId, //pre-defined things in mongoose
    ref: 'product'  //name of product model
    },
    quantity: {
        type: Number,
        default: 1 //set default quantity to 1
    }
})
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true, 'Duplicate user'] //add to index
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    cart : {
        type: [cartSchema]
    }
});

export const UserModel = model('user', userSchema);