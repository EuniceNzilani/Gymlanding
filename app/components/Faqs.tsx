"use client"

import { AnimatedSection, AnimatedItem } from './AnimatedSection'

export default function Faqs() {
  return (
    <section id="faq" className="bg-white/62 px-0.5 py-8 md:p-14 relative overflow-hidden w-full box-border">

       <div className="max-w-7xl mx-auto bg-orange-100 p-8 rounded-2xl relative z-10">
        <div className="w-full max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl m-0 mb-4 text-gray-900 font-black">Frequently Asked Questions</h2>
            <p className="text-gray-600 m-0 text-sm md:text-lg">Find answers to common questions about our platform</p>
          </div>
        </AnimatedSection>

        <div className="grid gap-3">
          <AnimatedItem delay={0.1}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300" open>
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>How long does it take to set up?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                Most gyms are fully operational within 24 hours. Our team provides onboarding support, and we have detailed documentation to guide you through every step.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300">
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>What payment methods do you accept?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                We accept all major credit cards, bank transfers, and multiple payment gateways. Your members can pay via card, UPI, wallet, or recurring billing options.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300">
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>Is my data secure?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                Yes, we use bank-level encryption (AES-256), comply with GDPR and local regulations, and perform regular security audits. Your member data is fully protected.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300">
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>Can I import my existing member data?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                Absolutely! We support bulk import from Excel, CSV, and other gym management systems. Our support team can help with data migration at no extra cost.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.5}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300">
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>What support do you provide?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                We offer email support, live chat during business hours, and a comprehensive knowledge base. Premium plans include phone support and a dedicated account manager.
              </p>
            </details>
          </AnimatedItem>

          <AnimatedItem delay={0.6}>
            <details className="bg-slate-100/7 p-5 md:p-7 rounded-xl shadow-sm shadow-black/04 cursor-pointer border border-gray-100 transition-all duration-300">
              <summary className="font-semibold text-gray-900 text-base md:text-lg outline-none flex justify-between items-center select-none hover:text-orange-400">
                <span>Can I cancel anytime?</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed mb-0 text-sm md:text-base">
                Yes, there are no long-term contracts. You can cancel your subscription anytime. We also offer a 30-day money-back guarantee so you can try risk-free.
              </p>
            </details>
          </AnimatedItem>
        </div>
        </div>
      </div>
    </section>
  )
}
