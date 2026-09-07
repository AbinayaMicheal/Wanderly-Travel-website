function Hero() {
  return (
    <section className="bg-blue-50 px-6 py-20 md:py-28">
      
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm font-semibold tracking-widest text-blue-600 mb-4">
          EXPLORE • DREAM • DISCOVER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Find Your Next
          <br />
          Destination
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Discover beautiful places, breathtaking views and
          unforgettable experiences around the world.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Explore Destinations →
        </button>

      </div>

    </section>
  );
}

export default Hero;