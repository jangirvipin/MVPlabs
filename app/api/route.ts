import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function POST(request:NextRequest){
    try{
        const data = await request.json();
        console.log(data);

        if(!data){
            return NextResponse.json({
                success:false,
                error:"Body is required"
            }, {
                status: 400
            })
        }

        console.log(data);
        const result = await prisma?.queries.create({
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
        console.log(error);
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
        const result = await prisma.queries.findMany();
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

