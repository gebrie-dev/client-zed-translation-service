import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  category: "local" | "international";
}

const languages: Language[] = [
  // Local Languages
  {
    code: "am",
    name: "Amharic",
    nativeName: "አማርኛ",
    flag: "/images/flags/amharic.png",
    category: "local",
  },
  {
    code: "ti",
    name: "Tigrigna",
    nativeName: "ትግርኛ",
    flag: "/images/flags/tigrigna.png",
    category: "local",
  },
  {
    code: "om",
    name: "Oromo",
    nativeName: "Afaan Oromoo",
    flag: "/images/flags/oromo.png",
    category: "local",
  },

  // International Languages
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "/images/flags/english.png",
    category: "international",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "/images/flags/french.png",
    category: "international",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "/images/flags/arabic.png",
    category: "international",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "/images/flags/spanish.png",
    category: "international",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "/images/flags/chinese.png",
    category: "international",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "/images/flags/german.png",
    category: "international",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "/images/flags/italian.png",
    category: "international",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "/images/flags/portuguese.png",
    category: "international",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "/images/flags/russian.png",
    category: "international",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "/images/flags/japanese.png",
    category: "international",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "/images/flags/korean.png",
    category: "international",
  },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-4 h-4 rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
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
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-8 h-8 rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
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
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-8 h-8 rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
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
