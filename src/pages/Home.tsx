import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Home: React.FC = () => {
  const features = [
    {
      icon: DocumentTextIcon,
      title: "Certified Translations",
      description:
        "Official documents with certified accuracy for legal, medical, and business purposes.",
      color: "pink",
    },
    {
      icon: GlobeAltIcon,
      title: "Local & International",
      description:
        "Supporting Amharic, Tigrigna, Oromifa and 20+ international languages.",
      color: "teal",
    },
    {
      icon: ClockIcon,
      title: "24-Hour Turnaround",
      description:
        "Fast delivery without compromising quality. Urgent requests accommodated.",
      color: "pink",
    },
    {
      icon: StarIcon,
      title: "98% Satisfaction",
      description:
        "Trusted by thousands of clients with consistently high ratings.",
      color: "teal",
    },
  ];

  const services = [
    {
      title: "Court Documents",
      description:
        "Legal translations for immigration, court proceedings, and official documentation.",
      icon: "⚖️",
    },
    {
      title: "Medical Records",
      description:
        "Healthcare documents, prescriptions, and medical reports with medical terminology expertise.",
      icon: "🏥",
    },
    {
      title: "Business Documents",
      description:
        "Contracts, agreements, financial statements, and corporate communications.",
      icon: "💼",
    },
    {
      title: "Academic Papers",
      description:
        "Research papers, transcripts, diplomas, and educational certificates.",
      icon: "🎓",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Documents Translated" },
    { number: "50+", label: "Languages Supported" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24h", label: "Average Turnaround" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-white to-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose zema Translation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver
              accurate, culturally sensitive translations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    feature.color === "pink" ? "bg-pink-100" : "bg-teal-100"
                  }`}
                >
                  <feature.icon
                    className={`h-8 w-8 ${
                      feature.color === "pink"
                        ? "text-pink-500"
                        : "text-teal-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Document Types We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From legal documents to medical records, we handle all types of
              documents with the highest level of accuracy and confidentiality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl opacity-90">
              Our numbers speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gradient-to-b from-white to-pink-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Your Security & Trust Matter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <ShieldCheckIcon className="h-16 w-16 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  SSL Encrypted
                </h3>
                <p className="text-gray-600 text-center">
                  All document uploads and communications are protected with
                  enterprise-grade encryption.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <UserGroupIcon className="h-16 w-16 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Certified Translators
                </h3>
                <p className="text-gray-600 text-center">
                  Our team consists of native speakers and certified
                  professionals with years of experience.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <CheckCircleIcon className="h-16 w-16 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600 text-center">
                  Every translation undergoes rigorous quality checks and
                  proofreading processes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
