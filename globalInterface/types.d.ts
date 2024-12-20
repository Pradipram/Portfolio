// src/types.d.ts
import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    userId?: string | object;
}
