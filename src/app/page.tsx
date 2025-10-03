import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Clear<span className="text-blue-600">Path</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Planifica tu futuro académico con confianza. Calcula costos reales y toma decisiones informadas sobre tu educación en el extranjero.
        </p>
      </header>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tu camino hacia el éxito académico internacional
            </h2>
            <p className="text-gray-600 mb-6">
              Descubre exactamente cuánto necesitas para estudiar en el extranjero. 
              Nuestro simulador utiliza datos reales de costos de vida en más de 250 ciudades.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Datos reales de 5 países</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Cálculos personalizados</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Reportes detallados</span>
              </div>
            </div>
            <Link 
              href="/wizard" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block text-center"
            >
              Comenzar Simulación Gratuita
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Países Disponibles
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-blue-700">🇺🇸 Estados Unidos</div>
              <div className="text-blue-700">🇨🇦 Canadá</div>
              <div className="text-blue-700">🇪🇸 España</div>
              <div className="text-blue-700">🇩🇪 Alemania</div>
              <div className="text-blue-700">🇫🇷 Francia</div>
              <div className="text-blue-700 opacity-50">🇬🇧 Reino Unido*</div>
            </div>
            <p className="text-xs text-blue-600 mt-2">*Próximamente</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Simulación Gratuita
          </h3>
          <p className="text-gray-600">
            Completa nuestro wizard de 11 pasos y obtén una estimación básica de costos.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Reportes Premium
          </h3>
          <p className="text-gray-600">
            Análisis detallado con proyecciones financieras y recomendaciones personalizadas.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Insights de IA
          </h3>
          <p className="text-gray-600">
            Recomendaciones inteligentes basadas en tu perfil y objetivos específicos.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para planificar tu futuro?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Únete a miles de estudiantes que han usado ClearPath para tomar decisiones informadas sobre su educación internacional.
        </p>
        <Link 
          href="/wizard" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
        >
          Comenzar Ahora - Es Gratis
        </Link>
      </div>
    </div>
  )
}
