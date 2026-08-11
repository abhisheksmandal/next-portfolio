
"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 rounded-full transition-opacity duration-300 p-0 h-11 w-11 md:h-14 md:w-14",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Go to top"
    >
      <ArrowUp className="h-5 w-5 md:h-7 md:w-7" />
    </Button>
  )
}
