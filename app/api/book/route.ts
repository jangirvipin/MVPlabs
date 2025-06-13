import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function POST(req:Request){
    try{
        const data = await req.json();
         if(!data){
             return NextResponse.json({
                 success:false,
                 error:"Body is required"
             },{
                 status:400
             })
         }
         const result = await prisma?.book.create({
             data:data
         });
         return NextResponse.json({
             success:true,
             data:result
         },{
             status:201
         })

    }catch (error:any){
        if (error.code === 'P2002') {
            return NextResponse.json(
                {
                    success: false,
                    error: "A record with this data already exists"
                },
                { status: 409 }
            );
        }
        return NextResponse.json(
            {
                success: false,
                error: "Internal server error"
            },
            { status: 500 }
        );
    }
}

export async function GET(){
    try {
        const result = await prisma.book.findMany()
        return NextResponse.json({
            success: true,
            data: result
        },{
            status:201
        })
    }catch (e:any){
        return NextResponse.json({
            success: false,
            error: "Internal server error"
        },{
            status:500
        })
    }
}