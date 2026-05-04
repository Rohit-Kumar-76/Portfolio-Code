import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: String,
        phone: String,
        project: String,

        status: {
            type: String,
            enum: ["new", "contacted", "working", "done"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);