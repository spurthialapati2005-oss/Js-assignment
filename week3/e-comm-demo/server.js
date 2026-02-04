import exp from 'express';
import {connect} from 'mongoose';
import {userRoute} from './APIs/userAPI.js';
import {prodRoute} from './APIs/prodAPI.js';

//Create HTTP server
const app = exp();
const port = 4000;

//Connect to MongoDB 
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ecomdb');
        console.log("Connected to MongoDB");
        app.listen(port,() =>console.log('Server running on port 4000...'));
    }catch(err){}
}
connectDB();
//use body parser middleware
app.use(exp.json());

//forward req to specific APIs
app.use('/user-api',userRoute)
app.use('/prod-api',prodRoute)


//Error handling middleware
function errorHandler(err, req, res, next){
    res.json({message:"Error occurred", reason: err.message});
}
app.use(errorHandler);
