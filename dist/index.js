"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = __importDefault(require("./route/route"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AdminRoute_1 = __importDefault(require("./route/AdminRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const corsOptions = {
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Enable cookies and CORS for credentials
};
app.use((0, cookie_parser_1.default)());
// app.use(requireAuth);
// app.use(bodyParser.json({ extended: true }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(path_1.default.join(__dirname, "./build")));
app.use("/", route_1.default);
app.use("/admin", AdminRoute_1.default);
// app.get(*,function(req,res){
//     res.sendFile(path.join(__dirname,"./client/public/index.html"));
// })
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
