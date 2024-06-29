import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
