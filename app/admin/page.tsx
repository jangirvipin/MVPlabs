import { Card } from "@/components/ui/card"
import {  MessageSquare,  } from "lucide-react"
import Query from "@/components/admin/Query";
import prisma from "@/lib/db";

interface ResultType {
    result: any | null
    error: string | null
}


async function getResult(): Promise<ResultType> {
    try {
        const response:any = await prisma.queries.findMany();
        return {
            result: response,
            error: null,
        }
    } catch (e: any) {
            return {
                result: null,
                error: "Something went wrong",
            }
        }
}

export default async function QueriesDisplay() {
    const response = await getResult();

    const {result ,error}=response

    if (error) {
        console.log("error is",error)
        return (
            <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex items-center justify-center">
                    <Card className="p-8 text-center bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                        <div className="text-purple-400 mb-4">
                            <MessageSquare className="h-12 w-12 mx-auto" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Error Loading Queries</h2>
                        <p className="text-gray-300">Something went wrong while fetching the data.</p>
                    </Card>
                </div>
            </section>
        )
    }

    return (
       <Query data={result} />
    )
}
