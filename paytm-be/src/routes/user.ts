import express, { Response } from "express"
import { accountModel, userModel } from "../db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthMiddleware, AuthRequest } from "../middleware/AuthMiddleWare"
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
            const hashPassword = await bcrypt.hash(password,5)
            const response = await userModel.create({
                username:username,
                password:hashPassword,
                firstName:firstName,
                lastName:lastName
            })

            await accountModel.create({
                userId : response._id,
                balance : 1 + Math.random() * 10000
            })
        }catch(e){
            console.log(e)
            res.json({
                msg :e
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


userRouter.get("/getDetails",AuthMiddleware , async(req:AuthRequest , res : Response)=>{
    const userId = req.userId
    try{
        const response  = await userModel.findOne({
            _id : userId
        })
       
        res.status(200).json({
            firstName : response?.firstName,
            lastName : response?.lastName,
            username : response?.username,
            id : response?._id
        })
    }
    catch(e){
        res.status(400).json({
            msg : "cannot get the details"
        })
    }
})

userRouter.get("/getAllusers",AuthMiddleware,async (req:AuthRequest,res)=>{
    const userId = req.userId
    try{
        const response = await userModel.find({},"-password")
        console.log(response)
       const allUsers = response.filter((users) => users._id.toString() !== userId)
       console.log(allUsers)
     res.json({
        users: allUsers
    })
    }
    catch(e){
        console.log("cannot get all the users")
    }

})

export default userRouter;