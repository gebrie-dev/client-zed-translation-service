import React from "react";
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  PencilIcon,
  SparklesIcon,
  ScaleIcon,
  HeartIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Services: React.FC = () => {
  const services = [
    {
      icon: DocumentTextIcon,
      title: "Certified Translation",
      description:
        "Official document translations with certified accuracy for legal, immigration, and official purposes.",
      features: [
        "Notarized translations",
        "Apostille certification",
        "Legal document expertise",
        "Immigration support",
      ],
      color: "pink",
      href: "/services/certified",
    },
    {
      icon: GlobeAltIcon,
      title: "Localization",
      description:
        "Adapting content to local cultures and languages while maintaining the original message and intent.",
      features: [
        "Cultural adaptation",
        "Local terminology",
        "Regional preferences",
        "Contextual accuracy",
      ],
      color: "teal",
      href: "/services/localization",
    },
    {
      icon: PencilIcon,
      title: "Proofreading",
      description:
        "Professional editing and proofreading services to ensure perfect grammar, style, and accuracy.",
      features: [
        "Grammar correction",
        "Style improvement",
        "Consistency checks",
        "Final review",
      ],
      color: "pink",
      href: "/services/proofreading",
    },
    {
      icon: SparklesIcon,
      title: "Transcreation",
      description:
        "Creative translation that adapts marketing content, slogans, and creative materials for new markets.",
      features: [
        "Creative adaptation",
        "Marketing content",
        "Brand messaging",
        "Cultural relevance",
      ],
      color: "teal",
      href: "/services/transcreation",
    },
  ];

  const documentTypes = [
    {
      icon: ScaleIcon,
      title: "Court Documents",
      description:
        "Legal translations for immigration, court proceedings, and official documentation.",
      examples: [
        "Birth certificates",
        "Marriage certificates",
        "Court orders",
        "Legal contracts",
      ],
      color: "pink",
    },
    {
      icon: HeartIcon,
      title: "Medical Records",
      description:
        "Healthcare documents, prescriptions, and medical reports with medical terminology expertise.",
      examples: [
        "Medical reports",
        "Prescriptions",
        "Lab results",
        "Insurance documents",
      ],
      color: "teal",
    },
    {
      icon: BriefcaseIcon,
      title: "Business Documents",
      description:
        "Contracts, agreements, financial statements, and corporate communications.",
      examples: [
        "Business contracts",
        "Financial statements",
        "Corporate reports",
        "Marketing materials",
      ],
      color: "pink",
    },
    {
      icon: AcademicCapIcon,
      title: "Academic Papers",
      description:
        "Research papers, transcripts, diplomas, and educational certificates.",
      examples: [
        "Academic transcripts",
        "Research papers",
        "Diplomas",
        "Certificates",
      ],
      color: "teal",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Document Upload",
      description:
        "Securely upload your documents through our encrypted platform.",
    },
    {
      step: "02",
      title: "Quote & Confirmation",
      description: "Receive an instant quote and confirm your order details.",
    },
    {
      step: "03",
      title: "Translation Process",
      description:
        "Our certified translators work on your documents with quality checks.",
    },
    {
      step: "04",
      title: "Review & Delivery",
      description:
        "Final review and secure delivery of your translated documents.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-services bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/90 to-teal-500/90"></div>
        <div className="relative z-10 section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Professional Translation Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From certified legal documents to creative marketing content, we
              deliver accurate translations with cultural sensitivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Translation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive translation solutions tailored to your specific
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 hover:shadow-2xl ${
                  service.color === "pink"
                    ? "hover:bg-pink-50"
                    : "hover:bg-teal-50"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    service.color === "pink" ? "bg-pink-100" : "bg-teal-100"
                  }`}
                >
                  <service.icon
                    className={`h-8 w-8 ${
                      service.color === "pink"
                        ? "text-pink-500"
                        : "text-teal-500"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          service.color === "pink"
                            ? "bg-pink-500"
                            : "bg-teal-500"
                        }`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`flex items-center space-x-2 ${
                    service.color === "pink" ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
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
              Document Types We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across various document categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={docType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-6 text-center ${
                  docType.color === "pink"
                    ? "hover:bg-pink-50"
                    : "hover:bg-teal-50"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    docType.color === "pink" ? "bg-pink-100" : "bg-teal-100"
                  }`}
                >
                  <docType.icon
                    className={`h-6 w-6 ${
                      docType.color === "pink"
                        ? "text-pink-500"
                        : "text-teal-500"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {docType.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {docType.description}
                </p>

                <div className="text-left">
                  <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {docType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Translation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and efficient workflow for all your translation
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-500 to-teal-500 transform translate-x-8"></div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Upload your documents today and receive a quote within minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Upload Documents
              </button>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
