"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Package, ThumbsUp } from "lucide-react"

interface StatProps {
  stat: {
    label: string
    value: string
    suffix: string
    iconName: "Award" | "Users" | "Package" | "ThumbsUp"
  }
}

const iconMap = {
  Award,
  Users,
  Package,
  ThumbsUp,
}

export function StatsCounter({ stat }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const numericValue = Number.parseFloat(stat.value.replace(/[^0-9.]/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  const Icon = iconMap[stat.iconName]

  return (
    <div ref={ref} className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0bc0c8] to-[#09757a] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-black/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-500 shadow-2xl group-hover:border-[#0bc0c8]/30">
        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="h-12 w-12 text-white rotate-12" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-[#0bc0c8]/20 transition-all duration-500 group-hover:scale-110">
            <Icon className="h-6 w-6 text-[#0bc0c8]" />
          </div>

          <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter tabular-nums whitespace-nowrap drop-shadow-sm">
            {stat.value.includes("-")
              ? <span className="text-white">{stat.value}</span>
              : <span>{Math.floor(count).toLocaleString()}</span>
            }
            <span className="text-[#0bc0c8] text-2xl md:text-3xl ml-1 font-bold">{stat.suffix}</span>
          </div>

          <div className="h-1 w-8 bg-gradient-to-r from-[#0bc0c8]/40 to-transparent mx-auto mb-4 group-hover:w-16 transition-all duration-700 rounded-full" />

          <p className="text-white/60 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
            {stat.label}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCounter
