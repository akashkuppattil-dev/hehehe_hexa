"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const customers = [
  { name: "Mahindra", logo: "/images/customers/mahindra.jpeg" },
  { name: "A.M. Motors", logo: "/images/customers/am-motors.png" },
  { name: "Amana Toyota", logo: "/images/customers/amana-toyota.png" },
  { name: "Luxon Tata", logo: "/images/customers/luxon-tata.jpeg" },
  { name: "APCO Holdings", logo: "/images/customers/apco.jpeg" },
  { name: "Classic Hyundai", logo: "/images/customers/classic-hyundai.jpeg" },
  { name: "Indus Motors", logo: "/images/customers/indus-motors.jpg" },
  { name: "Popular Vehicles", logo: "/images/customers/popular-vehicles.webp" },
  { name: "Palal Toyota", logo: "/images/customers/palal-toyota.png" },
  { name: "Toyota", logo: "/images/customers/toyota.jpeg" },
  { name: "Eram Motors", logo: "/images/customers/eram-motors.jpeg" },
  { name: "Bridgeway", logo: "/images/customers/bridgeway.jpeg" },
  { name: "DKH Kia", logo: "/images/customers/dkh-kia.jpg" },
].filter((customer) => customer.logo && customer.logo.trim() !== "")

export function TrustedCustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerRow, setItemsPerRow] = useState(6)
  const totalRows = 2
  const itemsPerPage = itemsPerRow * totalRows

  useEffect(() => {
    const updateItemsPerRow = () => {
      setItemsPerRow(window.innerWidth < 768 ? 2 : 6)
    }
    updateItemsPerRow()
    window.addEventListener("resize", updateItemsPerRow)
    return () => window.removeEventListener("resize", updateItemsPerRow)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [itemsPerRow])

  const handlePrev = () => setCurrentIndex((prev) => (prev - itemsPerRow + customers.length) % customers.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + itemsPerRow) % customers.length)

  const visibleCustomers = Array.from({ length: itemsPerPage }).map(
    (_, i) => customers[(currentIndex + i) % customers.length],
  )

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Dynamic Glow Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md shadow-lg">
          <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Global Network</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-none drop-shadow-xl">
          Trusted by <span className="text-orange-500">Industry Leaders</span>
        </h2>
        <p className="text-sm md:text-base text-zinc-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Supplying the largest automotive service networks and dealerships across South India with premium equipment.
        </p>

        <div className="relative group/customers px-4 md:px-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md hover:bg-orange-600 hover:border-orange-600 transition-all shadow-2xl hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {visibleCustomers.map((customer, index) => (
              <div
                key={index}
                className="group/customer-card relative aspect-square flex items-center justify-center p-4 bg-[#f8f9fa] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Soft lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black/5 opacity-50" />

                <div className="w-full h-full relative opacity-90 group-hover/customer-card:opacity-100 transition-all duration-300 transform group-hover/customer-card:scale-110">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    fill
                    className="object-contain mix-blend-multiply filter contrast-125"
                    sizes="(max-width: 768px) 50vw, 16vw"
                    priority={index < 6}
                  />
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 text-white bg-black/40 backdrop-blur-md hover:bg-orange-600 hover:border-orange-600 transition-all shadow-2xl hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
