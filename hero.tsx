"use client"

import { motion } from "framer-motion"
import { ArrowDown, Clock, MessageCircle, Star, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { enlaceWhatsApp, fotoPrincipal, negocio } from "@/config/site"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Foto de fondo */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={fotoPrincipal}
          alt=""
          className="size-full object-cover"
          loading="eager"
        />
        {/* Capas para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Etiqueta superior */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Star className="size-3.5 fill-amber-400" aria-hidden="true" />
            Abierto ahora · Delivery disponible
          </div>

          {/* Título principal */}
          <h1 className="mt-5 font-display text-6xl leading-[0.95] tracking-wide text-stone-50 sm:text-7xl lg:text-8xl">
            {negocio.nombre}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-xl">
            <span className="font-semibold text-amber-400">{negocio.eslogan}.</span>{" "}
            Hamburguesas jugosas, pollo broster crocante, alitas BBQ y caldos
            que reconfortan.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-base font-bold text-stone-950 shadow-lg shadow-orange-900/40 hover:from-amber-400 hover:to-orange-500 sm:w-auto"
            >
              <a href="#menu">
                <UtensilsCrossed aria-hidden="true" />
                Ver el menú
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-[#25D366]/60 bg-[#25D366]/10 text-base font-semibold text-[#4be07f] hover:bg-[#25D366]/20 hover:text-[#6ae99a] sm:w-auto"
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
          </div>

          {/* Mini datos */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-300">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-amber-400" aria-hidden="true" />
              Listo en 15–25 min
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              {negocio.clientesFelices}+ clientes felices
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="size-4 text-amber-400" aria-hidden="true" />
              {negocio.platosVendidos}+ pedidos servidos
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#menu"
        aria-label="Bajar al menú"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-stone-400 transition-colors hover:text-amber-400 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Explora</span>
        <ArrowDown className="size-4" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
