import {Badge} from "@/components/ui/badge";
import {Sparkles} from "lucide-react";

export default function Hero(){
    return(
        <section className="relative pt-28 px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-7xl mx-auto text-center">
                <Badge
                    variant="outline"
                    className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                >
                    <Sparkles className="w-4 h-4 mr-2" />
                    MVP Scaling Solutions
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                    How We Scale Your{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              MVP
            </span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Transform your minimum viable product into a scalable, enterprise-ready solution with our comprehensive
                    technology stack and proven methodologies.
                </p>
            </div>
        </section>
    )
}