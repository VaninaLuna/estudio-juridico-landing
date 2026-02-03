"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"
import SocialIcons from "@/components/SocialIcons"
import { FadeInSection } from "@/components/FadeInSection"
import { MapPin, MessageCircle, Phone, Clock, ArrowUp } from "lucide-react"

function LawFirmLanding() {
  const { isDarkMode } = useTheme()
  const [mostrarFlecha, setMostrarFlecha] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setMostrarFlecha(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const workProcess = [
    {
      step: 1,
      title: "Análisis del caso",
      description: "Estudiamos todas las aristas y sus posibles consecuencias. Brindando asesoramiento integral",
    },
    {
      step: 2,
      title: "Estrategia personalizada",
      description: "Diseñamos una propuesta legal clara, adaptada a las necesidades y al contexto real del caso",
    },
    {
      step: 3,
      title: "Acciones legales concretas",
      description: "Implementamos medidas jurídicas -judiciales y extrajudiciales- precisas y únicas para el caso concreto",
    },
    {
      step: 4,
      title: "Información continua",
      description: "Comunicamos el estado del proceso en función de sus avances",
    },
  ]

  const services = [
    {
      title: "Derecho Societario",
      description:
        "Guiamos a nuestros clientes en el desarrollo de su visión empresarial y en sus transacciones comerciales a través de procesos fluidos que protegen eficientemente sus interese en cada etapa.",
      image: "/img/derecho-societario.jpg",
    },
    {
      title: "Derecho Laboral",
      description:
        "Brindamos asesoramiento integral en materia laboral, ayudando a empleadores y empleados a navegar las complejidades de las leyes laborales y resolver conflictos de manera eficiente.Despidos. Accidentes. Indemnizaciones laborales. Enfermedades profesionales, entre otras.",
      image: "/img/laboral.jpg",
    },
    {
      title: "MASC",
      description:
        "A fin de solucionar disputas, sin recurrir a litigios judiciales, buscamos resoluciones más rápida y económica. Aplicando mecanismos alternativos de solución de controversia. Mediación. Conciliación. Negociación asistida.",
      image: "/img/masc.jpg",
    },
    {
      title: "Ejecuciones y Cobranzas",
      description:
        "Gestionamos pagos y recuperamos deudas asegurando la integridad patrimonial de nuestros clientes. Cobro de alquileres, Expensas, pagares, cheques, facturas de créditos. Ejecución de prendas e hipotecas, honorarios. Verificación de créditos. Gestion masiva de cobranzas, cobro de aportes y contribuciones a obras sociales. Embargos, remates. Daños y perjuicios, entre otras",
      image: "/img/ejecuciones.jpg",
    },
    {
      title: "Contratos",
      description:
        "A través de pautas contractuales fuertes minimizando riesgos legales. Redactamos, analizamos y adecuamos a cada cliente los acuerdos legales sobre los derechos y obligaciones jurídicas que vinculan a las partes asegurando la legalidad, protegiendo los derechos y gestionando relaciones contractuales de forma eficaz. Contratos de trabajo. Compra venta.	Alquileres. Locación de servicios y obras. Estatutos entre otras",
      image: "/img/contratos.jpg",
    },
    {
      title: "Derecho Inmobiliario",
      description:
        "Nos especializamos en transacciones de adquisición, uso y/o transmisión segura y transparente sobre inmuebles/ terrenos/ loteos contribuyendo al desarrollo ordenado de las comunidades. Estudios de títulos de propiedad. Estructuración de fideicomisos inmobiliarios. Desarrollo de proyectos inmobiliarios en todas sus etapas. Administración de consorcios. Regularización de loteos. Prescripción adquisitiva. Sucesiones. Desalojos, entre otros",
      image: "/img/inmobiliario.jpg",
    },
  ]

  return (
    //letra de los textos y bg de nuestros servicios y contactanos  dark      --            claro
    <div className={`min-h-screen ${isDarkMode ? "bg-[#192525] text-[#c8a482]" : "bg-[#ebcbbb] text-[#87734d]"}`}>
      <Navbar />

      {/* Flecha subir - circulito a la derecha, aparece al bajar y scrollea al inicio */}
      {mostrarFlecha && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-8 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-2 border-[#c8a482]/50 transition-all duration-300 hover:scale-110 hover:border-[#c8a482] focus:outline-none focus:ring-2 focus:ring-[#c8a482]/50 bg-[#252015] text-[#e0cabd]"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] flex items-center justify-center pt-16">
        <Image
          src="/img/hero.jpg"
          alt="Elegant office interior"
          fill
          className="absolute z-0 object-cover object-[center_45%]"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pozzatto y Pezzutti Asociados</h1>
          <p className="text-xl mb-8">Excelencia legal con un toque personal</p>
          {/* <h5 className="text-xl mb-8">9 de Julio 672. PA. OF 8 </h5> */}
          <Button
            className="bg-[#c8a482] hover:bg-[#C19B22] text-white rounded-xl"
            onClick={() => {
              const contactSection = document.getElementById("contacto")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contactanos
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="acerca-de" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#f5f0eb]"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Acerca de Nosotras</h2>
          <div className="w-20 h-0.5 mx-auto mb-12 rounded-full bg-[#c8a482]/70" aria-hidden />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <Image
                src="/img/calidad.png"
                alt="VA Gestiones Judiciales Logo"
                width={500}
                height={500}
                className="rounded-xl shadow-xl -mt-20"
                priority
                quality={100}
                unoptimized
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Nos asociamos con un propósito claro: potenciar nuestras fortalezas y brindar una
                <strong> visión integral </strong>, respaldada por años de experiencia en el ejercicio
                <strong> profesional jurídico </strong>. Cada una aporta su especialidad, lo que nos permite
                complementarnos y trabajar en equipo con
                <strong> pasión </strong> y
                <strong> compromiso</strong>.
              </p>
              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                La diversidad en nuestra formación y trayectoria se amalgama en equilibrio,
                permitiéndonos abordar cada caso de manera
                <strong> interdisciplinaria </strong>, con
                <strong> soluciones creativas </strong> y
                <strong> efectivas </strong> que se adaptan a las
                <strong> necesidades reales </strong> de nuestros clientes.
              </p>
              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Creemos en el
                <strong> trabajo colaborativo </strong>, no solo entre nosotras, sino también con otras disciplinas,
                para enriquecer las miradas y potenciar los resultados. Esa combinación de
                <strong> conocimientos </strong>,
                <strong> compromiso </strong> y
                <strong> escucha activa </strong> nos permite construir vínculos sólidos con quienes nos eligen
                y alcanzar
                <strong> soluciones jurídicas integrales </strong> a la medida de cada situación.
              </p>

              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="inline-block rounded-full p-1.5 mb-4 ring-2 ring-[#c8a482]/60 shadow-md">
                    <Image
                      src="/img/PHOTO-2025-10-22-14-59-50.jpg"
                      alt="Veronica Pozzatto"
                      width={190}
                      height={190}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Veronica Pozzatto</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
                <div className="text-center">
                  <div className="inline-block rounded-full p-1.5 mb-4 ring-2 ring-[#c8a482]/60 shadow-md">
                    <Image
                      src="/img/PHOTO-2025-10-22-16-27-27.jpg"
                      alt="Alejandra Pezzuti"
                      width={190}
                      height={190}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Alejandra Pezzutti</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section id="servicios" className={`py-20 ${isDarkMode ? "bg-[#202e30]" : "bg-[#f2ddd0]"}`} >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Nuestros Servicios</h2>
          <div className="w-20 h-0.5 mx-auto mb-12 rounded-full bg-[#c8a482]/70" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 200}>
                {/* Tarjeta con overlay */}
                <div className={`relative h-[320px] rounded-xl shadow-md overflow-hidden group ${isDarkMode ? "bg-[#0f191b]" : "bg-white"}`}>
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
                  </div>

                  {/* Título siempre visible */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
                  </div>

                  {/* Overlay con texto que aparece en hover */}
                  <div className={`absolute inset-0 p-4 flex flex-col justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 ${isDarkMode ? "bg-[#0f191b]/95" : "bg-white/95"}`}>
                    <h3 className="text-lg font-semibold mb-3 text-center">{service.title}</h3>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm leading-relaxed overflow-y-auto`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section >

      {/* How We Work Section */}
      <section id="como-trabajamos" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#f5f0eb]"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Cómo Trabajamos</h2>
          <div className="w-20 h-0.5 mx-auto mb-12 rounded-full bg-[#c8a482]/70" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((item, index) => (
              <FadeInSection key={item.step} delay={index * 200}>
                <div className={`p-6 rounded-xl shadow-md h-full overflow-hidden ${isDarkMode ? "bg-[#273636]" : "bg-white"} transition-transform duration-300 transform hover:scale-105`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${isDarkMode ? "bg-[#c8a482] text-white" : "bg-[#c8a482] text-white"}`}>
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto - estilo tarjetas + mapa */}
      <section id="contacto" className={`relative py-20 overflow-hidden ${isDarkMode ? "bg-[#0f191b]" : "bg-[#e0cabd]"}`}>
        {/* Efecto sutil: gradiente suave en los bordes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDarkMode
              ? "linear-gradient(135deg, rgba(200,164,130,0.06) 0%, transparent 40%, transparent 60%, rgba(200,164,130,0.04) 100%)"
              : "linear-gradient(135deg, rgba(200,164,130,0.12) 0%, transparent 40%, transparent 60%, rgba(200,164,130,0.08) 100%)",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <FadeInSection delay={0}>
            <h2 className="text-4xl font-bold text-center mb-2">Contactanos</h2>
            <div className="w-20 h-0.5 mx-auto mb-10 rounded-full bg-[#c8a482]/70" aria-hidden />
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
              {/* Mapa (izquierda) */}
              <div className="rounded-xl overflow-hidden shadow-lg min-h-[320px] lg:min-h-[420px] order-2 lg:order-1">
                <iframe
                  src="https://www.google.com/maps?q=9+de+Julio+672,+Ciudad+de+Mendoza,+Argentina&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del estudio - 9 de Julio 672, Mendoza"
                  className="w-full h-full min-h-[320px] lg:min-h-[420px] block"
                />
              </div>

              {/* Tarjetas derecha: Dirección + Contactanos por WhatsApp */}
              <div className="flex flex-col gap-5 order-1 lg:order-2">
                {/* Tarjeta 1: Dirección (seleccionada) */}
                <div
                  id="direccion"
                  className={`p-5 rounded-xl shadow-lg border-2 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${isDarkMode
                    ? "bg-[#0f191b] border-[#c8a482]"
                    : "bg-white border-[#c8a482]/60"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c8a482]/20">
                      <MapPin className="w-5 h-5 text-[#c8a482]" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                        Estudio
                      </h3>
                      <span className="text-xs text-[#c8a482] font-medium">Ubicación</span>
                    </div>
                  </div>
                  <p className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-0.5`}>
                    <strong>9 de Julio 672</strong>
                  </p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-0.5`}>
                    Planta alta, oficina 8
                  </p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3`}>
                    Ciudad de Mendoza, Argentina
                  </p>
                  <a
                    href="https://www.google.com/maps/search/9+de+Julio+672,+Mendoza,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[#c8a482] hover:text-[#C19B22] hover:underline font-medium"
                  >
                    Ver en Google Maps →
                  </a>
                </div>

                {/* Tarjeta 2: Contactanos por WhatsApp */}
                <div
                  className={`p-5 rounded-xl shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${isDarkMode ? "bg-[#0f191b]" : "bg-white"
                    } ${isDarkMode ? "border border-gray-700" : "border border-gray-200"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/20">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <h3 className={`font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                      Contactanos por WhatsApp
                    </h3>
                  </div>
                  <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Escribinos y te respondemos a la brevedad
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/5492615095754"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 w-full py-2.5 px-3 rounded-2xl transition-colors ${isDarkMode
                        ? "bg-[#273636]/25 hover:bg-[#c8a482]/15 text-gray-200"
                        : "bg-[#f2ddd0]/25 hover:bg-[#c8a482]/15 text-gray-800"
                        }`}
                    >
                      <span className="font-medium">261 509-5754</span>
                    </a>
                    <a
                      href="https://wa.me/5492615134316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 w-full py-2.5 px-3 rounded-2xl transition-colors ${isDarkMode
                        ? "bg-[#273636]/25 hover:bg-[#c8a482]/15 text-gray-200"
                        : "bg-[#f2ddd0]/25 hover:bg-[#c8a482]/15 text-gray-800"
                        }`}
                    >
                      <span className="font-medium">261 513-4316</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer - estilo 4 columnas (oscuro en ambos temas) */}
      <footer className={`pt-14 pb-6 text-gray-300 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#252015]"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
            {/* Columna 1: Marca / Acerca */}
            <div className="lg:max-w-xs">
              <h3 className="text-2xl font-bold text-[#c8a482] mb-4">Pozzatto y Pezzutti Asoc.</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Estudio jurídico con visión integral. Asesoramiento en derecho societario, laboral, MASC, ejecuciones, contratos e inmobiliario. Atención en Mendoza.
              </p>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { label: "Inicio", href: "#inicio" },
                  { label: "Acerca de", href: "#acerca-de" },
                  { label: "Servicios", href: "#servicios" },
                  { label: "Como trabajamos", href: "#como-trabajamos" },
                  { label: "Contacto", href: "#contacto" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c8a482] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a482]/60 shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#c8a482]/80 shrink-0 mt-0.5" />
                  <span>
                    9 de Julio 672, planta alta of. 8<br />
                    Ciudad de Mendoza, Argentina
                  </span>
                </li>
                <li>
                  <a
                    href="https://wa.me/5492615095754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#c8a482] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#c8a482]/80 shrink-0" />
                    261 509-5754
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5492615134316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#c8a482] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#c8a482]/80 shrink-0" />
                    261 513-4316
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Horarios y Redes */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Horarios</h4>
              <div className="flex items-start gap-3 text-sm text-gray-400 mb-6">
                <Clock className="w-4 h-4 text-[#c8a482]/80 shrink-0 mt-0.5" />
                <span>
                  Lun - Vie: 10:00 - 18:00<br />
                  Con turno previo
                </span>
              </div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Redes Sociales</h4>
              <div className="flex items-center gap-3">
                <SocialIcons light />
              </div>
            </div>
          </div>

          {/* Línea y fila inferior */}
          <div className="border-t border-gray-600/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Pozzatto y Pezzutti Asoc. Todos los derechos reservados.
            </p>

          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Design by{" "}
            <a href="https://www.linkedin.com/in/vanina-luna/" target="_blank" rel="noopener noreferrer" className="text-[#c8a482]/80 hover:underline">
              V
            </a>
          </p>
        </div>
      </footer>
    </div >
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LawFirmLanding />
    </ThemeProvider>
  )
}

