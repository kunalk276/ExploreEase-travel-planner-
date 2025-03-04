import React, { useState, useEffect } from 'react';
import { FaPlane, FaClock, FaSuitcase, FaWifi, FaUtensils, FaChargingStation, FaTv, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Flight {
  airline: string;
  logo: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  duration: string;
  layover: string;
  price: number;
  priceClass: string;
  amenities: string[];
  details: {
    departureDate: string;
    arrivalDate: string;
    flightClass: string;
    airplaneType: string;
    transitTime: string;
  }[]
}

const flightsData = [
  {
    airline: "Air India",
    logo: "assets/flights/air_india.png",
    departureTime: "06:30 AM",
    arrivalTime: "09:15 AM",
    from: "Mumbai (BOM)",
    to: "Delhi (DEL)",
    duration: "2h 45m",
    layover: "Non-stop",
    price: 5500,
    priceClass: "Economy",
    amenities: ["wifi", "meal", "entertainment"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy",
        airplaneType: "Boeing 777",
        transitTime: "N/A"
      }
    ]
  },
  {
    airline: "IndiGo",
    logo: "assets/flights/indigo.png",
    departureTime: "09:00 AM",
    arrivalTime: "11:30 AM",
    from: "Bangalore (BLR)",
    to: "Hyderabad (HYD)",
    duration: "2h 30m",
    layover: "Non-stop",
    price: 4200,
    priceClass: "Economy",
    amenities: ["wifi", "charging"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy",
        airplaneType: "Airbus A320",
        transitTime: "N/A"
      }
    ]
  },
  {
    airline: "Vistara",
    logo: "assets/flights/vistara.png",
    departureTime: "02:15 PM",
    arrivalTime: "05:45 PM",
    from: "Chennai (MAA)",
    to: "Kolkata (CCU)",
    duration: "3h 30m",
    layover: "Non-stop",
    price: 6800,
    priceClass: "Economy Plus",
    amenities: ["wifi", "meal", "entertainment", "charging"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy Plus",
        airplaneType: "Boeing 737 MAX",
        transitTime: "N/A"
      }
    ]
  },
  {
    airline: "SpiceJet",
    logo: "assets/flights/spicejet.png",
    departureTime: "07:00 AM",
    arrivalTime: "10:00 AM",
    from: "Pune (PNQ)",
    to: "Jaipur (JAI)",
    duration: "3h 00m",
    layover: "Non-stop",
    price: 5700,
    priceClass: "Economy",
    amenities: ["wifi", "charging", "luggage"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy",
        airplaneType: "Airbus A321",
        transitTime: "N/A"
      }
    ]
  },
  {
    airline: "Go First",
    logo: "assets/flights/go_first.png",
    departureTime: "05:30 PM",
    arrivalTime: "08:00 PM",
    from: "Ahmedabad (AMD)",
    to: "Lucknow (LKO)",
    duration: "2h 30m",
    layover: "Non-stop",
    price: 4600,
    priceClass: "Economy",
    amenities: ["wifi", "meal"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy",
        airplaneType: "Boeing 737",
        transitTime: "N/A"
      }
    ]
  },
  {
    airline: "AirAsia India",
    logo: "assets/flights/airasia.png",
    departureTime: "08:45 AM",
    arrivalTime: "11:15 AM",
    from: "Hyderabad (HYD)",
    to: "Mumbai (BOM)",
    duration: "2h 30m",
    layover: "Non-stop",
    price: 4900,
    priceClass: "Economy",
    amenities: ["wifi", "charging", "entertainment"],
    details: [
      {
        departureDate: "2024-06-20",
        arrivalDate: "2024-06-20",
        flightClass: "Economy",
        airplaneType: "Airbus A320neo",
        transitTime: "N/A"
      }
    ]
  }
];


