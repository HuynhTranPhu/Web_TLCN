// import express from 'express';
// import User from '../models/userModel';
// import expressAsyncHandler from 'express-async-handler';
// import { getToken } from '../utill';
import userController from '../controllers/userController';

//const router = express.Router();
module.exports =(app) =>{
    app.route('/api/users/login').post(userController.userLogIn);
    app.route('/api/users/register').post(userController.userRegister);
    app.route('/api/users/createAdmin').get(userController.createAdmin);
    app.route('/api/users/:id').get(userController.getUser);
}


// router.post('/login', async (req,res) =>{
//     const signinUser = await User.findOne({
//         email:req.body.email,
//         password: req.body.password
//     });
//     if(signinUser){
//         res.send({
//             _id: signinUser.id,
//             name: signinUser.name,
//             email: signinUser.email,
//             isAdmin: signinUser.isAdmin,
//             token: getToken(signinUser)
//         })

//     }else{
//         res.status(401).send({
//             msg:'Invalid Email or Password.'
//         });
//     }
// })
// router.post('/register', async (req,res) =>{
//     const user = new User({
//         name: req.body.name,
//         email:req.body.email,
//         password: req.body.password,
//     });
//     const newUser = await user.save();
//     if(newUser){
//         res.send({
//             _id: newUser.id,
//             name: newUser.name,
//             email: newUser.email,
//             isAdmin: newUser.isAdmin,
//             token: getToken(newUser)
//         })
//     }
//     else{
//         res.status(401).send({
//             msg:'Invalid User Data.'
//         });
//     }
// })

// router.get("/createAdmin", async (req,res) =>{
//     try{
//         const user = new User({
//             name: 'Phu',
//             email: 'phu@gmail.com',
//             password:'123',
//             isAdmin:true
//         });
//         const newUser = await user.save();
//         res.send(newUser);

//     }catch(error){
//         res.send({
//             msg: error.message
//         });
//     }
    
// })


// router.get('/:id',expressAsyncHandler(async(req,res)=>{
//     const user = await User.findById(req.params.id);
//     if(user){
//         res.send(user);
//     } else{
//         res.status(404).send({message:'User not found'});
//     }
// }))
// export default router;