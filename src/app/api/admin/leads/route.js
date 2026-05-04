import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Lead from "@/models/Lead";
import { verifyAdmin } from "@/lib/auth";
import { transporter } from "@/lib/mailer";

// 🔥 GET ALL LEADS
export async function GET() {
    try {
        await connectDB();
        const { user: authUser, error } = await verifyAdmin();
        const leads = await Lead.find().sort({ createdAt: -1 });

        return NextResponse.json(leads);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// 🔥 CREATE LEAD (optional form)
export async function POST(req) {
    try {
        await connectDB();

        const { user: authUser, error } = await verifyAdmin();

        const data = await req.json();

        // ✅ DB save
        const lead = await Lead.create(data);

        // ✅ Admin ko mail
        await transporter.sendMail({
            from: `"Trioscript" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New ${data.project} Demo Request 🚀`,
            html: `
    <div style="font-family: Arial, sans-serif; background:#0a192f; padding:20px; color:#fff;">
      
      <div style="max-width:600px; margin:auto; background:#112240; padding:20px; border-radius:10px;">
        
        <h2 style="color:#38bdf8;">🚀 New Demo Request</h2>
        
        <p>You have received a new demo request from your website.</p>

        <hr style="border:1px solid #1f3a5f;" />

        <h3 style="color:#38bdf8;">👤 User Details</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Website Type:</b> ${data.project}</p>
        <p><b>Message:</b> ${data.message}</p>

        <div style="margin-top:15px;">
          <a href="mailto:${data.email}" 
             style="background:#38bdf8; color:#0a192f; padding:8px 12px; text-decoration:none; border-radius:5px;">
             Reply to Client
          </a>
        </div>

        <hr style="border:1px solid #1f3a5f;" />

        <h3 style="color:#38bdf8;">🏢 Your Business Info</h3>
        <p><b>Company:</b> Trioscript</p>
        <p><b>Services:</b> Web Development, Portfolio, Business Websites</p>
        <p><b>Email:</b> info.trioscript@gmail.com</p>
        <p><b>Website:</b> https://trioscript.in</p>

        <div style="margin-top:20px;">
          <a href="https://trioscript.in" 
             style="background:#38bdf8; color:#0a192f; padding:10px 15px; text-decoration:none; border-radius:5px;">
             Visit Website
          </a>
        </div>

        <p style="margin-top:20px; font-size:12px; color:#94a3b8;">
          Auto-generated from your website.
        </p>

      </div>
    </div>
  `,
        });

        // ✅ Client auto reply
        await transporter.sendMail({
            to: data.email,
            subject: "Your Demo Request is Received ✔",
            html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
      
      <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:10px;">
        
        <h2 style="color:#0a192f;">Hi ${data.name} 👋</h2>
        
        <p>Thank you for contacting <b>Trioscript</b>.</p>
        
        <p>We have successfully received your request for a <b>${data.project}</b> website.</p>

        <p>Our team will review your requirements and get back to you shortly.</p>

        <hr />

        <h3>📋 Your Request Summary</h3>
        <p><b>Project Type:</b> ${data.project}</p>
        <p><b>Message:</b> ${data.message}</p>

        <hr />

        <h3>📞 Contact Us</h3>
        <p>Email: info.trioscript@gmail.com</p>
        <p>Website: https://trioscript.in</p>

        <div style="margin-top:20px;">
          <a href="https://trioscript.in" 
             style="background:#0a192f; color:#fff; padding:10px 15px; text-decoration:none; border-radius:5px;">
             Visit Our Website
          </a>
        </div>

        <p style="margin-top:20px; font-size:12px; color:#666;">
          We appreciate your interest in working with us 🚀
        </p>

      </div>
    </div>
  `,
        });

        return NextResponse.json(lead);

    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}