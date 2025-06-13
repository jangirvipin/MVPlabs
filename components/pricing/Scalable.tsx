"use client"
import { useRouter } from "next/navigation"
import {
    ArrowLeft,
    Calendar,
    CheckCircle,
    Clock,
    Cloud,
    Code,
    Database,
    DollarSign,
    Lock,
    MessageSquare,
    Rocket,
    Server,
    Shield,
    Sparkles,
    Star,
    Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Icon component placeholder for Users icon
const Users = ({ className }: { className?: string }) => {
    return <div className={className}>👥</div>
}


export default function MVPToScalablePage({data}:{data:any}) {
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
            <div className="max-w-6xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-12 relative z-10">
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
                            Scaling Plan
                        </Badge>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl shadow-lg mr-4">
                            <Rocket className="h-12 w-12 text-white" />
                        </div>
                        {data.isPopular && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-3 py-1">
                                <Star className="w-4 h-4 mr-1" />
                                {data.popularBadge}
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
                            <h2 className="text-3xl font-bold text-white mb-4">Scale Your MVP for Growth</h2>
                            <p className="text-gray-300 text-lg">
                                Your MVP has proven the concept, but now it's time to prepare for growth. Our scaling service transforms
                                your initial product into a robust, scalable solution that can handle increased user loads, maintain
                                performance, and support your business expansion.
                            </p>
                        </div>

                        {/* Why Scale Your MVP - New section */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white flex items-center">
                                    <Zap className="w-6 h-6 mr-3 text-purple-400" />
                                    Why Scale Your MVP?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-6">
                                    Many MVPs are built quickly to validate ideas, but aren't designed to handle significant growth.
                                    Scaling issues typically emerge when:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-purple-950/20 p-5 rounded-lg border border-purple-500/10">
                                        <h3 className="text-white font-semibold mb-2 flex items-center">
                                            <Server className="w-5 h-5 mr-2 text-purple-400" />
                                            Performance Degrades
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Your application slows down as more users join, causing frustration and potential customer loss.
                                        </p>
                                    </div>

                                    <div className="bg-purple-950/20 p-5 rounded-lg border border-purple-500/10">
                                        <h3 className="text-white font-semibold mb-2 flex items-center">
                                            <Database className="w-5 h-5 mr-2 text-purple-400" />
                                            Database Bottlenecks
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Your database can't handle increased queries, leading to timeouts and data integrity issues.
                                        </p>
                                    </div>

                                    <div className="bg-purple-950/20 p-5 rounded-lg border border-purple-500/10">
                                        <h3 className="text-white font-semibold mb-2 flex items-center">
                                            <Code className="w-5 h-5 mr-2 text-purple-400" />
                                            Technical Debt
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Quick MVP development decisions now limit your ability to add features or scale effectively.
                                        </p>
                                    </div>

                                    <div className="bg-purple-950/20 p-5 rounded-lg border border-purple-500/10">
                                        <h3 className="text-white font-semibold mb-2 flex items-center">
                                            <Lock className="w-5 h-5 mr-2 text-purple-400" />
                                            Security Concerns
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Basic security measures aren't sufficient as your user base and data volume grow.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {data.categories.map((category:any, categoryIndex:any) => (
                            <Card
                                key={categoryIndex}
                                className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10 animate-fade-in-up"
                                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                                        {categoryIndex === 0 && <Code className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 1 && <Cloud className="w-6 h-6 mr-3 text-purple-400" />}
                                        {categoryIndex === 2 && <Shield className="w-6 h-6 mr-3 text-purple-400" />}
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

                        {/* Scaling Process Section */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white flex items-center">
                                    <Calendar className="w-6 h-6 mr-3 text-purple-400" />
                                    Our Scaling Process
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-6">
                                    We follow a systematic approach to transform your MVP into a scalable product that can support your
                                    business growth.
                                </p>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">1</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Technical Assessment</h3>
                                        <p className="text-gray-300">
                                            We analyze your current architecture, codebase, and infrastructure to identify bottlenecks and
                                            scaling limitations.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">2</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Architecture Redesign</h3>
                                        <p className="text-gray-300">
                                            We create a scalable architecture plan, focusing on modular design, database optimization, and
                                            efficient API structures.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">3</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Implementation & Migration</h3>
                                        <p className="text-gray-300">
                                            We implement the new architecture and infrastructure, carefully migrating your data and
                                            functionality with minimal disruption.
                                        </p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 -translate-x-3 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">4</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Testing & Optimization</h3>
                                        <p className="text-gray-300">
                                            We perform load testing, security audits, and performance optimization to ensure your application
                                            can handle increased demand.
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
                                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Scale?</h3>
                                    <p className="text-gray-300">Prepare your product for growth</p>
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

                        {/* Results You Can Expect */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">Results You Can Expect</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Zap className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">10x Performance Boost</h4>
                                        <p className="text-gray-300 text-sm">Faster response times and smoother user experience</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Users className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">100x User Capacity</h4>
                                        <p className="text-gray-300 text-sm">Support thousands of concurrent users without slowdowns</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-3 bg-purple-950/20 rounded-lg border border-purple-500/10">
                                    <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                                        <Shield className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">99.9% Uptime</h4>
                                        <p className="text-gray-300 text-sm">Reliable service with minimal downtime</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Info Cards */}
                        <Card className="bg-gradient-to-b from-green-950/30 to-green-900/20 backdrop-blur-sm border border-green-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Future-Proof Design</h4>
                                </div>
                                <p className="text-green-200 text-sm leading-relaxed">
                                    Our scalable architecture ensures your application can continue to grow without requiring another
                                    major overhaul, saving you time and money in the long run.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-b from-blue-950/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Cloud className="w-6 h-6 text-blue-400 mr-3" />
                                    <h4 className="text-lg font-bold text-white">Cloud Optimization</h4>
                                </div>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    We optimize your cloud infrastructure to balance performance and cost, ensuring you're not overpaying
                                    for resources while maintaining excellent service.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Testimonial Card */}
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-xl mr-4">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">John Doe</h4>
                                        <p className="text-purple-300 text-sm">CEO, TechStartup</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm italic">
                                    "Our MVP was struggling with just 500 users. After the scaling service, we now handle over 50,000
                                    users with better performance than before. The investment paid for itself within months."
                                </p>
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