const FlightListingPage: React.FC = () => {
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flightsData);
  const [maxPrice, setMaxPrice] = useState<number>(500000);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setFilteredFlights(flightsData.filter(flight => flight.price <= maxPrice));
  }, [maxPrice]);

  const filterFlights = () => {
    const updatedFlights = flightsData.filter((flight) => flight.price <= maxPrice);
    setFilteredFlights(updatedFlights);
  };

  const toggleFlightDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <FaWifi className="text-blue-500" />;
      case 'meal':
        return <FaUtensils className="text-green-500" />;
      case 'entertainment':
        return <FaTv className="text-purple-500" />;
      case 'charging':
        return <FaChargingStation className="text-yellow-500" />;
      case 'luggage':
        return <FaSuitcase className="text-red-500" />;
      default:
        return null;
    }
  };

  const calculateJourneyProgress = (departureTime: string, arrivalTime: string) => {
    const now = new Date();
    const departure = new Date(now.toDateString() + ' ' + departureTime);
    const arrival = new Date(now.toDateString() + ' ' + arrivalTime);
    
    if (now < departure) return 0;
    if (now > arrival) return 100;
    
    const totalDuration = arrival.getTime() - departure.getTime();
    const elapsedTime = now.getTime() - departure.getTime();
    return (elapsedTime / totalDuration) * 100;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flight-page-container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 mt-16 text-center"
      >
        Flight Listings
      </motion.h1>
      <div className="filter-section flex flex-wrap justify-center items-center mb-6 gap-4">
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Airlines</option>
          {Array.from(new Set(flightsData.map(flight => flight.airline))).map(airline => (
            <option key={airline} value={airline}>{airline}</option>
          ))}
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="any">Duration</option>
          <option value="lessThan5Hours">Less than 5 hours</option>
          <option value="5to10Hours">5 to 10 hours</option>
          <option value="moreThan10Hours">More than 10 hours</option>
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Stop points</option>
          <option value="nonStop">Non-stop</option>
          <option value="1Stop">1 Stop</option>
          <option value="2plusStops">2+ Stops</option>
        </select>
        <select 
          className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="500000">All Prices</option>
          <option value="25000">Up to ₹25,000</option>
          <option value="50000">Up to ₹50,000</option>
          <option value="75000">Up to ₹75,000</option>
          <option value="100000">Up to ₹100,000</option>
        </select>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="filter-button bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
          onClick={filterFlights}
        >
          Filter
        </motion.button>
      </div>

      <div className="flight-list space-y-6">
        {filteredFlights.map((flight, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flight-item bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flight-summary flex flex-col lg:flex-row justify-between items-center cursor-pointer" onClick={() => toggleFlightDetails(index)}>
              <div className="flight-info flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
                <img src={flight.logo} alt={`${flight.airline} logo`} className="airline-logo w-16 h-16 object-contain bg-white dark:bg-gray-600 p-2 rounded-full" />
                <div className="flight-details text-center sm:text-left">
                  <p className="airline-name text-lg font-semibold">{flight.airline}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaPlane className="text-purple-600 dark:text-purple-400" />
                    <p className="flight-route">{`${flight.from} ➡️ ${flight.to}`}</p>
                  </div>
                  <div className="flight-timeline relative mt-4 mb-2">
                    <div className="h-1 bg-purple-200 dark:bg-purple-700 rounded-full"></div>
                    <div className="absolute left-0 top-0 h-1 bg-purple-600 dark:bg-purple-400 rounded-full" style={{width: '100%'}}></div>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm">
                        <p className="font-semibold">{flight.departureTime}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{flight.details[0].departureDate}</p>
                      </div>
                      <div className="text-sm text-right">
                        <p className="font-semibold">{flight.arrivalTime}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{flight.details[0].arrivalDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaClock className="text-purple-600 dark:text-purple-400" />
                    <p className="flight-duration">{flight.duration}</p>
                  </div>
                  <p className="flight-layover text-sm text-gray-500 dark:text-gray-400">{flight.layover}</p>
                </div>
              </div>
              <div className="flight-price-details flex flex-col items-center lg:items-end space-y-2">
                <div className="flight-price text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ${flight.price.toLocaleString()}
                </div>
                <span className="price-type text-sm text-gray-500 dark:text-gray-400">{flight.priceClass}</span>
                <div className="amenities flex space-x-2">
                  {flight.amenities.map((amenity, idx) => (
                    <motion.span 
                      key={idx} 
                      title={amenity} 
                      className="text-lg"
                      whileHover={{ scale: 1.2 }}
                    >
                      {getAmenityIcon(amenity)}
                    </motion.span>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="view-details-button bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md flex items-center space-x-2"
                >
                  <span>{expandedIndex === index ? 'Hide Details' : 'View Details'}</span>
                  {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </motion.button>
              </div>
            </div>

            {/* Collapsible Flight Details */}
            <AnimatePresence>
              {expandedIndex === index && flight.details.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flight-expanded-details bg-white dark:bg-gray-600 mt-4 p-6 rounded-lg shadow-inner"
                >
                  <div className="relative">
                    {flight.details.map((detail, idx) => (
                      <div key={idx} className="detail-item mb-6 relative pl-8">
                        <div className="absolute left-3 top-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-gray-600"></div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                          <p className="font-semibold text-purple-600 dark:text-purple-400">{detail.departureDate}</p>
                          <p className="font-semibold text-purple-600 dark:text-purple-400">{detail.arrivalDate}</p>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                          <p className="mb-2"><span className="font-medium">Class:</span> {detail.flightClass}</p>
                          <p className="mb-2"><span className="font-medium">Aircraft:</span> {detail.airplaneType}</p>
                          <p><span className="font-medium">Transit time:</span> {detail.transitTime}</p>
                        </div>
                        <div className="mt-4">
                          <p className="font-medium mb-2">Live Journey Status:</p>
                          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-1000 ease-in-out"
                              style={{ width: `${calculateJourneyProgress(flight.departureTime, flight.arrivalTime)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-400">
                            <span>{flight.departureTime}</span>
                            <span>{flight.arrivalTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="load-more-button bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors duration-300 shadow-md"
        >
          Show more
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FlightListingPage;