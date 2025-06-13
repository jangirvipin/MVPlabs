"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import axios from "axios";
import { toast } from "sonner"


const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    })

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:3000/api",formData,{
                headers:{
                    "Content-Type": "application/json",
                }
            });
            const result= response.data;
            if(result.success){
                toast.success("Message Sent", {
                    description: "Your message has been sent successfully",
                })
            }

        }catch (e:any){
            if(e.response){
                toast.error("Something went wrong")
            }else{
                toast.error("Something went wrong")
            }
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: ["jangirsliet20@gmail.com", "jangirvipin40@gmail.com"],
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["+91 8307902128"],
        },
        {
            icon: MapPin,
            title: "Location",
            details: ["Sangrur", "Punjab India"],
        },
    ]

    const benefits = [
        "Secure, scalable platforms tailored for high-value transactions",
        "Industry-grade KYC, payments, and real-time pricing integration",
        "Launch-ready MVPs in weeks, not months",
        "Ongoing support, maintenance, and growth optimization",
    ];

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>

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
                        Get In Touch
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Ready to Scale Your{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              MVP?
            </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        Let's discuss how we can transform your minimum viable product into a market-ready solution that drives
                        growth
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 shadow-xl shadow-purple-500/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
                                <CardDescription className="text-gray-400">We'll get back to you within 24 hours</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300 mb-2">Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your full name"
                                            className="bg-purple-950/30 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300 mb-2">Email</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@company.com"
                                            className="bg-purple-950/30 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300 mb-2">Company</label>
                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder="Your company name"
                                            className="bg-purple-950/30 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300 mb-2">Message</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your MVP and goals..."
                                            rows={4}
                                            className="bg-purple-950/30 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg py-4 rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Send Message
                                        <ArrowRight className="ml-3" size={20} />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="flex items-start space-x-4 group"
                                    >
                                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-2xl shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                            <item.icon className="text-white" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            {item.details.map((detail, detailIndex) => (
                                                <p
                                                    key={detailIndex}
                                                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                                                >
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
                        >
                            <h4 className="font-semibold text-white mb-4">Why Choose MVP Labs?</h4>
                            <ul className="space-y-3">
                                {benefits.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="flex items-start space-x-3 group"
                                    >
                                        <CheckCircle
                                            className="text-purple-400 mt-0.5 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300"
                                            size={16}
                                        />
                                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item}
                    </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
