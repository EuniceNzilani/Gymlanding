"use client"

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import Link from 'next/link'
import { Settings, HelpCircle, DollarSign, Rocket, BookOpen, LifeBuoy, Phone, Wrench, Lock, FileText, Mail, MapPin, X } from 'lucide-react'

export default function Footer() {
  const [showSupport, setShowSupport] = useState(false)

  return (
    <footer className="bg-orange-300 text-black px-0 py-6 md:px-8 md:py-8 pb-3">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection direction="none" delay={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-5 mb-5 pb-4 border-b border-white/04">
          <div>
            <div className="font-extrabold text-lg md:text-xl text-black mb-2">M-Gym</div>
            <p className="text-black text-sm md:text-base leading-relaxed m-0">
              Transform your gym business with powerful management tools designed for modern fitness studios.
            </p>
          </div>
          <div>
            <h4 className="text-black font-bold m-0 mb-3 text-sm uppercase tracking-wide">Product</h4>
            <ul className="list-none p-0 m-0 grid gap-2">
              <li><Link href="/#features" className="text-black no-underline text-sm md:text-base flex items-center"><Settings className="mr-2 text-black" size={16} />Features</Link></li>
               <li><Link href="/#faq" className="text-black no-underline text-sm md:text-base flex items-center"><HelpCircle className="mr-2 text-black" size={16} />FAQ</Link></li>
              <li><Link href="/#pricing" className="text-black no-underline text-sm md:text-base flex items-center"><DollarSign className="mr-2 text-black" size={16} />Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold m-0 mb-3 text-sm uppercase tracking-wide">Documentation</h4>
            <ul className="list-none p-0 m-0 grid gap-2">
              <li><Link href="/documentation" className="text-black no-underline text-sm md:text-base flex items-center"><Rocket className="mr-2 text-black" size={16} />Getting Started</Link></li>
              <li><Link href="/documentation" className="text-black no-underline text-sm md:text-base flex items-center"><BookOpen className="mr-2 text-black" size={16} />Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold m-0 mb-3 text-sm uppercase tracking-wide">Support</h4>
            <ul className="list-none p-0 m-0 grid gap-2">
              <li><a href="#contact" className="text-black no-underline text-sm md:text-base flex items-center"><LifeBuoy className="mr-2 text-black" size={16} />Help Center</a></li>
              <li><Link href="/#faq" className="text-black no-underline text-sm md:text-base flex items-center"><HelpCircle className="mr-2 text-black" size={16} />FAQ</Link></li>
              <li><a href="#contact" className="text-black no-underline text-sm md:text-base flex items-center"><Phone className="mr-2 text-black" size={16} />Contact Support</a></li>
              <li><Link href="/documentation" className="text-black no-underline text-sm md:text-base flex items-center"><Wrench className="mr-2 text-black" size={16} />Troubleshooting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold m-0 mb-3 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="list-none p-0 m-0 grid gap-2">
              <li><Link href="/privacy" className="text-black no-underline text-sm md:text-base flex items-center"><Lock className="mr-2 text-black" size={16} />Privacy</Link></li>
              <li><Link href="/terms" className="text-black no-underline text-sm md:text-base flex items-center"><FileText className="mr-2 text-black" size={16} />Terms</Link></li>
            </ul>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection direction="none" delay={0}>
          <div className="text-center pt-2">
            <p className="text-black text-xs md:text-sm m-0">© 2026 M-Gym. All rights reserved.</p>
          </div>
        </AnimatedSection>

        {showSupport && (
          <div onClick={() => setShowSupport(false)} className="fixed inset-0 bg-black/45 flex items-center justify-center z-60 p-4 md:p-0">
            <div onClick={(e) => e.stopPropagation()} className="w-full md:w-[min(520px,95%)] bg-green-50 rounded-lg md:rounded-xl p-5 md:p-4 shadow-2xl shadow-gray-900/35 max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible">
              <div className="flex justify-between items-center mb-2">
                <h3 className="m-0 text-green-800 text-lg md:text-xl">Contact Us</h3>
                <button onClick={() => setShowSupport(false)} aria-label="Close support" className="bg-transparent border-none text-lg md:text-xl cursor-pointer text-green-800 p-2"><X size={20} className="text-black align-middle" /></button>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 text-green-800">
                  <Phone className="text-xl flex-shrink-0 text-black align-middle" />
                  <a href="tel:+254111014100" className="text-green-800 no-underline text-sm md:text-base">+254111014100</a>
                </div>
                <div className="flex items-center gap-3 text-green-800">
                  <Mail className="text-lg flex-shrink-0 text-black align-middle" />
                  <a href="mailto:support@mzalendofiber.co.ke" className="text-green-800 no-underline text-sm md:text-base break-words">support@mzalendofiber.co.ke</a>
                </div>
                <div className="flex items-center gap-3 text-green-800">
                  <MapPin className="text-lg flex-shrink-0 text-black align-middle" />
                  <span className="text-sm md:text-base">Nairobi, Kenya</span>
                </div>
                <div className="mt-3 bg-green-100 text-green-800 p-3 rounded-xl shadow-sm">
                  <div className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span>Opening Hours</span>
                  </div>
                  <ul className="list-none p-0 m-0 grid gap-1 text-sm md:text-base text-green-800">
                    <li><strong>Mon-Fri:</strong> 8:00 AM - 6:00 PM</li>
                    <li><strong>Sat:</strong> 9:00 AM - 2:00 PM</li>
                    <li><strong>Sun:</strong> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
