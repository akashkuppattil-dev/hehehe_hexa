"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { Wrench, Truck, Award, HeadphonesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const features = [
  {
    icon: Wrench,
    title: "Workshop Focused",
    description: "Exclusive selection for professional garages and industrial centers.",
  },
  {
    icon: Truck,
    title: "Express Logistics",
    description: "Same-day dispatch for Kerala. Secure PAN India shipping.",
  },
  {
    icon: Award,
    title: "Global Brands",
    description: "Genuine products from Bosch, Stanley, Devilbiss and more.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Guidance",
    description: "Our tool specialists help you choose the right gear for the job.",
  },
]

export function WhyHexamech() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const goToPrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + features.length) % features.length), [])
  const goToNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % features.length), [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b0c10] to-[#0f172a] border-t border-slate-800/50">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Dynamic Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Core Advantage</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            Why <span className="text-orange-500">Hexamech?</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-2xl mx-auto">
            Trusted automotive equipment wholesaler since 2024.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-slate-900/40 backdrop-blur-md border border-slate-800/50 hover:border-orange-500/40 transition-all duration-700 group rounded-3xl p-8 md:p-10 flex flex-col items-center text-center shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-600 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-orange-600/20">
                  <feature.icon className="h-7 w-7 md:h-9 md:w-9" />
                </div>
              </div>
              <h3 className="font-black text-sm md:text-base text-slate-100 mb-2 uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4">
            {(() => {
              const Icon = features[currentIndex].icon
              return (
                <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-700/50 w-full rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-500 mb-4 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-sm text-white mb-1 uppercase tracking-tight">{features[currentIndex].title}</h3>
                  <p className="text-slate-400 text-[10px] leading-relaxed">{features[currentIndex].description}</p>
                </div>
              )
            })()}

            <div className="flex gap-4">
              <Button variant="outline" size="icon" onClick={goToPrev} className="h-10 w-10 rounded-full border-slate-700 text-slate-400 bg-slate-900/50 backdrop-blur-md hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNext} className="h-10 w-10 rounded-full border-slate-700 text-slate-400 bg-slate-900/50 backdrop-blur-md hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
