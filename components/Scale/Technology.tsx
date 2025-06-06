import {Badge} from "@/components/ui/badge";
import {BarChart3, CheckCircle, Cloud, Code2, Database, Shield, Smartphone} from "lucide-react";

export default function Technology(){
    const technologies = [
        {
            id: "frontend",
            title: "Frontend Development",
            icon: <Code2 className="w-8 h-8" />,
            description: "Modern, responsive user interfaces that scale with your user base",
            color: "from-purple-600 to-purple-700",
            features: [
                "React & Next.js for optimal performance",
                "Progressive Web App capabilities",
                "Mobile-first responsive design",
                "Component-based architecture",
            ],
            metrics: {
                performance: "99.9% uptime",
                speed: "< 2s load time",
                compatibility: "Cross-browser support",
            },
            techStack: [
                { name: "React", category: "Framework" },
                { name: "Next.js", category: "Meta Framework" },
                { name: "TypeScript", category: "Language" },
                { name: "Shadcn", category: "Styling" },
                { name: "Jest", category: "Testing" },
                { name: "Recoil", category: "State Management" },
            ],
        },
        {
            id: "backend",
            title: "Backend Infrastructure",
            icon: <Database className="w-8 h-8" />,
            description: "Robust server architecture that grows with your business needs",
            color: "from-purple-600 to-purple-700",
            features: [
                "Microservices architecture",
                "Auto-scaling capabilities",
                "Real-time data processing",
                "API-first development",
            ],
            metrics: {
                scalability: "1M+ requests/day",
                reliability: "99.99% availability",
                security: "Enterprise-grade",
            },
            techStack: [
                    { name: "Kafka", category: "Message Queue" },
                    { name: "Prisma", category: "Type-safe ORM" },
                    { name: "OpenAPI", category: "API Specification" },
                    { name: "Redis", category: "Caching & Data Store" },
                    { name: "GraphQL", category: "API Query Language" },
                    { name: "Docker", category: "Containerization" }
            ],
        },
        {
            id: "cloud",
            title: "Cloud Infrastructure",
            icon: <Cloud className="w-8 h-8" />,
            description: "Scalable cloud solutions that adapt to traffic spikes automatically",
            color: "from-purple-600 to-purple-700",
            features: [
                "AWS/Azure multi-region deployment",
                "Auto-scaling load balancers",
                "CDN for global content delivery",
                "Disaster recovery systems",
            ],
            metrics: {
                global: "5 continents",
                scaling: "Auto-scale to 10x",
                recovery: "< 1 hour RTO",
            },
            techStack: [
                { name: "AWS", category: "Cloud Provider" },
                { name: "Kubernetes", category: "Orchestration" },
                { name: "Terraform", category: "Infrastructure" },
                { name: "CloudFlare", category: "CDN" },
                { name: "Nginx", category: "Load Balancer" },
                { name: "Prometheus", category: "Monitoring" },
            ],
        },
        {
            id: "mobile",
            title: "Mobile Solutions",
            icon: <Smartphone className="w-8 h-8" />,
            description: "Native and cross-platform mobile apps for maximum reach",
            color: "from-purple-600 to-purple-700",
            features: [
                "React Native development",
                "iOS & Android optimization",
                "Offline-first capabilities",
                "Push notification systems",
            ],
            metrics: {
                platforms: "iOS & Android",
                performance: "60 FPS smooth",
                reach: "3B+ devices",
            },
            techStack: [
                { name: "React Native", category: "Framework" },
                { name: "Expo", category: "Platform" },
                { name: "Swift", category: "iOS Native" },
                { name: "Kotlin", category: "Android Native" },
                { name: "Firebase", category: "Backend Services" },
                { name: "CodePush", category: "OTA Updates" },
            ],
        },
        {
            id: "analytics",
            title: "Analytics & Monitoring",
            icon: <BarChart3 className="w-8 h-8" />,
            description: "Data-driven insights to optimize your product performance",
            color: "from-purple-600 to-purple-700",
            features: [
                "Real-time user analytics",
                "Performance monitoring",
                "A/B testing framework",
                "Custom dashboard creation",
            ],
            metrics: {
                tracking: "Real-time data",
                insights: "AI-powered",
                reporting: "Custom dashboards",
            },
            techStack: [
                { name: "Google Analytics", category: "Web Analytics" },
                { name: "Mixpanel", category: "Product Analytics" },
                { name: "Sentry", category: "Error Tracking" },
                { name: "DataDog", category: "APM" },
                { name: "Grafana", category: "Visualization" },
                { name: "Apache Kafka", category: "Data Streaming" },
            ],
        },
        {
            id: "security",
            title: "Security & Compliance",
            icon: <Shield className="w-8 h-8" />,
            description: "Enterprise-grade security measures to protect your users and data",
            color: "from-purple-600 to-purple-700",
            features: [
                "End-to-end encryption",
                "GDPR & CCPA compliance",
                "Multi-factor authentication",
                "Regular security audits",
            ],
            metrics: {
                encryption: "256-bit AES",
                compliance: "SOC 2 Type II",
                audits: "Quarterly reviews",
            },
            techStack: [
                { name: "Auth0", category: "Authentication" },
                { name: "HashiCorp Vault", category: "Secrets Management" },
                { name: "OWASP ZAP", category: "Security Testing" },
                { name: "Snyk", category: "Vulnerability Scanning" },
                { name: "AWS WAF", category: "Web Application Firewall" },
                { name: "Let's Encrypt", category: "SSL/TLS" },
            ],
        },
    ]

    return(
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use to Scale</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Each technology is carefully selected and optimized to ensure your MVP can handle growth seamlessly
                    </p>
                </div>

                <div className="space-y-12">
                    {technologies.map((tech, index) => (
                        <div key={index}>
                            <div className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                    {/* Technology Overview */}
                                    <div className="lg:col-span-1">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className={`p-3 rounded-lg bg-gradient-to-r ${tech.color} text-white shadow-lg shadow-purple-500/25`}
                                            >
                                                {tech.icon}
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-6">{tech.description}</p>

                                        {/* Key Metrics */}
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-white mb-3">Key Metrics</h4>
                                            {Object.entries(tech.metrics).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center">
                                                    <span className="text-gray-400 capitalize">{key}:</span>
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-purple-950/50 text-purple-300 border-purple-500/30"
                                                    >
                                                        {value}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="lg:col-span-2">
                                        <h4 className="font-semibold text-white mb-4">Core Features & Capabilities</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {tech.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-white mb-4">Technology Stack</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {tech.techStack.map((technology, techIndex) => (
                                                    <div
                                                        key={techIndex}
                                                        className="group bg-gradient-to-r from-purple-950/50 to-purple-900/30 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
                                                    >
                                                        <div className="text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                                                            {technology.name}
                                                        </div>
                                                        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                            {technology.category}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}