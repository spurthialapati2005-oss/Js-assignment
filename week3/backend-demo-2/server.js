import exp from 'express';  
import {userApp} from './APIs/UserAPI.js';
import {productApp} from './APIs/ProductAPI.js';
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser';
import { verifyToken } from './middleware/verifyToken.js';  
const app = exp();
//assign port no 
const port = 4000;

//connect to db server
async function connectDB(){
    try {
        let dbRes = await connect('mongodb://localhost:27017/anuragdb2')
        console.log("DB connection successful")
        app.listen(port, () => console.log(`Server is listening on port ${port}`));

    } catch(err) {
        console.log("DB connection failed", err)
    }
}

connectDB();

//body parser middleware
app.use(exp.json());

//add cookie parser middleware
app.use(cookieParser());

//if path starts with /user-api then forward the request to userApp
app.use('/user-api', userApp);

//if path starts with /product-api then forward the request to productApp
app.use('/product-api', productApp);

//error handling middleware
function errorHandler(err, req, res, next){
    res.json({message:"Error occurred", reason: err.message});
}
app.use(errorHandler);



