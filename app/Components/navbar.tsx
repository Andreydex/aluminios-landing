export default function Navbar() {
  
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-gray-900 text-white border-b border-gray-700">
      {/* Lado izquierdo: El nombre del negocio */}
      <div className="text-xl font-extrabold tracking-tighter font-['Bebas_Neue']">
        CRISTA<span className="text-blue-500">LIA</span>
      </div>

      {/* Lado derecho: Enlaces */}
      <div className="space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-blue-400 transition font-['Bebas_Neue'] text-1xl">Inicio</a>
        <a href="#" className="hover:text-blue-400 transition font-['Bebas_Neue'] text-1xl">Servicios</a>
        <a href="#" className="hover:text-blue-400 transition font-['Bebas_Neue'] text-1xl">Contacto</a>
      </div>
    </nav>
  );
}