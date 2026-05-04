import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: String,
        phone: String,
        message: String,

        status: {
            type: String,
            enum: ["new", "contacted", "working", "done"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);