"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { MessageCircle, ArrowRight, ShieldCheck, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { memo } from "react"
import { toast } from "sonner" // Assuming sonner is used or generic alert

interface ProductCardProps {
  product: Product
}

function ProductCardComponent({ product }: ProductCardProps) {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const url = `${window.location.origin}/product/${product.id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} on Hexamech`,
          url: url,
        })
      } catch (err) {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(url)
      // If we don't have a toast component easily available, just rely on the action being done or use standard alert
      // But assuming there is one, or just standard alert for now if unsure. 
      // User didn't specify feedback, but clipboard copy is standard fallback.
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Card className="group relative overflow-hidden bg-[#111111] border border-white/5 flex flex-col h-full rounded-xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Product Image - Dominant & Clear */}
        <div className="relative h-[300px] w-full overflow-hidden bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* SKU Badge - Minimal */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/80 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {product.sku}
            </span>
          </div>

          {/* Stock Status */}
          {product.inStock && (
            <div className="absolute top-4 right-4 z-20">
              <div className="flex items-center gap-1.5 bg-green-500/90 text-white px-2.5 py-1 rounded shadow-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-wider">In Stock</span>
              </div>
            </div>
          )}

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="absolute bottom-4 right-4 z-30 h-8 w-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-all hover:scale-110 active:scale-95"
            title="Share Product"
          >
            <Share2 className="h-4 w-4" />
          </button>

          {/* Overlay Gradient for Text Contrast (Bottom only) */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex-grow flex flex-col">
          {/* Brand & Stats */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded text-[10px] font-bold uppercase tracking-wider border-white/10 text-zinc-500">
                {product.brand}
              </Badge>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-lg text-white mb-2 leading-snug group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-6">
            {product.description}
          </p>

          {/* Action Buttons - Always Visible & Strong */}
          <div className="mt-auto grid grid-cols-2 gap-3">
            <Button
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-white/5 rounded h-9 text-[10px] font-bold uppercase tracking-wider"
              onClick={(e) => e.stopPropagation()} // Let Link handle view
            >
              View Details
            </Button>

            <Button
              className="bg-orange-600 hover:bg-orange-500 text-white rounded h-9 text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-orange-900/20"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(
                  `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
                  "_blank",
                )
              }}
            >
              Get Quote
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
