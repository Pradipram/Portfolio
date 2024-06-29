"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.SingUp = void 0;
const model_1 = require("../model");
const bcryptjs_1 = __importStar(require("bcryptjs"));
const SingUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log("email: ", email, "password: ", password);
    try {
        const isExist = yield model_1.User.findOne({ email: email });
        if (isExist) {
            return res
                .status(400)
                .json({ message: "email already exist", success: false });
        }
        const salt = yield (0, bcryptjs_1.genSalt)(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const newUser = new model_1.User({ email, password: hashedPassword });
        yield newUser.save();
        res.status(201).json({
            message: "user created successfully",
            success: true,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
});
exports.SingUp = SingUp;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield model_1.User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username of password",
            });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username of password",
            });
        }
        return res.status(200).json({
            success: true,
            message: "successfully logged in",
            email: user.email,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", success: "false" });
    }
});
exports.Login = Login;