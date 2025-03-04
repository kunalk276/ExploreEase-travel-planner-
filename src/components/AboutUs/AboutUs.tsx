import React, { useState, useEffect } from "react";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaUmbrella,
  FaUsers,
  FaGlobe,
  FaChevronDown,
  FaPaperPlane,
  FaCompass,
  FaMapMarkedAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const AboutUs: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: <FaPlane />,
      title: "Flight Booking",
      description: "Book flights to destinations worldwide.",
    },
    {
      icon: <FaHotel />,
      title: "Hotel Reservations",
      description: "Find and book accommodations for your stay.",
    },
    {
      icon: <FaCar />,
      title: "Car Rentals",
      description: "Rent a car for your travel needs.",
    },
    {
      icon: <FaUmbrella />,
      title: "Travel Insurance",
      description: "Protect your trip with our insurance options.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const createFloatingCircle = () => {
      const circle = document.createElement('div');
      circle.classList.add('floating-circle');
      circle.style.left = `${Math.random() * 100}vw`;
      circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      document.body.appendChild(circle);

      setTimeout(() => {
        document.body.removeChild(circle);
      }, 15000);
    };

    const interval = setInterval(createFloatingCircle, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="about-us bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-10 py-16 mt-20 relative z-10">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Discover ExploreEase 
        </motion.h1>

        <div className="grid transform rotate-5 transition-all duration-500 hover:rotate-0">
          <img
            src="assets/elements/travelhero2.png"
            alt="Adventure"
            className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-16 text-center max-w-3xl mx-auto text-indigo-800"
        ><br/>
          Embark on a journey of discovery with ExploreEase. We're not just about
          trips; we're about transforming your travel dreams into unforgettable
          realities.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="feature-card p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-200 to-purple-200 bg-opacity-20 backdrop-filter backdrop-blur-lg"
          >
            <FaUsers className="text-5xl mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Expert Explorers</h3>
            <p className="text-gray-700">
              Our seasoned travel gurus craft bespoke adventures tailored to your wildest dreams.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="feature-card p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-200 to-pink-200 bg-opacity-20 backdrop-filter backdrop-blur-lg"
          >
            <FaGlobe className="text-5xl mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-3 text-purple-700">World at Your Fingertips</h3>
            <p className="text-gray-700">
              Unlock a treasure trove of global experiences with our extensive network of partners.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="feature-card p-6 rounded-lg shadow-lg bg-gradient-to-br from-pink-200 to-red-200 bg-opacity-20 backdrop-filter backdrop-blur-lg"
          >
            <FaUmbrella className="text-5xl mb-4 text-pink-600" />
            <h3 className="text-xl font-semibold mb-3 text-pink-700">Always By Your Side</h3>
            <p className="text-gray-700">
              Our 24/7 support team is your travel guardian angel, ensuring smooth sailing throughout your journey.
            </p>
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-6 text-center text-indigo-800"
        >
          Unleash Your Wanderlust
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 5 : -5 }}
              className="service-card p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 bg-opacity-20 backdrop-filter backdrop-blur-lg"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="text-5xl mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">{service.title}</h3>
              <AnimatePresence>
                {expandedService === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-700"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.div
                animate={{ rotate: expandedService === index ? 180 : 0 }}
                className="mt-2 text-indigo-600"
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 relative">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Our Odyssey</h2>
          <div className="grid transform position-relative hover:rotate-0 transition-all duration-500">
              <img
                src="assets/elements/about-hero-right.png"
                alt="Adventure"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-indigo-700">
            <br/>
            We're on a quest to ignite the explorer in you, fostering a global
            community of adventurers. Our compass points towards sustainable
            travel, ensuring that every journey leaves a positive footprint on
            the world.
          </p>
          <motion.div
            className="absolute"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              pointerEvents: "none",
            }}
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          >
            <FaPaperPlane className="text-4xl text-indigo-600 opacity-50" />
          </motion.div>
        </motion.div>
      </div>

      <div className="fixed bottom-10 right-10 z-50">
  <a href="https://kunal-portfolio-blue.vercel.app/" target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.8 }}
      className="bg-indigo-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
    >
      <FaCompass className="text-3xl" />
    </motion.div>
  </a>
</div>


      <motion.div
  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 cursor-pointer"
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <a href="https://kunal-portfolio-blue.vercel.app/" target="_blank" rel="noopener noreferrer">
    <FaMapMarkedAlt className="text-9xl text-indigo-200 opacity-20" />
  </a>
</motion.div>


      <style>
        {`
        .about-us {
          min-height: 100vh;
          transition: background-color 0.3s, color 0.3s;
        }
        .service-card, .feature-card {
          transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .service-card:hover, .feature-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .floating-circle {
          position: fixed;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(65, 105, 225, 0.3), rgba(65, 105, 225, 0));
          animation: float-up 15s linear infinite;
          z-index: 1;
        }
        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
        `}
      </style>
    </motion.div>
  );
};

export default AboutUs;
