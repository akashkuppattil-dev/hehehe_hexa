"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Receipt, TrendingUp, Users } from "lucide-react"
import React, { useCallback, useState } from "react"

const businessDetails = [
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "1.5 - 10 Cr",
    color: "text-zinc-900 dark:text-zinc-100",
  },
  {
    icon: Users,
    label: "Team Strength",
    value: "25+ Specialists",
    color: "text-zinc-900 dark:text-zinc-100",
  },
  {
    icon: Receipt,
    label: "GST Registered",
    value: "32CWVPM3137R1ZP",
    color: "text-zinc-900 dark:text-zinc-100",
  },
]

export function BusinessDetails() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + businessDetails.length) % businessDetails.length), [])
  const goToNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % businessDetails.length), [])

  return (
    <section className="py-12 md:py-16 relative overflow-hidden border-t border-white/5 bg-[#0b0c10]">
      {/* Background Wallpaper */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/business-bg.jpg')`,
        }}
      />

      {/* Soft Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#0b0c10] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-3 backdrop-blur-md">
            <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Verified Supplier</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            Business <span className="text-orange-500">Intelligence</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-medium">
            Trusted by workshops and service centers across India
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border-t border-white/10 pt-8">
          {businessDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-xl border border-white/5 hover:border-orange-500/40 transition-all duration-700 group rounded-3xl p-8 md:p-10 flex flex-col items-center text-center shadow-2xl"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-600 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-xl">
                    <IconComponent className="h-7 w-7 md:h-9 md:w-9" />
                  </div>
                </div>

                <p className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 group-hover:text-orange-500/70 transition-colors">
                  {detail.label}
                </p>
                <p className="font-black text-xl md:text-2xl text-zinc-100 tracking-tight uppercase">
                  {detail.value}
                </p>
              </div>
            )
          })}
        </div>

        {/* Mobile View */}
        {/* Mobile View - Compact List */}
        <div className="md:hidden pt-8 border-t border-white/10 flex flex-col gap-3">
          {businessDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <div key={index} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-500">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{detail.label}</span>
                    <span className="font-black text-base text-white uppercase">{detail.value}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center opacity-30">
          <p className="text-[10px] text-white font-black uppercase tracking-[0.5em]">
            ISO 9001:2015 CERTIFIED OPERATIONS
          </p>
        </div>
      </div>
    </section>
  )
}
