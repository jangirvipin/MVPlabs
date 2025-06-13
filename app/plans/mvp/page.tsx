"use client"

import PlanDetails from "@/components/pricing/mvp-details";

const data = {
    title: "MVP Development Package",
    subtitle: "Launch your product quickly with our streamlined MVP development approach",
    price: "$2,500",
    priceRange: "- $3,000",
    timeline: "2-3 weeks",
    isPopular: true,
    buttonText: "Get Started",
    categories: [
        {
            title: "Technical Features",
            description:
                "Our MVP development focuses on building the core technical foundation that allows your product to deliver its primary value proposition efficiently.",
            features: [
                "User authentication & authorization",
                "Core functionality implementation",
                "Database design & setup",
                "API development & integration",
                "Basic admin dashboard",
                "Cloud deployment setup",
            ],
        },
        {
            title: "Design Elements",
            description:
                "We create a clean, functional interface that prioritizes user experience while maintaining visual appeal and your brand identity.",
            features: [
                "Responsive UI design",
                "User flow optimization",
                "Brand integration",
                "Interactive prototypes",
                "Accessibility compliance",
                "Cross-browser compatibility",
            ],
        },
        {
            title: "Launch & Support",
            description:
                "We ensure your MVP is ready for market with proper testing, documentation, and initial support to help you gather valuable user feedback.",
            features: [
                "Quality assurance testing",
                "Performance optimization",
                "Deployment to production",
                "Basic analytics setup",
                "Technical documentation",
                "30-day post-launch support",
            ],
        },
    ],
}

export default function MVPBuildPage() {
    return <PlanDetails data={data} />
}
