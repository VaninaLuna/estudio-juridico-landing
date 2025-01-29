import { LinkedinIcon as LinkedIn, Instagram, Phone } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export default function SocialIcons() {
    const { isDarkMode } = useTheme()

    return (
        <div className="flex space-x-4">
            <a
                href="https://www.linkedin.com/company/garcia-rodriguez-abogadas"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${isDarkMode ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="LinkedIn"
            >
                <LinkedIn />
            </a>
            <a
                href="https://www.instagram.com/garcia.rodriguez.abogadas"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${isDarkMode ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="Instagram"
            >
                <Instagram />
            </a>
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${isDarkMode ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="WhatsApp"
            >
                <Phone />
            </a>
        </div>
    )
}

