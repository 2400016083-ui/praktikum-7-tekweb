export default function ProgramCards() {
    const programs = [
      {
        title: "Career Talks",
        desc: "Sesi sharing dari praktisi industri dan alumni sukses",
        color: "bg-yellow-100",
        img: "src/assets/CareerTalks.png",
      },
      {
        title: "Extra Classes",
        desc: "Kelas tambahan skill development dan workshop teknis",
        color: "bg-green-100",
        img: "src/assets/ExtraClasses.png",
      },
      {
        title: "Project Work",
        desc: "Mengerjakan project nyata dengan bimbingan mentor",
        color: "bg-blue-100",
        img: "src/assets/ProjectWork.png",
      },
      {
        title: "Mentoring",
        desc: "Sesi konsultasi personal dengan mentor berpengalaman",
        color: "bg-pink-100",
        img: "src/assets/Mentoring.png",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mt-16 px-6">
        {programs.map((p) => (
          <div
            key={p.title}
            className={`${p.color} p-6 rounded-xl shadow border`}
          >
            <img src={p.img} className="w-8 mb-3" />
            <h3 className="font-semibold text-sm">{p.title}</h3>
            <p className="text-xs text-gray-600 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    );
  }