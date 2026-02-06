import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  // Dummy authentication
  if (email && password) {
    return NextResponse.json({
      success: true,
      user: {
        id: 1,
        name: "Demo User",
        email,
      },
      token: "dummy-jwt-token", // later replace with real JWT
    });
  }

  return NextResponse.json(
    { success: false, error: "Invalid credentials" },
    { status: 401 }
  );
}
