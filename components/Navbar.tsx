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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? "bg-[#0f191b]/90" : "bg-white/90") :
                isDarkMode ? "bg-[#0f191b]/90" : "bg-white/40"
                } ${isDarkMode ? "text-white" : "text-[#4a4035]"}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className={`text-2xl font-bold ${isDarkMode ? "text-[#e0ae94]" : "text-[#4a4035]"}`}>
                        Pozzatto y Pezzutti Asoc.
                    </div>
                    <div className="hidden md:flex space-x-8" style={{ fontSize: "1.10rem", fontWeight: "700" }}>
                        {["Inicio", "Acerca de", "Servicios", "Como trabajamos", "Contacto"].map((item) => (
                            <a
                                key={item}
                                href={`#${item === "Dirección" ? "direccion" : item.toLowerCase().replace(" ", "-")}`}
                                className={`hover:text-[#c4a282] transition duration-300 ${isDarkMode ? "text-gray-300" : "text-[#4a4035]"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className={`hidden md:block ${!isDarkMode ? "[&_a]:text-[#4a4035] [&_a:hover]:text-[#c4a282]" : ""}`}>
                            <SocialIcons />
                        </div>
                        <Button
                            onClick={toggleDarkMode}
                            variant="ghost"
                            size="icon"
                            className={isDarkMode ? "text-white" : "text-[#c8a482]"}
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

