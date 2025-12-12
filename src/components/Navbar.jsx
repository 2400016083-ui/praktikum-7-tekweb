export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-2">

        {/* Logo icon */}
        <img
          src="/praktikum-7-tekweb/assets/Logonav.png"
          className="w-8"
          alt="Logo"
        />

        {/* Logo text (gambar “ruang ekspresi”) */}
        <img
          src="/praktikum-7-tekweb/assets/nav.png"
          className="h-7"
          alt="Ruang Ekspresi"
        />
      </div>

      <div className="hidden md:flex gap-6 text-sm">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Program</a>
        <a href="#">Project</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
