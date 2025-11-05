import mongoose, { model, Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connect  = mongoose.connect(`mongodb+srv://pavanjadhav9331_db_user:${process.env.MONGO_PWD}@cluster0.ogqkni1.mongodb.net/`)
const userSchema  = new Schema({
    username : {type:String,unique:true,required : true ,trim:true,lowercase : true},
    password: String,
    firstName  : String,
    lastName : String
})

export const userModel = model("users",userSchema)

const AccountSchema = new Schema({
    userId : mongoose.Types.ObjectId,
    balance : Number 
})

export const accountModel = model("balance" , AccountSchema)