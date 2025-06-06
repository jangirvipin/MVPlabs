import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, ServerCog, Sparkles } from "lucide-react"
import {useRouter} from "next/navigation";

const HeroSection = () => {
    const router = useRouter();
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Transform Your Vision
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Your {" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              MVP
            </span>{" "}
                        Deserves
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Enterprise-Scale Thinking
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        We craft exceptional digital experiences that transform your Minimum Viable Product into a scalable,
                        market-ready solution that captivates users and accelerates growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <Button
                            onClick={()=>router.push("/scaling")}
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg px-10 py-4 rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                            How we Scale
                            <ArrowRight className="ml-3" size={20} />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-10 py-4 rounded-full border-purple-500/50 text-purple-300 hover:bg-purple-950/50 hover:border-purple-400 backdrop-blur-sm transition-all duration-300"
                        >
                            Book a Slot
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="group flex flex-col items-center p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                <Code className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                Scalable Architecture
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                We transform MVPs into robust, scalable systems using modern stacks and proven engineering patterns.
                            </p>
                        </div>


                        <div className="group flex flex-col items-center p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                <Zap className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                Cloud-Native Speed
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Deploy scalable, cloud-native solutions with rapid provisioning, CI/CD pipelines, and performance at scale.
                            </p>
                        </div>

                        <div className="group flex flex-col items-center p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                <ServerCog className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                Scalable DevOps
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Automate everything—from CI/CD to infrastructure—ensuring fast, secure, and scalable deployments across environments.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
