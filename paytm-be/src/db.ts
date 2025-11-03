import mongoose, { model, Schema } from "mongoose"


const connect  = mongoose.connect("mongodb://localhost:27017/paytm")
const userSchema  = new Schema({
    username : {type:String,unique:true,required : true ,trim:true,lowercase : true},
    password: String,
    firstName  : String,
    lastName : String
})

export const userModel = model("users",userSchema)

