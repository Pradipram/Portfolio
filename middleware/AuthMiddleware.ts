import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { AuthenticatedRequest } from "../globalInterface";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const CheckAuth = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    // console.log("cookies: ", req.cookies);

    const token = req.cookies.authToken;
    // console.log("cookies I am geting is : ", token);
    // console.log("secret key is : ", JWT_SECRET);

    if (!token) {
        return res.status(401).json({ message: "User not authenticated" });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        // Type guard to check if decoded is JwtPayload
        if (typeof decoded !== "string" && "userId" in decoded) {
            req.userId = decoded.userId;
            next();
        } else {
            throw new Error("Invalid token payload");
        }
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
