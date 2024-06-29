"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "";
const CheckAuth = (req, res, next) => {
    // console.log("cookies: ", req.cookies);
    const token = req.cookies.authToken;
    // console.log("cookies I am geting is : ", token);
    // console.log("secret key is : ", JWT_SECRET);
    if (!token) {
        return res.status(401).json({ message: "User not authenticated" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // Type guard to check if decoded is JwtPayload
        if (typeof decoded !== "string" && "userId" in decoded) {
            req.userId = decoded.userId;
            next();
        }
        else {
            throw new Error("Invalid token payload");
        }
    }
    catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
exports.CheckAuth = CheckAuth;
