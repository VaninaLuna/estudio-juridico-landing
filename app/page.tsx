"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"
import SocialIcons from "@/components/SocialIcons"
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { FadeInSection } from "@/components/FadeInSection"

function LawFirmLanding() {
  const { isDarkMode } = useTheme()

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO, Inversores S.A.",
      text: "Veronica y Alejandra han sido fundamental en el crecimiento de nuestra empresa. Su asesoramiento y profesionalismo han sido invaluable. Siempre están disponibles para responder nuestras preguntas y nos han guiado a través de complejas situaciones legales con gran experticia.",
    },
    {
      name: "Laura Blanco",
      role: "Directora, Grupo Financiero",
      text: "La atención al detalle y el compromiso de Pozzatto y Pezzuti son incomparables. Altamente recomendadas. Su conocimiento profundo del sector financiero nos ha permitido navegar con confianza por las complejidades regulatorias de nuestro negocio.",
    },
    {
      name: "Martín Gómez",
      role: "Fundador, Grupo Inmobiliario",
      text: "Su experiencia en derecho corporativo nos ayudó a navegar complejas negociaciones con inversionistas. Excelente servicio. Veronica y Alejandra no solo entienden las leyes, sino también las necesidades únicas de las startups tecnológicas.",
    },
    {
      name: "Jose Rodríguez",
      role: "Gerente de Operaciones",
      text: "Pozzatto y Pezzuti nos brindó un apoyo crucial en temas de cumplimiento normativo. Su enfoque proactivo marcó la diferencia. Nos han ayudado a implementar políticas y procedimientos que no solo cumplen con la ley, sino que también mejoran nuestra eficiencia operativa.",
    },
  ]

  const services = [
    {
      title: "Derecho Corporativo",
      description:
        "Ofrecemos asesoramiento legal experto y soluciones personalizadas para proteger sus intereses y maximizar sus oportunidades en el ámbito corporativo.",
    },
    {
      title: "Litigios Complejos",
      description:
        "Nuestro equipo de abogados especializados maneja casos de alta complejidad, asegurando la mejor defensa de sus intereses en situaciones legales desafiantes.",
    },
    {
      title: "Fusiones y Adquisiciones",
      description:
        "Guiamos a nuestros clientes a través de complejas transacciones comerciales, asegurando un proceso fluido y protegiendo sus intereses en cada etapa.",
    },
    {
      title: "Derecho Laboral",
      description:
        "Brindamos asesoramiento integral en materia laboral, ayudando a empleadores y empleados a navegar las complejidades de las leyes laborales y resolver conflictos de manera eficiente.",
    },
    {
      title: "Propiedad Intelectual",
      description:
        "Protegemos los activos intangibles de nuestros clientes, incluyendo patentes, marcas y derechos de autor, asegurando su valor y competitividad en el mercado.",
    },
    {
      title: "Derecho Inmobiliario",
      description:
        "Brindamos asesoramiento integral en Derecho Inmobiliario, protegiendo y gestionando los activos inmobiliarios de nuestros clientes, asegurando su valor y seguridad jurídica en cada transacción.",
    },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#192525] text-[#c8a482]" : "bg-[#ebcbbb] text-[#87734d]"}`}>
      <Navbar />
      {/* Hero Section */}
      <section id="inicio" className="relative h-[80vh] flex items-center justify-center pt-16">
        <Image
          src="https://img.freepik.com/fotos-premium/juez-gavel-abogados-justicia-que-tienen-reunion-equipo-bufete-abogados-conceptos-derecho-servicios-juridicos_265022-65156.jpg?semt=ais_hybrid"
          alt="Elegant office interior"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pozzatto y Pezzuti Asociados</h1>
          <p className="text-xl mb-8">Excelencia legal con un toque personal</p>
          <Button
            className="bg-[#c8a482] hover:bg-[#C19B22] text-white"
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
                src="/images/logo2.png"
                alt="VA Gestiones Judiciales Logo"
                width={550}
                height={550}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Con más de 15 años de experiencia combinada, Pozzatto y Pezzuti Asoc.
                se ha consolidado como un referente en el ámbito legal, brindando asesoramiento y representación de alta calidad a personas y empresas.
                Nuestro compromiso con la excelencia y la ética profesional nos distingue, permitiéndonos abordar cada caso con un enfoque personalizado y estratégico.
              </p>
              <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Nos dedicamos a entender las necesidades específicas de nuestros clientes para ofrecer soluciones legales eficaces, adaptadas a cada situación.
                La confianza que hemos construido a lo largo de los años es el resultado de nuestra pasión por la justicia y nuestro firme compromiso con la defensa
                de los derechos e intereses de quienes nos eligen.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <Image
                    src="https://i.pinimg.com/474x/9c/dd/9e/9cdd9e3ff185158ae4d4cfcf39060859.jpg"
                    alt="Veronica Pozzatto"
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold">Veronica Pozzatto</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
                <div className="text-center">
                  <Image
                    src="https://www.molinarifoto.com.ar/wp-content/uploads/2017/10/Foto-para-perfil-Linkedin.jpg"
                    alt="Alejandra Pezzuti"
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold">Alejandra Pezzuti</h3>
                  <p className="text-[#cd8059]">Socia Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 200}>
                <div className={`p-6 rounded-xl shadow-md h-full overflow-hidden ${isDarkMode ? "bg-[#0f191b]" : "bg-white"} transition-transform duration-300 transform hover:scale-105`}>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className={`py-20 ${isDarkMode ? "bg-[#0f191b]" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonios</h2>
          <Carousel
            className="w-full mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {[0, 2].map((startIndex) => (
                <CarouselItem key={startIndex} className="md:basis-full lg:basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.slice(startIndex, startIndex + 2).map((testimonial, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl shadow-md ${isDarkMode ? "bg-[#273636]" : "bg-[#F5F0EB]"}`}
                        style={{ minHeight: "180px" }}
                      >
                        <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"} italic`}>
                          &quot;{testimonial.text}&quot;
                        </p>
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-semibold ">{testimonial.name}</h4>
                            <p className="text-[#cd8059]">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contáctenos</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 bg-white ${isDarkMode
                    ? "border-gray-600 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    }`}
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
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 bg-white ${isDarkMode
                    ? "border-gray-600 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    }`}
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
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 bg-white${isDarkMode
                    ? "border-gray-600 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    : "border-gray-300 text-gray-900 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    }`}
                ></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full bg-[#c8a482] hover:bg-[#C19B22] text-white">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? "bg-[#0f191b]" : "bg-[#F5F0EB]"} text-grey`}>
        <div className="container mx-auto px-4 flex flex-col items-center">
          <SocialIcons />
          <p className="mt-4">&copy; 2025 Pozzatto y Pezzuti Asoc. Todos los derechos reservados.</p>
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
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LawFirmLanding />
    </ThemeProvider>
  )
}

