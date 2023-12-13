import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./route/route.js";

//dotenv configuration
dotenv.config();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio",router);

// Port
const PORT = process.env.PORT;

//listen
app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}` );
});