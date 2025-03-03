import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCamera,
  FaCheck,
  FaTimes,
  FaPlane,
  FaSuitcase,
  FaPassport,
} from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import Confetti from 'react-confetti';

const ProfileForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    // Simulating fetching user data
    const fetchUserData = async () => {
      // Replace this with actual API call
      const userData = {
        name: "Kunal Kadam",
        email: "kunaldhanajikadam@outlook.com",
        phone: "9325520672",
        address: "Mumbai",
        about: "I love traveling!",
        profilePic: "/src/assets/avatars/kk.jpg",
      };
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
      setAddress(userData.address);
      setAbout(userData.about);
      setProfilePic(userData.profilePic);
    };
    fetchUserData();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitResult({
          success: true,
          message: "Profile updated successfully!",
        });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } catch (error) {
        setSubmitResult({
          success: false,
          message: "Failed to update profile. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerClass = `max-w-3xl mx-auto mt-8 p-8 rounded-xl shadow-2xl ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
  }`;

  const inputClass = `w-full px-4 py-3 rounded-lg ${
    isDarkMode
      ? "bg-gray-700 text-white border-gray-600"
      : "bg-gray-100 text-gray-900 border-gray-300"
  } border focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`;

  const labelClass = `block mb-2 text-sm font-medium ${
    isDarkMode ? "text-gray-300" : "text-gray-700"
  }`;

  const buttonClass = `w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg ${
    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
  }`;

  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={containerClass}
    >
      {showConfetti && <Confetti />}
      <h2 className="text-3xl font-bold mb-8 mt-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Update Your Profile
      </h2>
      <motion.div
        className="flex justify-center space-x-4 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaPlane className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaSuitcase className="text-4xl text-green-500" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaPassport className="text-4xl text-red-500" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {submitResult && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`mb-4 p-3 rounded ${
              submitResult.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitResult.success ? (
              <FaCheck className="inline mr-2" />
            ) : (
              <FaTimes className="inline mr-2" />
            )}
            {submitResult.message}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <FaUser className="text-4xl text-gray-400" />
              </div>
            )}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-2 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <FaCamera className="text-white" />
          </motion.div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="name" className={labelClass}>
            <FaUser className="inline mr-2" />
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Enter your name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="email" className={labelClass}>
            <FaEnvelope className="inline mr-2" />
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Enter your email"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="phone" className={labelClass}>
            <FaPhone className="inline mr-2" />
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="address" className={labelClass}>
            <FaMapMarkerAlt className="inline mr-2" />
            Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={inputClass}
            placeholder="Enter your address"
          />
          {errors.address && <p className={errorClass}>{errors.address}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="about" className={labelClass}>
            <FaInfoCircle className="inline mr-2" />
            About
          </label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className={`${inputClass} h-32 resize-none`}
            placeholder="Tell us about yourself"
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={buttonClass}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ProfileForm;
