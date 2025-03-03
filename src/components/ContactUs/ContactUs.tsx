import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaComments, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`contact-us ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 to-purple-200 text-gray-800"
      } min-h-screen flex flex-col items-center justify-center transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-6xl">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Let's Connect!
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div variants={itemVariants} className="contact-info space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-700">Reach Out to Us</h2>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 shadow-md border border-blue-300 text-white"
            >
              <div className="bg-white p-2 rounded-full">
                <FaEnvelope className="text-lg sm:text-xl text-blue-600" />
              </div>
              <span className="text-base sm:text-lg">info@ExploreEase.com</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg bg-gradient-to-r from-green-400 to-green-500 shadow-md border border-green-300 text-white"
            >
              <div className="bg-white p-2 rounded-full">
                <FaPhone className="text-lg sm:text-xl text-green-600" />
              </div>
              <span className="text-base sm:text-lg">+91 9325520672</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg bg-gradient-to-r from-purple-400 to-purple-500 shadow-md border border-purple-300 text-white"
            >
              <div className="bg-white p-2 rounded-full">
                <FaMapMarkerAlt className="text-lg sm:text-xl text-purple-600" />
              </div>
              <span className="text-base sm:text-lg">
                Mumbai, India
              </span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-6 lg:mt-8"
            >
              <img
                src="src/assets/elements/BecomeAnAuthorImg.png"
                alt="Adventure"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-base sm:text-lg font-medium">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                  } border-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-base sm:text-lg font-medium">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                  } border-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-base sm:text-lg font-medium">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                  } border-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                  rows={4}
                  required
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                type="submit"
                className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center`}
              >
                {isHovered ? <FaSmile className="mr-2" /> : <FaPaperPlane className="mr-2" />}
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-lg mb-2">Need immediate assistance?</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-6 py-3 rounded-full text-white font-semibold ${
            isDarkMode ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"
          } transition-colors duration-300 flex items-center justify-center mx-auto`}
        >
          <FaComments className="mr-2" />
          Start Live Chat
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
