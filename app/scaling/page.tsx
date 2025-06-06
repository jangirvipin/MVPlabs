import {
    Shield,
    Users,
    Rocket,
    TrendingUp,
} from "lucide-react"
import Hero from "@/components/Scale/Hero";
import Scaling from "@/components/Scale/Scaling";
import Technology from "@/components/Scale/Technology";

export default function Component() {


    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Hero Section */}
            <Hero />

            {/* Scaling Process */}
            <Scaling />

            {/* Technology Sections */}
            <Technology />

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
                        <p className="text-lg text-gray-300">
                            Our scaling solutions have helped hundreds of MVPs grow into successful products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { number: "5+", label: "MVPs Scaled", icon: <Rocket className="w-6 h-6" /> },
                            { number: "10x", label: "Average Growth", icon: <TrendingUp className="w-6 h-6" /> },
                            { number: "99%", label: "Uptime Achieved", icon: <Shield className="w-6 h-6" /> },
                            { number: "5K+", label: "Users Supported", icon: <Users className="w-6 h-6" /> },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105"
                            >
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
