"use client"

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

export default function Testimonials() {
  const initial = [
    { id: 1, name: 'Arjun R.', role: 'Owner, Peak Fitness', text: '“Since switching to M‑Gym our monthly revenue increased 28% — automation saved hours each week.”' },
    { id: 2, name: 'Sana M.', role: 'Manager, CoreClub', text: '“Member retention jumped after we started using the custom plans and in-app reminders. Game changer.”' },
  ]

  const [items, setItems] = useState(initial)

  const handleNext = () => setItems(prev => {
    if (prev.length <= 1) return prev
    const [first, ...rest] = prev
    return [...rest, first]
  })

  const handlePrev = () => setItems(prev => {
    if (prev.length <= 1) return prev
    const last = prev[prev.length - 1]
    return [last, ...prev.slice(0, prev.length - 1)]
  })

  return (
    <section id="testimonials" className="bg-white/62 px-0.5 py-8 md:p-14 relative overflow-hidden w-full box-border">

      <div className="max-w-7xl mx-auto bg-orange-200 px-6 py-8 md:p-8 rounded-2xl text-center relative z-10">
        <div className="w-full max-w-6xl mx-auto">
        <AnimatedSection direction="none" delay={0}>
          <div className="relative">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl mb-2 text-gray-900 font-extrabold">What Gym Owners Say</h2>
              <p className="text-gray-600 mb-8">Real results from real businesses using M-Gym.</p>
            </div>
            <button className="hidden md:absolute md:top-0 md:right-0 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Add a Review</button>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="none" delay={0}>
        <div className="flex justify-center">
          <div className="bg-transparent rounded-xl px-6 py-5 md:p-5 text-left max-w-full md:max-w-[760px]">
            <div className="flex flex-col md:flex-row gap-0 md:gap-0">
              {items.slice(0, 2).map((item, idx) => {
                const isLeft = idx === 0
                const cardBg = isLeft ? 'bg-orange-50' : 'bg-orange-100'
                const cardRadius = isLeft ? 'rounded-l-xl md:rounded-r-none' : 'rounded-r-xl md:rounded-l-none'
                const cardPadding = 'p-6 py-3 md:p-4'
                const nameFontSize = isLeft ? 'text-base md:text-lg' : 'text-sm md:text-base'
                const roleFontSize = isLeft ? 'text-sm md:text-base' : 'text-xs md:text-sm'

                return (
                  <div key={item.id} className={`flex-1 p-1 md:p-0 ${idx === 0 ? 'order-2 md:order-1 hidden md:block' : 'order-1 md:order-2'}`}>
                    <div className="relative">
                      <div className={`${cardBg} ${cardRadius} ${cardPadding} h-auto md:h-[200px] flex flex-col justify-between relative`}>
                        {/* Joined circles inside card (infinity-like) */}
                        {isLeft && (
                          <div className="absolute top-2 md:top-3 left-2 md:left-3 w-7 md:w-9 h-4 md:h-5 pointer-events-none z-10">
                            <div aria-hidden className="absolute left-0 top-0 w-4 md:w-5 h-4 md:h-5 rounded-full bg-orange-600 shadow-sm shadow-black/08" />
                            <div aria-hidden className="absolute left-3 md:left-4 top-0 w-4 md:w-5 h-4 md:h-5 rounded-full bg-red-500 shadow-sm shadow-black/08" />
                          </div>
                        )}
                        {isLeft ? (
                          <>
                            <div />
                            <div className="flex flex-col items-start gap-1">
                              <div className={`font-extrabold ${nameFontSize}`}>{items[1]?.name}</div>
                              <div className={`${roleFontSize} text-slate-400`}>{items[1]?.role}</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-center items-center mb-3">
                              <div className="text-amber-500 text-2xl md:text-3xl text-center" aria-hidden>★★★★★</div>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-3">{item.text}</p>
                            <div className="flex flex-col items-start gap-1 block md:hidden">
                              <div className="font-extrabold text-sm md:text-base">{item.name}</div>
                              <div className="text-xs md:text-sm text-slate-400">{item.role}</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection direction="none" delay={0}>
        <div className="flex gap-3 justify-center mt-4">
          <button aria-label="Previous testimonials" onClick={handlePrev} className="bg-transparent rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer">&lt;</button>
          <button aria-label="Next testimonials" onClick={handleNext} className="bg-transparent rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer">&gt;</button>
        </div>
        <div className="md:hidden flex justify-center mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Add a Review</button>
        </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
