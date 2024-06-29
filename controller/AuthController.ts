import { Request, Response } from "express";
import { User } from "../model";
import bcrypt, { genSalt } from "bcryptjs";

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

        res.status(201).json({
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
        return res.status(200).json({
            success: true,
            message: "successfully logged in",
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", success: "false" });
    }
};
