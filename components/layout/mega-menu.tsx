"use client"

import { categories } from "@/lib/products"
import Link from "next/link"
import React from "react"
import {
    ChevronRight,
    Wrench,
    Zap,
    Paintbrush,
    ArrowUpCircle,
    Settings2,
    Wind,
    Sun,
    Ruler,
    Hammer,
    Sparkles
} from "lucide-react"

const IconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="h-4 w-4" />,
    Paintbrush: <Paintbrush className="h-4 w-4" />,
    ArrowUpCircle: <ArrowUpCircle className="h-4 w-4" />,
    Settings2: <Settings2 className="h-4 w-4" />,
    Wrench: <Wrench className="h-4 w-4" />,
    Wind: <Wind className="h-4 w-4" />,
    Sun: <Sun className="h-4 w-4" />,
    Ruler: <Ruler className="h-4 w-4" />,
    Hammer: <Hammer className="h-4 w-4" />,
    Sparkles: <Sparkles className="h-4 w-4" />,
}

export function MegaMenu({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[750px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-[#111111] shadow-2xl rounded-xl border border-white/10 p-8 relative overflow-hidden transition-colors">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <Wrench className="h-4 w-4 text-orange-500" />
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Product Categories</span>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/shop?category=${category.id}`}
                            className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all text-zinc-400 hover:text-white"
                            onClick={onClose}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                                    {IconMap[category.icon] || <Wrench className="h-4 w-4" />}
                                </div>
                                <span className="font-semibold text-zinc-200 group-hover:text-orange-500 transition-colors text-sm">
                                    {category.name}
                                </span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-zinc-700 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <p className="text-xs text-zinc-500 italic">Professional tools for authorized service centers and workshops.</p>
                    <Link
                        href="/shop"
                        className="text-xs font-bold text-orange-500 hover:text-orange-600 uppercase tracking-widest flex items-center gap-1.5 group"
                        onClick={onClose}
                    >
                        View Full Catalog
                        <span className="p-1 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-colors">
                            <ChevronRight className="h-3 w-3" />
                        </span>
                    </Link>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl -z-10 dark:opacity-20"></div>
            </div>
        </div>
    )
}
