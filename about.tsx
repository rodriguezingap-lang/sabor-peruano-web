import { BadgeCheck, ChefHat, HeartHandshake, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "./fade-in"
import { negocio } from "@/config/site"

const puntos = [
  {
    icono: Leaf,
    texto: "Ingredientes frescos comprados cada mañana",
  },
  {
    icono: ChefHat,
    texto: "Recetas propias preparadas al momento",
  },
  {
    icono: HeartHandshake,
    texto: "Atención rápida y amable, como en casa",
  },
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-16 bg-stone-900/40 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Foto */}
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-stone-800">
            <img
              src="/images/nosotros.png"
              alt={`Cocina de ${negocio.nombre}`}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          {/* Tarjeta flotante */}
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-stone-800 bg-stone-950/95 px-6 py-4 shadow-xl shadow-black/40 backdrop-blur sm:-right-5">
            <p className="font-display text-4xl text-amber-400">
              {negocio.aniosExperiencia}+
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
              años de sabor
            </p>
          </div>
        </FadeIn>

        {/* Texto */}
        <FadeIn delay={0.15} className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Nuestra historia
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-stone-50 sm:text-6xl">
            Cocinamos como si fuera para nuestra familia
          </h2>
          <p className="mt-4 leading-relaxed text-stone-400">{negocio.historia}</p>

          <ul className="mt-6 space-y-3">
            {puntos.map((p) => (
              <li key={p.texto} className="flex items-center gap-3 text-stone-200">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                  <p.icono className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{p.texto}</span>
              </li>
            ))}
          </ul>

          {/* Cifras */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stone-800 pt-6">
            <div>
              <p className="font-display text-3xl text-amber-400">
                {negocio.platosVendidos}+
              </p>
              <p className="mt-0.5 text-xs text-stone-500">pedidos servidos</p>
            </div>
            <div>
              <p className="font-display text-3xl text-amber-400">
                {negocio.clientesFelices}+
              </p>
              <p className="mt-0.5 text-xs text-stone-500">clientes felices</p>
            </div>
            <div>
              <p className="font-display text-3xl text-amber-400">100%</p>
              <p className="mt-0.5 text-xs text-stone-500">hecho al momento</p>
            </div>
          </div>

          <Badge className="mt-6 border-amber-600/40 bg-amber-500/10 text-amber-400">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Negocio local · Hecho con amor
          </Badge>
        </FadeIn>
      </div>
    </section>
  )
}
