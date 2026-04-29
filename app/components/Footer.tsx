"use client"

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import Link from 'next/link'
import { Settings, HelpCircle, DollarSign, Rocket, BookOpen, LifeBuoy, Phone, Wrench, Lock, FileText, Mail, MapPin, X } from 'lucide-react'

export default function Footer() {
  const [showSupport, setShowSupport] = useState(false)

  return (
    <footer className="bg-orange-300 text-black px-6 py-6 md:px-8 md:py-8 pb-3">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection direction="none" delay={0}>
          <div className="mb-5">
            <div className="font-extrabold text-lg md:text-xl text-black mb-2">M-Gym</div>
            <p className="text-black text-sm md:text-base leading-relaxed m-0">
              Transform your gym business with powerful management tools designed for modern fitness studios.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 mb-5 pb-4">
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

      </div>
    </footer>
  )
}