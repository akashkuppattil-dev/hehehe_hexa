"use client"

import { SearchDropdown } from "@/components/search-dropdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X, ChevronDown, Home, Package, Award, Phone, Info, ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { BrandsMenu } from "./brands-menu"

const COMPANY_LOGO = "/images/logo.jpg"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | null>(null)

  const pathname = usePathname()
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMenuLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (relatedTarget instanceof Node && headerRef.current && !headerRef.current.contains(relatedTarget)) {
      setActiveMenu(null);
    }
  }

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${isScrolled
        ? "py-3 shadow-xl bg-black/50 backdrop-blur-md"
        : "py-5"
        }`}
      onMouseLeave={handleMenuLeave}
    >
      {/* Texture Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/header-bg.jpg"
          alt="Header Texture"
          fill
          className="object-cover opacity-100 brightness-[0.7] contrast-125"
          priority
        />
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col group min-w-[280px]">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-xl border border-white/10 overflow-hidden group-hover:border-orange-500/30 transition-all">
                <Image
                  src="/images/logo.jpg"
                  alt="Hexamech Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col pl-1 items-center">
                <h1 className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter uppercase group-hover:text-orange-500 transition-colors">
                  Hexamech
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1.5px] w-3 bg-orange-600 group-hover:w-5 transition-all" />
                  <span className="text-[10px] md:text-[11px] text-orange-500 font-black uppercase tracking-[0.2em]">
                    Linich Tools
                  </span>
                  <div className="h-[1.5px] w-3 bg-orange-600 group-hover:w-5 transition-all" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-zinc-200 mt-2 font-bold uppercase tracking-widest pl-1 leading-none">
              <span>Professional Automotive</span>
              <span className="text-orange-500 font-black text-[11px]">&</span>
              <span>Industrial Tools Supplier</span>
            </div>

          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link
              href="/"
              className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}
            >
              Home
            </Link>

            <div className="relative h-12 flex items-center group cursor-pointer" onMouseEnter={() => setActiveMenu("products")}>
              <Link href="/shop" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors flex items-center gap-1 ${pathname.startsWith("/shop") ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>
                Products
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <Link href="/brands" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${activeMenu === "brands" || pathname === "/brands" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>
              Brands
            </Link>

            <Link href="/about" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/about" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>About Us</Link>

            <Link href="/contact" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/contact" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>Contact</Link>

            {/* Search Bar - Near Contact */}
            <form onSubmit={handleSearchSubmit} className="relative group">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-[240px] focus:w-[300px] h-8 bg-white/5 border-white/10 text-zinc-300 focus:bg-white/10 focus:border-orange-500/50 transition-all rounded-full text-xs placeholder:text-zinc-600 pl-3 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" onClick={() => handleSearchSubmit()} className="absolute right-0 top-0 h-full px-2.5 flex items-center cursor-pointer text-zinc-500 hover:text-orange-500 transition-colors">
                  <Search className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Request Quote Button */}

            <Link href="/contact" className="hidden sm:flex">
              <button className="flex items-center gap-2 px-4 h-9 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-lg shadow-orange-900/20 active:scale-95">
                <span>Get Quote</span>
              </button>
            </Link>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="https://wa.me/917510638693"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center text-green-500 hover:bg-white/10 rounded transition-all"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-black/90 " onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-[85vw] max-w-[360px] bg-zinc-950/95 backdrop-blur-xl flex flex-col animate-in slide-in-from-left duration-500 overflow-hidden border-r border-white/10 shadow-2xl">
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                <div className="flex flex-col">
                  <span className="font-black text-2xl text-white tracking-tighter uppercase italic">HEXAMECH</span>
                  <span className="text-[10px] text-orange-500 font-bold tracking-[0.3em] uppercase">Linich Tools</span>
                </div>
                <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                <div className="mb-6 px-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Menu</p>
                  {[
                    { name: "Home", href: "/", icon: Home },
                    { name: "Products", href: "/shop", icon: Package },
                    { name: "Brands", href: "/brands", icon: Award },
                    { name: "About Us", href: "/about", icon: Info },
                    { name: "Contact", href: "/contact", icon: Phone },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group mb-2
                        ${pathname === item.href ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" : "hover:bg-white/5 text-zinc-400 hover:text-white border border-transparent"}
                      `}
                    >
                      <item.icon className={`h-5 w-5 ${pathname === item.href ? "text-orange-500" : "text-zinc-500 group-hover:text-white"}`} />
                      <span className="font-bold uppercase tracking-wider text-sm">{item.name}</span>
                      <ChevronRight className={`ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${pathname === item.href ? "opacity-100 translate-x-0 text-orange-500" : ""}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-zinc-900/30 border-t border-white/5">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">Connect With Us</p>
                <a
                  href="https://wa.me/917510638693"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-xl py-4 shadow-lg shadow-green-900/20 transition-all active:scale-95 group"
                >
                  <MessageCircle className="h-5 w-5 fill-white/20" />
                  <span className="text-sm font-black uppercase tracking-wider">Chat on WhatsApp</span>
                </a>
                <p className="text-[10px] text-zinc-600 text-center mt-4">
                  © 2025 Hexamech Linich Tools.
                </p>
              </div>
            </div>
          </div>
        )
      }
    </header >
  )
}
