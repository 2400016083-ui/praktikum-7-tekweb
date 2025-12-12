export default function Footer() {
  return (
    <footer className="bg-[#2E63A3] text-white pt-16 pb-6 rounded-b-3xl mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-sm">
        
        {/* LOGO + TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="public/assets/LogoFooter.png" className="h-12 object-contain" />
            <img src="public/assets/RuangEkspresiFooter.png" className="h-8 object-contain" />
          </div>

          <p className="leading-relaxed text-gray-200 max-w-xs">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
            mengembangkan potensi melalui ideation, creation,
            collaboration, dan guidance.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-5 space-y-4 text-gray-200">

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <img src="public/assets/MapsFooter.png" className="w-5" />
              </div>
              <p className="leading-tight max-w-xs">
                Jl. Ringroad Selatan, Kragilan, Tamanan,<br />
                Kec. Banguntapan, Bantul,<br />
                Daerah Istimewa Yogyakarta 55191
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <img src="public/assets/EmailFooter.png" className="w-5" />
              </div>
              <p>ruang_ekspresi@webmail.uad.ac.id</p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <img src="public/assets/ContactFooter.png" className="w-5" />
              </div>
              <p>(0274) 511830</p>
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Programs</h4>
          <ul className="space-y-2 text-gray-200">
            <li>Career Talks</li>
            <li>Extra Classes</li>
            <li>Project Work</li>
            <li>Mentoring</li>
          </ul>
        </div>
      </div>

      {/* BORDER LINE */}
      <div className="border-t border-white/40 mt-10 pt-4"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-200 text-xs">
        ©️ 2025 Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}
