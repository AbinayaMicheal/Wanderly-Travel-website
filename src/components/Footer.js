function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-12 pb-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Wanderly
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Explore beautiful destinations, discover new experiences,
            and create unforgettable travel memories.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

            <a
              href="/Navbar"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#destinations"
              className="hover:text-white transition"
            >
              Destinations
            </a>

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

          </div>
        </div>


        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-400">
            Have a destination in mind?
          </p>

          <p className="text-gray-400 mt-2">
            Let's explore the world together.
          </p>

          <div className="flex gap-4 mt-5">

            <a
              href="https://www.facebook.com/"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              ◎
            </a>

            <a
              href="https://www.linkedin.com/"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
            >
              in
            </a>

          </div>
        </div>

      </div>


      {/* Bottom section */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-10 pt-5 text-center">

        <p className="text-sm text-gray-500">
          © 2026 Wanderly. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;