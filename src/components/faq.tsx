import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "@phosphor-icons/react"

const faqs = [
  {
    q: "What is Grog and how does it work?",
    a: "Grog is a free offline canvas notes app for creative thinkers. It provides an infinite canvas where you can write notes, sketch ideas, draw freely, and create mind maps — all without needing an internet connection. No account, no ads, no distractions. Just open and create."
  },
  {
    q: "Is Grog really free? No hidden charges?",
    a: "Yes, Grog is completely free forever. There are no paid plans, subscriptions, in-app purchases, or advertisements. It is built as a free productivity tool for students, creators, founders, and anyone who needs a private space to think."
  },
  {
    q: "Does Grog work completely offline?",
    a: "Yes, Grog is offline-first. You can take notes, sketch, draw, and build mind maps with zero internet connection. All your data is stored locally on your device. No data is sent to any server unless you choose to sign in with Google for optional cloud backup."
  },
  {
    q: "Do I need to create an account?",
    a: "No account is required to use Grog. It works fully offline without any sign-in. Optional Google Sign-In is available for users who want to back up their notes to the cloud. You can use Grog entirely without ever creating an account."
  },
  {
    q: "What can I create with Grog?",
    a: "With Grog you can: take freeform handwritten notes on an infinite canvas, sketch and draw with natural tools, create visual mind maps to connect ideas, organize thoughts and knowledge visually, journal privately offline, brainstorm creative projects, and manage personal knowledge — all in one unified workspace."
  },
  {
    q: "What platforms and devices support Grog?",
    a: "Grog is available as a downloadable Android APK and as a Progressive Web App (PWA) that runs in any modern browser. The PWA works on desktop and mobile browsers with full offline capabilities. Android devices running 6.0+ are supported."
  },
  {
    q: "How many themes does Grog have?",
    a: "Grog includes 10 hand-crafted visual themes: Blood Moon (red), Royal Gold (gold), Electric Blue (blue), Neon Lime (green), Crimson (dark red), Deep Purple (purple), Arctic (light), Cream Paper (warm), Matrix (green terminal), and Ferrari (red). Each theme customizes the canvas, background, accent, and text colors."
  },
  {
    q: "Who built Grog and why?",
    a: "Grog was created by Love Dhiman, a Computer Science student and indie developer. It was built to provide a simple, fast, private space for notes, sketches, and mind maps — free from the complexity and data collection of mainstream productivity apps."
  },
  {
    q: "Is Grog open source?",
    a: "Yes, Grog is fully open source. The source code is available on GitHub at github.com/dhimanLove/Grog. Contributions, bug reports, and feature requests are welcome."
  },
  {
    q: "How do I download and install Grog?",
    a: "Visit grog-brown.vercel.app, scroll to the Download section, sign in with Google, and click 'Download APK'. You can also use the web version directly in your browser without downloading anything. The PWA can be installed to your home screen for a native-like experience."
  }
]

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="text-base sm:text-lg text-white/80 group-hover:text-white transition-colors pr-4"
          style={{ fontFamily: "Pangolin", fontWeight: 400, lineHeight: 1.4 }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-colors"
        >
          <Plus weight="bold" size={14} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 sm:pb-6 text-sm sm:text-base text-white/40 leading-relaxed max-w-2xl"
              style={{ fontFamily: "Indie Flower", fontWeight: 400, lineHeight: 1.7 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/40 mb-5">
            FAQ
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-[0.9]"
            style={{ fontFamily: "Indie Flower", fontWeight: 400 }}
          >
            Questions?
            <br />
            <span className="text-white/35">Answered.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/35 max-w-md mx-auto" style={{ fontFamily: "Pangolin", fontWeight: 400 }}>
            Everything you need to know about Grog offline canvas notes app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-6"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((faq, i) => (
            <div key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                toggle={() => toggle(i)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
