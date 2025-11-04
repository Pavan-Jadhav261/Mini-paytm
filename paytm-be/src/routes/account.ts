import express, { Response } from "express"
import { AuthMiddleware, AuthRequest } from "../middleware/AuthMiddleWare";
import { accountModel } from "../db";
import mongoose from "mongoose";

const account = express();

account.get("/balance",AuthMiddleware,async(req : AuthRequest,res : Response)=>{
    const userId = req.userId
    try{
        const response = await accountModel.findOne({
            userId : userId
        })
        res.json({
            msg : response?.balance
        })
    }catch(e){
        res.json({
            msg:"something went wrong could not fetch the balance"
        })
    }
})

account.post("/transaction",AuthMiddleware , async(req:AuthRequest , res:Response)=>{
    const amount = req.body.amount
    const from = req.userId
    const to = req.body.to
    const session = await mongoose.startSession();
     session.startTransaction()
    const response = await accountModel.findOne({
        userId : from
    }).session(session)

    if(!response?.balance || response?.balance < amount){
        await session.abortTransaction()
        return  res.json({
            msg : "insufficient balance"
        })
    }   try{

    
        await accountModel.findOneAndUpdate({userId : from}, {
            $inc:{
                balance :  -amount
            }
        }).session(session)
        await accountModel.findOneAndUpdate({
            userId : to
        },{
            $inc : {
                balance : amount
            }
        }).session(session)

       await session.commitTransaction()

        res.json({
            msg : "transication sucessfull"
        })
    }catch(e){
       await session.abortTransaction()
        res.json({
            msg: "transication failed"
        })
    }
    finally {
        session.endSession()
    }
})

export default account