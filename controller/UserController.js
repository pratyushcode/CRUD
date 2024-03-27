const User=require("../models/User");

const getAllUser=async(req,res,next)=>
{
    let users;
    try {
        users= await User.find();
        res.json({users});

    } catch (error) {
        console.log(error);
        
    }

}

const addUser=async(req,res,next)=>
{
    const {name,email}=req.body;
    try {
        const newUser=new User({
            name,
            email
        })

        await newUser.save();
        res.json({newUser});
        
    } catch (error) {
        console.log(error);
        
    }
}

const getUser=async(req,res,next)=>
{
    const id=req.params.id;
    let user;
    try {
        user= await User.findById(id);        
    } catch (error) {
        console.log(error);
        
    }

    if(!user)res.json({message:"user not found"});
    res.json({user});
}


const deleteUser=async(req,res,next)=>
{
    const id=req.params.id;
    let user;
    try {
        user=await User.findByIdAndDelete(id);
        
        res.send({message:"deleted"});
    } catch (error) {
        console.log(error);        
    }
}

const updateUser=async(req,res,next)=>
{
    const userid=req.params.id;
    const{name,email}=req.body;
    let user;
    try {
        user=await User.findByIdAndUpdate(userid,{
            name,
            email,
        })
        
    } catch (error) {
        console.log(error);
    }
    res.json({user});
}


module.exports={getAllUser,addUser,getUser,deleteUser,updateUser};