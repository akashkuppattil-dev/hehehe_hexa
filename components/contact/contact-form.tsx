"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"
import { useState } from "react"

const productInterests = [
  { value: "general", label: "General Enquiry" },
  { value: "spray-guns", label: "Spray Guns & Paint Equipment" },
  { value: "welding", label: "Welding Machines" },
  { value: "engine-cranes", label: "Engine Cranes & Lifting" },
  { value: "power-tools", label: "Power Tools" },
  { value: "special-tools", label: "Special Service Tools" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "workshop-setup", label: "Workshop Setup" },
  { value: "others", label: "Others" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="glass">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">Our team will respond within 30 minutes during working hours.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Send Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Mobile Number *</Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="+91 98765 43210"
              required
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 h-11"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Company / Workshop Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="e.g. Hexamech Auto Works"
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gst" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">GST Number</Label>
            <Input
              id="gst"
              name="gst"
              placeholder="GSTIN (Optional)"
              className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Product Interest *</Label>
          <Select name="interest" required>
            <SelectTrigger className="bg-black/40 border-white/10 text-zinc-300 focus:border-orange-500 focus:ring-orange-500/20 h-11">
              <SelectValue placeholder="Select product category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
              {productInterests.map((interest) => (
                <SelectItem key={interest.value} value={interest.value} className="focus:bg-orange-500 focus:text-white cursor-pointer">
                  {interest.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider">Message / Requirement *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please describe your requirements, specifications, or quantity needed..."
            rows={5}
            required
            className="bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
          />
        </div>

        <Button type="submit" className="w-full h-12 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest shadow-lg shadow-orange-900/20 text-xs transition-all" disabled={isLoading}>
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Submit Quote Request
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
