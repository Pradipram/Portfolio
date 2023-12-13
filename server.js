import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./route/route.js";
import path from 'path'

const __dirname = path.resolve();

//dotenv configuration
dotenv.config();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'./client/build')));

//routes
app.use("/api/v1/portfolio",router);

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// Port
const PORT = process.env.PORT;

//listen
app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}` );
});