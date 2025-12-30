# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- ⚡ Built with Next.js 15 for optimal performance
- 💎 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## Sections

- **Hero** - Eye-catching introduction
- **About** - Personal introduction and background
- **Skills** - Technical skills showcase
- **Projects** - Portfolio of work
- **Contact** - Get in touch section

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

Update the following files with your information:

- `src/components/Hero.tsx` - Your name and title
- `src/components/About.tsx` - Your bio
- `src/components/Skills.tsx` - Your skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Your contact links

## Build for Production

```bash
npm run build
npm start
```

## Export as Static Files

This project can be exported as a fully static site (no Node.js server) and deployed on any static host.

```bash
npm run export
```

The static website will be generated in the `out/` folder.

To preview locally:

```bash
npx serve out
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint
