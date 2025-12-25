"use client"

import type React from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getTopProducts } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  const topProducts = getTopProducts(10)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return
      if (window.innerWidth < 640) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else if (window.innerWidth < 1280) setItemsToShow(3)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % topProducts.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + topProducts.length) % topProducts.length)

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, topProducts.length); i++) {
      items.push(topProducts[(currentIndex + i) % topProducts.length])
    }
    return items
  }

  const isDisabled = topProducts.length <= itemsToShow

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-br from-[#0b0c10] via-[#0f172a] to-[#0b0c10] border-t border-white/5">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-2">
            <Star className="h-2.5 w-2.5 text-orange-400 fill-current" />
            <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Best Sellers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-2 tracking-tighter uppercase italic leading-none">
            Heavy-Duty <span className="text-orange-500">Equipment</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto italic">
            Engineered for precision and built for the toughest industrial environments.
          </p>
        </div>

        <div className="relative group/carousel">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            disabled={isDisabled}
            className="absolute -left-2 xl:-left-8 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all opacity-0 group-hover/carousel:opacity-100 disabled:hidden hover:bg-orange-500 hover:text-black"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {getVisibleItems().map((product, index) => (
              <div key={`${currentIndex}-${index}`} className="h-full transform transition-all duration-300 hover:-translate-y-1">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            disabled={isDisabled}
            className="absolute -right-2 xl:-right-8 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all opacity-0 group-hover/carousel:opacity-100 disabled:hidden hover:bg-orange-500 hover:text-black"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Link href="/shop">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest text-xs px-8 h-10 rounded-full transition-all shadow-xl shadow-orange-500/20 group">
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
