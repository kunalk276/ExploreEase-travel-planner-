import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaCrown } from "react-icons/fa";

interface AuthModalProps {
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onSwitchMode }) => {
  const [currentMode, setCurrentMode] = useState<'login' | 'signup'>(mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleMode = () => {
    const newMode = currentMode === 'login' ? 'signup' : 'login';
    setCurrentMode(newMode);
    onSwitchMode(newMode);
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMode === 'signup' && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Form submitted:", { email, password, username });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <FaCrown className="text-purple-600 text-5xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
            {currentMode === 'login' ? 'Welcome Back!' : 'Join Us Today'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentMode === 'signup' && (
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-purple-500" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
            )}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-purple-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-purple-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            {currentMode === 'signup' && (
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-purple-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg px-4 py-3 font-bold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300 transform hover:scale-105"
            >
              {currentMode === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
        <div className="bg-gray-100 px-8 py-4 text-center">
          <p className="text-sm text-gray-600">
            {currentMode === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleMode}
              className="font-medium text-purple-600 hover:text-purple-500 ml-1 focus:outline-none transition-colors duration-300"
            >
              {currentMode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
