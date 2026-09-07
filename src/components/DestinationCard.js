function DestinationCard({ image, title, country, description }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Card content */}
      <div className="p-5">

        <p className="text-sm text-blue-600 font-medium">
          📍 {country}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          {title}
        </h2>

        <p className="text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>

        <button className="mt-5 text-blue-600 font-semibold hover:text-blue-800 transition">
          View Details →
        </button>

      </div>
    </div>
  );
}

export default DestinationCard;