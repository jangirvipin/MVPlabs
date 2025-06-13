'use client'

import {
    Rocket,
    Users,
    DollarSign,
    Shield,
}
from "lucide-react";
import MVPToScalablePage from "@/components/pricing/Scalable";

const page =()=>{

    const data = {
        id: "mvp-to-scalable",
        icon: Rocket,
        title: "MVP to Scalable",
        subtitle: "Transform your MVP into a robust, scalable product ready for growth",
        price: "$4,000",
        priceRange: " - $6,000",
        timeline: "6-8 weeks delivery",
        buttonText: "Transform Now",
        isPopular: true,
        route: "/plans/scale",
        popularBadge: "Most Popular",
        categories: [
            {
                title: "Architecture",
                description:
                    "We redesign your application architecture to handle increased load, improve performance, and enable future growth without major rewrites.",
                features: [
                    "Complete architecture redesign",
                    "Microservices implementation",
                    "Database optimization & scaling",
                    "API development & documentation",
                    "Caching strategies",
                    "Load balancing setup",
                ],
            },
            {
                title: "Infrastructure",
                description:
                    "We establish a robust cloud infrastructure with automated deployment pipelines to ensure reliability, scalability, and ease of maintenance.",
                features: [
                    "Cloud infrastructure setup",
                    "CI/CD pipeline implementation",
                    "Auto-scaling configuration",
                    "Containerization with Docker",
                    "Kubernetes orchestration",
                    "Infrastructure as Code (IaC)",
                ],
            },
            {
                title: "Quality & Security",
                description:
                    "We implement comprehensive security measures and monitoring tools to protect your application and ensure optimal performance at scale.",
                features: [
                    "Advanced security measures",
                    "Performance monitoring",
                    "Automated testing suite",
                    "Error tracking & logging",
                    "Data backup & recovery",
                    "Compliance implementation",
                ],
            },
        ],
        benefits: [
            {
                title: "Handle Growth",
                description: "Support thousands of users without performance degradation",
                icon: Users,
            },
            {
                title: "Reduce Costs",
                description: "Optimize resource usage and cloud infrastructure expenses",
                icon: DollarSign,
            },
            {
                title: "Improve Reliability",
                description: "Achieve 99.9% uptime with redundant systems and failover",
                icon: Shield,
            },
        ],
    }


    return (
        <>
            <MVPToScalablePage data={data} />
        </>
    )
}

export default page