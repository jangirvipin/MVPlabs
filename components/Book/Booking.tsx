"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
    Calendar,
    Clock,
    DollarSign,
    Link,
    Mail,
    MessageSquare,
    ArrowRight,
    CheckCircle,
    Users,
    Rocket,
} from "lucide-react"
import axios from "axios";
import { toast } from "sonner"


export default function MVPBookingHero() {
    const [formData, setFormData] = useState({
        email: "",
        link: "",
        message: "",
        goal: "",
        budget: "",
        meeting: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formData)
        try{
            const url = process.env.NEXT_PUBLIC_API_URL;
            const api = url+'/api/book'
            const response = await axios.post(api,formData,{
                headers:{
                    "Content-Type": "application/json",
                }
            });
            const result= response.data;
            if(result.success){
                toast.success("Booking Confirmed", {
                    description: "Your Booking has been confirmed.",
                })
                setIsSubmitted(true)
            }
        }catch (e:any){
            if(e.response){
                toast.error("Something went wrong")
            }else{
                toast.error("Something went wrong")
            }
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    if (isSubmitted) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20  relative z-10 text-center">
                    <div className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-12">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-full w-20 h-20 mx-auto mb-8 shadow-lg shadow-purple-500/25">
                            <CheckCircle className="text-white w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{"We've Got Your Request!"}</h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Thank you for reaching out. Our MVP experts will review your submission and get back to you within 24
                            hours with a personalized consultation plan.
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg px-8 py-3 rounded-full"
                        >
                            Submit Another Request
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Hero Content */}
                    <div className="text-left">
                        <Badge
                            variant="outline"
                            className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                        >
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Your MVP Consultation
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Scale
              </span>{" "}
                            Your
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                MVP Vision?
              </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
                            {
                                "Let's discuss how we can transform your MVP into an enterprise-ready solution. Schedule a free consultation with our expert team."
                            }
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl mb-3 w-fit mx-auto">
                                    <Users className="text-white w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold text-white">5+</div>
                                <div className="text-sm text-gray-400">MVPs Scaled</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl mb-3 w-fit mx-auto">
                                    <Rocket className="text-white w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold text-white">24h</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl mb-3 w-fit mx-auto">
                                    <CheckCircle className="text-white w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-8 lg:p-10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">{"Let's Build Together"}</h2>
                            <p className="text-purple-200">Tell us about your MVP and goals</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white flex items-center gap-2 text-sm">
                                    <Mail className="w-4 h-4" />
                                    Your Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="founder@startup.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-purple-400/20"
                                    required
                                />
                            </div>

                            {/* MVP Link Field */}
                            <div className="space-y-2">
                                <Label htmlFor="link" className="text-white flex items-center gap-2 text-sm">
                                    <Link className="w-4 h-4" />
                                    MVP Demo Link (Optional)
                                </Label>
                                <Input
                                    id="link"
                                    placeholder="https://your-mvp.com"
                                    value={formData.link}
                                    onChange={(e) => handleInputChange("link", e.target.value)}
                                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-purple-400/20"
                                />
                            </div>

                            {/* Description Field */}
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-white flex items-center gap-2 text-sm">
                                    <MessageSquare className="w-4 h-4" />
                                    Tell Us About Your MVP
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Describe your MVP, current challenges, and what you want to achieve..."
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-purple-300/60 focus:border-purple-400 focus:ring-purple-400/20 min-h-[80px] resize-none"
                                    required
                                />
                            </div>

                            {/* Two Column Layout for Selects */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* What User Wants Field */}
                                <div className="space-y-2">
                                    <Label className="text-white text-sm">Primary Goal</Label>
                                    <Select onValueChange={(value) => handleInputChange("goal", value)}>
                                        <SelectTrigger className="bg-black/20 border-purple-500/30 text-white">
                                            <SelectValue placeholder="Select goal" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mvp-development">MVP Development</SelectItem>
                                            <SelectItem value="mvp-scaling">MVP Scaling </SelectItem>
                                            <SelectItem value="enterprise-scaling">Enterprise Scaling</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Budget Field */}
                                <div className="space-y-2">
                                    <Label className="text-white text-sm flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" />
                                        Budget Range
                                    </Label>
                                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                                        <SelectTrigger className="bg-black/20 border-purple-500/30 text-white">
                                            <SelectValue placeholder="Select budget" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="under-5k">Under $5K</SelectItem>
                                            <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                                            <SelectItem value="15k-30k">$15K - $30K</SelectItem>
                                            <SelectItem value="30k-50k">$30K - $50K</SelectItem>
                                            <SelectItem value="50k-plus">$50K+</SelectItem>
                                            <SelectItem value="flexible">Flexible</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Meeting Time Field */}
                            <div className="space-y-2">
                                <Label className="text-white text-sm flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Preferred Meeting Time
                                </Label>
                                <Select onValueChange={(value) => handleInputChange("meeting", value)}>
                                    <SelectTrigger className="bg-black/20 border-purple-500/30 text-white">
                                        <SelectValue placeholder="When works best for you?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="morning-weekday">Weekday Morning (9 AM - 12 PM)</SelectItem>
                                        <SelectItem value="afternoon-weekday">Weekday Afternoon (12 PM - 5 PM)</SelectItem>
                                        <SelectItem value="evening-weekday">Weekday Evening (5 PM - 8 PM)</SelectItem>
                                        <SelectItem value="weekend">Weekend</SelectItem>
                                        <SelectItem value="flexible">{"I'm flexible"}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                            >
                                Book Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>

                        {/* Trust Indicators */}
                        <div className="text-center text-purple-300/80 text-sm space-y-1 pt-6 border-t border-purple-500/20 mt-8">
                            <p>{"⚡ Free 30-minute consultation"}</p>
                            <p>{"🔒 Your data is secure and confidential"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
