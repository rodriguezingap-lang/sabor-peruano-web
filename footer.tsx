import { Facebook, Flame, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"
import { enlaceWhatsApp, negocio } from "@/config/site"

const enlaces = [
  { href: "#inicio", etiqueta: "Inicio" },
  { href: "#menu", etiqueta: "Menú" },
  { href: "#nosotros", etiqueta: "Nosotros" },
  { href: "#contacto", etiqueta: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-stone-800/80 bg-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-red-600 text-white">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl tracking-wide text-stone-100">
                {negocio.nombre}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">
              {negocio.eslogan}. Gracias por preferirnos.
            </p>
            {/* Redes sociales */}
            <div className="mt-4 flex gap-3">
              {negocio.facebook && (
                <a
                  href={negocio.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-lg border border-stone-800 text-stone-400 transition-colors hover:border-amber-600/60 hover:text-amber-400"
                >
                  <Facebook className="size-4" aria-hidden="true" />
                </a>
              )}
              {negocio.instagram && (
                <a
                  href={negocio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-lg border border-stone-800 text-stone-400 transition-colors hover:border-amber-600/60 hover:text-amber-400"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Enlaces */}
          <nav aria-label="Enlaces del sitio">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-200">
              Explora
            </h3>
            <ul className="mt-4 space-y-2.5">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                  >
                    {e.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-200">
              Contáctanos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
                {negocio.direccion}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-amber-400" aria-hidden="true" />
                +{negocio.whatsapp}
              </li>
              <li>
                <a
                  href={enlaceWhatsApp(negocio.mensajeWhatsApp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4be07f] transition-colors hover:text-[#6ae99a]"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Pedidos por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-800/80 pt-6 text-center text-xs text-stone-500">
          © {year} {negocio.nombre} · Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}
