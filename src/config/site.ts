// ════════════════════════════════════════════════════════════════════
//   ⚙️  CONFIGURACIÓN DE TU SITIO WEB  —  ¡EDITA SOLO ESTE ARCHIVO!
// ════════════════════════════════════════════════════════════════════
//
//  Aquí cambias TODO el contenido de tu web: nombre, fotos, precios,
//  número de WhatsApp, horarios y dirección. No toques nada más.
//
//  📸 CÓMO CAMBIAR UNA FOTO (paso a paso):
//    OPCION A (recomendada): guarda tu foto en la carpeta
//    "public/images" del proyecto con el nombre que quieras
//    (ej: mi-burger.png) y aquí escribe: imagen: "/images/mi-burger.png"
//
//    OPCION B: sube tu foto a un hosting gratuito (imgur.com,
//    postimages.cc), copia el ENLACE DIRECTO y pégalo entre
//    comillas. Ejemplo: imagen: "https://i.imgur.com/tu-foto.jpg"
//
//  💰 CÓMO CAMBIAR UN PRECIO: cambia solo el número. Ej: precio: 12
//  ➕ CÓMO AGREGAR UN PLATO NUEVO: copia un bloque { ... } completo,
//     pégalo debajo y cambia sus datos.
// ════════════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────
//  1) DATOS DE TU NEGOCIO
// ────────────────────────────────────────────────
export const negocio = {
  nombre: "Sabor Peruano",
  eslogan: "Comida rápida con sabor de verdad",

  // ← Tu número de WhatsApp real (código de país + número, sin "+" ni espacios)
  whatsapp: "51993895017",

  // Mensaje que llega automáticamente cuando un cliente te escribe
  mensajeWhatsApp: "¡Hola! Vi su página web y quiero hacer un pedido 🍔",

  direccion: "Pasaje los Geoglifos Mz. B1 Lote 7, Cajuca Primera Entrada, Nasca",
  referencia: "Nasca – Ica, Perú", // ← Referencia corta (opcional)

  // Horario de atención (aparece en la sección Contacto)
  horarios: [
    { dias: "Lunes a Viernes", horas: "12:00 pm – 10:00 pm" },
    { dias: "Sábados y Domingos", horas: "12:00 pm – 11:00 pm" },
  ],

  // Datos para la sección "Nosotros"
  historia:
    "Somos un negocio familiar que nació con una idea simple: comida rápida de verdad sabrosa, preparada al momento y con ingredientes frescos. Cada hamburguesa, cada presa de pollo broster y cada caldo se prepara como si fuera para nuestra propia familia.",
  aniosExperiencia: "5",
  platosVendidos: "12,000",
  clientesFelices: "1,500",

  // Redes sociales (deja vacío "" la que no tengas)
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  tiktok: "",
}

// ────────────────────────────────────────────────
//  2) FOTO PRINCIPAL (la grande de la portada)
// ────────────────────────────────────────────────
export const fotoPrincipal =
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b0582f9e5789.jpg"

// ────────────────────────────────────────────────
//  3) EL MENÚ  (categorías, platos, precios y fotos)
// ────────────────────────────────────────────────
export type Plato = {
  nombre: string
  descripcion: string
  precio: number
  imagen: string // ← URL de la foto (cámbiala por la tuya cuando quieras)
  popular?: boolean // true = aparece con etiqueta "Más pedido"
}

export type Categoria = {
  id: string // identificador interno (no cambiar)
  nombre: string
  descripcion: string
  platos: Plato[]
}

