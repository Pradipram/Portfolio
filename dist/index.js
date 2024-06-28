"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = __importDefault(require("./route/route"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "./build")));
app.use("/api/v1/portfolio", route_1.default);
// app.get(*,function(req,res){
//     res.sendFile(path.join(__dirname,"./client/public/index.html"));
// })
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
