import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Check if the request is for admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const adminSession = request.cookies.get("admin-session")

        if (!adminSession) {
            // Redirect to login if no session cookie
            return NextResponse.redirect(new URL("/auth", request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"],
}
