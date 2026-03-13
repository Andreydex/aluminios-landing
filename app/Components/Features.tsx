export default function Features() {
  return (
    <section className="bg-white py-20 px-10">
      {/* El contenedor principal con GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Tarjeta 1 */}
        <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-slate-50">
  <h3 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">
    Fabricación e Instalación
  </h3>
 
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Ventanas
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Puertas
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Canceles de baño
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Puertas corredizas
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Ventanales y fachadas
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Domos
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Barandales
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Mosquiteros
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Espejos a medida
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Vitrinas
    </li>
  </ul>
</div>

        {/* Tarjeta 2 */}
        <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-slate-50">
  <h3 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Trabajos en vidrio</h3>
 
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Corte de vidrio a la medida
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Instalación de vidrio
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Cambio de vidrios rotos
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Cristales para mesas
    </li>
  </ul>
</div>

        {/* Tarjeta 3 */}
         <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-slate-50">
  <h3 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-2">Otros servicios</h3>
 
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Mantenimiento general
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Instalación de protecciones de aluminio
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Fabricación de marcos de aluminio
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Instalación de acrílicos o policarbonato
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500 font-bold">✓</span> Trabajos especiales de aluminio para negocios o casas
    </li>
  </ul>
</div>

      </div>
    </section>
  );
}