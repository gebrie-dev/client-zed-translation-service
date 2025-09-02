# zema Translation - Professional Translation Services

A modern, responsive website for zema Translation, a professional translation service based in Addis Ababa, Ethiopia. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Responsive, mobile-first design with vibrant pink (#FF69B4) and teal (#26A69A) color scheme
- **Document Upload**: Secure drag-and-drop file upload system with validation
- **Language Support**: Support for local languages (Amharic, Tigrigna, ) and international languages
- **Services**: Comprehensive translation services for court, medical, business, and academic documents
- **Contact System**: Contact forms with WhatsApp and Telegram integration
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimizema**: Meta tags and structured data for search engines

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS with custom configuration
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **File Upload**: React Dropzone
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Carousel**: React Slick
- **SEO**: React Helmet

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd zema-translation
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── UploadForm.tsx  # Document upload form
│   ├── LanguageSelector.tsx # Language selection
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Services.tsx    # Services page
│   └── Contact.tsx     # Contact page
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## Customization

### Colors

The main brand colors are defined in `tailwind.config.js`:

- Pink: #FF69B4
- Teal: #26A69A

### Images

Replace placeholder images in the `public/images/` directory:

- `hero.jpg` - Hero section background
- `services-bg.jpg` - Services page background
- `contact-bg.jpg` - Contact page background
- `geometric-pattern.png` - Ethiopian geometric pattern
- `flags/` - Language flag icons

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

### Netlify Notes (React 19 peer deps)

Netlify may fail dependency installation due to peer-dependency conflicts (e.g., `react-slick` expects React <= 18). This repo includes:

- `netlify.toml` to force legacy peer deps during build
- `.npmrc` with `legacy-peer-deps=true`

If you set build settings manually in the dashboard:

- Build command: `npm install --legacy-peer-deps && npm run build`
- Publish directory: `dist`
- Node version: `20.12.2`

## Features Overview

### Homepage

- Hero section with call-to-action buttons
- Document counter with animation
- Why choose us section
- Document types overview
- Trust indicators

### Services Page

- Service cards with descriptions
- Document types we handle
- Translation process steps

### Contact Page

- Contact information
- Contact form with validation
- WhatsApp and Telegram links

### Document Upload

- Drag-and-drop interface
- File type and size validation
- Progress indicators
- Security badges

### Language Selector

- Searchable language list
- Local and international languages
- Flag icons
- Multi-selection support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@zematranslation.com or contact us via WhatsApp/Telegram.

---

Built with ❤️ for zema Translation, Addis Ababa, Ethiopia
