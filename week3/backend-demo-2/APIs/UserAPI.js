import exp from 'express'
import { UserModel } from '../models/UserModel.js';
export const userApp = exp.Router();
/*test route
userApp.get("/test", (req, res) => {
    res.send({ message: "User API is working" });
});*/

//Create user
userApp.post('/users', async (req, res) => {
    //get newuser from req
    let newUser = req.body;
    //create new user document
    let newUserDoc = new UserModel(newUser);
    console.log(newUserDoc);
    //save to db
    await newUserDoc.save();
    //send res
    res.status(201).send({ message: "New user created" });

})

//Read user
userApp.get('/users',async(req, res) =>{
    //read users from db
    let usersList = await UserModel.find()
    //send res
    res.status(200).send({message:"Users list", payload:usersList});
})
//Read user by ObjectID
userApp.get('/users/:id',async(req, res) =>{
    //get ObjectID from url param
    let objId = req.params.id;
    //find user in db
    let userObj = await UserModel.findById(objId);
    //send res
    res.status(200).send({message:"User details", payload:userObj});
})

//update user
userApp.put('/users/:id',async(req, res) =>{
    //get ObjectID from url param
    let objId = req.params.id;
    //get modified user from req 
    let modifiedUser = req.body;
    //make update 
    let latestUser = await UserModel.findByIdAndUpdate(objId, {$set:{...modifiedUser}},{new:true, runValidators:true});
    //send res
    res.status(200).send({message:"User modified", payload: latestUser});
});

//delete user
userApp.delete('/users/:id',async(req, res) =>{
    //get ObjectID from url param
    let objId = req.params.id;
    //delete user from db
    let deletedUser = await UserModel.findByIdAndDelete(objId);
    //send res
    res.status(200).send({message:"User deleted"});
});