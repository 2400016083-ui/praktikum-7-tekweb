export default function PillarGrid() {
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      img: "/assets/PilarIdeation.png",
      color: "bg-yellow-100",
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      img: "/assets/PilarCreation.png",
      color: "bg-green-100",
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      img: "/assets/PilarCollaboration.png",
      color: "bg-blue-100",
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      img: "/assets/PilarGuidance.png",
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold">
        Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
      </h2>
      <p className="text-center text-gray-600 text-sm mb-10">
        komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa 
        melalui pendekatan holistik
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`${p.color} p-6 rounded-xl shadow text-center`}
          >
            <img
              src={p.img}
              className="w-12 h-12 mx-auto mb-3 object-contain"
              alt={p.title}
            />
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
