import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

// Yahan ! ka matlab hai:

// “Mujhe pata hai ye env variable defined hoga — TypeScript ko force karo ki error mat de.”

// console.log("BOT_TOKEN:", process.env.TELEGRAM_BOT_TOKEN);
// console.log("CHAT_ID:", process.env.TELEGRAM_CHAT_ID);
console.log(process.env.DATABASE_URL); // It should not be undefined

async function sendTelegramMessage(email: string,message: string) {
    const telegramMessage = `
    🔔 <b>New Contact Form Message</b>
    📧 <b>Email:</b> ${email}
    💬 <b>Message:</b> ${message}
    ⏰ <b>Time:</b> ${new Date().toLocaleString()}
  `.trim();

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML',
            }),
    });

    if(!response.ok){
        const errorText = await response.text();
        throw new Error(`Telegram API error: ${response.status} - ${errorText}`);
    }
    return response.json();
}

export async function POST(req: NextRequest){
    const db = new PrismaClient();
    try{
        const {email,message} : {email: string; message: string} = await req.json();

        if(!email || !message){
            return NextResponse.json({
                success: false,
                message: "Empty Email/Message",
            });
        }

        await db.message.create({
            data: {
                email : email,
                message: message
            }
        });

        try{
            await sendTelegramMessage(email,message);
            console.log('Telegram notification sent successfully');
        }catch(telegramError){
            console.log("Failed to send Telegram notification", telegramError);
        }

        return NextResponse.json({
            success: true,
        });
    }catch(e : any){
        console.log('Error in contact form',e);
        return NextResponse.json({
            success: false,
            message: "Error processing request.",
        });
    }finally{
        await db.$disconnect();
    }
}

export async function GET(){
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getUpdates`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json({
        updates: data.result,
        chatId: data.result?.[0]?.message?.chat?.id
    })
}