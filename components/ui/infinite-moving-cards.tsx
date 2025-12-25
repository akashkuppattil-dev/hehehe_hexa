"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteMovingCardsProps {
    items: {
        icon: React.ElementType
        title: string
        description: string
    }[]
    direction?: "left" | "right"
    speed?: "fast" | "normal" | "slow"
    pauseOnHover?: boolean
    className?: string
}

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: InfiniteMovingCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])

    const [start, setStart] = useState(false)

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards")
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse")
            }
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s")
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s")
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s")
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[280px] max-w-full relative rounded-2xl border border-white/5 flex-shrink-0 bg-slate-900/40 px-8 py-6 md:w-[350px]"
                        key={idx}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
