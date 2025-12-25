"use client"

import { brands, products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function BrandsMenu({ onClose }: { onClose: () => void }) {
    const [selectedBrand, setSelectedBrand] = useState(brands[0])

    const filteredProducts = products.filter(p => p.brand === selectedBrand)

    return (
        <div
            className="absolute top-full left-1/2 -translate-x-[20%] mt-0 pt-4 w-[950px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-[#111111] shadow-2xl rounded-xl border border-white/10 overflow-hidden flex h-[500px] transition-colors">
                {/* Left Column: Brands List */}
                <div className="w-[240px] bg-[#0a0a0a] border-r border-white/10 flex flex-col">
                    <div className="p-4 border-b border-white/10 bg-[#111111]">
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Our Brands</span>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {brands.map((brand) => (
                            <button
                                key={brand}
                                onMouseEnter={() => setSelectedBrand(brand)}
                                onClick={() => {
                                    window.location.href = `/shop?brand=${encodeURIComponent(brand)}`
                                    onClose()
                                }}
                                className={`w-full text-left px-6 py-3.5 text-sm font-semibold transition-all flex items-center justify-between group ${selectedBrand === brand
                                    ? "bg-[#111111] text-orange-500 border-l-4 border-orange-500"
                                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {brand}
                                <ChevronRight className={`h-4 w-4 transition-transform ${selectedBrand === brand ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Featured Products */}
                <div className="flex-1 bg-[#111111] flex flex-col overflow-hidden">
                    <div className="p-6 pb-2 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">{selectedBrand} <span className="text-zinc-500 font-normal ml-1">Products</span></h3>
                        <Link
                            href={`/shop?brand=${encodeURIComponent(selectedBrand)}`}
                            onClick={onClose}
                            className="text-xs font-bold text-orange-500 hover:text-orange-400 uppercase tracking-wider"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 pt-2 custom-scrollbar">
                        <div className="grid grid-cols-3 gap-4">
                            {filteredProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    onClick={onClose}
                                    className="group flex flex-col gap-3 p-3 rounded-xl border border-white/5 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-[#0a0a0a]"
                                >
                                    <div className="relative aspect-square w-full bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#eeeeee] rounded-lg overflow-hidden">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-3 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-medium text-white group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                                            {product.name}
                                        </p>
                                        <p className="text-[10px] text-zinc-500 font-mono">{product.sku}</p>
                                    </div>
                                </Link>
                            ))}
                            {filteredProducts.length === 0 && (
                                <div className="col-span-3 flex flex-col items-center justify-center text-center p-10 opacity-50">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 text-2xl">📦</div>
                                    <p className="text-sm font-medium text-zinc-400">Products coming soon for this brand.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
                        <Link
                            href="/shop"
                            className="text-xs text-center block font-bold text-zinc-400 hover:text-orange-500 transition-colors uppercase tracking-wider"
                            onClick={onClose}
                        >
                            BROWSE ENTIRE CATALOG
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f46;
                }
            `}</style>
        </div>
    )
}
