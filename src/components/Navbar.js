function Navbar() {
  return (
    <nav id="Navbar" className="flex items-center justify-between px-6 py-5 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        Wanderly
      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-8 text-gray-700">
        <a href="#Navbar" className="hover:text-blue-600">
          Home
        </a>

        <a href="#destinations" className="hover:text-blue-600">
          Destinations
        </a>

        <a href="#about" className="hover:text-blue-600">
          About
        </a>
      </div>

      {/* Mobile menu */}
      <button className="md:hidden text-2xl">
        ☰
      </button>

    </nav>
  );
}

export default Navbar;