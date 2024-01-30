import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  //   protected profile

  if (pathname.startsWith("/profile")) {
    const { user } = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user?.status !== 2) {
      toast.error("پروفایل شما در انتظار تایید است");
      return NextResponse.redirect(new URL("/auth", url));
    }
  }
  //   protected admin

  if (pathname.startsWith("/admin")) {
    const { user } = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", url));
    }
  }

  //   protected auth
  if (pathname.startsWith("/auth")) {
    const { user, role } = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/${role}`, url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/auth", "/profile/:path*"],
};
