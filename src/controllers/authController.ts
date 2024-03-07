import { Request,Response } from "express";
import { sequelize } from "../models";
import { UserModel } from "../models/userModel";
const authController={
    login:(req:Request,res:Response)=>{
        const email:string=req.body.email;
        const password:string=req.body.password;

        res.status(200).json({message:"logged in successfully",email:email,password:password})

    },

    signUp:(req:Request,res:Response)=>{
       const body=req.body;
       sequelize.sync();
       UserModel.create({
        id:undefined,
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone,
        userType: body.userType
    
    })
       res.status(201).json({message:"user registration successfully",data:body})
    },
    forgotPassword:(req:Request,res:Response)=>{
        res.status(200).json({message:"an otp send to your mail"})
    },
    setNewPassword:(req:Request,res:Response)=>{
        const newPassword:string=req.body.newPassword;
    },
    logout:(req:Request,res:Response)=>{}
}
export default authController;