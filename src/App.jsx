function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-cyan-400">
          U-Link
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none"></div>

        <h2 className="text-6xl md:text-7xl font-extrabold text-cyan-400 mb-6">
          Automatización Inteligente
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Creamos sistemas modernos de automatización,
          inteligencia artificial y gestión digital para negocios.
        </p>

        <div className="flex gap-4">
<a
  href="https://wa.me/529996690192"
  target="_blank"
  className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold transition"
>
  Agendar Demo
</a>

          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl font-bold text-lg transition">
            Ver Servicios
          </button>
        </div>
      </section>
{/* Servicios */}
<section className="px-8 py-24 bg-black">

  <div className="text-center mb-16">
    <h3 className="text-5xl font-bold text-white mb-4">
      Nuestros Servicios
    </h3>

    <p className="text-gray-400 text-lg">
      Soluciones modernas para automatizar y hacer crecer negocios.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition">
      <h4 className="text-2xl font-bold text-cyan-400 mb-4">
        Chatbots IA
      </h4>

      <p className="text-gray-300">
        Automatizamos atención a clientes mediante WhatsApp,
        inteligencia artificial y respuestas inteligentes.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition">
      <h4 className="text-2xl font-bold text-cyan-400 mb-4">
        Dashboards
      </h4>

      <p className="text-gray-300">
        Visualiza métricas y controla tu negocio con reportes
        modernos y automatizados.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition">
      <h4 className="text-2xl font-bold text-cyan-400 mb-4">
        Automatización
      </h4>

      <p className="text-gray-300">
        Integramos sistemas, formularios y procesos para ahorrar
        tiempo y reducir errores.
      </p>
    </div>

  </div>
</section>
{/* Por qué elegirnos */}
<section className="bg-zinc-950 px-8 py-24 text-white">

  <div className="max-w-5xl mx-auto text-center">

    <h3 className="text-5xl font-bold mb-6">
      ¿Por qué U-Link?
    </h3>

    <p className="text-gray-400 text-xl mb-16">
      Diseñamos soluciones modernas enfocadas en resultados reales.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h4 className="text-cyan-400 text-3xl font-bold mb-4">
          ⚡ Velocidad
        </h4>

        <p className="text-gray-300">
          Implementamos automatizaciones rápidas y eficientes.
        </p>
      </div>

      <div>
        <h4 className="text-cyan-400 text-3xl font-bold mb-4">
          🤖 IA Moderna
        </h4>

        <p className="text-gray-300">
          Integramos inteligencia artificial real para negocios.
        </p>
      </div>

      <div>
        <h4 className="text-cyan-400 text-3xl font-bold mb-4">
          📈 Escalabilidad
        </h4>

        <p className="text-gray-300">
          Creamos sistemas preparados para crecer contigo.
        </p>
      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="bg-black border-t border-white/10 px-8 py-10">

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div>
      <h4 className="text-2xl font-bold text-cyan-400">
        U-Link
      </h4>

      <p className="text-gray-400 mt-2">
        Automatización inteligente para negocios.
      </p>
    </div>

    <div className="flex gap-6 text-gray-300">
      <a href="#" className="hover:text-cyan-400 transition">
        Inicio
      </a>

      <a href="#" className="hover:text-cyan-400 transition">
        Servicios
      </a>

      <a href="#" className="hover:text-cyan-400 transition">
        Contacto
      </a>
    </div>

  </div>

</footer>

    </div>
  )
}

export default App