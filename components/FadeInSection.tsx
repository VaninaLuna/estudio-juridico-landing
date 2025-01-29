"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
    children: React.ReactNode
    delay?: number
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
    const [isVisible, setVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting))
        })

        const currentElement = domRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 visibility-visible" : "opacity-0 translate-y-20 visibility-hidden"
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

