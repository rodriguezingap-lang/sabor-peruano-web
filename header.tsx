"use client"

import { useEffect, useState } from "react"
import { Flame, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { enlaceWhatsApp, negocio } from "@/config/site"

const enlaces = [
  { href: "#inicio", etiqueta: "Inicio" },
  { href: "#menu", etiqueta: "Menú" },
  { href: "#nosotros", etiqueta: "Nosotros" },
  { href: "#contacto", etiqueta: "Contacto" },
]

export function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-800/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Ir al inicio">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-red-600 text-white shadow-md shadow-orange-900/40">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl tracking-wide text-stone-100">
            {negocio.nombre}
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="text-sm font-medium text-stone-300 transition-colors hover:text-amber-400"
            >
              {e.etiqueta}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-[#25D366] font-semibold text-[#0b2916] hover:bg-[#2be370] sm:inline-flex"
          >
            <a
              href={enlaceWhatsApp(negocio.mensajeWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              Pedir ahora
            </a>
          </Button>

          {/* Menú móvil */}
          <Sheet open={abierto} onOpenChange={setAbierto}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-200 md:hidden"
                aria-label="Abrir menú de navegación"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-stone-800 bg-stone-950 text-stone-200"
            >
              <SheetTitle className="font-display text-3xl tracking-wide text-amber-400">
                {negocio.nombre}
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-2" aria-label="Navegación móvil">
                {enlaces.map((e) => (
                  <a
                    key={e.href}
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-stone-200 transition-colors hover:bg-stone-900 hover:text-amber-400"
                  >
                    {e.etiqueta}
                  </a>
                ))}
              </nav>
              <Button
                asChild
                className="mt-6 w-full bg-[#25D366] font-semibold text-[#0b2916] hover:bg-[#2be370]"
              >
                <a
                  href={enlaceWhatsApp(negocio.mensajeWhatsApp)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Pedir por WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
