"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ExternalLink } from "lucide-react"
import {EmblaOptionsType} from "embla-carousel";
import {motion} from "framer-motion";

const WorkSection = () => {
    const router = useRouter()
    const projects = [
        {
            title: "GoldCommerce Platform",
            description: "A secure platform to buy and sell real gold and silver with full KYC verification.",
            image: "/GoldMani.png",
            tags: ["Nextjs", "AWS", "PostgreSQL", "Docker", "Node js", "Razorpay"],
            link: "https://goldmani.in/",
        },
        {
            title: "AI-SDR",
            description: "Effortlessly streamline your sales pipeline with AI-powered SDR solution.",
            image: "/AISDR.png",
            tags: ["Nextjs", "Docker", "AWS", "Redis", "Kafka", "Razorpay"],
            link: "https://aisdr.vectorai.in/v1",
        },
        {
            title: "Github Showcase",
            description: "A curated portfolio that highlights your best and most impactful projects.",
            image: "/GitSpotlight.png",
            tags: ["React", "GraphQl", "Prisma", "Redis", "AWS", "Docker"],
            link: "https://gitspotlight.vercel.app/",
        },
    ]

    const options: EmblaOptionsType = {
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 5000, stopOnInteraction: true })])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
        onSelect() // Set initial selected index
    }, [emblaApi])

    return (
        <section id="work" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

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

                {/* Embla Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {projects.map((project, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_75%] pl-4 min-w-0">
                                    <Card
                                        className={`overflow-hidden bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-xl shadow-purple-500/10 transition-opacity duration-300
                    ${index === selectedIndex ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
                                    >
                                        {/* Project Number at the top right of the image */}
                                        <div className="relative aspect-[16/8] w-full overflow-hidden group">
                                            {" "}
                                            {/* Adjusted aspect ratio */}
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>{" "}
                                            {/* Subtle gradient for text readability */}
                                            <div className="absolute top-3 left-3">
                                                <h3 className="text-xl font-bold text-white bg-black/30 px-3 py-1 rounded">{project.title}</h3>
                                            </div>
                                            <div className="absolute top-2 right-3 bg-black/50 text-white text-xl font-bold px-3 py-1 rounded-md">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            {" "}
                                            {/* Reduced padding */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {" "}
                                                {/* Reduced bottom margin */}
                                                {project.tags.map((tag, tagIndex) => (
                                                    <Badge
                                                        key={tagIndex}
                                                        variant="outline"
                                                        className="bg-purple-950/50 text-purple-300 border-purple-500/30 text-xs" // Smaller text for tags
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button
                                                onClick={() => router.push(project.link)}
                                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 py-2 text-sm" // Adjusted padding and text size
                                            >
                                                Visit Website <ExternalLink className="ml-2 h-3 w-3" /> {/* Smaller icon */}
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <Button
                            onClick={scrollPrev}
                            variant="outline"
                            size="icon"
                            className="bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white rounded-full h-12 w-12"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <div className="flex gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === selectedIndex ? "w-8 bg-purple-500" : "w-2 bg-purple-500/30"
                                    }`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            onClick={scrollNext}
                            variant="outline"
                            size="icon"
                            className="bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white rounded-full h-12 w-12"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection
