# Chakon Portfolio

Modern personal portfolio website for CHAKON A/L EH CHEH built with React, Vite, Tailwind CSS, Framer Motion, React Icons, and Three.js.

## Features

- Responsive dark futuristic portfolio layout
- Sticky navigation with mobile menu
- Three.js interactive floating developer lanyard / ID badge
- Icon-only skills section with hover tooltips
- Experience, education, contact, and footer sections
- Filterable project showcase
- Case study modal for project details
- SEO meta tags
- Reusable component structure
- Data-driven skills and projects

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Replace your assets

Add your real profile photo and resume inside the `public` folder:

```txt
public/profile.jpg
public/resume.pdf
```

The Three.js lanyard uses `public/profile.jpg` automatically. If it is missing, it falls back to `public/profile-placeholder.svg`.

## Edit data

Skills:

```txt
src/data/skills.js
```

Projects:

```txt
src/data/projects.js
```

## Main Three.js file

```txt
src/components/ThreeLanyardCard.jsx
```

This component creates the interactive 3D lanyard and ID badge using raw Three.js inside React.
