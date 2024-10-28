import {NextRequest , NextResponse} from "next/server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request : NextRequest){
    try{
        const videos = await prisma.video.findMany({
            orderBy:{createdAt:"desc"}
        })
        return NextResponse.json(videos)
    }catch(err){
        return NextResponse.json({ error : "Error Fetching Videos"})
    }finally{
        await prisma.$disconnect()
    }
}