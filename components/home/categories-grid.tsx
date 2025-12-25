"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/products"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const categoryImages: Record<string, string> = {
  "hand-tools": "/hand-tools-wrenches-pliers-professional.jpg",
  "power-tools": "/power-tools-drill-grinder-electric.jpg",
  "spray-guns": "/spray-gun-paint-automotive-hvlp.jpg",
  welding: "/welding-machine-mig-tig-industrial.jpg",
  lifting: "/engine-crane-hydraulic-hoist-workshop.jpg",
  transmission: "/transmission-jack-stand-automotive.jpg",
  "special-tools": "/special-service-tools-automotive-oem.jpg",
  pneumatic: "/pneumatic-tools-air-compressor-impact.jpg",
  stanley: "/stanley-tools-professional-yellow-black.jpg",
  bosch: "/bosch-power-tools-blue-professional.jpg",
}

export function CategoriesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 4

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const getVisibleCategories = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, categories.length); i++) {
      items.push(categories[(currentIndex + i) % categories.length])
    }
    return items
  }

  return (
    <section className="py-6 md:py-10 relative overflow-hidden bg-gradient-to-br from-[#0b0c10] via-[#0f172a] to-[#0b0c10] border-t border-white/5">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-2">
              <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-2 tracking-tighter uppercase italic leading-none">
              Shop by <span className="text-orange-500">Category</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-medium italic">
              Explore our range of high-performance tools engineered for excellence.
            </p>
          </div>
          <Link href="/shop" onClick={handleClick} className="hidden sm:block">
            <Button size="sm" variant="outline" className="text-orange-500 border-orange-500/20 bg-orange-500/5 hover:bg-orange-500 hover:text-black font-black uppercase tracking-widest text-[9px] px-4 h-8 rounded-full transition-all">
              View All Categories <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </div>

        <div className="relative group/categories">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="absolute -left-2 xl:-left-8 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all opacity-0 group-hover/categories:opacity-100 hover:bg-orange-500 hover:text-black"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {getVisibleCategories().map((category) => (
              <Link key={category.id} href="/shop" onClick={handleClick}>
                <Card className="group relative h-[220px] sm:h-[280px] overflow-hidden rounded-xl border border-white/5 shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <Image
                    src={categoryImages[category.id] || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                  {/* Glass Accent */}
                  <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-xl pointer-events-none" />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="w-8 h-1 bg-orange-500 mb-3 transform -skew-x-12 group-hover:w-12 transition-all duration-500" />
                    <h3 className="font-black text-lg sm:text-xl text-white mb-1 leading-tight uppercase tracking-tighter italic">
                      {category.name}
                    </h3>
                    <p className="text-[10px] text-slate-300 line-clamp-2 italic mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-orange-500 font-black text-[9px] uppercase tracking-[0.2em]">
                      Explore Tools <ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute -right-2 xl:-right-8 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all opacity-0 group-hover/categories:opacity-100 hover:bg-orange-500 hover:text-black"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/shop" onClick={handleClick}>
            <Button variant="outline" className="w-full text-orange-500 border-orange-500/20 bg-orange-500/5 rounded-full font-black h-10 text-[10px] uppercase tracking-widest">
              All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
