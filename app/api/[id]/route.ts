import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params; // Await the params
    const body = await request.json();
    const isSolved = body.isSolved;

    if (!body) {
        return NextResponse.json({ error: "Body is missing" }, { status: 401 });
    }

    try {
        const result: any = await prisma.queries.update({
            where: { id },
            data: {
                isSolved
            }
        });
        return NextResponse.json({ success: true, data: result }, { status: 201 });

    } catch (e) {
        console.log("Error while updating query", e);
        return NextResponse.json({ success: false, error: "Error while updating query" }, { status: 400 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params; // Await the params

    try {
        const result = await prisma.queries.delete({
            where: { id },
        });

        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (e) {
        console.error("Error while deleting query:", e);
        return NextResponse.json(
            { success: false, error: "Error while deleting query" },
            { status: 400 }
        );
    }
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params; // Await the params
    console.log("ID from route:", id);

    try {
        const result = await prisma.queries.findUnique({
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