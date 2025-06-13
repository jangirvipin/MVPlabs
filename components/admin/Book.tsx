"use client"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
    Calendar,
    CheckCircle,
    Clock,
    Filter,
    Mail,
    MessageSquare,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    Users,
    AlertCircle,
    DollarSign,
    Target,
    LinkIcon,
    CalendarClock, ArrowLeft, MoveUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";

interface Booking {
    id: string
    email: string
    budget: string
    goal: string
    message: string
    meeting: string
    link: string
    isBooked: boolean
    createdAt: string
}

type FilterType = "all" | "booked" | "pending"

export default function Book({ data }: { data: Booking[] }) {
    const [bookings, setBookings] = useState<Booking[]>(data)
    const [activeFilter, setActiveFilter] = useState<FilterType>("all")
    const carouselRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
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

    const filteredBookings = bookings.filter((booking) => {
        if (activeFilter === "all") return true
        if (activeFilter === "booked") return booking.isBooked
        if (activeFilter === "pending") return !booking.isBooked
        return true
    })

    const bookedCount = bookings.filter((b) => b.isBooked).length
    const pendingCount = bookings.filter((b) => !b.isBooked).length
    const bookingRate = bookings.length > 0 ? Math.round((bookedCount / bookings.length) * 100) : 0

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: "smooth" })
        }
    }

    return (
        <section className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Booking Management
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Consultation{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Bookings
            </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        Manage and track consultation bookings with enterprise-scale efficiency. Transform client engagement into
                        business growth.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Button
                            variant="outline"
                            onClick={() => setActiveFilter("all")}
                            className={`text-lg px-8 py-6 rounded-full border-2 transition-all duration-300 ${
                                activeFilter === "all"
                                    ? "bg-purple-600/80 text-white border-purple-400 shadow-lg shadow-purple-500/30"
                                    : "bg-purple-950/50 text-purple-300 border-purple-500/30 hover:bg-purple-900/50 hover:text-white"
                            }`}
                        >
                            <Filter className="w-5 h-5 mr-2" />
                            All Bookings ({bookings.length})
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => setActiveFilter("booked")}
                            className={`text-lg px-8 py-6 rounded-full border-2 transition-all duration-300 ${
                                activeFilter === "booked"
                                    ? "bg-green-600/80 text-white border-green-400 shadow-lg shadow-green-500/30"
                                    : "bg-green-950/50 text-green-300 border-green-500/30 hover:bg-green-900/50 hover:text-white"
                            }`}
                        >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Confirmed ({bookedCount})
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => setActiveFilter("pending")}
                            className={`text-lg px-8 py-6 rounded-full border-2 transition-all duration-300 ${
                                activeFilter === "pending"
                                    ? "bg-orange-600/80 text-white border-orange-400 shadow-lg shadow-orange-500/30"
                                    : "bg-orange-950/50 text-orange-300 border-orange-500/30 hover:bg-orange-900/50 hover:text-white"
                            }`}
                        >
                            <Clock className="w-5 h-5 mr-2" />
                            Pending ({pendingCount})
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() =>router.push("/admin")}
                            className={`text-lg px-8 py-6 rounded-full border-2 transition-all duration-300 `}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Queries
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <Card className="bg-gradient-to-br from-purple-950/40 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-purple-300 text-sm font-medium">Total Bookings</p>
                                    <p className="text-3xl font-bold text-white">{bookings.length}</p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-950/40 to-green-900/20 backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-green-300 text-sm font-medium">Confirmed</p>
                                    <p className="text-3xl font-bold text-white">{bookedCount}</p>
                                </div>
                                <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-xl">
                                    <CheckCircle className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-950/40 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-orange-300 text-sm font-medium">Pending</p>
                                    <p className="text-3xl font-bold text-white">{pendingCount}</p>
                                </div>
                                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-xl">
                                    <AlertCircle className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-300 text-sm font-medium">Booking Rate</p>
                                    <p className="text-3xl font-bold text-white">{bookingRate}%</p>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl">
                                    <TrendingUp className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {filteredBookings.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-2xl mb-8 shadow-lg shadow-purple-500/25 w-fit mx-auto">
                            <CalendarClock className="h-16 w-16 text-white mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            No {activeFilter !== "all" ? activeFilter : ""} Bookings Found
                        </h3>
                        <p className="text-gray-300 text-lg">
                            {activeFilter === "all"
                                ? "There are no consultation bookings to display at the moment."
                                : activeFilter === "booked"
                                    ? "There are no confirmed bookings to display at the moment."
                                    : "There are no pending bookings to display at the moment."}
                        </p>
                    </div>
                ) : (
                    /* Horizontal Carousel with Navigation */
                    <div className="relative">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {activeFilter === "all"
                                    ? "All Bookings"
                                    : activeFilter === "booked"
                                        ? "Confirmed Bookings"
                                        : "Pending Bookings"}
                                <span className="ml-2 text-sm text-gray-400">({filteredBookings.length})</span>
                            </h2>
                            <div className="flex gap-2">
                                <Button
                                    onClick={scrollLeft}
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                    <span className="sr-only">Scroll left</span>
                                </Button>
                                <Button
                                    onClick={scrollRight}
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-purple-950/50 border-purple-500/30 text-purple-300 hover:bg-purple-900/50 hover:text-white"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                    <span className="sr-only">Scroll right</span>
                                </Button>
                            </div>
                        </div>

                        <div
                            ref={carouselRef}
                            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {filteredBookings.map((booking, index) => (
                                <Card
                                    key={booking.id}
                                    className={`group flex-shrink-0 snap-start w-[380px] bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 ${
                                        index % 4 === 0
                                            ? "animate-fade-in-right"
                                            : index % 4 === 1
                                                ? "animate-fade-in-right delay-100"
                                                : index % 4 === 2
                                                    ? "animate-fade-in-right delay-200"
                                                    : "animate-fade-in-right delay-300"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-3">
                                                <Avatar className="h-12 w-12 border-2 border-purple-500/30 ring-2 ring-purple-500/10">
                                                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg">
                                                        {getInitials(booking.email)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <CardTitle className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                                        {booking.email.split("@")[0]}
                                                    </CardTitle>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={() => router.push(`/admin/book/${booking.id}`)}
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 border-purple-500/30 text-white hover:from-purple-500 hover:to-purple-600 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                                            >
                                                <MoveUpRight className="h-4 w-4" />
                                                <span className="sr-only">View details</span>
                                            </Button>
                                            <Badge
                                                variant="outline"
                                                className={`${
                                                    booking.isBooked
                                                        ? "bg-green-950/50 text-green-300 border-green-500/30 backdrop-blur-sm hover:bg-green-900/50"
                                                        : "bg-orange-950/50 text-orange-300 border-orange-500/30 backdrop-blur-sm hover:bg-orange-900/50"
                                                } animate-pulse`}
                                            >
                                                {booking.isBooked ? (
                                                    <>
                                                        <CheckCircle className="h-3 w-3 mr-1" /> Confirmed
                                                    </>
                                                ) : (
                                                    <>
                                                        <Clock className="h-3 w-3 mr-1" /> Pending
                                                    </>
                                                )}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg shadow-lg">
                                                <Mail className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="truncate font-medium text-sm">{booking.email}</span>
                                        </div>

                                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg shadow-lg">
                                                <DollarSign className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="truncate font-medium text-sm">{formatBudget(booking.budget)}</span>
                                        </div>

                                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg shadow-lg">
                                                <Target className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="truncate font-medium text-sm">{formatGoal(booking.goal)}</span>
                                        </div>

                                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg shadow-lg">
                                                <CalendarClock className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="truncate font-medium text-sm">{formatMeeting(booking.meeting)}</span>
                                        </div>

                                        <div className="flex items-start space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg mt-0.5 shadow-lg">
                                                <MessageSquare className="h-4 w-4 text-white" />
                                            </div>
                                            <p className="line-clamp-3 leading-relaxed text-sm">{booking.message}</p>
                                        </div>

                                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg shadow-lg">
                                                <LinkIcon className="h-4 w-4 text-white" />
                                            </div>
                                            <a
                                                href={booking.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="truncate font-medium text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                                            >
                                                View MVP Link
                                            </a>
                                        </div>

                                        <div className="flex items-center space-x-3 text-gray-400 pt-4 border-t border-purple-500/20">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-1.5 rounded-lg shadow-lg">
                                                <Calendar className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-xs">{formatDate(booking.createdAt)}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    )
}
