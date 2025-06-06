import {Badge} from "@/components/ui/badge";
import {ArrowRight, Rocket, Target, TrendingUp, Zap} from "lucide-react";

export default function Scaling(){
    const scalingProcess = [
        {
            phase: "Assessment",
            title: "MVP Analysis",
            description: "We analyze your current MVP to identify scaling bottlenecks and opportunities",
            icon: <Target className="w-6 h-6" />,
        },
        {
            phase: "Planning",
            title: "Scaling Strategy",
            description: "Create a comprehensive roadmap for scaling your technology stack",
            icon: <Rocket className="w-6 h-6" />,
        },
        {
            phase: "Implementation",
            title: "Gradual Scaling",
            description: "Implement scaling solutions incrementally to minimize disruption",
            icon: <TrendingUp className="w-6 h-6" />,
        },
        {
            phase: "Optimization",
            title: "Performance Tuning",
            description: "Continuously optimize and monitor performance as you scale",
            icon: <Zap className="w-6 h-6" />,
        },
    ]

    return(
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Scaling Process</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        A systematic approach to scaling your MVP without compromising quality or user experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {scalingProcess.map((step, index) => (
                        <div
                            key={step.phase}
                            className="group flex flex-col items-center p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 relative"
                        >
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                {step.icon}
                            </div>
                            <Badge variant="secondary" className="mb-2 bg-purple-950/50 text-purple-300 border-purple-500/30">
                                {step.phase}
                            </Badge>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {step.description}
                            </p>
                            {index < scalingProcess.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-purple-500/50">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}