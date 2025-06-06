"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import {useRouter} from "next/navigation";

const WorkSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const router = useRouter();

    const projects = [
        {
            title: "GoldCommerce Platform",
            description:
                "A secure platform to buy and sell real gold and silver with full KYC verification. " +
                "Seamless, transparent, and compliant—trade precious metals with confidence.",
            image: "/GoldMani.png",
            tags: ["Nextjs", "AWS", "PostgreSQL", "Docker","Node js","Razorpay","Jest","Prisma"],
            link:"https://goldmani.in/",
            metrics: { users: "1K+", growth: "300%", time: "12 weeks" },
        },
        {
            title: "AI-SDR",
            description:
                "A platform to Effortlessly streamline your sales pipeline with AI-powered SDR solution, " +
                "offering intelligent outreach and actionable insights to enhance your team's productivity.",
            image: "/AISDR.png",
            tags: ["Nextjs","Docker", "AWS","Redis","Kafka","Razorpay","Ai","Python","Flask"],
            link: "https://aisdr.vectorai.in/v1",
            metrics: { users: "2K+", growth: "350%", time: "8 weeks" },
        },
        {
            title: "Github Showcase",
            description:
                "A curated portfolio that highlights your best and most impactful projects," +
                " demonstrating skills in open-source contributions, and problem-solving. ",
            image: "/GitSpotlight.png",
            tags: ["React", "GraphQl", "Prisma", "Redis","AWS","Docker","Docker compose"],
            link: "https://gitspotlight.vercel.app/",
            metrics: { users: "3K+", growth: "250%", time: "2 weeks" },
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section id="work" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <Badge
                        variant="outline"
                        className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Our Portfolio
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Successful{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Transformations
            </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        See how we've helped startups and enterprises scale their MVPs into market-leading products that captivate
                        users and drive growth
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group"
                        >
                            <Card className="h-full overflow-hidden bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20">
                                <div className="relative overflow-hidden ">
                                    <div className="h-64 flex ">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? "opacity-10" : "opacity-10"}`}
                                    />
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${hoveredIndex === index ? "translate-y-0" : "translate-y-full"}`}
                                    >
                                        <Button
                                            size="sm"
                                            onClick={()=>router.push(project.link)}
                                            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                                        >
                                            View Live <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge
                                                key={tagIndex}
                                                variant="outline"
                                                className="bg-purple-950/50 text-purple-300 border-purple-500/30 hover:bg-purple-900/50 hover:border-purple-400/50 transition-all duration-300"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="px-6 pb-6 pt-0 border-t border-purple-500/20">
                                    <div className="grid grid-cols-3 w-full">
                                        <div className="text-center">
                                            <div className="font-bold text-lg bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                                                {project.metrics.users}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">Active Users</div>
                                        </div>
                                        <div className="text-center border-x border-purple-500/20">
                                            <div className="font-bold text-lg bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                                                {project.metrics.growth}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">Growth</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-lg bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                                                {project.metrics.time}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">Timeline</div>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    )
}

export default WorkSection
