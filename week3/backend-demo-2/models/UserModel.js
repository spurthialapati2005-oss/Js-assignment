import {Schema, model} from 'mongoose';

//Create user schema (username, password, age)
const userSchema = new Schema({
    username:{
        type:String,
        required:[true],
        minLength:[4, 'Username must be at least 4 characters long'],
        maxLength:[20, 'Username cannot exceed 20 characters']
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minLength:[6, 'Password must be at least 6 characters long']
    },
    age:{
        type:Number,
        required:[true, 'Age is required'],
        min:[16, 'Age should be above 18'],
        max:[25, 'Age should be below 25']
    },
},{
    strict:"throw",
    timestamps:true
});

//create user model with that Schema
export const UserModel = model("user", userSchema);