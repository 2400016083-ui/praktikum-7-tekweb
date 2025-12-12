import React, { useState } from "react";

const PROJECTS = [
  {
    category: "UI/UX Design",
    title: "Creative Portfolio Platform",
    desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    image: "/assets/ShowCase.png",
  },
  {
    category: "Web Development",
    title: "Smart Campus Dashboard",
    desc: "Dashboard interaktif untuk monitoring aktivitas akademik mahasiswa.",
    image: "/assets/ShowCase.png",
  },
  {
    category: "Mobile App",
    title: "Health Tracker App",
    desc: "Aplikasi mobile untuk memonitor aktivitas harian dan kesehatan.",
    image: "/assets/ShowCase.png",
  },
];

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const p = PROJECTS[index];

  return (
    <section className="max-w-6xl mx-auto mt-20">
      <h2 className="text-center text-2xl font-semibold">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>
      <p className="text-center text-gray-500 text-sm mt-1">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
      </p>

      {/* CARD */}
      <div className="relative mt-10 bg-pink-50 rounded-2xl p-10 shadow transition-all duration-300">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:scale-110 transition"
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:scale-110 transition"
        >
          →
        </button>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-medium">
              {p.category}
            </span>

            <h3 className="font-bold text-2xl mt-4">{p.title}</h3>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-sm">
              {p.desc}
            </p>

            <div className="mt-5">
              <p className="font-semibold text-sm mb-2">Tim Pembuat :</p>

              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <img
                      src="/assets/TimPembuat.png"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Budi Santoso</p>
                      <p className="text-gray-500 text-xs">Frontend Developer</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
              <img src="/assets/Vector.png" className="w-4" />
              Live Demo
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={p.image}
              className="rounded-2xl border-4 border-pink-300 w-full object-cover shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
