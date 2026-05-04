import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        businessType: { type: String, required: true },
        clientName: { type: String, required: true },
        clientNumber: { type: String },
        developerName: { type: String, required: true },

        totalDays: { type: Number, required: true },

        startDate: {
            type: Date,
            default: Date.now,
        },

        status: {
            type: String,
            enum: ["pending", "working", "completed", "canceled"],
            default: "pending",
        },

        projectType: {
            type: String,
            enum: ["Starter", "Business", "Pro"],
            default: "Starter",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);