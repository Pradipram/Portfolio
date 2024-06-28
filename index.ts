// index.ts
import express from "express";
import dotenv from "dotenv";
import router from "./route/route";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,"./build")));

app.use("/api/v1/portfolio",router);

// app.get(*,function(req,res){
//     res.sendFile(path.join(__dirname,"./client/public/index.html"));
// })
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
