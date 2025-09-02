import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

interface ContactForm {
  name: string;
  email: string;
  message: string;
  documentType: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Address",
      details: "Addis Ababa, Ethiopia",
      color: "pink",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      details: "+251 11 123 4567",
      color: "teal",
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "tekluzenebech97@gmail.com",
      color: "pink",
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: "Mon-sunday: 8AM-1PM EAT",
      color: "teal",
    },
  ];

  const documentTypes = [
    "Court Documents",
    "Medical Records",
    "Business Documents",
    "Academic Papers",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-contact bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/90 to-teal-500/90"></div>
        <div className="relative z-10 section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to start your translation project? Contact us today for a
              free quote and consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your translation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    info.color === "pink" ? "bg-pink-100" : "bg-teal-100"
                  }`}
                >
                  <info.icon
                    className={`h-6 w-6 ${
                      info.color === "pink" ? "text-pink-500" : "text-teal-500"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Send us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              {isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PaperAirplaneIcon className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your message. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="input-field"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        className="input-field"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Document Type
                    </label>
                    <select
                      {...register("documentType")}
                      className="input-field"
                    >
                      <option value="">Select document type</option>
                      {documentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      rows={6}
                      className="input-field"
                      placeholder="Tell us about your translation needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp & Telegram Links */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quick Contact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Need immediate assistance? Contact us directly via WhatsApp or
              Telegram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+251911234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/@teklu19"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>✈️</span>
                <span>Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
