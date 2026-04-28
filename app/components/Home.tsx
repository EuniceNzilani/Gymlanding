"use client"

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Home() {
  return (
    <section
      id="home"
      className="bg-white pt-0 pb-8 md:pt-14 md:pb-14 px-0.5 md:px-14 relative overflow-hidden w-full box-border"
    >

      <div className="max-w-7xl mx-auto px-0 py-8 md:p-8 rounded-2xl relative overflow-hidden">
        <Image src="/background.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/14 z-10 rounded-2xl" />
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center m-0">

              {/* Left: Content */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="flex flex-col justify-center order-2 md:order-1 ml-5">
                <div className="flex gap-2 items-center mb-4">
                  <div className="w-3 h-3 rounded bg-gray-800 shadow-lg shadow-orange-400/35 flex-shrink-0"/>
                  <span className="text-sm font-bold text-white/90 uppercase tracking-wide">M-Gym</span>
                </div>

                <h1 className="text-3xl md:text-5xl m-0 mb-4 leading-tight text-white font-black">
                  Grow Your Gym & <span className="bg-gray-800 bg-clip-text text-transparent drop-shadow-lg">Boost Revenue</span>
                </h1>

                <p className="text-white/85 text-base mb-8 leading-relaxed max-w-[90%]">
                  Stop losing money and members. Automate payments, manage schedules, track member progress, and scale your business effortlessly with our intelligent gym management platform.
                </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 mb-12 flex-wrap">
                    <button className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/3 hover:shadow-xl hover:shadow-orange-500/4 hover:-translate-y-0.5 whitespace-nowrap">
                      <span>📱</span>
                      <div className="flex flex-col items-start leading-tight">
                        <div className="text-xs font-bold">Get it on</div>
                        <div className="text-sm font-extrabold">Google Play</div>
                      </div>
                    </button>
                      <Link href="https://m-gym.co.ke/signin" className="no-underline">
                        <button className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/3 hover:shadow-xl hover:shadow-orange-500/4 hover:-translate-y-0.5 whitespace-nowrap">
                          Get Started
                        </button>
                      </Link>
                   </div>

                {/* Key Benefits */}
                <div className="grid gap-4">
                  <div className="font-semibold text-sm uppercase tracking-wide text-white/8">What you gain:</div>
                  <div className="grid gap-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/3 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                      <div>
                        <div className="font-semibold text-white text-base">Automated Payments</div>
                        <div className="text-sm text-white/75">Never chase payments again</div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/3 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                      <div>
                        <div className="font-semibold text-white text-base">24/7 Member Portal</div>
                        <div className="text-sm text-white/75">Workouts, diet plans, attendance tracking</div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/3 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                      <div>
                        <div className="font-semibold text-white text-base">Real-time Dashboard</div>
                        <div className="text-sm text-white/75">Track revenue, attendance, and growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Phone Mockup Display */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="flex items-center justify-center order-1 md:order-2 relative">
                  <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                    {/* Main center phone - larger */}
                    <div className="absolute w-[120px] md:w-[200px] h-[240px] md:h-[380px] z-30">
                      <Image src="/phone%20mockup.png" alt="Main app mockup" fill className="object-contain rounded-3xl shadow-2xl shadow-black/4" />
                    </div>

                    {/* Left phone - offset */}
                    <div className="hidden md:block absolute left-0 w-[130px] h-[260px] z-20 -translate-x-5 translate-y-8 -rotate-12 will-change-transform">
                      <Image src="/gym-Dashboard.png" alt="Secondary mockup 1" fill className="object-contain rounded-2xl shadow-xl shadow-black/25 opacity-80" />
                    </div>

                     {/* Right phone - offset */}
                     <div className="hidden md:block absolute right-0 w-[130px] h-[260px] z-20 translate-x-5 translate-y-10 rotate-12 will-change-transform">
                       <Image src="/Gym-image.png" alt="Secondary mockup 2" fill className="object-contain rounded-2xl shadow-xl shadow-black/25 opacity-80" />
                     </div>

                   {/* Floating accent elements */}
                   <div className="absolute w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-orange-500/08 rounded-full -top-5 right-[10%] pointer-events-none"/>
                   <div className="absolute w-[80px] md:w-[120px] h-[80px] md:h-[120px] bg-orange-500/08 rounded-full -bottom-8 left-[-40px] md:left-[-10%] pointer-events-none"/>
                 </div>
               </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  )
}