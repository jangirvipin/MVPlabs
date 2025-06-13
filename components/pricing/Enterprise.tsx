"use client"
import { useRouter } from "next/navigation"
import {
    ArrowLeft,
    Calendar,
    CheckCircle,
    Clock,
    Cloud,
    Code,
    Crown,
    Database,
    DollarSign,
    FileCode,
    Headphones,
    Lock,
    MessageSquare,
    Server,
    Shield,
    Sparkles,
    Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Enhanced data for the Scratch to Scalable service

export default function ScratchToScalablePage({data}:{data:any}) {
    const router = useRouter()

    const handleGetStarted = () => {
        router.push("/Book")
        // Add your navigation or form submission logic here
    }

    const handleContactUs = () => {
        router.push("/Book")
        // Add your contact form or navigation logic here
    }

    return (
        <section className="bg-black relative overflow-hidden min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 lg:px-8 py-12 relative z-10">
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
                            Enterprise Plan
                        </Badge>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl shadow-lg mr-4">
                            <Crown className="h-12 w-12 text-white" />
                        </div>
                        <Badge className="bg-gradient-to-r from-purple-800 to-purple-900 text-white border-0 px-3 py-1">
                            <Shield className="w-4 h-4 mr-1" />
                            Enterprise Grade
                        </Badge>
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
                            <span>Custom Pricing</span>
                        </div>
                    </div>
                </div>

                {/* Main Content - Reorganized Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Features Section - Now spans 8 columns on large screens */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="prose prose-invert max-w-none mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Development</h2>
                            <p className="text-gray-300 text-lg">
                                Our comprehensive enterprise solution delivers a complete, production-ready application built with
                                scalability, security, and performance at its core. We handle everything from architecture design to
                                deployment and ongoing support.
                            </p>
                        </div>

                        {/* Enterprise Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {data.enterpriseFeatures.map((feature:any, index:any) => (
                                <Card
                                    key={index}
                                    className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                                                <feature.icon className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {data.categories.map((category:any, categoryIndex:any) => (
                            <Card
                                key={categoryIndex}
                                className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10 animate-fade-in-up"
                                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                                        {categoryIndex === 0 && <FileCode className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 1 && <Server className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 2 && <Headphones className="w-6 h-6 mr-3 text-purple-400" />}
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

                        {/* Enterprise Development Process */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white flex items-center">
                                    <Calendar className="w-6 h-6 mr-3 text-purple-400" />
                                    Enterprise Development Process
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-6">
                                    Our enterprise development follows a comprehensive process designed to deliver a robust, scalable
                                    solution tailored to your specific business needs.
                                </p>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">1</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Discovery & Requirements</h3>
                                        <p className="text-gray-300">
                                            We conduct in-depth workshops to understand your business processes, technical requirements, and
                                            long-term goals to create a comprehensive project roadmap.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">2</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Architecture & Design</h3>
                                        <p className="text-gray-300">
                                            Our architects design a scalable, secure system architecture with detailed technical
                                            specifications, database schemas, and API contracts.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">3</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Development & QA</h3>
                                        <p className="text-gray-300">
                                            Our development teams work in agile sprints, with regular demos and feedback sessions. Rigorous
                                            testing ensures quality at every stage.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">4</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Infrastructure Setup</h3>
                                        <p className="text-gray-300">
                                            We establish your cloud infrastructure with proper environments, security protocols, monitoring,
                                            and CI/CD pipelines for seamless deployment.
                                        </p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">5</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Deployment & Handover</h3>
                                        <p className="text-gray-300">
                                            We deploy your solution to production, provide comprehensive documentation, conduct team training,
                                            and establish ongoing support processes.
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
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready for Enterprise?</h3>
                                    <p className="text-gray-300">Build a solution that scales with your business</p>
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
                                        Schedule Consultation
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

                        {/* Enterprise Benefits */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">Enterprise Benefits</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Database className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Unlimited Scalability</h4>
                                        <p className="text-gray-300 text-sm">Support millions of users and petabytes of data</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Lock className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Enterprise Security</h4>
                                        <p className="text-gray-300 text-sm">Bank-level security with compliance certifications</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Code className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Future-Proof Technology</h4>
                                        <p className="text-gray-300 text-sm">Built with modern, maintainable technology stack</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Cloud className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Multi-Region Deployment</h4>
                                        <p className="text-gray-300 text-sm">Global infrastructure for worldwide performance</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Enterprise Case Study */}
                        <Card className="bg-gradient-to-b from-blue-950/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/30">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white flex items-center">
                                    <FileCode className="w-5 h-5 mr-2 text-blue-400" />
                                    Case Study
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h4 className="text-white font-semibold mb-2">FinTech Enterprise Platform</h4>
                                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                                    We built a scalable financial platform processing $50M in daily transactions with 99.99% uptime and
                                    full regulatory compliance.
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-blue-300">Results:</span>
                                    <span className="text-white">500% ROI in 18 months</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Enterprise Support */}
                        <Card className="bg-gradient-to-b from-green-950/30 to-green-900/20 backdrop-blur-sm border border-green-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Headphones className="w-6 h-6 text-green-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Dedicated Enterprise Support</h4>
                                </div>
                                <p className="text-green-200 text-sm leading-relaxed">
                                    Your enterprise solution includes 24/7 priority support, dedicated account management, quarterly
                                    business reviews, and proactive monitoring to ensure optimal performance.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Enterprise Clients */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">Trusted By Enterprises</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-purple-950/40 h-16 rounded-lg flex items-center justify-center text-white font-bold">
                                        ACME Corp
                                    </div>
                                    <div className="bg-purple-950/40 h-16 rounded-lg flex items-center justify-center text-white font-bold">
                                        TechGiant
                                    </div>
                                    <div className="bg-purple-950/40 h-16 rounded-lg flex items-center justify-center text-white font-bold">
                                        FinServe
                                    </div>
                                    <div className="bg-purple-950/40 h-16 rounded-lg flex items-center justify-center text-white font-bold">
                                        MedGroup
                                    </div>
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
