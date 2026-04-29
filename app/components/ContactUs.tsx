"use client"

import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function ContactUs() {
  return (
    <section id="contact" className="bg-white/62 py-8 px-0.5 md:p-14 relative overflow-hidden w-full box-border">

       <div className="max-w-7xl mx-auto bg-orange-100 py-2 px-0 md:p-8 rounded-2xl text-center relative z-10">
        <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection direction="none" delay={0}>
          <div className="flex justify-between items-start gap-4 mb-7">
            <div>
              <h2 className="m-0 text-2xl md:text-3xl font-black text-gray-900">Contact Us 📞</h2>
              <p className="mt-2 text-gray-600 max-w-[600px] leading-relaxed">Get in touch with us for any questions or support</p>
            </div>
          </div>
        </AnimatedSection>
        {/* Contact layout */}
        <AnimatedSection direction="up" delay={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <AnimatedItem delay={0.1}>
              <div className="bg-white rounded-lg py-2 px-0.25 md:p-2 flex flex-col gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span aria-hidden className="bg-red-900/4 rounded-full p-2 text-orange-400">📞</span>
                  <div className="font-bold text-gray-900">Phone</div>
                </div>
                <div className="text-orange-400 font-extrabold">+254111014100</div>
                <div className="text-slate-400 text-sm">24/7 availability</div>
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <div className="bg-white rounded-lg py-2 px-0.25 md:p-2 flex flex-col gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span aria-hidden className="bg-red-900/4 rounded-full p-2 text-red-500">💬</span>
                  <div className="font-bold text-gray-900">WhatsApp</div>
                </div>
                <div className="text-orange-400 font-extrabold">+254748329740</div>
                <div className="text-slate-400 text-sm">8:00 AM - 10:00 PM daily</div>
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.3}>
              <div className="bg-white rounded-lg py-2 px-0.25 md:p-2 flex flex-col gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span aria-hidden className="bg-red-900/4 rounded-full p-2 text-red-500">✉️</span>
                  <div className="font-bold text-gray-900">Email</div>
                </div>
                <div className="text-orange-400 font-extrabold">support@mzalendofiber.co.ke</div>
                <div className="text-slate-400 text-sm">24/7 availability</div>
              </div>
            </AnimatedItem>
          </div>
          <div>
            <div className="bg-transparent rounded-xl p-0 md:p-3">
              <h3 className="flex items-center gap-2 text-gray-900 mb-3"><span aria-hidden className="text-orange-400">✉️</span> Send us a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); console.log('contact form submitted') }} className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full box-border">
                <input aria-label="Full name" placeholder="Full name" required className="p-3 rounded-lg border border-gray-100 bg-gray-50/1 shadow-sm shadow-black/04 w-full box-border text-gray-900" />
                <input aria-label="Email" placeholder="Email" required className="p-3 rounded-lg border border-gray-100 bg-gray-50/1 shadow-sm shadow-black/04 w-full box-border text-gray-900" />
                <select aria-label="Subject" required className="col-span-1 md:col-span-2 p-2.5 rounded-lg border border-gray-100 bg-gray-50/1 shadow-sm shadow-black/04 w-full box-border text-gray-900">
                  <option value="">Select an option</option>
                  <option>General</option>
                  <option>Billing</option>
                  <option>Technical</option>
                </select>
                <textarea aria-label="Message" placeholder="Describe your issue..." required className="col-span-1 md:col-span-2 min-h-[120px] p-2.5 rounded-lg border border-gray-100 bg-gray-50/1 shadow-sm shadow-black/04 w-full box-border text-gray-900" />
                <div className="col-span-1 md:col-span-2 flex justify-start">
                  <button type="submit" className="bg-orange-400 text-white px-4 py-2.5 rounded-lg border-none cursor-pointer">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
