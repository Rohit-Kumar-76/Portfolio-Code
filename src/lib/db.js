import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("Please define MONGO_URI in .env.local");
}

// global cache (Next.js me multiple connection se bachne ke liye)
let cached = global.mongoose || { conn: null, promise: null };

export const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
            dbName: "portfolio", // yaha apna DB name de sakta hai
        });
    }

    cached.conn = await cached.promise;
    global.mongoose = cached;

    console.log("✅ MongoDB Connected");

    return cached.conn;
};