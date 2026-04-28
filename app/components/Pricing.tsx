"use client"

import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white/62 px-0.5 py-8 md:p-14 relative overflow-hidden w-full box-border">

      <div className="max-w-7xl mx-auto bg-orange-200 px-0 py-8 md:p-8 rounded-2xl relative z-10">
        <div className="w-full max-w-6xl mx-auto">
        <AnimatedSection direction="none" delay={0}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl mb-2 text-gray-900 font-extrabold">Pricing</h2>
              <p className="text-gray-600 mb-8 text-sm md:text-base">Simple plans for gyms of all sizes — scale as you grow.</p>
            </div>
            <button className="bg-orange-600 text-white border-none px-5 py-3 rounded-lg font-bold cursor-pointer text-sm md:text-base">Get Started</button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch w-full box-border">
          <AnimatedItem direction="none" delay={0}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm rounded-xl px-0.25 py-5 md:p-6 shadow-lg shadow-gray-900/12 border border-white/16 flex flex-col justify-between min-h-[220px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 group">
              <div className="font-extrabold text-gray-900 mb-2 text-sm md:text-base transition-colors duration-300 group-hover:text-orange-600">Under 50 customers</div>
              <div className="text-lg md:text-xl font-black text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">Ksh 100<span className="text-xs md:text-sm font-bold"> / customer / month</span></div>
              <ul className="text-slate-600 text-left mb-4 text-sm md:text-base">
                <li className="mb-2">All core features</li>
                <li className="mb-2">Basic onboarding</li>
                <li>Email support</li>
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
          <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg shadow-gray-900/12 border border-white/16 flex flex-col justify-between min-h-[220px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 group">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Most Popular</div>
            <div className="font-extrabold text-gray-900 mb-2 text-sm md:text-base transition-colors duration-300 group-hover:text-orange-600">50–100 customers</div>
            <div className="text-lg md:text-xl font-black text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">Ksh 80<span className="text-xs md:text-sm font-bold"> / customer / month</span></div>
            <ul className="text-slate-600 text-left mb-4 text-sm md:text-base">
              <li className="mb-2">Everything in lower tier</li>
              <li className="mb-2">Priority onboarding</li>
              <li>24/7 Priority support</li>
            </ul>

          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
          <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg shadow-gray-900/12 border border-white/16 flex flex-col justify-between min-h-[220px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 group">
            <div className="font-extrabold text-gray-900 mb-2 text-sm md:text-base transition-colors duration-300 group-hover:text-orange-600">100–200 customers</div>
            <div className="text-lg md:text-xl font-black text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">Ksh 70<span className="text-xs md:text-sm font-bold"> / customer / month</span></div>
            <ul className="text-slate-600 text-left mb-4 text-sm md:text-base">
              <li className="mb-2">Dedicated onboarding specialist</li>
              <li className="mb-2">Integration support</li>
              <li>Phone + email support</li>
            </ul>

          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
          <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg shadow-gray-900/12 border border-white/16 flex flex-col justify-between min-h-[220px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 group">
            <div className="font-extrabold text-gray-900 mb-2 text-sm md:text-base transition-colors duration-300 group-hover:text-orange-600">200–500 customers</div>
            <div className="text-lg md:text-xl font-black text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">Ksh 60<span className="text-xs md:text-sm font-bold"> / customer / month</span></div>
            <ul className="text-slate-600 text-left mb-4 text-sm md:text-base">
              <li className="mb-2">24/7 Priority support</li>
              <li className="mb-2">Advanced integrations</li>
            </ul>
          </div>
          </AnimatedItem>

          <AnimatedItem delay={0.5}>
          <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg shadow-gray-900/12 border border-white/16 flex flex-col justify-between min-h-[220px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 group">
            <div className="font-extrabold text-gray-900 mb-2 text-sm md:text-base transition-colors duration-300 group-hover:text-orange-600">500+ customers</div>
            <div className="text-lg md:text-xl font-black text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">Custom</div>
            <ul className="text-slate-600 text-left mb-4 text-sm md:text-base">
              <li className="mb-2">24/7 Enterprise support</li>
              <li className="mb-2">Custom contract & pricing</li>
              <li>White-glove support</li>
            </ul>
          </div>
          </AnimatedItem>
          

        </div>
        </div>
      </div>
    </section>
  )
}
