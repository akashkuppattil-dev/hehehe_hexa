import { Mail, Phone, CheckCircle2 } from "lucide-react"

export function TopInfoBar() {
  return (
    <div
      className="
        w-full
        h-10
        hidden 
        md:flex
        items-center
        text-zinc-300
        relative
        z-50
        border-b border-white/10
        bg-[linear-gradient(180deg,#2a2d33_0%,#1f2329_100%)]
      "
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-full text-[10px] font-semibold uppercase tracking-widest">

        {/* LEFT */}
        <div className="flex items-center gap-8">
          <a
            href="tel:+917510638693"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-green-500" />
            <span>+91 75106 38693</span>
          </a>

          <a
            href="mailto:hexamechlinichtools@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-red-500" />
            <span>hexamechlinichtools@gmail.com</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>GST Verified Supplier</span>
          </div>

          <a
            href="https://wa.me/917510638693"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#25D366]"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.16c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.11.82.83-3.03-.2-.32a8.04 8.04 0 0 1-1.23-4.38c0-4.44 3.61-8.05 8.05-8.05s8.05 3.61 8.05 8.05-3.61 8.05-8.05 8.05zm4.56-6.03c-.25-.13-1.47-.72-1.7-.81-.22-.08-.39-.13-.55.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.32-.75-1.81-.19-.48-.39-.42-.53-.42h-.46c-.16 0-.43.06-.65.3-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3z" />
            </svg>
            <span>WhatsApp Sales</span>
          </a>
        </div>
      </div>
    </div>
  )
}
