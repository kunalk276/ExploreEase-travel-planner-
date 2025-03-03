import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaLock, FaCheckCircle } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { useTheme } from '../../Context/ThemeContext';
import confetti from 'canvas-confetti';

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const paymentMethods = [
    { name: 'Credit Card', icon: FaCreditCard },
    { name: 'Apple Pay', icon: FaApplePay },
    { name: 'Google Pay', icon: FaGooglePay },
    { name: 'UPI', icon: RiSecurePaymentLine },
  ];

  const containerClass = `max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 p-4 sm:p-6 rounded-lg shadow-lg ${
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
  }`;

  const buttonClass = `w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md transition-colors duration-300 ${
    isDarkMode
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-purple-500 text-white hover:bg-purple-600'
  }`;

  const methodClass = (method: string) => `
    flex items-center p-3 sm:p-4 rounded-md cursor-pointer transition-all duration-300
    ${selectedMethod === method
      ? isDarkMode
        ? 'bg-purple-700 text-white transform scale-105'
        : 'bg-purple-100 text-purple-700 transform scale-105'
      : isDarkMode
      ? 'bg-gray-700 text-white hover:bg-gray-600'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }
  `;

  const inputClass = `w-full p-2 rounded border ${
    isDarkMode
      ? 'bg-gray-700 text-white border-gray-600'
      : 'bg-white text-gray-900 border-gray-300'
  } focus:outline-none focus:ring-2 focus:ring-purple-500`;

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'Credit Card':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            <input type="text" placeholder="Card Number" className={inputClass} />
            <div className="flex space-x-4">
              <input type="text" placeholder="MM/YY" className={`${inputClass} w-1/2`} />
              <input type="text" placeholder="CVV" className={`${inputClass} w-1/2`} />
            </div>
            <input type="text" placeholder="Cardholder Name" className={inputClass} />
          </motion.div>
        );
      case 'PayPal':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p>You will be redirected to PayPal to complete your payment.</p>
          </motion.div>
        );
      case 'Apple Pay':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p>Please confirm payment with your Apple device.</p>
          </motion.div>
        );
      case 'Google Pay':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p>Please confirm payment with your Google Pay account.</p>
          </motion.div>
        );
      case 'UPI':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <input type="text" placeholder="Enter UPI ID" className={inputClass} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={containerClass}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center mt-16">Select Payment Method</h2>
      <div className="space-y-3 sm:space-y-4">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={methodClass(method.name)}
            onClick={() => setSelectedMethod(method.name)}
          >
            <method.icon className="text-xl sm:text-2xl mr-3 sm:mr-4" />
            <span className="text-sm sm:text-base">{method.name}</span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedMethod && renderPaymentForm()}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${buttonClass} mt-4 sm:mt-6 text-sm sm:text-base flex items-center justify-center`}
        disabled={!selectedMethod || isProcessing || paymentSuccess}
        onClick={handlePayment}
      >
        {isProcessing ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="mr-2"
          >
            <FaLock />
          </motion.div>
        ) : (
          <FaLock className="mr-2" />
        )}
        {isProcessing ? 'Processing...' : (selectedMethod ? `Pay with ${selectedMethod}` : 'Select a payment method')}
      </motion.button>
      <AnimatePresence>
        {paymentSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-green-800' : 'bg-green-100'} flex items-center justify-center`}
          >
            <FaCheckCircle className={`text-2xl mr-2 ${isDarkMode ? 'text-green-300' : 'text-green-500'}`} />
            <span className={`text-lg font-semibold ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
              Payment Successful! Thank you for your purchase.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PaymentMethod;
