import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
    mobile: String,
    whatsapp: String,
    supportEmail: String,
    infoEmail: String,

    // 🔥 GLOBAL OFFER
    offerPercentage: {
        type: Number,
        default: 0,
    },

    // 🔥 PACKAGE PRICING
    pricing: {
        starter: Number,
        business: Number,
        pro: Number,
    },

    totalBalance: Number,
});

export default mongoose.models.Settings ||
    mongoose.model("Settings", SettingsSchema);