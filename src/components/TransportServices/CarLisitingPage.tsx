import React, { useState, useEffect } from 'react';
import { FaCar, FaClock, FaWifi, FaSnowflake, FaChevronDown, FaChevronUp, FaBluetooth } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Car {
  brand: string;
  model: string;
  logo: string;
  type: string;
  seats: number;
  transmission: string;
  fuelType: string;
  pricePerDay: number;
  amenities: string[];
  details: {
    year: number;
    mileage: string;
    color: string;
    additionalFeatures: string[];
  }
}

const carsData: Car[] = [
  {
    brand: "Toyota",
    model: "Fortuner",
    logo: "src/assets/cars/toyota.png",
    type: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    pricePerDay: 8000,
    amenities: ["wifi", "ac", "bluetooth", "gps"],
    details: {
      year: 2023,
      mileage: "12,000 km",
      color: "White",
      additionalFeatures: ["4X4 Mode", "Ventilated Seats", "Hill Assist"]
    }
  },
  {
    brand: "Ford",
    model: "Endeavour",
    logo: "src/assets/cars/ford.jpeg",
    type: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    pricePerDay: 8500,
    amenities: ["wifi", "ac", "bluetooth", "gps"],
    details: {
      year: 2023,
      mileage: "10,500 km",
      color: "Black",
      additionalFeatures: ["Panoramic Sunroof", "Terrain Management System"]
    }
  },
  {
    brand: "Mercedes-Benz",
    model: "E-Class",
    logo: "src/assets/cars/mercedes.png",
    type: "Luxury Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 14000,
    amenities: ["wifi", "ac", "bluetooth", "gps"],
    details: {
      year: 2023,
      mileage: "7,500 km",
      color: "Silver",
      additionalFeatures: ["Ambient Lighting", "Massage Seats"]
    }
  },
  {
    brand: "BMW",
    model: "X7",
    logo: "src/assets/cars/bmw.png",
    type: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    pricePerDay: 18000,
    amenities: ["wifi", "ac", "bluetooth", "gps", "rear entertainment"],
    details: {
      year: 2023,
      mileage: "5,000 km",
      color: "Blue",
      additionalFeatures: ["Heads-Up Display", "Executive Lounge Seating"]
    }
  },
  {
    brand: "Jaguar",
    model: "F-Pace",
    logo: "src/assets/cars/jaguar.png",
    type: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 19000,
    amenities: ["wifi", "ac", "bluetooth", "gps"],
    details: {
      year: 2023,
      mileage: "6,500 km",
      color: "Green",
      additionalFeatures: ["Meridian Sound System", "Dynamic Drive Mode"]
    }
  },
  {
    brand: "Volvo",
    model: "XC90",
    logo: "src/assets/cars/volvo.png",
    type: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
    pricePerDay: 20000,
    amenities: ["wifi", "ac", "bluetooth", "gps", "rear entertainment"],
    details: {
      year: 2023,
      mileage: "5,500 km",
      color: "White",
      additionalFeatures: ["Pilot Assist", "Bowers & Wilkins Audio"]
    }
  },
  {
    brand: "Audi",
    model: "Q8",
    logo: "src/assets/cars/audi.png",
    type: "Ultra Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 22000,
    amenities: ["wifi", "ac", "bluetooth", "gps", "massaging seats"],
    details: {
      year: 2023,
      mileage: "4,000 km",
      color: "Orange",
      additionalFeatures: ["Matrix LED Headlights", "Bang & Olufsen Sound System"]
    }
  }
];


const CarListingPage: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [maxPrice, setMaxPrice] = useState<number>(80000);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setFilteredCars(carsData.filter(car => car.pricePerDay <= maxPrice));
  }, [maxPrice]);

  const filterCars = () => {
    const updatedCars = carsData.filter((car) => car.pricePerDay <= maxPrice);
    setFilteredCars(updatedCars);
  };

  const toggleCarDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <FaWifi className="text-blue-500" />;
      case 'ac':
        return <FaSnowflake className="text-blue-300" />;
      case 'bluetooth':
        return <FaBluetooth className="text-indigo-500" />;
      case 'gps':
        return <FaClock className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="car-page-container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 mt-16 text-center"
      >
        Car Listings
      </motion.h1>
      <div className="filter-section flex flex-wrap justify-center items-center mb-6 gap-4">
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Car Brands</option>
          {Array.from(new Set(carsData.map(car => car.brand))).map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="any">Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
        <select 
          className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="80000">All Prices</option>
          <option value="4000">Up to ₹4,000/day</option>
          <option value="8000">Up to ₹8,000/day</option>
          <option value="12000">Up to ₹12,000/day</option>
          <option value="16000">Up to ₹16,000/day</option>
        </select>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="filter-button bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
          onClick={filterCars}
        >
          Filter
        </motion.button>
      </div>

      <div className="car-list space-y-6">
        {filteredCars.map((car, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="car-item bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="car-summary flex flex-col lg:flex-row justify-between items-center cursor-pointer" onClick={() => toggleCarDetails(index)}>
              <div className="car-info flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
                <img src={car.logo} alt={`${car.brand} logo`} className="car-logo w-16 h-16 object-contain bg-white dark:bg-gray-600 p-2 rounded-full" />
                <div className="car-details text-center sm:text-left">
                  <p className="car-name text-lg font-semibold">{car.brand} {car.model}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaCar className="text-purple-600 dark:text-purple-400" />
                    <p className="car-type">{car.type}</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaClock className="text-purple-600 dark:text-purple-400" />
                    <p className="car-transmission">{car.transmission}</p>
                  </div>
                  <p className="car-fuel text-sm text-gray-500 dark:text-gray-400">{car.fuelType}</p>
                </div>
              </div>
              <div className="car-price-details flex flex-col items-center lg:items-end space-y-2">
                <div className="car-price text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ₹{car.pricePerDay}/day
                </div>
                <div className="amenities flex space-x-2">
                  {car.amenities.map((amenity, idx) => (
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

            {/* Collapsible Car Details */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="car-expanded-details bg-white dark:bg-gray-600 mt-4 p-6 rounded-lg shadow-inner"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Year: <span className="font-normal">{car.details.year}</span></p>
                      <p className="font-semibold">Mileage: <span className="font-normal">{car.details.mileage}</span></p>
                    </div>
                    <div>
                      <p className="font-semibold">Color: <span className="font-normal">{car.details.color}</span></p>
                      <p className="font-semibold">Seats: <span className="font-normal">{car.seats}</span></p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Additional Features:</p>
                    <ul className="list-disc list-inside">
                      {car.details.additionalFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
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

export default CarListingPage;
