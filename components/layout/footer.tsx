"use client"

import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-zinc-200 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* BRAND */}
          <div className="col-span-2 lg:col-span-3 space-y-2">
            <Link href="/" className="block">
              <h2 className="text-lg font-bold tracking-tight text-white mb-0.5">
                HEXAMECH
              </h2>
              <span className="text-[10px] font-semibold tracking-widest text-orange-500">
                LINICH TOOLS
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-zinc-300 max-w-xs">
              Trusted B2B supplier of professional automotive and industrial tools.
            </p>

            <div className="flex gap-2">
              {/* Instagram */}
              <a
                href="#"
                className="w-7 h-7 flex items-center justify-center rounded border border-white/10 hover:border-[#E1306C]/50 text-[#E1306C] bg-white/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-7 h-7 flex items-center justify-center rounded border border-white/10 hover:border-[#1877F2]/50 text-[#1877F2] bg-white/5 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917510638693"
                className="w-7 h-7 flex items-center justify-center rounded border border-white/10 hover:border-[#25D366]/50 text-[#25D366] bg-white/5 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h4 className="footer-title mb-2 !text-[10px]">Company</h4>
            <ul className="footer-list space-y-0.5">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Products</Link></li>
              <li><Link href="/brands">Brands</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-2">
            <h4 className="footer-title mb-2 !text-[10px]">Products</h4>
            <ul className="footer-list space-y-0.5">
              <li>Welding Machines</li>
              <li>Lifting Equipment</li>
              <li>Pneumatic Tools</li>
              <li>Diagnostic Equipment</li>
              <li>Tool Cabinets</li>
              <li>Engine Service Tools</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="lg:col-span-2">
            <h4 className="footer-title mb-2 !text-[10px]">Support</h4>
            <ul className="footer-list space-y-0.5">
              <li><Link href="/contact">Request a Quote</Link></li>
              <li>WhatsApp Sales</li>
              <li>Email Sales</li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="col-span-2 lg:col-span-3 space-y-2">
            <h4 className="footer-title mb-2 !text-[10px]">Contact Us</h4>

            <div className="footer-contact">
              <MapPin className="icon" />
              <span>
                Door No 17/346, Chulliparamba,<br />
                Near Farook College, Calicut
              </span>
            </div>

            <div className="footer-contact">
              <Phone className="icon" />
              <a href="tel:+917510638693">+91 75106 38693</a>
            </div>

            <div className="footer-contact">
              <Mail className="icon" />
              <a href="mailto:hexamechlinichtools@gmail.com">
                hexamechlinichtools@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/5">
          <TrustItem icon={ShieldCheck} title="GST Verified" desc="Registered business" />
          <TrustItem icon={Truck} title="All India Shipping" desc="Reliable delivery" />
          <TrustItem icon={Package} title="Genuine Products" desc="Original brands" />
        </div>

        {/* COPYRIGHT */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600">
          <p>© {year} Hexamech Linich Tools. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
          </div>
        </div>
      </div>

      {/* LOCAL STYLES */}
      <style jsx>{`
        .footer-title {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: white;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .footer-list {
          font-size: 13px;
          line-height: 1.8;
        }
        .footer-list li {
          color: #e4e4e7;
        }
        .footer-list li:hover {
          color: #f97316;
        }
        .footer-contact {
          display: flex;
          gap: 10px;
          font-size: 13px;
          color: #e4e4e7;
        }
        .icon {
          width: 16px;
          height: 16px;
          color: #f97316;
          margin-top: 2px;
        }
      `}</style>
    </footer>
  )
}

function TrustItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: any
  title: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="w-5 h-5 text-orange-500 mt-1" />
      <div>
        <h5 className="text-sm font-semibold text-white">{title}</h5>
        <p className="text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  )
}
