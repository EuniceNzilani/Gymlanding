"use client"

import { AnimatedSection, AnimatedItem } from './AnimatedSection'
import { BarChart3, CreditCard, Users, ClipboardList, Dumbbell, FileText, Megaphone } from 'lucide-react'

export default function Features() {
  return (
    <AnimatedSection
      direction="none"
      id="features"
      className="px-0.5 py-8 md:p-14 w-full box-border bg-white/62"
    >
      <div className="max-w-7xl mx-auto rounded-2xl bg-orange-50 px-0 py-8 md:p-8">
        {/* Header */}
        <AnimatedSection direction="none" delay={0}>
          <div className="flex justify-between items-start gap-4 mb-7">
            <div>
              <h2 className="m-0 text-2xl md:text-3xl font-black text-gray-900">Powerful Features 💪</h2>
              <p className="mt-2 text-gray-600 max-w-[600px] leading-relaxed">Everything you need to run a thriving gym business</p>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch w-full box-border">
          <AnimatedItem direction="none" delay={0}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-lg shadow-gray-900/12 border border-white/16 text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <BarChart3 className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Dashboard</h3>
              <p className="mt-2 text-sm leading-relaxed">Track revenue and growth with charts. Monitor your gym performance in real-time from anywhere.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <CreditCard className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Payment Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed">Never chase payments again. M-Pesa, cash, card, and bank transfers all in one place.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <Users className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Staff Control</h3>
              <p className="mt-2 text-sm leading-relaxed">Add staff, set permissions, and track performance. Manage your team efficiently with role-based access.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <ClipboardList className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Plans & Pricing</h3>
              <p className="mt-2 text-sm leading-relaxed">Create custom membership plans. Flexible pricing that works for your gym and your members.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.5}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <Dumbbell className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Workouts & Diet</h3>
              <p className="mt-2 text-sm leading-relaxed">Create programs and meal plans for your members. Help them achieve their fitness goals faster.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.6}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <FileText className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Activity Log</h3>
              <p className="mt-2 text-sm leading-relaxed">Track all gym activities automatically. Keep records of member attendance and engagement.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.7}>
            <div className="bg-gradient-to-b from-white/35 to-white/25 bg-orange-500/02 text-gray-900 p-5 md:p-6 rounded-xl border border-white/16 backdrop-blur-sm shadow-lg shadow-gray-900/12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-b hover:from-orange-50/50 hover:to-orange-100/50 min-h-[180px] flex flex-col group">
              <Megaphone className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="m-0 mb-2 text-lg font-extrabold transition-colors duration-300 group-hover:text-orange-600">Announcements</h3>
              <p className="mt-2 text-sm leading-relaxed">Schedule and send messages to your members. Keep them engaged and informed about events.</p>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  )
}
