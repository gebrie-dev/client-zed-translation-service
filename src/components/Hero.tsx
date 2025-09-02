import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-pink-500/60"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-geometric opacity-10"></div>

      <div className="relative z-10 container-custom text-center text-white">
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
            <Link
              to="/contact"
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Request a Quote</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/upload"
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <DocumentTextIcon className="h-5 w-5" />
              <span>Upload Documents</span>
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

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
    </section>
  );
};

export default Hero;
