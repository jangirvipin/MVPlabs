"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-purple-900/30 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent flex items-center">
                                <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                                MVP Labs
                            </h1>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a
                                href="#home"
                                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#work"
                                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Work
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </a>
                            <a
                                href="#faq"
                                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300">
                            Get Started
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-purple-400 p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-purple-900/30 rounded-b-lg">
                            <a
                                href="#home"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#work"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors"
                            >
                                Work
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors"
                            >
                                Contact
                            </a>
                            <a
                                href="#faq"
                                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors"
                            >
                                FAQ
                            </a>
                            <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full py-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300">
                                Get Started
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
