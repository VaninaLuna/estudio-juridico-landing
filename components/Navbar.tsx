"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"
import SocialIcons from "./SocialIcons"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { isDarkMode, toggleDarkMode } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? "bg-[#0f191b]/90" : "bg-white/90") : "bg-white/25"
                } ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold" style={{ color: "#c8a482" }}>
                        Pozzatto y Pezzuti Asoc.
                    </div>
                    <div className="hidden md:flex space-x-8" style={{ fontSize: "1.10rem", fontWeight: "700" }}>
                        {["Inicio", "Acerca de", "Servicios", "Testimonios", "Contacto"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className={`hover:text-[#D4AF37] transition duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-800"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <SocialIcons />
                        </div>
                        <Button
                            onClick={toggleDarkMode}
                            variant="ghost"
                            size="icon"
                            className={isDarkMode ? "text-white" : "text-gray-800"}
                        >
                            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <div className="md:hidden">
                            <Button className="bg-[#D4AF37] hover:bg-[#C19B22] text-white">Menú</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

