import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        
    }).catch((error)=>{
        
    })
}