export const menu: Categoria[] = [
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    descripcion: "Jugosas, a la plancha y con pan recién tostado",
    platos: [
      {
        nombre: "Hamburguesa Clásica",
        descripcion:
          "Carne a la plancha, queso americano, lechuga, tomate y salsa de la casa.",
        precio: 10,
        imagen: "/images/burger-clasica.png",
        popular: true,
      },
      {
        nombre: "Hamburguesa Doble Queso",
        descripcion:
          "Doble carne, doble queso cheddar derretido, cebolla crocante y salsa especial.",
        precio: 14,
        imagen: "/images/burger-doble.png",
      },
      {
        nombre: "Hamburguesa de la Casa",
        descripcion:
          "Carne 150 g, huevo frito, tocino, queso edam y papas rústicas dentro.",
        precio: 16,
        imagen: "/images/burger-casa.png",
      },
      {
        nombre: "Hamburguesa Especial",
        descripcion:
          "Nuestra estrella: carne madurada, triple queso, BBQ ahumada y cebolla caramelizada.",
        precio: 18,
        imagen: "/images/burger-especial.png",
        popular: true,
      },
    ],
  },
  {
    id: "pollo",
    nombre: "Pollo Broster",
    descripcion: "Crocante por fuera, jugoso por dentro",
    platos: [
      {
        nombre: "1/8 de Pollo Broster",
        descripcion: "Presca broster + papas doradas + crema de rocoto.",
        precio: 13,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/329179b734ee.jpg",
      },
      {
        nombre: "1/4 de Pollo Broster",
        descripcion: "Con papas familiares, ensalada fresca y dos cremas.",
        precio: 23,
        imagen: "/images/pollo-cuarto.png",
        popular: true,
      },
      {
        nombre: "1/2 Pollo Familiar",
        descripcion:
          "Ideal para compartir: papas familiares + 4 cremas + gaseosa 1.5 L.",
        precio: 45,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/930221cf2c4f.png",
      },
      {
        nombre: "Combo Broster Personal",
        descripcion: "Presca + papas + gaseosa personal. El almuerzo perfecto.",
        precio: 16,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6420073c359b.jpg",
      },
    ],
  },
  {
    id: "alitas",
    nombre: "Alitas BBQ",
    descripcion: "Bañadas en salsa y listas para chuparse los dedos",
    platos: [
      {
        nombre: "Alitas BBQ (6 unidades)",
        descripcion: "Bañadas en salsa BBQ ahumada con toque de sésamo.",
        precio: 15,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a0f97918c0f5.jpg",
        popular: true,
      },
      {
        nombre: "Alitas Picantes (8 unidades)",
        descripcion: "Para valientes: aderezo picante con limón y ajonjolí.",
        precio: 18,
        imagen: "/images/alitas-picantes.png",
      },
      {
        nombre: "Alitas Mixtas (12 unidades)",
        descripcion: "Mitad BBQ, mitad picantes, con aderezo ranch para dipping.",
        precio: 26,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1d54c495331d.jpg",
      },
    ],
  },
  {
    id: "caldos",
    nombre: "Caldos",
    descripcion: "Calientes, contundentes y con sabor a hogar",
    platos: [
      {
        nombre: "Caldo de Gallina",
        descripcion: "Gallina criolla, fideos, huevo y culantro. Energía pura.",
        precio: 12,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8323b4fb8097.jpg",
        popular: true,
      },
      {
        nombre: "Caldo de Pollo con Presa",
        descripcion: "Presca de pollo, yuca, choclo y un caldo que reconforta.",
        precio: 10,
        imagen: "/images/caldo-pollo.png",
      },
      {
        nombre: "Aguadito de Pollo",
        descripcion:
          "Arroz, pollo, culantro y un toque de ají. El clásico de siempre.",
        precio: 11,
        imagen: "/images/aguadito.png",
      },
    ],
  },
  {
    id: "extras",
    nombre: "Extras y Bebidas",
    descripcion: "Para completar tu pedido",
    platos: [
      {
        nombre: "Papas Fritas",
        descripcion: "Crocantes, doradas y con sal de la casa.",
        precio: 6,
        imagen:
          "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1b3b04cb05b0.jpg",
      },
      {
        nombre: "Papas Locas",
        descripcion: "Papas con queso fundido, tocino crocante y salsa de la casa.",
        precio: 12,
        imagen: "/images/papas-locas.png",
        popular: true,
      },
      {
        nombre: "Gaseosa Personal 500 ml",
        descripcion: "Bien helada para acompañar tu combo.",
        precio: 5,
        imagen: "/images/gaseosa.png",
      },
    ],
  },
]

// ────────────────────────────────────────────────
//  4) VENTAJAS DE TU NEGOCIO (sección bajo la portada)
//     Puedes editar los textos. Los íconos se asignan solos.
// ────────────────────────────────────────────────
export const ventajas = [
  {
    titulo: "Hecho al momento",
    texto: "Nada pre-cocido: tu pedido se prepara cuando lo pides.",
  },
  {
    titulo: "Listo en 15–25 min",
    texto: "Rapidez de verdad, también para delivery.",
  },
  {
    titulo: "Ingredientes frescos",
    texto: "Compramos cada mañana en el mercado local.",
  },
  {
    titulo: "Precios que suman",
    texto: "Combos familiares pensados para compartir.",
  },
]

// ────────────────────────────────────────────────
//  5) MAPA  (opcional)
//  mapaBusqueda: lo que Google Maps buscará para mostrar el pin
//    de tu ubicación. La dirección que se MUESTRA como texto
//    se configura en "direccion" (sección 1).
//  Si no quieres mapa, deja "".
// ────────────────────────────────────────────────
export const mapaBusqueda = "B1, Nazca 11401, Peru"

export const mapaEmbed = mapaBusqueda
  ? `https://maps.google.com/maps?q=${encodeURIComponent(mapaBusqueda)}&z=16&output=embed`
  : ""

// ════════════════════════════════════════════════════════════════════
//  👇 Funciones internas — NO ES NECESARIO EDITAR MÁS ABAJO
// ════════════════════════════════════════════════════════════════════

// Genera el enlace de WhatsApp con un mensaje pre-llenado
export function enlaceWhatsApp(mensaje?: string): string {
  const base = `https://wa.me/${negocio.whatsapp}`
  if (!mensaje) return base
  return `${base}?text=${encodeURIComponent(mensaje)}`
}

// Enlace para pedir un plato específico
export function enlacePedido(plato: Plato): string {
  return enlaceWhatsApp(
    `¡Hola ${negocio.nombre}! Quiero pedir: ${plato.nombre} (S/ ${plato.precio.toFixed(2)})`
  )
}
