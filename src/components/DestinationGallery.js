import destinations from "../data/destination";
import DestinationCard from "./DestinationCard";

function DestinationGallery() {
  return (
    <section id="destinations" className="bg-gray-50 px-6 py-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <p className="text-sm font-semibold tracking-widest text-blue-600">
          DISCOVER THE WORLD
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Popular Destinations
        </h1>

        <p className="text-gray-600 mt-4">
          Explore some of the most beautiful places around the world.
        </p>

      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            country={destination.country}
            description={destination.description}
          />
        ))}

      </div>

    </section>
  );
}

export default DestinationGallery;