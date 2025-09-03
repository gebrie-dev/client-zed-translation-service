import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  const [documentCount, setDocumentCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const timer = setInterval(() => {
      setDocumentCount((prev) => {
        if (prev >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return prev + 50;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-pink-500/60"></div>
        </div>

        {/* Geometric Pattern Overlay - Using an empty div for this effect */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 20.5v-.5h.5V20.5h-.5zM0 20.5v-.5h.5V20.5H0zM20 0.5v-.5h.5V.5h-.5zM0 0.5v-.5h.5V.5H0z\" stroke=\"%23ffffff\" fill=\"none\" stroke-width=\".5\"/%3E%3C/svg%3E')"
          }}>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
              <span className="block">zema Translation</span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-normal mt-2">
                Your Trusted Partner for
              </span>
              <span className="block text-gradient bg-gradient-to-r from-teal-200 to-pink-200 bg-clip-text text-transparent">
                Global Communication
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Professional translation services in Addis Ababa, Ethiopia.
              Supporting local languages and international communication with
              certified accuracy and cultural sensitivity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/contact">
                <motion.button
                  className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Request a Quote</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/upload">
                <motion.button
                  className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  <span>Upload Documents</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-teal-900/30 border border-teal-300/30 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <DocumentTextIcon className="h-8 w-8 text-teal-300" />
                <span className="text-3xl font-bold font-poppins text-teal-200">
                  {documentCount.toLocaleString()}+
                </span>
              </div>
              <p className="text-lg text-white/90">Documents Translated</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white/80">
                  Certified & Accurate
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 hidden lg:block"
          >
            <GlobeAltIcon className="h-16 w-16 text-white/20" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 hidden lg:block"
          >
            <DocumentTextIcon className="h-20 w-20 text-white/20" />
          </motion.div>
        </div>
      </section>

      {/* Placeholder for more content below the hero section */}
      <div className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive suite of translation solutions tailored to your needs.
        </p>
        <div className="mt-12">
          {/* Service cards or content will go here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
