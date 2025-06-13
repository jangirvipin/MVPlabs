import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { Zap, Rocket, Crown } from "lucide-react"
import {useRouter} from "next/navigation";

const sectionContent = {
    badge: {
        text: "Choose Your Growth Path",
    },
    title: {
        main: "Transparent",
        highlight: "Pricing",
        subtitle: "For Every Stage",
    },
    description:
        "From MVP refinement to enterprise-scale solutions, we have the perfect package to accelerate your growth journey.",
    consultation: {
        text: "Need a custom solution? Let's discuss your specific requirements.",
        buttonText: "Schedule Consultation",
    },
}

const pricingTiers = [
    {
        id: "mvp-build",
        icon: Zap,
        title: "MVP Build",
        subtitle: "Launch your first product version",
        price: "$2,000",
        priceRange: " - $3,000",
        timeline: "2-3 weeks delivery",
        buttonText: "Start Building",
        isPopular: false,
        route:"/plans/mvp",
        categories: [
            {
                title: "Core Development",
                features: [
                    "Initial product architecture",
                    "Essential feature implementation",
                    "Authentication & user flows"
                ],
            },
            {
                title: "User Interface",
                features: [
                    "Basic responsive UI",
                    "Frontend & backend integration"
                ],
            },
            {
                title: "Go-to-Market Readiness",
                features: [
                    "Deployment setup (cloud/VPS)",
                    "Basic analytics integration"
                ],
            },
        ],
    },
    {
        id: "mvp-to-scalable",
        icon: Rocket,
        title: "MVP to Scalable",
        subtitle: "Transform your MVP into a scalable product",
        price: "$4,000",
        priceRange: " - $6,000",
        timeline: "6-10 weeks delivery",
        buttonText: "Transform Now",
        isPopular: true,
        route:"/plans/scale",
        popularBadge: "Most Popular",
        categories: [
            {
                title: "Architecture",
                features: [
                    "Complete architecture redesign",
                    "Database optimization & scaling",
                    "API development & documentation",
                ],
            },
            {
                title: "Infrastructure",
                features: ["Cloud infrastructure setup", "CI/CD pipeline implementation"],
            },
            {
                title: "Quality & Security",
                features: ["Advanced security measures", "Performance monitoring"],
            },
        ],
    },
    {
        id: "enterprise-build",
        icon: Crown,
        title: "Enterprise Build",
        subtitle: "Build enterprise-ready solution from ground up",
        price: "$10,000",
        priceRange: "+",
        timeline: "12-20 weeks delivery",
        buttonText: "Let's Build",
        isPopular: false,
        route:"/plans/enterprise",
        categories: [
            {
                title: "Enterprise Development",
                features: ["Custom application development", "Enterprise architecture design", "Microservices implementation"],
            },
            {
                title: "Advanced Infrastructure",
                features: ["Multi-environment cloud setup", "Enterprise security protocols"],
            },
            {
                title: "Enterprise Support",
                features: ["24/7 support & maintenance", "Team training & handover"],
            },
        ],
    },
]


export default function PricingSection() {
    const router = useRouter()
    return (
        <section className="flex items-center justify-center bg-black relative overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                    >
                        <Star className="w-4 h-4 mr-2" />
                        {sectionContent.badge.text}
                    </Badge>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {sectionContent.title.main}{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              {sectionContent.title.highlight}
            </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              {sectionContent.title.subtitle}
            </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        {sectionContent.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingTiers.map((tier) => {
                        const IconComponent = tier.icon

                        return (
                            <div
                                key={tier.id}
                                className={`group flex flex-col p-8 bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl ${
                                    tier.isPopular
                                        ? "border-2 border-purple-400/50 hover:border-purple-300/60"
                                        : "border border-purple-500/20 hover:border-purple-400/40"
                                } transition-all duration-500 hover:transform hover:scale-105 relative h-full`}
                            >
                                {tier.isPopular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 text-sm font-semibold">
                                            {tier.popularBadge}
                                        </Badge>
                                    </div>
                                )}

                                <div className="flex items-center justify-center mb-6">
                                    <div
                                        className={`${
                                            tier.isPopular
                                                ? "bg-gradient-to-r from-purple-500 to-purple-600 shadow-purple-500/30"
                                                : "bg-gradient-to-r from-purple-600 to-purple-700 shadow-purple-500/25"
                                        } p-3 rounded-xl shadow-lg`}
                                    >
                                        <IconComponent className="text-white" size={24} />
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                                    <p className="text-gray-400 mb-4">{tier.subtitle}</p>
                                    <div className="text-4xl font-bold text-white mb-2">
                                        {tier.price}
                                        <span className="text-lg font-normal text-gray-400">{tier.priceRange}</span>
                                    </div>
                                    <p className="text-sm text-purple-300">{tier.timeline}</p>
                                </div>

                                <div className="flex-1 mb-8">
                                    {tier.categories.map((category, categoryIndex) => (
                                        <div key={categoryIndex} className={categoryIndex < tier.categories.length - 1 ? "mb-6" : ""}>
                                            <h4 className="text-purple-400 text-sm uppercase font-semibold tracking-wider mb-3">
                                                {category.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {category.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-gray-300">
                                                        <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={()=>router.push(tier.route)}
                                    className={`w-full ${
                                        tier.isPopular
                                            ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-500/30 hover:shadow-purple-500/50"
                                            : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-purple-500/25 hover:shadow-purple-500/40"
                                    } text-white py-3 rounded-xl shadow-lg transition-all duration-300`}
                                >
                                    View Details
                                </Button>
                            </div>
                        )
                    })}
                </div>



                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-6">{sectionContent.consultation.text}</p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-10 py-4 rounded-full border-purple-500/ text-purple-700 hover:bg-purple-950/50 hover:border-purple-400 hover:text-white backdrop-blur-sm transition-all duration-300"
                    >
                        {sectionContent.consultation.buttonText}
                    </Button>
                </div>
            </div>
        </section>
    )
}
