export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-blue-600">Ruang Ekspresi</span> :
          <br />
          Wadah kreatif & Kompetitif Mahasiswa
        </h1>

        {/* Badge Section */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-5 py-2 bg-yellow-200 text-gray-700 rounded-full text-sm font-medium">
            Ideation
          </span>
          <span className="px-5 py-2 bg-green-200 text-gray-700 rounded-full text-sm font-medium">
            Creation
          </span>
          <span className="px-5 py-2 bg-blue-200 text-gray-700 rounded-full text-sm font-medium">
            Collaboration
          </span>
          <span className="px-5 py-2 bg-pink-200 text-gray-700 rounded-full text-sm font-medium">
            Guidance & Support
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="src/assets/HeroSection.png"
          className="w-64 md:w-80 lg:w-[22rem] rounded-xl object-cover shadow-md"
          alt="Hero"
        />
      </div>
      
    </section>
  );
}
