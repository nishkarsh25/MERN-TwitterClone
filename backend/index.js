import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";
import path from "path";

dotenv.config({
    path:".env"
})
databaseConnection();
const app = express(); 


const __dirname = path.resolve();
console.log(__dirname);


// middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/tweet", tweetRoute);


app.use(express.static(path.join(__dirname, "/frontend/twitterclone/build")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend/twitterclone", "build", "index.html"));
})
 

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})