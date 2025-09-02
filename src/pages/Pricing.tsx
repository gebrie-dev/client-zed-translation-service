import React from "react";
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  ClockIcon,
  CheckIcon,
  CurrencyDollarIcon,
 
} from "@heroicons/react/24/outline";

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: "Standard Translation",
      price: "250",
      currency: "ETB",
      unit: "per page",
      description: "Professional translation for most document types",
      features: [
        "Certified translation",
        "24-48 hour delivery",
        "Quality assurance",
        "Email support",
        "PDF format included",
      ],
      popular: false,
      color: "teal",
    },
    {
      name: "Arabic Translation",
      price: "400",
      currency: "ETB",
      unit: "per page",
      description: "Specialized Arabic translation services",
      features: [
        "Native Arabic translator",
        "Cultural adaptation",
        "48-72 hour delivery",
        "Priority support",
        "Multiple format options",
        "Revision included",
      ],
      popular: true,
      color: "pink",
    },
    {
      name: "Express Translation",
      price: "350",
      currency: "ETB",
      unit: "per page",
      description: "Fast-track translation for urgent documents",
      features: [
        "Same-day delivery",
        "Priority processing",
        "Dedicated project manager",
        "Phone support",
        "Express certification",
        "Rush fee included",
      ],
      popular: false,
      color: "teal",
    },
  ];

  const documentTypes = [
    {
      name: "Court Documents",
      basePrice: "250",
      specialNotes: "Certified for legal use",
    },
    {
      name: "Medical Records",
      basePrice: "250",
      specialNotes: "Medical terminology expertise",
    },
    {
      name: "Business Documents",
      basePrice: "250",
      specialNotes: "Industry-specific translation",
    },
    {
      name: "Academic Papers",
      basePrice: "250",
      specialNotes: "Academic formatting included",
    },
    {
      name: "Arabic Documents",
      basePrice: "400",
      specialNotes: "Specialized Arabic expertise",
    },
    {
      name: "Chinese Documents",
      basePrice: "350",
      specialNotes: "Complex character translation",
    },
  ];

  const additionalServices = [
    {
      service: "Notarization",
      price: "150",
      currency: "ETB",
      description: "Official notarization of translated documents",
    },
    {
      service: "Apostille",
      price: "500",
      currency: "ETB",
      description: "International document authentication",
    },
    {
      service: "Express Delivery",
      price: "200",
      currency: "ETB",
      description: "Same-day or next-day delivery",
    },
    {
      service: "Revision",
      price: "100",
      currency: "ETB",
      description: "One free revision included with all services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Professional translation services at competitive rates. No hidden
              fees, no surprises.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <CurrencyDollarIcon className="h-6 w-6" />
              <span>All prices in Ethiopian Birr (ETB)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Service Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the translation service that best fits your needs and
              timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative card p-8 ${
                  tier.popular ? "ring-2 ring-pink-500 transform scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-800">
                      {tier.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-1">
                      {tier.currency}
                    </span>
                    <span className="text-gray-500 ml-1">/{tier.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "bg-teal-500 hover:bg-teal-600 text-white"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Pricing */}
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
              Document Type Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Base pricing for different document types. Additional services may
              apply.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={docType.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <DocumentTextIcon className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {docType.name}
                </h3>
                <div className="text-3xl font-bold text-pink-500 mb-2">
                  {docType.basePrice} ETB
                </div>
                <p className="text-gray-600 text-sm">{docType.specialNotes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your translation with these optional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {service.service}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pink-500">
                    {service.price} {service.currency}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Important Pricing Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional translation</li>
                    <li>• Quality assurance review</li>
                    <li>• PDF format delivery</li>
                    <li>• One free revision</li>
                    <li>• Email support</li>
                    <li>• Certificate of accuracy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                    Delivery Times
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Standard: 24-48 hours</li>
                    <li>• Arabic: 48-72 hours</li>
                    <li>• Express: Same day</li>
                    <li>• Rush orders: 4-6 hours</li>
                    <li>• Complex documents: +24 hours</li>
                    <li>• Weekend delivery available</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h4>
                <p className="text-blue-700">
                  For large projects (10+ pages), we offer volume discounts.
                  Contact us for a custom quote and save up to 20% on your total
                  order.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Upload your documents today and receive a free quote within 2
              hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-500 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Upload Documents
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-pink-500 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
