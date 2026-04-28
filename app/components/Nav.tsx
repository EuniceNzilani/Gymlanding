'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const homeHref = pathname === '/' ? '#home' : '/#home'

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-50 shadow-sm shadow-black/6 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between w-full h-15">
          <div className="font-extrabold text-xl md:text-2xl bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">M-Gym</div>

          {/* Desktop Menu */}
          <div className="flex gap-6 items-center">
            <Link href={homeHref} className="no-underline text-gray-800 text-base font-medium transition-colors cursor-pointer hover:text-gray-600">Home</Link>
            <Link href="/#features" className="no-underline text-gray-800 text-base font-medium transition-colors cursor-pointer hover:text-gray-600">Features</Link>
            <Link href="/#pricing" className="no-underline text-gray-800 text-base font-medium transition-colors cursor-pointer hover:text-gray-600">Pricing</Link>
            <Link href="/#testimonials" className="no-underline text-gray-800 text-base font-medium transition-colors cursor-pointer hover:text-gray-600">Testimonials</Link>
             <a href="https://m-gym.co.ke/signin" target="_blank" rel="noopener noreferrer" className="px-7 py-2.5 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-none rounded-full text-sm font-semibold cursor-pointer shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/4 no-underline inline-block text-center">Sign In</a>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Hidden on desktop */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 flex items-center justify-between bg-gray-50 shadow-sm shadow-black/6 h-15 md:hidden">
        {/* M-Gym Logo */}
        <div className="font-extrabold text-xl bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent min-w-0 overflow-hidden">M-Gym</div>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1 bg-none border-none cursor-pointer p-1 flex-shrink-0">
          <span className="w-6 h-0.5 bg-gray-800 rounded transition-all duration-300" style={{transform: isOpen ? 'rotate(45deg) translateY(0.55rem)' : 'rotate(0)'}}></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded transition-all duration-300" style={{opacity: isOpen ? 0 : 1}}></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded transition-all duration-300" style={{transform: isOpen ? 'rotate(-45deg) translateY(-0.55rem)' : 'rotate(0)'}}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-15 left-0 right-0 bg-gray-50 border-t border-gray-200 flex flex-col gap-2 p-4 max-h-[calc(100vh-60px)] overflow-y-auto z-40 md:hidden">
          <Link href={homeHref} onClick={() => setIsOpen(false)} className="no-underline text-gray-800 text-base font-medium p-3 rounded-lg transition-colors cursor-pointer hover:bg-gray-100">Home</Link>
          <Link href="/#features" onClick={() => setIsOpen(false)} className="no-underline text-gray-800 text-base font-medium p-3 rounded-lg transition-colors cursor-pointer hover:bg-gray-100">Features</Link>
          <Link href="/#pricing" onClick={() => setIsOpen(false)} className="no-underline text-gray-800 text-base font-medium p-3 rounded-lg transition-colors cursor-pointer hover:bg-gray-100">Pricing</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className="no-underline text-gray-800 text-base font-medium p-3 rounded-lg transition-colors cursor-pointer hover:bg-gray-100">Testimonials</Link>
           <a href="https://m-gym.co.ke/signin" target="_blank" rel="noopener noreferrer" className="w-full p-2.5 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-none rounded-full text-sm font-semibold cursor-pointer shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/4 mt-2 no-underline inline-block text-center">Sign In</a>
        </div>
      )}
    </>
  )
}
