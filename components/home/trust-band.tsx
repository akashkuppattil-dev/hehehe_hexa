"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Truck, Wrench, Shield } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    title: "4.5★ TrustScore",
    subtitle: "4,000+ Workshops",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "PAN India Service",
  },
  {
    icon: Wrench,
    title: "Tool Specialist",
    subtitle: "Expert Support",
  },
  {
    icon: Shield,
    title: "GST Verified",
    subtitle: "B2B Manufacturer",
  },
]

export function TrustBand() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-zinc-950 border-y border-white/5 relative overflow-hidden h-[250px] md:h-[300px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100%] bg-gradient-to-r from-transparent via-orange-900/10 to-transparent pointer-events-none" />

      {/* Floating Styles */}
      <style jsx>{`
        @keyframes float1 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(10px, -15px) } 50% { transform: translate(-5px, 10px) } 75% { transform: translate(-10px, -5px) } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(-10px, 15px) } 50% { transform: translate(10px, -10px) } 75% { transform: translate(5px, 10px) } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(15px, 10px) } 50% { transform: translate(-5px, -15px) } 75% { transform: translate(-15px, 5px) } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(-10px, -15px) } 50% { transform: translate(15px, 5px) } 75% { transform: translate(5px, -10px) } }
        
        .animate-float-1 { animation: float1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float2 9s ease-in-out infinite reverse; }
        .animate-float-3 { animation: float3 10s ease-in-out infinite; }
        .animate-float-4 { animation: float4 11s ease-in-out infinite reverse; }
        
        .pause-animation:hover { animation-play-state: paused; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 shadow-2xl backdrop-blur-md animate-float-${(index % 4) + 1} pause-animation z-10 aspect-square text-center`}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/20 transition-all duration-500 shadow-inner mb-2">
                <item.icon className="h-6 w-6 md:h-7 md:w-7 text-zinc-400 group-hover:text-orange-500 transition-colors duration-500" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-black text-white text-xs md:text-sm uppercase tracking-wide leading-tight mb-1 group-hover:text-orange-100 transition-colors">{item.title}</h3>
                <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest group-hover:text-orange-500/80 transition-colors">{item.subtitle}</p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rotate-45 translate-x-1.5 -translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
