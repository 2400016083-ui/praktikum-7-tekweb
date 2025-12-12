export default function ScheduleSection() {
    return (
      <section className="max-w-6xl mx-auto mt-20 px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Program terstruktur yang dirancang untuk mengoptimalkan
          pembelajaran dan pengembangan skill Setiap Sabtu
        </p>
  
        {/* Box */}
        <div className="bg-white mt-10 rounded-2xl shadow-xl p-6">
          {/* Label */}
          <div className="text-center font-semibold text-blue-600 mb-6 flex items-center justify-center gap-2">
            <img src="src/assets/Kalender.png" className="w-5" />
            Setiap Sabtu
          </div>
  
          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl shadow-sm border bg-gradient-to-r from-yellow-50 to-green-50">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <img src="src/assets/Jam.png" className="w-5" />
                Sesi Pagi
              </h3>
              <p className="text-blue-900 font-semibold text-sm mt-1">
                09.00 – 12.00 WIB
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Workshop, Career Talks, dan Extra Classes intensif.
              </p>
            </div>
  
            <div className="p-5 rounded-xl shadow-sm border bg-gradient-to-r from-yellow-50 to-blue-50">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <img src="src/assets/Jam.png" className="w-5" />
                Sesi Sore
              </h3>
              <p className="text-blue-900 font-semibold text-sm mt-1">
                16.00 – 19.00 WIB
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }