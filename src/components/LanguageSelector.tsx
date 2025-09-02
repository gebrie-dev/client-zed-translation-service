import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  category: "local" | "international";
}

const languages: Language[] = [
  // Local Languages
  {
    code: "am",
    name: "Amharic",
    nativeName: "አማርኛ",
    category: "local",
  },
  {
    code: "ti",
    name: "Tigrigna",
    nativeName: "ትግርኛ",
    category: "local",
  },
  {
    code: "om",
    name: "Oromifa",
    nativeName: "Afaan Oromoo",
    category: "local",
  },

  // International Languages
  {
    code: "en",
    name: "English",
    nativeName: "English",
    category: "international",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    category: "international",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    category: "international",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    category: "international",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    category: "international",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    category: "international",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    category: "international",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    category: "international",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    category: "international",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    category: "international",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    category: "international",
  },
];

const LanguageSelector: React.FC = () => {
  // removed dropdown state as flags/icons are no longer used
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLanguage = (language: Language) => {
    setSelectedLanguages((prev) => {
      const isSelected = prev.some((lang) => lang.code === language.code);
      if (isSelected) {
        return prev.filter((lang) => lang.code !== language.code);
      } else {
        return [...prev, language];
      }
    });
  };

  const removeLanguage = (code: string) => {
    setSelectedLanguages((prev) => prev.filter((lang) => lang.code !== code));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <GlobeAltIcon className="h-16 w-16 text-teal-500" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Select Languages
          </h2>
          <p className="text-gray-600">
            Choose from our extensive list of local and international languages
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search languages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Selected Languages */}
        {selectedLanguages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Selected Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedLanguages.map((lang) => (
                <motion.div
                  key={lang.code}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center space-x-2 bg-teal-100 text-teal-800 px-3 py-2 rounded-full"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-pink-400" />
                  <span className="text-sm font-medium">{lang.name}</span>
                  <button
                    onClick={() => removeLanguage(lang.code)}
                    className="text-teal-600 hover:text-teal-800"
                  >
                    ×
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Language Categories */}
        <div className="space-y-6">
          {/* Local Languages */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              Local Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredLanguages
                .filter((lang) => lang.category === "local")
                .map((language) => (
                  <motion.div
                    key={language.code}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedLanguages.some(
                        (lang) => lang.code === language.code
                      )
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                    }`}
                    onClick={() => toggleLanguage(language)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-pink-400 flex items-center justify-center text-white text-xs font-semibold">
                        {language.code.toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {language.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {language.nativeName}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* International Languages */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              International Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredLanguages
                .filter((lang) => lang.category === "international")
                .map((language) => (
                  <motion.div
                    key={language.code}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedLanguages.some(
                        (lang) => lang.code === language.code
                      )
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                    }`}
                    onClick={() => toggleLanguage(language)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-teal-400 flex items-center justify-center text-white text-xs font-semibold">
                        {language.code.toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {language.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {language.nativeName}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setSelectedLanguages([])}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear All
          </button>
          <button
            className="btn-primary"
            disabled={selectedLanguages.length === 0}
          >
            Continue with {selectedLanguages.length} Language
            {selectedLanguages.length !== 1 ? "s" : ""}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
