"use client"

import { Badge } from "@/components/ui/badge"
import {
    Calendar,
    CheckCircle,
    Clock,
    Mail,
    MessageSquare,
    Sparkles,
    User,
    ArrowLeft,
    DollarSign,
    Target,
    LinkIcon,
    CalendarClock, Delete,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import axios from "axios";
import {toast} from "sonner";

interface Booking {
    id: string
    email: string
    link: string
    message: string
    goal: string
    budget: string
    meeting: string
    isBooked: boolean
    createdAt: string
}

function BookHandler({ data }: { data: Booking }) {
    const router = useRouter()

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
    }

    const handleBooking=async (id:string)=>{
        try {
            const response = await axios.patch(`http://localhost:3000/api/book/${id}`,{
                isBooked:true
            })
            const result = response.data;
            if (result.success) {
                router.refresh()
                toast.success("Book Confirmed Successfully")
            }
        }catch (e){
            console.log(e)
            toast.error("Something went wrong")
        }
    }

    const handleDelete=async (id:string)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/book/${id}`)
            const result = response.data;
            if (result.success) {
                router.push("/admin/book")
                toast.success("Booking deleted Successfully")
            }
        }catch (e){
            console.log(e)
            toast.error("Something went wrong")
        }
    }


    const getInitials = (email: string) => {
        return email.split("@")[0].slice(0, 2).toUpperCase()
    }

    const formatBudget = (budget: string) => {
        return budget
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    const formatGoal = (goal: string) => {
        return goal
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    const formatMeeting = (meeting: string) => {
        return meeting
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    return (
        <section className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 lg:px-8 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <Button
                            onClick={() => router.back()}
                            variant="outline"
                            className="mr-4 bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                        <Badge
                            variant="outline"
                            className="bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Booking Details
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Consultation{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Booking
            </span>
                        <br />
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                        Detailed view of consultation booking request and preferences
                    </p>
                </div>

                {/* Main Booking Card */}
                <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-2xl shadow-purple-500/10 animate-fade-in-up">
                    <CardHeader className="pb-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-16 w-16 border-2 border-purple-500/30 ring-4 ring-purple-500/10">
                                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-xl">
                                        {getInitials(data.email)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-2xl font-bold text-white mb-2">{data.email.split("@")[0]}</CardTitle>
                                    <p className="text-gray-400 text-sm">Booking ID: {data.id}</p>
                                </div>
                            </div>
                            <Badge
                                variant="outline"
                                className={`text-lg px-4 py-2 ${
                                    data.isBooked
                                        ? "bg-green-950/50 text-green-300 border-green-500/30 backdrop-blur-sm"
                                        : "bg-orange-950/50 text-orange-300 border-orange-500/30 backdrop-blur-sm"
                                } animate-pulse`}
                            >
                                {data.isBooked ? (
                                    <>
                                        <CheckCircle className="h-4 w-4 mr-2" /> Confirmed
                                    </>
                                ) : (
                                    <>
                                        <Clock className="h-4 w-4 mr-2" /> Pending
                                    </>
                                )}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        {/* Contact & Booking Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                    <User className="h-5 w-5 mr-2 text-purple-400" />
                                    Contact Information
                                </h3>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email Address</p>
                                        <p className="text-white font-medium">{data.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <LinkIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400">MVP Link</p>
                                        <a
                                            href={data.link? data.link : "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium truncate block"
                                        >
                                            {data.link? data.link : "No link provided"}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                    <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                                    Timeline
                                </h3>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <Calendar className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Created At</p>
                                        <p className="text-white font-medium">{formatDate(data.createdAt)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <Target className="h-5 w-5 mr-2 text-purple-400" />
                                Consultation Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <DollarSign className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Budget</p>
                                        <p className="text-white font-medium">{formatBudget(data.budget)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <Target className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Goal</p>
                                        <p className="text-white font-medium">{formatGoal(data.goal)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                                        <CalendarClock className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Preferred Time</p>
                                        <p className="text-white font-medium">{formatMeeting(data.meeting)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <MessageSquare className="h-5 w-5 mr-2 text-purple-400" />
                                Client Message
                            </h3>

                            <div className="p-6 rounded-lg bg-gradient-to-r from-purple-950/30 to-purple-900/20 border border-purple-500/20">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg mt-1">
                                        <MessageSquare className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white leading-relaxed text-lg">{data.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-purple-500/20">
                            <Button
                                onClick={()=>handleBooking(data.id)}
                                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-0 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                                disabled={data.isBooked}
                            >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                {data.isBooked ? "Already Confirmed" : "Confirm Booking"}
                            </Button>

                            <Button
                                variant="outline"
                                disabled={!data.link}
                                className="bg-blue-950/50 border-blue-500/30 text-blue-300 hover:bg-blue-900/50 hover:text-white"
                                onClick={() => window.open(data.link, "_blank")}
                            >
                                <LinkIcon className="w-4 h-4 mr-2" />
                                Open MVP link
                            </Button>
                            <Button
                                onClick={()=>handleDelete(data.id)}
                                variant="outline"
                                className="bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white"
                            >
                                <Delete className="w-4 h-4 mr-2" />
                                Delete Booking
                            </Button>
                        </div>
                    </CardContent>
                </Card>
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

export default BookHandler
