import mongoose from "mongoose";

const CostSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true,
            unique: true, // ✅ ek project = ek cost record
        },

        // 💰 PAYMENTS
        payments: [
            {
                amount: {
                    type: Number,
                    required: true,
                    min: 0, // 🔥 validation
                },
                type: {
                    type: String,
                    enum: ["advance", "installment"],
                    default: "installment",
                },
                method: {
                    type: String,
                    enum: ["cash", "upi", "bank"],
                    default: "upi",
                },
                note: String,
                date: { type: Date, default: Date.now },
            },
        ],

        // 💸 EXPENSES
        expenses: [
            {
                title: { type: String, required: true },
                amount: {
                    type: Number,
                    required: true,
                    min: 0, // 🔥 validation
                },
                category: {
                    type: String,
                    enum: ["domain", "hosting", "api", "ads", "other"],
                    default: "other",
                },
                vendor: String,
                note: String,
                date: { type: Date, default: Date.now },
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


// =============================
// 🔥 VIRTUALS (SAFE VERSION)
// =============================

// 💰 Total Received
CostSchema.virtual("totalReceived").get(function () {
    return (this.payments || []).reduce((sum, p) => {
        return sum + (Number(p.amount) || 0);
    }, 0);
});

// 💸 Total Expense
CostSchema.virtual("totalExpense").get(function () {
    return (this.expenses || []).reduce((sum, e) => {
        return sum + (Number(e.amount) || 0);
    }, 0);
});

// 📈 Profit
CostSchema.virtual("profit").get(function () {
    const received = (this.payments || []).reduce((s, p) => s + (p.amount || 0), 0);
    const expense = (this.expenses || []).reduce((s, e) => s + (e.amount || 0), 0);
    return received - expense;
});


// =============================
// 🔥 INDEX (ONLY ONE)
// =============================

// ❌ remove duplicate
// CostSchema.index({ projectId: 1 });


// =============================
// 🔥 MODEL EXPORT
// =============================

export default mongoose.models.Cost ||
    mongoose.model("Cost", CostSchema);