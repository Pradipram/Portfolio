// index.ts
import express from "express";
import dotenv from "dotenv";
import router from "./route/route";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/portfolio",router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
