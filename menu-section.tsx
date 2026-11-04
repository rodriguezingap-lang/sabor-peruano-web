"use client"

import {
  Beef,
  CupSoda,
  Drumstick,
  Flame,
  MessageCircle,
  Soup,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { enlacePedido, menu, type Categoria, type Plato } from "@/config/site"
import { FadeIn } from "./fade-in"

// Ícono de cada categoría según su id
const iconosCategorias: Record<string, LucideIcon> = {
  hamburguesas: Beef,
  pollo: Drumstick,
  alitas: Flame,
  caldos: Soup,
  extras: CupSoda,
}

function TarjetaPlato({ plato }: { plato: Plato }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-stone-800/80 bg-stone-900/60 transition-all hover:border-amber-600/50 hover:shadow-xl hover:shadow-black/30">
      {/* Foto del plato */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={plato.imagen}
          alt={plato.nombre}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" aria-hidden="true" />
        {plato.popular && (
          <Badge className="absolute left-3 top-3 border-0 bg-gradient-to-r from-amber-500 to-orange-600 text-xs font-bold text-stone-950 shadow-lg">
            <Flame className="size-3" aria-hidden="true" />
            Más pedido
          </Badge>
        )}
        {/* Precio sobre la foto */}
        <span className="absolute bottom-3 right-3 rounded-lg bg-stone-950/85 px-3 py-1 font-display text-2xl tracking-wide text-amber-400 backdrop-blur-sm">
          S/ {plato.precio.toFixed(2)}
        </span>
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-stone-100">{plato.nombre}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-stone-400">
          {plato.descripcion}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="w-full bg-[#25D366]/15 font-semibold text-[#4be07f] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-[#0b2916]"
        >
          <a
            href={enlacePedido(plato)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${plato.nombre} por WhatsApp`}
          >
            <MessageCircle aria-hidden="true" />
            Pedir este plato
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ContenidoCategoria({ categoria }: { categoria: Categoria }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categoria.platos.map((plato) => (
        <FadeIn key={plato.nombre} className="h-full">
          <TarjetaPlato plato={plato} />
        </FadeIn>
      ))}
    </div>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-16 bg-stone-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado de la sección */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Delicioso y al momento
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-stone-50 sm:text-6xl">
            Nuestro Menú
          </h2>
          <p className="mt-3 text-stone-400">
            Elige tu categoría, mira la foto, el precio y pide directo por
            WhatsApp. ¡Así de fácil!
          </p>
        </FadeIn>

        {/* Pestañas de categorías */}
        <Tabs defaultValue={menu[0]?.id} className="mt-10">
          <TabsList className="scroll-fino h-auto w-full justify-start overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/80 p-1.5 sm:justify-center">
            {menu.map((cat) => {
              const Icono = iconosCategorias[cat.id] ?? UtensilsCrossed
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-stone-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-stone-950 data-[state=active]:font-bold"
                >
                  <Icono className="size-4" aria-hidden="true" />
                  {cat.nombre}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {menu.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-8">
              <p className="mb-6 text-center text-sm italic text-stone-500">
                {cat.descripcion}
              </p>
              <ContenidoCategoria categoria={cat} />
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-10 text-center text-xs text-stone-500">
          Los precios están en soles (S/) y pueden variar sin previo aviso.
          Consulta disponibilidad por WhatsApp.
        </p>
      </div>
    </section>
  )
}
