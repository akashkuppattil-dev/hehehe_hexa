import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
]

const brands = brandImageFiles.map((file) => ({
    name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    logo: `/images/brands/${file}`,
}))

export const metadata = {
    title: "Premium Brand Partners | Hexamech Linich Tools",
    description: "Authorized dealer for world-class industrial and automotive tool brands.",
}

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-20 border-b border-white/5 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Official Distributors</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase leading-tight tracking-tight">
                        Our Trusted <span className="text-orange-500">Brand Partners</span>
                    </h1>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                        We supply genuine, professional-grade tools from the world's leading manufacturers to automotive workshops and industrial facilities across India.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                {/* FEATURED PARTNER - LINICH */}
                <div className="mb-12">
                    <Link href="/shop?brand=Linich">
                        <div className="group relative bg-[#111111] rounded-3xl border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full group-hover:bg-orange-600/10 transition-all" />

                            <div className="grid md:grid-cols-2 gap-6 relative z-10 p-6 items-center">
                                <div className="bg-white rounded-xl p-6 shadow-xl flex items-center justify-center h-full min-h-[180px] group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="relative w-full h-full min-h-[100px]">
                                        <Image
                                            src="/images/brands/linich-logo.jpg"
                                            alt="Linich Tools"
                                            fill
                                            className="object-contain mix-blend-multiply"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-orange-500 text-[10px] font-black uppercase tracking-widest">
                                        Strategic Partner
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter">Linich Tools</h2>
                                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                                        Setting the standard for industrial excellence. Our primary partnership delivers exclusive access to Linich's premium range.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors">
                                        Explore Products <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* ALL BRANDS GRID */}
                <div className="mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/5"></div>
                    <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">Authorized Catalog</span>
                    <div className="h-px flex-1 bg-white/5"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {brands.map((brand, i) => {
                        // Normalize Name
                        let displayName = brand.name;
                        if (displayName.toLowerCase().includes("linich")) displayName = "Linich Tools";
                        if (displayName.toLowerCase().includes("dewalt")) displayName = "DeWalt";

                        return (
                            <Link key={i} href={`/shop?brand=${encodeURIComponent(displayName)}`} className="h-full">
                                <Card className="group h-full bg-[#111111] hover:bg-[#161616] border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col overflow-hidden">
                                    {/* Logo Area */}
                                    <div className="h-32 bg-white p-4 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                                            <Image
                                                src={brand.logo || "/placeholder.svg"}
                                                alt={displayName}
                                                fill
                                                className="object-contain mix-blend-multiply"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 p-4 flex flex-col items-center text-center">
                                        <h3 className="text-sm font-black text-white uppercase tracking-tight mb-1 group-hover:text-orange-500 transition-colors">
                                            {displayName}
                                        </h3>
                                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors mt-auto">
                                            View
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center pb-12">
                    <div className="max-w-2xl mx-auto bg-[#111111] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4">Need a specific brand?</h3>
                        <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                            We have access to a global network of manufacturers. If you don't see what you're looking for, contact our procurement team.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-black hover:bg-zinc-200 font-black h-12 px-8 uppercase tracking-widest rounded-xl transition-all">
                                Request Custom Brand
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
