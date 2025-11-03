import express from "express"
import { userModel } from "../db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const userRouter = express.Router()

userRouter.post("/signup",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const isUserExist = await userModel.findOne({
        username:username
    })
    if(isUserExist){
        res.json({
            msg : "user already exist"
        })
        return
    }else{
        try{
            const hashPassword = await bcrypt.hash(password,4)
            const response = await userModel.create({
                username:username,
                password:hashPassword,
                firstName:firstName,
                lastName:lastName
            })
        }catch(e){
            res.json({
                msg : "something went wrong try again"
            })
        }
    }
    res.json({
        msg :"signup done"
    })

})

userRouter.post("/signin",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const response = await userModel.findOne({
        username : username
    })
if(!response){
    res.json({
        msg : "user not found please try agin later"
    })
}

const hashPassword = response?.password
if(!hashPassword) {
    res.json({
    msg : "could not get password"
})
return;
}
 const isPassword = await bcrypt.compare(password , hashPassword)
if(isPassword){
    const token = jwt.sign({
        id : response._id
    },process.env.JWT_SECRET || "default password")
    res.json({
    msg : token
})
}

})

export default userRouter