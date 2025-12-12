export default function Testimonials() {
  const t = [
    { name: "Budi Santoso", text: "Belajar lintas disiplin itu seru banget!" },
    { name: "Budi Santoso", text: "Banyak insight dari mentor dan teman." },
    { name: "Budi Santoso", text: "Workshopnya sangat bermanfaat." },
    { name: "Budi Santoso", text: "Lingkungannya suportif banget!" },
  ];

  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 p-6">
      {t.map((x, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow flex gap-4">
          <img
            src="public/assets/Frame.png"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{x.name}</h3>
            <p className="text-sm text-gray-600">{x.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}