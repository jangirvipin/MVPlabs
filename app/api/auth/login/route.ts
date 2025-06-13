import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { randomBytes } from "crypto"

export async function POST(request: NextRequest) {
    try {
        const { secretKey } = await request.json()

        // Use server-side environment variable (NOT NEXT_PUBLIC_KEY)
        const validKey = process.env.ADMIN_SECRET_KEY

        if (!validKey) {
            return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 })
        }

        if (secretKey === validKey) {
            // Generate a random session token
            const sessionToken = randomBytes(32).toString("hex")

            // Set secure HTTP-only cookie - using await for cookies()
            const cookieStore = await cookies()
            cookieStore.set("admin-session", sessionToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: "/",
            })

            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json({ success: false, message: "Invalid secret key" }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
    }
}