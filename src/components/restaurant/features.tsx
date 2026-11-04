import { Bike, Clock, Flame, HandCoins } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "./fade-in"
import { ventajas } from "@/config/site"

// Cada ventaja recibe un ícono según su posición
const iconos = [Flame, Clock, Bike, HandCoins]

export function Features() {
  return (
    <section className="bg-stone-950 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {ventajas.map((v, i) => {
          const Icono = iconos[i % iconos.length]
          return (
            <FadeIn key={v.titulo} delay={i * 0.08}>
              <Card className="h-full border-stone-800/80 bg-stone-900/60 transition-colors hover:border-amber-600/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-red-600/20 text-amber-400">
                    <Icono className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-100">{v.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">{v.texto}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
