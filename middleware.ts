import {NextRequest, NextResponse} from "next/server"

export async function middleware(request: NextRequest): Promise<NextResponse> {
    const url = new URL(request.url)
    const path = url.pathname

    console.log("Middleware request ", {path})

    return NextResponse.next()
}

export const config = {
    matcher: ["/:path*"],
    skipTrailingSlashRedirect: true,
}
