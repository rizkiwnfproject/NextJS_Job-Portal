import { hashPassword } from "@/lib/utils";
import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // validasi basic
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // cek apakah email sudah ada
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await hashPassword(body.password);

    // simpan user baru
    const result = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error("SIGNUP ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
