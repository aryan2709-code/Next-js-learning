// This is the singleton pattern written for the development process , so that we don't end up regenerating the prisma client again and again and so that 
// our database doesn't choke.
import { PrismaClient } from "@prisma/client";

//@ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient()
//@ts-ignore
if(process.env.MODE_ENV  !== 'production') globalThis.prisma = prisma

export default prisma