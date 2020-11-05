import User from '../models/userModel';
import { getToken } from '../utill';
import expressAsyncHandler from 'express-async-handler';
exports.userLogIn =  async (req,res) =>{
    const loginUser = await User.findOne({
        email:req.body.email,
        password: req.body.password
    });
    if(loginUser){
        res.send({
            _id: loginUser.id,
            name: loginUser.name,
            email: loginUser.email,
            isAdmin: loginUser.isAdmin,
            token: getToken(loginUser)
        })

    }else{
        res.status(401).send({
            msg:'Invalid Email or Password.'
        });
    }
}
exports.userRegister = async (req,res) =>{
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
    });
    const newUser = await user.save();
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }
    else{
        res.status(401).send({
            msg:'Invalid User Data.'
        });
    }
}
exports.createAdmin = async (req,res) =>{
    try{
        const user = new User({
            name: 'Phu',
            email: 'phu@gmail.com',
            password:'123',
            isAdmin:true
        });
        const newUser = await user.save();
        res.send(newUser);

    }catch(error){
        res.send({
            msg: error.message
        });
    }
    
}
exports.getUser = expressAsyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
        res.send(user);
    } else{
        res.status(404).send({message:'User not found'});
    }
})