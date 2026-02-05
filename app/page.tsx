"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"
import SocialIcons from "@/components/SocialIcons"
import { FadeInSection } from "@/components/FadeInSection"
import { MapPin, MessageCircle, Phone, Clock, ArrowUp, Building2, Briefcase, Scale, FileText, FileSignature, Home } from "lucide-react"

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
        "Guiamos a nuestros clientes en el desarrollo integral de su visión empresarial y en la planificación estratégica de sus proyectos comerciales. Brindamos asesoramiento jurídico especializado en cada una de sus transacciones, acompañándolos en la toma de decisiones con un enfoque preventivo y orientado a resultados." +
        " Trabajamos a través de procesos ágiles, claros y eficientes, diseñados para proteger sus intereses en todas las etapas del negocio, desde la constitución de sociedades y la elaboración de acuerdos internos, hasta la reestructuración empresarial y la resolución de conflictos societarios." +
        " Nuestro compromiso es ofrecer soluciones legales sólidas y personalizadas, que aporten seguridad jurídica, favorezcan el crecimiento sostenible y fortalezcan la estructura corporativa de cada cliente.",
      icon: Building2,
      bento: "tall",
    },
    {
      title: "Derecho Laboral",
      description:
        "Brindamos asesoramiento integral en materia laboral, ayudando a empleadores y empleados a navegar las complejidades de las leyes laborales y resolver conflictos de manera eficiente.",
      icon: Briefcase,
      bento: "default",
    },
    {
      title: "MASC",
      description:
        "A fin de solucionar disputas, sin recurrir a litigios judiciales, buscamos resoluciones más rápida y económica. Mediación. Conciliación. Negociación asistida.",
      icon: Scale,
      bento: "default",
    },
    {
      title: "Ejecuciones y Cobranzas",
      description:
        "Gestionamos pagos y recuperamos deudas asegurando la integridad patrimonial. Cobro de alquileres, expensas, pagarés, cheques. Ejecución de prendas e hipotecas.",
      icon: FileText,
      bento: "default",
    },
    {
      title: "Contratos",
      description:
        "Redactamos, analizamos y adecuamos acuerdos legales minimizando riesgos. Contratos de trabajo, compraventa, alquileres, locación de servicios y obras, estatutos.",
      icon: FileSignature,
      bento: "default",
    },
    {
      title: "Derecho Inmobiliario",
      description:
        "Brindamos asesoramiento jurídico integral en operaciones vinculadas a inmuebles y terrenos, garantizando transacciones seguras y transparentes. Acompañamos a nuestros clientes en cada etapa del proceso inmobiliario, desde la evaluación inicial hasta la concreción del negocio, con un enfoque preventivo y orientado a proteger sus intereses." +
        " Realizamos estudios de títulos, análisis de antecedentes dominiales y redacción de contratos, asegurando la correcta instrumentación legal de compraventas, locaciones, cesiones y demás actos jurídicos. Contamos con amplia experiencia en la constitución y administración de fideicomisos, desarrollo de proyectos inmobiliarios, administración de consorcios y resolución de conflictos entre copropietarios." +
        " Asimismo, intervenimos en procesos sucesorios vinculados a bienes inmuebles, gestiones de regularización dominial y tramitación de desalojos, ofreciendo soluciones ágiles y efectivas. Nuestro objetivo es brindar respaldo legal sólido para que cada operación se realice con seguridad jurídica y absoluta tranquilidad para nuestros clientes.",
      icon: Home,
      bento: "wide",
    },
  ]

  return (
    //letra de los textos y bg de nuestros servicios y contactanos  dark      --            claro
    <div className={`min-h-screen ${isDarkMode ? "bg-[#1a2825] text-[#c8a482]" : "bg-[#ebcbbb] text-[#87734d]"}`}>
      <Navbar />

      {/* Flecha subir - circulito a la derecha, aparece al bajar y scrollea al inicio */}
      {mostrarFlecha && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed right-4 bottom-8 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-2 border-[#c8a482]/50 transition-all duration-300 hover:scale-110 hover:border-[#c8a482] focus:outline-none focus:ring-2 focus:ring-[#c8a482]/50 ${isDarkMode ? "bg-[#1e3028]" : "bg-[#252015]"} text-[#e0cabd]`}
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] flex items-center justify-center pt-16">
        <Image
          src="/img/hero.webp"
          alt="Elegant office interior"
          fill
          sizes="100vw"
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
      <section id="acerca-de" className={`py-20 ${isDarkMode ? "bg-[#0f1c19]" : "bg-[#f5f0eb]"}`}>
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
                quality={75}
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
                      className="rounded-full object-cover w-auto h-auto"
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
                      className="rounded-full object-cover w-auto h-auto"
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

      {/* Services Section - Bento Grid */}
      <section id="servicios" className={`py-20 ${isDarkMode ? "bg-[#1e2d2a]" : "bg-[#f2ddd0]"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Nuestros Servicios</h2>
          <div className="w-20 h-0.5 mx-auto mb-12 rounded-full bg-[#c8a482]/70" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4 md:gap-5 md:grid-template-rows-[repeat(3,minmax(200px,1fr))]">
            {/* Columna izquierda: Derecho Societario arriba + 3 cuadraditos independientes abajo */}
            <FadeInSection delay={0} className="md:col-start-1 md:row-start-1 md:row-span-2 md:min-h-0 flex flex-col md:grid md:grid-rows-[1fr_auto] md:gap-4 md:gap-5">
              {/* Recuadro Derecho Societario (solo contenido) */}
              <div
                className={`group relative h-[280px] md:h-full min-h-[220px] rounded-2xl overflow-hidden border border-[#c8a482]/25 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#c8a482]/50 hover:-translate-y-0.5 ${isDarkMode ? "bg-[#273632] border-[#3d4a48]" : "bg-[#f5f0eb] border-gray-100"}`}
              >
                <div className="flex flex-col h-full p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#c8a482]/15 text-[#c8a482] shrink-0 transition-all duration-300 group-hover:bg-[#c8a482] group-hover:text-white">
                      <Building2 className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className={`text-lg md:text-xl font-bold pt-1.5 ${isDarkMode ? "text-[#e0cabd]" : "text-[#252015]"}`}>
                      {services[0].title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed flex-1 md:line-clamp-none ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {services[0].description}
                  </p>
                </div>
              </div>
              {/* 3 cuadraditos independientes (recuadros separados) */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 md:grid-rows-1">
                {[
                  { Icon: Briefcase, label: "Sociedades" },
                  { Icon: FileSignature, label: "Contratos" },
                  { Icon: Scale, label: "Justicia" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-center rounded-2xl border border-[#c8a482]/25 shadow-md transition-all duration-300 hover:shadow-lg hover:border-[#c8a482]/50 hover:-translate-y-0.5 min-h-[80px] md:min-h-[90px] ${isDarkMode ? "bg-[#1e3028]" : "bg-[#252015]"} text-[#e0cabd]`}
                    aria-hidden
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl text-[#e0cabd] bg-black/20 shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
            {/* Resto de servicios: Laboral, MASC, Ejecuciones, Contratos */}
            {services.slice(1, 5).map((service, index) => {
              const IconComponent = service.icon
              const isMASC = service.title === "MASC"
              const gridPlace =
                index === 0 ? "md:col-start-2 md:row-start-1"
                  : index === 1 ? "md:col-start-3 md:row-start-1"
                    : index === 2 ? "md:col-start-2 md:row-start-2"
                      : "md:col-start-3 md:row-start-2"
              return (
                <FadeInSection key={service.title} delay={(index + 1) * 120} className={gridPlace}>
                  <div
                    className={`group relative h-[280px] md:h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#c8a482]/25 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#c8a482]/50 hover:-translate-y-0.5 ${isMASC ? (isDarkMode ? "bg-[#1e3028] border-[#c8a482]/30" : "bg-[#252015] border-[#c8a482]/30") : isDarkMode ? "bg-[#273632] border-[#3d4a48]" : "bg-[#f5f0eb] border-gray-100"}`}
                  >
                    <div className="flex flex-col h-full p-5 md:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-all duration-300 ${isMASC ? "bg-black/20 text-[#e0cabd] group-hover:bg-black/30" : "bg-[#c8a482]/15 text-[#c8a482] group-hover:bg-[#c8a482] group-hover:text-white"}`}>
                          <IconComponent className="w-5 h-5" strokeWidth={2} />
                        </div>
                        <h3 className={`text-lg md:text-xl font-bold pt-1.5 ${isMASC ? "text-[#e0cabd]" : isDarkMode ? "text-[#e0cabd]" : "text-[#252015]"}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className={`text-sm leading-relaxed flex-1 line-clamp-4 ${isMASC ? "text-gray-400" : isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
            {/* Fila 3: Derecho Inmobiliario a la izquierda + 3 cuadraditos apilados a la derecha */}
            <FadeInSection delay={600} className="md:col-start-1 md:col-span-2 md:row-start-3">
              <div
                className={`group relative h-[280px] md:h-full min-h-[220px] rounded-2xl overflow-hidden border border-[#c8a482]/25 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#c8a482]/50 hover:-translate-y-0.5 ${isDarkMode ? "bg-[#273632] border-[#3d4a48]" : "bg-[#f5f0eb] border-gray-100"}`}
              >
                <div className="flex flex-col h-full p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#c8a482]/15 text-[#c8a482] shrink-0 transition-all duration-300 group-hover:bg-[#c8a482] group-hover:text-white">
                      <Home className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className={`text-lg md:text-xl font-bold pt-1.5 ${isDarkMode ? "text-[#e0cabd]" : "text-[#252015]"}`}>
                      {services[5].title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed flex-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {services[5].description}
                  </p>
                </div>
              </div>
            </FadeInSection>
            {/* 3 cuadraditos verticales: mismo ancho que el recuadro de arriba (Contratos) */}
            <FadeInSection delay={650} className="md:col-start-3 md:row-start-3 flex flex-col gap-2 md:gap-3 md:h-full w-full">
              {[
                { Icon: Home, label: "Remates y Embargos" },
                { Icon: FileText, label: "Indemnizaciones laborales" },
                { Icon: Building2, label: "Despidos y Accidentes" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className={`flex-1 flex items-center gap-2 md:gap-3 rounded-2xl border border-[#c8a482]/25 shadow-md transition-all duration-300 hover:shadow-lg hover:border-[#c8a482]/50 hover:-translate-y-0.5 min-h-[80px] md:min-h-0 px-3 py-2 md:px-4 md:py-3 ${isDarkMode ? "bg-[#1e3028]" : "bg-[#252015]"} text-[#e0cabd]`}
                  aria-hidden
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl text-[#e0cabd] bg-black/20 shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold shrink-0 text-[#e0cabd]">
                    {label}
                  </span>
                </div>
              ))}
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How We Work Section - pasos (no tarjetas) */}
      <section id="como-trabajamos" className={`py-20 ${isDarkMode ? "bg-[#0f1c19]" : "bg-[#f5f0eb]"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Cómo Trabajamos</h2>
          <div className="w-20 h-0.5 mx-auto mb-12 rounded-full bg-[#c8a482]/70" aria-hidden />
          <div className="relative max-w-5xl mx-auto">
            {/* Línea conectora entre pasos (solo desktop) */}
            <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-[#c8a482]/30" aria-hidden />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-22 lg:gap-20">
              {workProcess.map((item, index) => (
                <FadeInSection key={item.step} delay={index * 150} className="relative">
                  <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
                    {/* Número del paso (sobre la línea) */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold bg-[#c8a482] text-white border-4 border-[#c8a482]/15 shadow-lg shrink-0 mb-4 relative z-10">
                      {item.step}
                    </div>
                    {/* Contenido del paso - sin caja tipo tarjeta */}
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-[#e0cabd]" : "text-[#252015]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto - estilo tarjetas + mapa */}
      <section id="contacto" className={`relative py-20 overflow-hidden ${isDarkMode ? "bg-[#0f1c19]" : "bg-[#e0cabd]"}`}>
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
                    ? "bg-[#0f1c19] border-[#c8a482]"
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
                  className={`p-5 rounded-xl shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${isDarkMode ? "bg-[#0f1c19]" : "bg-white"
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
                        ? "bg-[#273632]/25 hover:bg-[#c8a482]/15 text-gray-200"
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
                        ? "bg-[#273632]/25 hover:bg-[#c8a482]/15 text-gray-200"
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
      <footer className={`pt-14 pb-6 text-gray-300 ${isDarkMode ? "bg-[#0f1c19]" : "bg-[#252015]"}`}>
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

