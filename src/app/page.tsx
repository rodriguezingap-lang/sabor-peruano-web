import { Header } from "@/components/restaurant/header"
import { Hero } from "@/components/restaurant/hero"
import { Features } from "@/components/restaurant/features"
import { MenuSection } from "@/components/restaurant/menu-section"
import { About } from "@/components/restaurant/about"
import { Contact } from "@/components/restaurant/contact"
import { Footer } from "@/components/restaurant/footer"
import { WhatsAppFloat } from "@/components/restaurant/whatsapp-float"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-950 text-stone-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <MenuSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
