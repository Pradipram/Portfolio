import { Request, Response } from "express";
import { User } from "../model";
import bcrypt, { genSalt } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../globalInterface";

export const SingUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log("email: ", email, "password: ", password);
    try {
        const isExist = await User.findOne({ email: email });
        if (isExist) {
            return res
                .status(400)
                .json({ message: "email already exist", success: false });
        }
        const salt = await genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();

        return res.status(201).json({
            message: "user created successfully",
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username of password",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username of password",
            });
        }

        const JWT_SECRET = process.env.JWT_SECRET || "";
        // console.log("Jwt secret", JWT_SECRET);
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "1h",
        });

        // console.log(token);

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 3600000,
        });

        return res.status(200).json({
            success: true,
            message: "successfully logged in",
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", success: "false" });
    }
};

export const getUserController = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    // console.log("coming in getusercontroller");
    const userId = req.userId;
    // console.log("userID is : ", userId);
    try {
        const user = await User.findById(userId);
        // console.log("user", user);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
