
import React, { useState } from "react";


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 py-20 sm:py-28">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 max-w-xl space-y-8 mb-12 lg:mb-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Discover Your{" "}              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                Perfect Adventure
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Embark on unforgettable journeys with this. From luxurious
              retreats to thrilling experiences, we've curated your dream
              vacation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src="src\assets\elements\hero-right.png"
                alt="Adventure"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="src\assets\elements\hero-right2.png"
                alt="Luxury Hotel"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits component
const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end mb-12">
          <div className="top-1/2 transform z-20">
            <div className="relative z-10 text-right">
              <h2 className="text-3xl font-bold mb-3 text-purple-300">
                Discover the
              </h2>
              <h1 className="text-6xl font-extrabold text-white leading-tight">
                Benefits of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                  Vibrant Cities
                </span>
              </h1>
            </div>
            <div className="w-24 h-1 bg-indigo-600 mt-4 ml-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📣</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Cost-effective advertising
            </h3>
            <p className="text-purple-300">
              With a free listing, you can advertise your rental with no upfront costs.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Reach millions with Chis
            </h3>
            <p className="text-purple-300">
              Millions of people are searching for unique places to stay around the world.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Secure and simple
            </h3>
            <p className="text-purple-300">
              A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeaturedPlacesToStay component
const FeaturedPlacesToStay: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const places = [
    // Manali
    {
      title: "Luxury Resort - 5 beds",
      src: "src/assets/elements/hotel1.png",
      name: "Snow Peak Resort",
      address: "Mall Road, Manali",
      price: "₹5,500/night",
      rating: 40,
      description: "Luxury resort with mountain views and top-class amenities.",
      city: "Manali",
    },
    {
      title: "Cozy Cottage - 4 beds",
      src: "src/assets/elements/hotel2.png",
      name: "Himalayan Bliss Cottage",
      address: "Old Manali, Manali",
      price: "₹3,200/night",
      rating: 35,
      description: "Beautiful wooden cottage with a cozy atmosphere and great views.",
      city: "Manali",
    },
    {
      title: "Boutique Stay - 6 beds",
      src: "src/assets/elements/hotel3.png",
      name: "The Pinewood Escape",
      address: "Solang Valley, Manali",
      price: "₹7,800/night",
      rating: 50,
      description: "Boutique retreat with luxurious rooms and stunning mountain scenery.",
      city: "Manali",
    },
  
    // Coorg
    {
      title: "Luxury Plantation Retreat - 8 beds",
      src: "src/assets/elements/hotel4.png",
      name: "Coorg Coffee Estate Resort",
      address: "Madikeri, Coorg",
      price: "₹9,500/night",
      rating: 45,
      description: "Surrounded by lush coffee plantations, a perfect nature retreat.",
      city: "Coorg",
    },
    {
      title: "Riverside Villa - 5 beds",
      src: "src/assets/elements/hotel5.png",
      name: "Serene Riverfront Stay",
      address: "Kushalnagar, Coorg",
      price: "₹6,000/night",
      rating: 42,
      description: "A peaceful riverside retreat with mesmerizing views.",
      city: "Coorg",
    },
  
    // Mumbai
    {
      title: "5-Star Luxury Hotel - 2 beds",
      src: "src/assets/elements/hotel6.png",
      name: "Taj Mahal Palace",
      address: "Colaba, Mumbai",
      price: "₹50,000/night",
      rating: 60,
      description: "Iconic luxury hotel with grand architecture and a sea view.",
      city: "Mumbai",
    },
    {
      title: "Modern Suite - 3 beds",
      src: "src/assets/elements/hotel7.png",
      name: "Trident Nariman Point",
      address: "Nariman Point, Mumbai",
      price: "₹22,500/night",
      rating: 55,
      description: "Elegant modern rooms with a sea-facing view and fine dining.",
      city: "Mumbai",
    },
  
    // Goa
    {
      title: "Beachfront Resort - 7 beds",
      src: "src/assets/elements/hotel8.png",
      name: "Goa Sands Resort",
      address: "Baga Beach, Goa",
      price: "₹15,000/night",
      rating: 48,
      description: "A luxurious resort with direct beach access and water sports.",
      city: "Goa",
    },
    {
      title: "Seaside Villa - 4 beds",
      src: "src/assets/elements/hotel9.png",
      name: "Azure Beach House",
      address: "Candolim Beach, Goa",
      price: "₹9,200/night",
      rating: 44,
      description: "A private villa with ocean views and a relaxing ambiance.",
      city: "Goa",
    },
  
    // Shimla
    {
      title: "Colonial Heritage Stay - 6 beds",
      src: "src/assets/elements/hotel10.png",
      name: "The Grand Imperial",
      address: "The Ridge, Shimla",
      price: "₹18,000/night",
      rating: 52,
      description: "A historic hotel offering old-world charm and luxury.",
      city: "Shimla",
    },
    {
      title: "Hilltop Chalet - 4 beds",
      src: "src/assets/elements/hotel11.png",
      name: "Himalayan Heights",
      address: "Jakhoo Hills, Shimla",
      price: "₹12,500/night",
      rating: 46,
      description: "Scenic hilltop retreat with breathtaking views.",
      city: "Shimla",
    },
  
    // New Delhi
    {
      title: "Luxury Business Hotel - 3 beds",
      src: "src/assets/elements/hotel12.png",
      name: "The Leela Palace",
      address: "Chanakyapuri, New Delhi",
      price: "₹30,000/night",
      rating: 57,
      description: "A premier 5-star hotel with world-class service and dining.",
      city: "New Delhi",
    },
    {
      title: "Boutique Hotel - 2 beds",
      src: "src/assets/elements/hotel13.png",
      name: "Haveli Heritage Stay",
      address: "Paharganj, New Delhi",
      price: "₹5,800/night",
      rating: 38,
      description: "Experience the charm of a heritage haveli with modern comfort.",
      city: "New Delhi",
    },
  ];

  const cities = ["Manali", "Coorg", "Mumbai", "Goa", "Shimla", "New Delhi"];
  

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    const placesInCity = places.filter(place => place.city === city);
    setMessage(`Found ${placesInCity.length} places to stay in ${city}!`);
    setTimeout(() => setMessage(null), 3000); // Hide message after 3 seconds
  };

  const filteredPlaces = selectedCity
    ? places.filter(place => place.city === selectedCity)
    : places;

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-0 right-0 w-128 h-128 bg-royal-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-128 h-128 bg-royal-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Featured places to stay
        </h2>
        <p className="text-xl text-purple-300 mb-8">
          Popular places that .fis recommends for your next adventure
        </p>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {cities.map((city) => (
            <button
              key={city}
              className={`px-6 py-3 bg-indigo-600 bg-opacity-80 text-white rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none ${
                selectedCity === city
                  ? 'bg-opacity-100 shadow-inner'
                  : ''
              }`}
              onClick={() => handleCityClick(city)}
            >
              <span className="text-lg font-semibold">{city}</span>
            </button>
          ))}
        </div>

        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-out">
            <span className="text-lg font-semibold">{message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedPlace(place.name)}
            >
              <img
                src={place.src}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-300">
                  {place.title}
                </h3>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {place.name}
                </h4>
                <p className="text-indigo-300 mb-4">
                  {place.address}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white font-bold">
                    {place.price}
                  </p>
                  <div className="flex items-center bg-purple-700 rounded-full px-3 py-1">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white">{place.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {places.find(place => place.name === selectedPlace)?.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {places.find(place => place.name === selectedPlace)?.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-800 font-bold">
                  {places.find(place => place.name === selectedPlace)?.price}
                </p>
                <div className="flex items-center bg-purple-700 rounded-full px-3 py-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-white">
                    {places.find(place => place.name === selectedPlace)?.rating}
                  </span>
                </div>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                onClick={() => setSelectedPlace(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Videos component
const Videos: React.FC = () => {
  const [mainVideo, setMainVideo] = React.useState({
    title: "Spiti Valley | Cinematic Travel Series | Solo Trip",
      views: "1.9M views",
      duration: "15:21",
      category: "Cinematic Travel Series",
      src: "https://www.youtube.com/watch?v=5YFCXxpMS9U",
    index: 0,
  });

  const videos = [
    {
      title: "Tso Moriri Lake Ladakh | Road to Silence | Inspirational Travel Film",
      views: "267K views",
      duration: "15:41",
      category: "Inspirational Travel Film",
      src: "https://www.youtube.com/watch?v=o8iKiWqMERw",
    },
    {
      title: "Meghalaya: World’s Wettest Place | Mawsynram Village | North East India",
      views: "9.3M",
      duration: "20:13",
      category: "Travel Documentary",
      src: "https://www.youtube.com/watch?v=_e8BFrAPedM",
    },
    {
      title: "Most Beautiful Villages of Himachal Pradesh | Kinnaur Valley | Kalpa and Nako",
      views: "3M",
      duration: "17:06",
      category: "Travel Documentary",
      src: "https://www.youtube.com/watch?v=Lr2Xur5I-NU",
    },
    {
      title: "Moonland of India in Ladakh | Moon-like Landscape on Earth | Lamayuru",
      views: "278K",
      duration: "6:49",
      category: "Travel Documentary",
      src: "https://www.youtube.com/watch?v=Zkb9VO_DMYg",
    },
  ];
  

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-royal-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-128 h-128 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Captivating Videos
          </h2>
          <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
            Immerse yourself in stunning visuals and inspiring stories from
            around the world.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative aspect-video bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={mainVideo.src.replace("watch?v=", "embed/")}
                title={mainVideo.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {mainVideo.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span>{mainVideo.views}</span>
                  <span className="bg-indigo-600 px-2 py-1 rounded-full text-sm">
                    {mainVideo.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102"
                onClick={() => setMainVideo({ ...video, index })}
              >
                <div className="w-1/3 relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.src.split('v=')[1]}/0.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="w-2/3 p-3">
                  <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-indigo-300">
                    {video.views}
                  </p>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full mt-1 inline-block">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, Benefits, FeaturedPlacesToStay, Videos };
