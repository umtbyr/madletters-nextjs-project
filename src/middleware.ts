import { createId } from "@paralleldrive/cuid2";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get("userId")) {
    response.cookies.set("userId", createId(), {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
    });
    response.cookies.set("isCreated", "true", {
      maxAge: 60 * 30,
      path: "/",
    });
  } else {
    response.cookies.set("isCreated", "false", {
      maxAge: 15,
      path: "/",
    });
  }

  return response;
}
