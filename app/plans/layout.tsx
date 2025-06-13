'use client'

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {MessageSquare, Rocket} from "lucide-react";
import {useRouter} from "next/navigation";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>){
    const router = useRouter();

    return (
        <section className=" bg-black relative overflow-hidden">
            {children}

            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            {/* Bottom CTA Section */}
            <Card className="bg-gradient-to-r max-w-6xl mx-auto from-purple-950/40 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                <CardContent className="p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Idea?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful entrepreneurs who've launched their products with our expert development team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={()=>router.push('/Book')}
                            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-8 py-6 text-lg font-medium"
                        >
                            <Rocket className="w-5 h-5 mr-2" />
                            Start Your Project Today
                        </Button>
                        <Button
                            onClick={()=>router.push('/Book')}
                            variant="outline"
                            className="bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white px-8 py-6 text-lg"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Schedule a Consultation
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}