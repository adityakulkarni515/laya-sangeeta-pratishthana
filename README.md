# Laya Sangeeta Pratishthana — Official Website

Production-ready React website for Laya Sangeeta Pratishthana, preserving the legacy of Pandit H. Somashekhar.

## Tech Stack
- **React 18 + Vite 5** — fast development & production builds
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion** — premium animations & page transitions
- **React Router DOM 6** — client-side routing
- **React Helmet Async** — SEO meta tags per page

## Quick Start

```bash
cd laya-sangeeta
npm install
npm run dev        # http://localhost:5173
```

## Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # preview production build locally
```

## Project Structure

```
laya-sangeeta/
├── public/
│   ├── images/              ← all site images
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   ← sticky nav + mobile hamburger
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/
│   │       ├── LoadingScreen.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── Divider.jsx
│   │       ├── CountdownTimer.jsx
│   │       └── PageTransition.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutGuru.jsx
│   │   ├── Events.jsx
│   │   ├── Students.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Deployment

The `dist/` folder after `npm run build` can be deployed to:
- **Netlify** — drag & drop the `dist/` folder, or connect GitHub
- **Vercel** — `vercel --prod`
- **GitHub Pages** — with `vite.config.js` `base` set to repo name

## Contact Form

The contact form uses a simulated submission. To enable real email sending:
1. Create an [EmailJS](https://www.emailjs.com/) account
2. Install: `npm install @emailjs/browser`
3. Replace the `handleSubmit` function in `Contact.jsx` with EmailJS send call
