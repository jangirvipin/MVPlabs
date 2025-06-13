"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Sparkles,
    Zap,
    CheckCircle,
    Clock,
    DollarSign,
    ArrowLeft,
    Star,
    Users,
    Code,
    Palette,
    Rocket,
    Shield,
    MessageSquare,
    Calendar,
} from "lucide-react"
import { useRouter } from "next/navigation"

// Icon component placeholder
const IconComponent = ({ className }: { className?: string }) => {
    return <Rocket className={className} />
}


export default function PlanDetails({ data }: { data: any }) {
    const router = useRouter()


    const handleGetStarted = () => {
        // Navigate to booking or contact form
        router.push("/book")
    }

    const handleContactUs = () => {
        // Navigate to contact form
        router.push("/#contact")
    }

    return (
        <section className="bg-black relative overflow-hidden min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <Button
                            onClick={() => router.back()}
                            variant="outline"
                            className="mr-4 bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Plans
                        </Button>
                        <Badge
                            variant="outline"
                            className="bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Development Plan
                        </Badge>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl shadow-lg mr-4">
                            <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        {data.isPopular && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-3 py-1">
                                <Star className="w-4 h-4 mr-1" />
                                Most Popular
                            </Badge>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                        {data.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                        {data.subtitle}
                    </p>

                    {/* Pricing Section */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <span className="text-4xl md:text-5xl font-bold text-white">{data.price}</span>
                        <span className="text-2xl md:text-3xl text-gray-400">{data.priceRange}</span>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-300 mb-12">
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-purple-400" />
                            <span>{data.timeline}</span>
                        </div>
                        <div className="flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                            <span>Fixed Price</span>
                        </div>
                    </div>
                </div>

                {/* Main Content - Reorganized Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Features Section - Now spans 8 columns on large screens */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="prose prose-invert max-w-none mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">What's Included in Our MVP Package</h2>
                            <p className="text-gray-300 text-lg">
                                Our MVP development approach focuses on delivering a functional product that addresses your core
                                business needs while minimizing development time and costs. Here's what you can expect:
                            </p>
                        </div>

                        {data.categories.map((category:any, categoryIndex:any) => (
                            <Card
                                key={categoryIndex}
                                className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10 animate-fade-in-up"
                                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                                        {categoryIndex === 0 && <Code className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 1 && <Palette className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 2 && <Rocket className="w-6 h-6 mr-3 text-purple-400" />}
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-6">{category.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {category.features.map((feature:any, featureIndex:any) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-start space-x-3 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10 hover:border-purple-400/30 transition-all duration-300"
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300 leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Development Process Section - New addition */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white flex items-center">
                                    <Calendar className="w-6 h-6 mr-3 text-purple-400" />
                                    Our Development Process
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-6">
                                    We follow a streamlined development process to ensure your MVP is delivered on time and meets your
                                    business objectives.
                                </p>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">1</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Discovery & Planning</h3>
                                        <p className="text-gray-300">
                                            We begin with a thorough analysis of your requirements, defining the core features and creating a
                                            detailed development roadmap.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">2</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Design & Development</h3>
                                        <p className="text-gray-300">
                                            Our team creates the UI/UX design and builds the core functionality, focusing on delivering a
                                            clean, intuitive user experience.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">3</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Testing & Refinement</h3>
                                        <p className="text-gray-300">
                                            We thoroughly test all features, fix bugs, and optimize performance to ensure your MVP is stable
                                            and ready for users.
                                        </p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">4</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Deployment & Support</h3>
                                        <p className="text-gray-300">
                                            We deploy your MVP to production, provide documentation, and offer post-launch support to help you
                                            gather initial user feedback.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar - Now spans 4 columns on large screens */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* CTA Card */}
                        <Card className="bg-gradient-to-b from-purple-950/40 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 shadow-lg shadow-purple-500/10 sticky top-6">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
                                    <p className="text-gray-300">Let's bring your vision to life</p>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        onClick={handleGetStarted}
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 py-6 text-lg font-medium"
                                    >
                                        <Zap className="w-5 h-5 mr-2" />
                                        {data.buttonText}
                                    </Button>

                                    <Button
                                        onClick={handleContactUs}
                                        variant="outline"
                                        className="w-full bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white py-6 text-lg"
                                    >
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Discuss Requirements
                                    </Button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-purple-500/20">
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                        <span>Project Timeline:</span>
                                        <span className="text-white font-medium">{data.timeline}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <span>Investment:</span>
                                        <span className="text-white font-medium">
                      {data.price}
                                            {data.priceRange}
                    </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Info Cards */}
                        <Card className="bg-gradient-to-b from-green-950/30 to-green-900/20 backdrop-blur-sm border border-green-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Quality Guarantee</h4>
                                </div>
                                <p className="text-green-200 text-sm leading-relaxed">
                                    We ensure high-quality code, thorough testing, and complete documentation for your project. Our
                                    development practices follow industry standards to deliver a reliable product.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-b from-blue-950/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Users className="w-6 h-6 text-blue-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Dedicated Support</h4>
                                </div>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    Get direct access to our development team throughout the project lifecycle. We provide regular
                                    updates, respond quickly to your questions, and ensure transparent communication.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-b from-orange-950/30 to-orange-900/20 backdrop-blur-sm border border-orange-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Calendar className="w-6 h-6 text-orange-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Flexible Timeline</h4>
                                </div>
                                <p className="text-orange-200 text-sm leading-relaxed">
                                    We work with your schedule and can adjust timelines based on your specific needs. Our agile approach
                                    allows us to adapt to changing requirements while keeping your project on track.
                                </p>
                            </CardContent>
                        </Card>

                        {/* New FAQ Card */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">Frequently Asked Questions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="text-white font-medium mb-1">What exactly is an MVP?</h4>
                                    <p className="text-gray-300 text-sm">
                                        A Minimum Viable Product (MVP) is a version of your product with just enough features to satisfy
                                        early customers and provide feedback for future development.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Can I add more features later?</h4>
                                    <p className="text-gray-300 text-sm">
                                        The MVP is designed to be scalable. We can help you expand functionality based on user feedback and
                                        business growth.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Do I own the source code?</h4>
                                    <p className="text-gray-300 text-sm">
                                        Yes, you receive full ownership of all code and assets developed during the project.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    )
}
