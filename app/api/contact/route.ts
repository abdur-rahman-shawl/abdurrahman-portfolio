import { NextResponse } from 'next/server';
import connectMongo from '../../../lib/mongodb';
import Inquiry from '../../../models/Inquiry';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectMongo();

    const inquiry = await Inquiry.create({ name, email, message });

    return NextResponse.json({ success: true, data: inquiry }, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to process transmission" }, { status: 500 });
  }
}
