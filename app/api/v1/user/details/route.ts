// This is how you write backend code in Next.js
import { NextResponse } from "next/server";

export function GET() {

    return NextResponse.json({
        user : "harkirat",
        email : "harkirat@gmail.com"
    })
}


export function POST() {
    return NextResponse.json({
        user : "harkirat",
        email : "harkirat@gmail.com"
    })
}

export function PUT() {
    return NextResponse.json({
        user : "harkirat",
        email : "harkirat@gmail.com"
    })
}