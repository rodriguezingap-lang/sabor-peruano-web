import { MessageCircle } from "lucide-react"
import { enlaceWhatsApp, negocio } from "@/config/site"

/** Botón flotante de WhatsApp — visible en toda la página */
export function WhatsAppFloat() {
  return (
    <a
      href={enlaceWhatsApp(negocio.mensajeWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer un pedido por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 font-semibold text-[#0b2916] shadow-xl shadow-black/40 transition-transform hover:scale-105 sm:pr-5"
    >
      <span className="relative flex size-7 items-center justify-center">
        {/* Animo de "pulso" */}
        <span
          className="absolute inline-flex size-full animate-ping rounded-full bg-white/40"
          aria-hidden="true"
        />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </span>
      <span className="hidden text-sm sm:inline">Pide aquí</span>
    </a>
  )
}
