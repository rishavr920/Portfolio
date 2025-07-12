import { PrismaClient } from "@/generated/prisma"
import { NextResponse } from "next/server";

export async function GET(){
    const db = new PrismaClient();
    try{
        const data = await db.siteAnalytics.findUnique({
            where: {
                siteName : "portfolio",
            },
        });

        const visits = data?.visitors ?? 0;

        const newVisitCount = visits + 1;

        await db.siteAnalytics.update({
            where: {
                siteName : "portfolio",
            },
            data: {
                visitors: newVisitCount,
            },
        });
    }catch(e: any){
        return NextResponse.json({
            success: false,
            message:`${e}`
        });
    }finally{
        db.$disconnect();
    }
}