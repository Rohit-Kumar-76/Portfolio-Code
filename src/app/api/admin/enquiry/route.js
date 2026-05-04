import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { transporter } from "@/lib/mailer";
import { verifyAdmin } from "@/lib/auth";

// 🔥 GET ALL LEADS
export async function GET() {
  try {
    await connectDB();
    const { user: authUser, error } = await verifyAdmin();

    const leads = await Enquiry.find().sort({ createdAt: -1 });

    return NextResponse.json(leads);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}




export async function POST(req) {
  try {
    await connectDB();
    const { user: authUser, error } = await verifyAdmin();

    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const lead = await Enquiry.create({
      name,
      email,
      phone,
      message,
      status: "new",
    });


    await transporter.sendMail({
      from: `"Trioscript Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry Received 📩",
      html: `
    <div style="font-family: Arial, sans-serif; background:#0a192f; padding:20px; color:#fff;">
      
      <div style="max-width:600px; margin:auto; background:#112240; padding:20px; border-radius:10px;">
        
        <h2 style="color:#38bdf8;">📩 New Enquiry</h2>
        
        <p>You have received a new enquiry from your website.</p>

        <hr style="border:1px solid #1f3a5f;" />

        <h3 style="color:#38bdf8;">👤 User Details</h3>
        <p><b>Name:</b> ${lead.name}</p>
        <p><b>Email:</b> ${lead.email}</p>
        <p><b>Phone:</b> ${lead.phone}</p>
        <p><b>Message:</b> ${lead.message}</p>

        <div style="margin-top:15px;">
          <a href="mailto:${lead.email}" 
             style="background:#38bdf8; color:#0a192f; padding:8px 12px; text-decoration:none; border-radius:5px;">
             Reply to Client
          </a>
        </div>

        <hr style="border:1px solid #1f3a5f;" />

        <h3 style="color:#38bdf8;">🏢 Your Business Info</h3>
        <p><b>Company:</b> Trioscript</p>
        <p><b>Email:</b> info.trioscript@gmail.com</p>
        <p><b>Website:</b> https://trioscript.in</p>

        <div style="margin-top:20px;">
          <a href="https://trioscript.in" 
             style="background:#38bdf8; color:#0a192f; padding:10px 15px; text-decoration:none; border-radius:5px;">
             Visit Website
          </a>
        </div>

        <p style="margin-top:20px; font-size:12px; color:#94a3b8;">
          Auto-generated from your website enquiry form.
        </p>

      </div>
    </div>
  `,
    });

    // cleint auto reply 

    await transporter.sendMail({
      to: lead.email,
      subject: "We Received Your Enquiry ✔",
      html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
      
      <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:10px;">
        
        <h2 style="color:#0a192f;">Hi ${lead.name} 👋</h2>
        
        <p>Thank you for contacting <b>Trioscript</b>.</p>
        
        <p>We have successfully received your enquiry.</p>

        <p>Our team will review your message and get back to you shortly.</p>

        <hr />

        <h3>📋 Your Message</h3>
        <p>${lead.message}</p>

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


    return NextResponse.json({
      message: "Enquiry submitted",
      lead,
    });

  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}