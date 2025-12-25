"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Search, ShieldCheck, CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const heroImages = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.jpg"
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-zinc-950">

      {/* Static Background Composition (Simulating "Mixed" Image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg-2.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg-1.jpg')] bg-cover bg-left opacity-30 mix-blend-overlay" />
        {/* Radial gradient to focus center - Slightly lighter center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#09090b_95%)]" />
        {/* Reduced overlay opacity to show more photo details */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl pt-10 pb-8">
        <div className="flex flex-col items-center text-center">

          {/* Cursive Welcome Text */}
          <h2 className={`text-3xl md:text-5xl text-orange-500 mb-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
            Welcome to Hexamech
          </h2>

          {/* Main Title - Professional Supplier */}
          <h1 className={`flex flex-col items-center font-black tracking-tighter text-white mb-4 uppercase transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col items-center text-center gap-0 relative">
              <span className="text-[2rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase z-10 drop-shadow-2xl">
                Professional Automotive
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-500 my-[-10px] md:my-[-20px] relative z-20 drop-shadow-lg" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
                &
              </span>
              <span className="text-[1.75rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-300 tracking-tighter uppercase z-10 drop-shadow-2xl">
                Industrial Tools Supplier
              </span>
            </div>

            <div className="mt-8 mb-8 inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-full backdrop-blur-md transition-all hover:border-orange-500/40 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs group-hover:text-orange-400 transition-colors">
                Kerala's Premier Wholesale Partner
              </p>
            </div>
          </h1>

          {/* Trust Strip with Icons */}
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">GST-Verified Supplier</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">Authorised Brands</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <Truck className="h-4 w-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">PAN-India Delivery</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
