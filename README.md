# Developer Portfolio

A responsive, accessible, interactive portfolio built with **React 18**, **Vite**, **Tailwind CSS 3** and a little custom CSS. Dark and light themes, scroll animations, project filtering, animated stats and a validated contact form.

## Quick start

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Make it yours

Everything personal is kept in data files, so you rarely need to touch a component. Search the project for `[PLACEHOLDER]` to find every value that must be replaced.

| What | Where |
| --- | --- |
| Name, email, phone, location, social links, bio, stats, services | `src/data/site.js` |
| Skills and proficiency levels (1 to 5) | `src/data/skills.js` |
| Projects (images, links, categories) | `src/data/projects.js` |
| Work experience | `src/data/experience.js` |
| Education | `src/data/education.js` |
| Certifications, awards, seminars | `src/data/certifications.js` |
| Page title and meta description | `index.html` |
| Brand colours and fonts | `tailwind.config.js` |

### Images
The profile photo is `src/assets/images/profile.webp` (used by `Hero.jsx` and `About.jsx`). The project images are still placeholder SVGs: replace them with real screenshots and update the imports in `src/data/projects.js`. Recommended sizes: avatar 600x600 or larger, project screenshots 1200x750. Use `.webp` or well-compressed `.jpg` for speed.

### CV download
The **Download CV** button points at `profile.cvUrl` in `src/data/site.js`. Replace `public/cv/sample-cv.pdf` with your own PDF (keep the name, or change the URL). `cvFileName` controls the downloaded file name.

### Contact form
The form validates required fields, the email format and a minimum message length (20 characters). **No email service is connected**, so submitting does not send anything and the form says so honestly, offering a `mailto:` fallback instead.

To make it send real messages, edit only `src/services/contactService.js`: replace the body of `sendContactMessage` with a call to your backend or a form service (Formspree, Web3Forms, EmailJS, your own API) and return `{ delivered: true }` on success. The UI switches to the "sent" state automatically.

## Project structure

```
src/
├── components/
│   ├── ui/                 Icon, Reveal (scroll reveal), SectionHeading
│   ├── Navbar.jsx          Sticky nav, scroll-spy, mobile menu, theme toggle
│   ├── Hero.jsx
│   ├── About.jsx           + StatCard.jsx (animated counters)
│   ├── Skills.jsx          + SkillCard.jsx
│   ├── Projects.jsx        + ProjectCard.jsx (filtering, view all)
│   ├── Experience.jsx      Vertical timeline
│   ├── Education.jsx
│   ├── Services.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx         + ContactForm.jsx
│   ├── Footer.jsx
│   ├── BackToTop.jsx, Loader.jsx, SocialLinks.jsx, ThemeToggle.jsx
├── data/                   All editable content
├── hooks/                  useTheme, useInView, useCountUp, useActiveSection, useScrolled
├── services/               contactService.js (plug in your email API here)
├── utils/                  validators.js
├── assets/                 images and icons
├── App.jsx, App.css
├── main.jsx
└── index.css               Tailwind layers and shared component classes
```

## Notes

- **Theme**: follows the system preference on first visit, then remembers the visitor's choice.
- **Accessibility**: semantic landmarks, a skip link, visible focus rings, labelled form fields with inline errors, text labels alongside colour, and `prefers-reduced-motion` support.
- **Performance**: no runtime dependencies beyond React, inline SVG icons, lazy-loaded images, and observers that stop after the first reveal.
- **Fonts**: Manrope (headings) and Plus Jakarta Sans (body) are loaded from Google Fonts in `index.html`.
- **Deploying**: `npm run build` produces a static `dist/` folder that works on Netlify, Vercel, GitHub Pages, Cloudflare Pages or any static host. For GitHub Pages in a sub-folder, set `base` in `vite.config.js`.

## Deploy to GitHub and Vercel

1. **GitHub**: create an empty repository (for example `portfolio`) at https://github.com/new, then from this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. **Vercel**: sign in at https://vercel.com with your GitHub account, choose **Add New > Project**, import the repository and press **Deploy**. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Every later `git push` redeploys the site.
3. **Address**: Vercel gives the project a free `<project-name>.vercel.app` address. You can change it under **Settings > Domains**.
