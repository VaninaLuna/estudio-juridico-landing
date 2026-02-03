import { LinkedinIcon as LinkedIn, Instagram, Phone } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

type SocialIconsProps = {
    /** Cuando true, los iconos son claros (para fondos oscuros como el footer) */
    light?: boolean
}

export default function SocialIcons({ light = false }: SocialIconsProps) {
    const { isDarkMode } = useTheme()
    const useLight = light || isDarkMode

    return (
        <div className="flex space-x-4">
            <a
                href="https://www.linkedin.com/in/ver%C3%B3nica-pozzatto-978b7575/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${useLight ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="LinkedIn"
            >
                <LinkedIn />
            </a>
            <a
                href="https://www.instagram.com/estudio.juridico.mendoza/?igsh=MTBiZzQ3eHV1d2kyaA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${useLight ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="Instagram"
            >
                <Instagram />
            </a>
            <a
                href="https://wa.me/5492615095754"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${useLight ? "text-white hover:text-[#D4AF37]" : "text-gray-800 hover:text-[#D4AF37]"}`}
                aria-label="WhatsApp"
            >
                <Phone />
            </a>
        </div>
    )
}

