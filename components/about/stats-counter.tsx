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
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 p-6 rounded-xl text-center hover:-translate-y-1 transition-all duration-300 shadow-lg group-hover:border-orange-500/30 group-hover:shadow-orange-500/10">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
          <Icon className="h-12 w-12 text-orange-500 rotate-12" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 mb-3 group-hover:bg-orange-500/20 transition-colors">
            <Icon className="h-6 w-6 text-orange-500" />
          </div>
          <div className="text-3xl md:text-5xl font-black text-white mb-1 tracking-tighter tabular-nums drop-shadow-lg whitespace-nowrap">
            {stat.value.includes("-")
              ? <span className="text-white">{stat.value}</span>
              : <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">{Math.floor(count).toLocaleString()}</span>
            }
            <span className="text-orange-500 text-2xl md:text-3xl ml-0.5">{stat.suffix}</span>
          </div>
          <div className="h-0.5 w-8 bg-orange-500/30 mx-auto mb-2 group-hover:w-16 transition-all duration-500" />
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCounter
