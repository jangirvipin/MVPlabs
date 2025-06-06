"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    const faqs = [
        {
            question: "What exactly is MVP to Product transformation?",
            answer:
                "MVP to Product transformation is the process of taking your Minimum Viable Product - which typically has basic features to test market fit - and evolving it into a fully-featured, scalable, production-ready application. This includes adding advanced features, improving performance, enhancing security, optimizing user experience, and preparing the infrastructure for growth.",
        },
        {
            question: "How long does the transformation process typically take?",
            answer:
                "The timeline varies depending on the complexity of your MVP and the scope of features needed. Typically, transformations take 8-16 weeks. Simple applications might be ready in 6-8 weeks, while complex enterprise solutions could take 12-20 weeks. We provide detailed project timelines after analyzing your specific requirements.",
        },
        {
            question: "Do you work with existing code or start from scratch?",
            answer:
                "We prefer to work with your existing MVP codebase when possible, as it saves time and preserves your initial investment. However, if the existing code has architectural limitations or technical debt that would hinder scalability, we may recommend a partial or complete rebuild using modern best practices.",
        },
        {
            question: "What technologies do you specialize in?",
            answer:
                "We work with modern tech stacks including React, Nextjs, MonoRepo; Node.js, Python, OpenApi, PostgreSQL, Oracle Db, Prisma for database; and cloud platforms like AWS, Google Cloud, and Azure. We choose technologies based on your specific needs, scalability requirements, and existing infrastructure.",
        },
        {
            question: "How do you ensure the product will scale as my business grows?",
            answer:
                "We implement scalable architecture patterns, use cloud-native solutions, optimize database queries, implement caching strategies, and design with microservices when appropriate. We also conduct load testing and performance optimization to ensure your product can handle increased traffic and user growth.",
        },
        {
            question: "What kind of support do you provide after launch?",
            answer:
                "We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and 24/7 technical support. We also provide documentation, training for your team, and ongoing maintenance plans to ensure your product continues to perform optimally.",
        },
        {
            question: "How do you handle data migration from the MVP?",
            answer:
                "We carefully plan and execute data migration with zero downtime strategies. This includes data mapping, validation, backup procedures, and gradual migration processes. We ensure data integrity throughout the process and provide rollback plans as safety measures.",
        },
        {
            question: "What's included in your pricing?",
            answer:
                "Our pricing includes complete development, testing, deployment, documentation, team training, and 2 weeks of post-launch support. We provide transparent, fixed-price quotes based on your requirements with no hidden fees. Additional features or extended support can be added as needed.",
        },
    ]

    return (
        <section id="faq" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        FAQ
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                        Everything you need to know about our MVP transformation process
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 group">
                                <CardHeader className="cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-lg font-semibold text-left text-white group-hover:text-purple-300 transition-colors duration-300">
                                            {faq.question}
                                        </CardTitle>
                                        <motion.div
                                            animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 ml-4"
                                        >
                                            <ChevronDown
                                                className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                                                size={20}
                                            />
                                        </motion.div>
                                    </div>
                                </CardHeader>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CardContent className="pt-0 border-t border-purple-500/20">
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    className="text-gray-400 leading-relaxed mt-4"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </CardContent>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-16"
                >

                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection
