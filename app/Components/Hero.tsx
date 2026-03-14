export default function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Capa de Imagen de Fondo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
      >
        {/* Filtro oscuro (Overlay) para que el nombre Cristalia resalte */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-7xl md:text-9xl font-['Bebas_Neue'] font-bold tracking-[0.15em] drop-shadow-lg">
          CRISTA<span className="text-blue-500">LIA</span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-['Bebas_Neue'] tracking-widest text-gray-200">
          Aluminios y Cristales
        </p>
       
      </div>
    </section>
  );
}