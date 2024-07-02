// index.ts
import express from "express";
import dotenv from "dotenv";
import router from "./route/route";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRoutes from "./route/AdminRoute";

dotenv.config();

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Enable cookies and CORS for credentials
};

app.use(cookieParser());
// app.use(requireAuth);
// app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "./build")));

app.use("/", router);
app.use("/admin", adminRoutes);

// app.get(*,function(req,res){
//     res.sendFile(path.join(__dirname,"./client/public/index.html"));
// })
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
