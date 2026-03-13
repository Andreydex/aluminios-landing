export default function Features() {
  return (
    <section className="bg-white py-20 px-10">
      {/* El contenedor principal con GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Tarjeta 1 */}
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
          {/* Corregido: de 4x1 a 4xl */}
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Material Premium</h3>
          <p className="text-gray-600 italic">Aluminio de alta resistencia</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Diseño Moderno</h3>
          <p className="text-gray-600 italic">Ventanas que se adaptan a la arquitectura de Vallarta.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Instalación Expertos</h3>
          <p className="text-gray-600 italic">Garantizamos precisión en cada milímetro.</p>
        </div>

      </div>
    </section>
  );
}