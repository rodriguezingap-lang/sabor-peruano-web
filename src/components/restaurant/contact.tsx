import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "./fade-in"
import { enlaceWhatsApp, mapaBusqueda, mapaEmbed, negocio } from "@/config/site"

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-stone-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Estamos para servirte
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-stone-50 sm:text-6xl">
            Visítanos o pide a domicilio
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Horarios */}
          <FadeIn delay={0.05}>
            <Card className="h-full border-stone-800/80 bg-stone-900/60">
              <CardContent className="p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-red-600/20 text-amber-400">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-stone-100">
                  Horario de atención
                </h3>
                <dl className="mt-4 space-y-3">
                  {negocio.horarios.map((h) => (
                    <div
                      key={h.dias}
                      className="flex items-center justify-between border-b border-stone-800/70 pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <dt className="text-stone-400">{h.dias}</dt>
                      <dd className="font-semibold text-stone-100">{h.horas}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Ubicación */}
          <FadeIn delay={0.1}>
            <Card className="h-full border-stone-800/80 bg-stone-900/60">
              <CardContent className="p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-red-600/20 text-amber-400">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-stone-100">
                  Nuestra ubicación
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">
                  {negocio.direccion}
                </p>
                <p className="mt-1 text-xs text-stone-500">{negocio.referencia}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-5 border-stone-700 bg-transparent text-stone-200 hover:border-amber-600/60 hover:bg-stone-800 hover:text-amber-400"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      mapaBusqueda || negocio.direccion
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin aria-hidden="true" />
                    Ver en Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Pedidos */}
          <FadeIn delay={0.15}>
            <Card className="h-full border-[#25D366]/30 bg-gradient-to-b from-[#25D366]/10 to-stone-900/60">
              <CardContent className="flex h-full flex-col p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#4be07f]">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-stone-100">
                  Pedidos y delivery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">
                  Escríbenos por WhatsApp, confirma tu pedido y recíbelo en la
                  puerta de tu casa en 25 minutos.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-auto w-full bg-[#25D366] text-base font-bold text-[#0b2916] hover:bg-[#2be370]"
                >
                  <a
                    href={enlaceWhatsApp(negocio.mensajeWhatsApp)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    {negocio.nombre} por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Mapa */}
        {mapaEmbed && (
          <FadeIn delay={0.1} className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-stone-800">
              <iframe
                src={mapaEmbed}
                title="Mapa de ubicación"
                className="h-72 w-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
