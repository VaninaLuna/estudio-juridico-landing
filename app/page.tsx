"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"
import SocialIcons from "@/components/SocialIcons"
import { FadeInSection } from "@/components/FadeInSection"

function LawFirmLanding() {
  const { isDarkMode } = useTheme()

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
      <section id="acerca-de" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Acerca de Nosotras</h2>
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
                  <Image
                    src="/img/PHOTO-2025-10-22-14-59-50.jpg"
                    alt="Veronica Pozzatto"
                    width={190}
                    height={190}
                    className="rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-semibold">Veronica Pozzatto</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/img/PHOTO-2025-10-22-16-27-27.jpg"
                    alt="Alejandra Pezzuti"
                    width={190}
                    height={190}
                    className="rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-semibold">Alejandra Pezzutti</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section id="servicios" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#f2ddd0]"}`} >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
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
      <section id="como-trabajamos" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Cómo Trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((item, index) => (
              <FadeInSection key={item.step} delay={index * 200}>
                <div className={`p-6 rounded-xl shadow-md h-full overflow-hidden ${isDarkMode ? "bg-[#273636]" : "bg-[#F5F0EB]"} transition-transform duration-300 transform hover:scale-105`}>
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

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contáctenos</h2>
          <div className="max-w-lg mx-auto">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const name = formData.get("name") as string
                const email = formData.get("email") as string
                const message = formData.get("message") as string

                // Número de WhatsApp (reemplazar con el número real)
                const whatsappNumber = "5492611234567" // Formato: código país + número sin espacios ni guiones

                // Formatear el mensaje para WhatsApp
                const whatsappMessage = `Hola! Me contacto desde el sitio web.%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A%0A*Mensaje:*%0A${message}`

                // Crear el enlace de WhatsApp
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

                // Abrir WhatsApp
                window.open(whatsappUrl, "_blank")

                // Limpiar el formulario
                e.currentTarget.reset()
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  //color del texto de los inputs
                  className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  //color de los inputs
                  className={`mt-1 block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-50 bg-white ${isDarkMode
                    ? "border-gray-600 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    } px-2 py-2 text-sm leading-tight `}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`mt-1 block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-50 bg-white ${isDarkMode
                    ? "border-gray-600 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    } px-2 py-2 text-sm leading-tight`}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`mt-1 block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-50 bg-white${isDarkMode
                    ? "border-gray-600 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    } px-2 py-2 text-sm leading-tight `}
                ></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full bg-[#c8a482] hover:bg-[#C19B22] text-white rounded-xl">
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* //bg del footer */}
      <footer className={`py-8 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#F5F0EB]"} text-grey`}>
        <div className="container mx-auto px-4 flex flex-col items-center">
          <SocialIcons />
          <p className="mt-4">&copy; 2025 Pozzatto y Pezzutti Asoc. Todos los derechos reservados.</p>
          <p className="text-[#D4AF37] ">
            Design by{" "}
            <a
              href="https://tuempresa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              V
            </a>
            .
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

