'use client';
import {
    Crown,
    Users,
    Shield,
    Layers,
    Globe,
} from "lucide-react";
import ScratchToScalablePage from "@/components/pricing/Enterprise";


const data = {
    id: "scratch-to-scalable",
    icon: Crown,
    title: "Enterprise Build",
    subtitle: "Build enterprise-ready solution from ground up",
    price: "$10,000",
    priceRange: "+",
    timeline: "12-20 weeks delivery",
    buttonText: "Let's Build",
    isPopular: false,
    route: "/plans/enterprise",
    categories: [
        {
            title: "Enterprise Development",
            description:
                "We build sophisticated, enterprise-grade applications with scalable architecture designed to handle complex business processes and high user loads.",
            features: [
                "Custom application development",
                "Enterprise architecture design",
                "Microservices implementation",
                "Domain-driven design",
                "Advanced database architecture",
                "Comprehensive API ecosystem",
                "Event-driven architecture",
                "Scalable search functionality",
            ],
        },
        {
            title: "Advanced Infrastructure",
            description:
                "We establish a robust, multi-environment infrastructure with enterprise-grade security, monitoring, and scaling capabilities to support mission-critical operations.",
            features: [
                "Multi-environment cloud setup",
                "Enterprise security protocols",
                "High-availability configuration",
                "Disaster recovery planning",
                "Blue-green deployment strategy",
                "Infrastructure as Code (IaC)",
                "Advanced monitoring & alerting",
                "Auto-scaling with predictive analytics",
            ],
        },
        {
            title: "Enterprise Support",
            description:
                "We provide comprehensive support, documentation, and knowledge transfer to ensure your team can maintain and extend the solution as your business evolves.",
            features: [
                "24/7 support & maintenance",
                "Team training & handover",
                "Comprehensive documentation",
                "Regular security audits",
                "Performance optimization",
                "Quarterly strategy sessions",
                "Dedicated account manager",
                "SLA guarantees",
            ],
        },
    ],
    enterpriseFeatures: [
        {
            title: "Scalability",
            description: "Handle millions of users and transactions with a system that grows with your business",
            icon: Users,
        },
        {
            title: "Security",
            description: "Enterprise-grade security with compliance for GDPR, HIPAA, SOC2, and more",
            icon: Shield,
        },
        {
            title: "Integration",
            description: "Seamless integration with your existing systems and third-party services",
            icon: Layers,
        },
        {
            title: "Global Reach",
            description: "Multi-region deployment for optimal performance worldwide",
            icon: Globe,
        },
    ],
}

const page =()=>{
    return (
        <>
            <ScratchToScalablePage data={data} />
        </>
    )
}

export default page