"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const brandImageFiles = [
  "black-decker.jpg",
  "blue-point-snapon.jpg",
  "chicago-pneumatic.jpg",
  "devilbiss-refinish.jpg",
  "dewalt.jpg",
  "force.jpg",
  "german-polish.jpg",
  "karcher.jpg",
  "kovax.jpg",
  "linich-logo.jpg",
  "menzerna-logo.jpg",
  "mr-tools.jpg",
  "progrip.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.05_50cf4637.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_24105a75.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_27e1b7c5.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_309c0c3a.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_8f761bd4.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_f9e6ad78.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_4ab9343f.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_8163f38d.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_74981a3c.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_c255bd56.jpg",
];

const brands = brandImageFiles.map((file) => ({
  name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  logo: `/images/brands/${file}`,
}));

export function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [brandsPerRow, setBrandsPerRow] = useState(6)
  const totalRows = 2

  useEffect(() => {
    const updateBrandsPerRow = () => {
      setBrandsPerRow(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 4 : 6)
    }
    updateBrandsPerRow()
    window.addEventListener("resize", updateBrandsPerRow)
    return () => window.removeEventListener("resize", updateBrandsPerRow)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [brandsPerRow])

  const nextRow = () => setCurrentIndex((prev) => (prev + brandsPerRow) % brands.length)
  const prevRow = () => setCurrentIndex((prev) => (prev - brandsPerRow + brands.length) % brands.length)

  const visibleBrands = Array.from({ length: brandsPerRow * totalRows }).map(
    (_, i) => brands[(currentIndex + i) % brands.length],
  )

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Dynamic Glow Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md shadow-lg">
            <Star className="h-3 w-3 text-orange-500 fill-current" />
            <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Premium Inventory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-none drop-shadow-xl">
            Our Brand <span className="text-orange-500">Partners</span>
          </h2>
        </div>

        {/* FEATURED BRAND: LINICH (Now at the Top) */}
        <div className="mb-16">
          <Link href="/shop?brand=Linich">
            <div className="max-w-4xl mx-auto p-[1px] bg-gradient-to-r from-orange-500/30 via-slate-800 to-orange-500/30 rounded-3xl group/featured">
              <Card className="bg-[#0f0f0f] border-none shadow-2xl rounded-3xl p-8 md:p-12 transition-all hover:bg-[#141414] overflow-hidden relative">
                {/* Background Glow for Featured */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none group-hover/featured:bg-orange-500/20 transition-all duration-500" />

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
                  <div className="relative w-56 h-32 md:w-72 md:h-40 flex-shrink-0 group-hover/featured:scale-105 transition-transform duration-500 p-6 bg-white rounded-2xl border border-white/10 shadow-lg flex items-center justify-center">
                    <Image
                      src="/images/brands/linich-logo.jpg"
                      alt="LINICH Primary Partner"
                      fill
                      className="object-contain p-2 mix-blend-multiply"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
                      <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tighter uppercase italic">LINICH TOOLS</h3>
                      <Badge className="bg-orange-600 text-white border-none text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-lg shadow-orange-600/20">Primary Partner</Badge>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed max-w-xl mb-8">
                      Exclusive supplier of precision-engineered industrial equipment since 2024. Powering workshops with world-class durability.
                    </p>
                    <div className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-[0.3em] group-hover/featured:gap-4 transition-all">
                      Explore Collection <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Link>
        </div>

        {/* OTHER BRANDS GRID SLIDER (Now below) */}
        <div className="relative group/brands max-w-7xl mx-auto px-4 md:px-12">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevRow}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md hover:bg-orange-600 hover:border-orange-600 transition-all shadow-2xl hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
            {visibleBrands.map((brand, index) => (
              <div
                key={index}
                className="group/brand-card relative aspect-square flex items-center justify-center p-4 bg-[#f8f9fa] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Soft lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black/5 opacity-50" />

                <div className="w-full h-full relative opacity-90 group-hover/brand-card:opacity-100 transition-all duration-300 transform group-hover/brand-card:scale-110">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain mix-blend-multiply filter contrast-125"
                  />
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextRow}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md hover:bg-orange-600 hover:border-orange-600 transition-all shadow-2xl hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
