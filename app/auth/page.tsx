"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Key, Sparkles, Eye, EyeOff, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function Login() {
    const [secretKey, setSecretKey] = useState("")
    const [showKey, setShowKey] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            // Call server action for secure validation
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ secretKey }),
            })

            const data = await response.json()

            if (data.success) {
                // Cookie will be set by the server
                router.push("/admin") // Redirect to protected route
            } else {
                setError("Invalid secret key. Please try again.")
            }
        } catch (error) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content */}
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <Badge
                        variant="outline"
                        className="mb-6 bg-purple-950/50 text-purple-300 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Secure Access
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                        Admin{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Portal
            </span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                        Enter your secret key to access the admin dashboard
                    </p>
                </div>

                {/* Login Card */}
                <Card className="bg-gradient-to-b from-purple-950/30 to-black/50 backdrop-blur-sm border border-purple-500/20 shadow-2xl shadow-purple-500/10 animate-fade-in-up">
                    <CardHeader className="pb-6">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-xl shadow-lg">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white text-center">Secure Authentication</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="secretKey" className="text-white font-medium flex items-center">
                                    <Key className="w-4 h-4 mr-2 text-purple-400" />
                                    Secret Key
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="secretKey"
                                        type={showKey ? "text" : "password"}
                                        value={secretKey}
                                        onChange={(e) => setSecretKey(e.target.value)}
                                        placeholder="Enter your secret key"
                                        className="bg-purple-950/20 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 pr-12"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white"
                                        onClick={() => setShowKey(!showKey)}
                                    >
                                        {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>

                            {error && (
                                <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-red-300 text-sm">
                                    {error}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isLoading || !secretKey.trim()}
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 py-6 text-lg font-medium"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                        Authenticating...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <Key className="w-5 h-5 mr-2" />
                                        Access Dashboard
                                    </div>
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 p-4 rounded-lg bg-purple-950/20 border border-purple-500/10">
                            <p className="text-xs text-gray-400 text-center">
                                This is a secure area. Only authorized personnel with valid credentials can access the admin dashboard.
                            </p>
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
