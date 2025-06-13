import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id}= await params;
    const body = await request.json();
    const isBooked=body.isBooked;

    if(!body){
        return NextResponse.json({error:"Body is missing"},{status:401});
    }
    try {
        const result = await prisma.book.update({
            where: {id},
            data: {
                isBooked
            }
        })
        return NextResponse.json({success:true,data:result},{status:201});

    }catch (e){
        console.log("Error while updating query", e);
        return NextResponse.json({success:false,error:"Error while updating query"},{status:400});
    }
}

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id}= await params;

    try{
        const result = await prisma.book.delete({
            where:{id}
        })
        return NextResponse.json({success:true,data:result},{status:201});
    }catch (e){
        console.log("Error while deleting query", e);
        return NextResponse.json({success:false,error:"Error while deleting query"},{status:400})
    }
}


export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    console.log("ID from route:", id);

    try {
        const result = await prisma.book.findUnique({
            where: { id },
        });

        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (e) {
        console.error("Error while getting query:", e);

        return NextResponse.json(
            {
                success: false,
                error: "Error while getting query",
            },
            { status: 500 }
        );
    }
}
