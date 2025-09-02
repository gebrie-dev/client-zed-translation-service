import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import UploadForm from "./components/UploadForm";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <Router>
      <Helmet>

        <title>
          zema Translation - Professional Translation Services in Addis Ababa,
          Ethiopia
        </title>
        <meta
          name="description"
          content="Professional translation services in Addis Ababa, Ethiopia. Certified translations for court, medical, business, and academic documents in Amharic, Tigrigna, Oromo and international languages."
        />
        <meta
          name="keywords"
          content="translation services, Addis Ababa, Ethiopia, Amharic translation, Tigrigna translation, Oromo translation, certified translation, legal translation, medical translation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zematranslation.netlify.app" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route path="/languages" element={<LanguageSelector />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
