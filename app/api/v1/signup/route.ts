
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
// Due to the hot module replacement , this line of code below runs again and agin and we end up creating too many connections to our database ,
//  which is problematic , to resolve this issue , we can create a singleton , i.e a line of code that runs only once.
const client = new PrismaClient();



export async function POST(req: NextRequest) {
    const router = useRouter();

    const data = await req.json();
   await client.user.create({
        data : {
            username : data.username,
            password : data.password
        }
    })

    return NextResponse.json({
        message : "You have signed up"
    })
}