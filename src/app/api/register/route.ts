import { NextResponse } from "next/server";

type User = {
  id: number;
  name: string;
  email: string;
  password: string; // In real app, hash this
};

let users: User[] = []; // Dummy in-memory users

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return NextResponse.json(
      { success: false, message: "Email already registered" },
      { status: 409 }
    );
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    password, // Real app → hash password
  };

  users.push(newUser);

  return NextResponse.json({
    success: true,
    message: "Account created successfully",
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
}
