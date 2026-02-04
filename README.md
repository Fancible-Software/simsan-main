# SimSanFraser

A modern Next.js application built with the latest technologies and best practices for 2025.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router and Server-Side Rendering (SSR)
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Material-UI (MUI) v7** - React component library with SSR support
- **React 19** - Latest React version

## 📁 Project Structure

```
simsanfraser/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with MUI theme provider
│   ├── page.tsx           # Home page
│   ├── about/             # About page route
│   ├── contact/           # Contact page route
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility libraries and configurations
│   ├── theme.ts           # MUI theme configuration
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
│   └── useLocalStorage.ts # LocalStorage hook
├── types/                 # TypeScript type definitions
│   └── index.ts           # Global types
├── constants/             # Application constants
│   └── index.ts           # App constants
└── public/                # Static assets

```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.9.0 (recommended)
- npm, yarn, pnpm or bun

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- ✅ Server-Side Rendering (SSR) with Next.js App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling
- ✅ Material-UI v7 with full SSR support
- ✅ Modern project structure following 2025 best practices
- ✅ Responsive design
- ✅ Dark mode support (via Tailwind)
- ✅ Optimized fonts with next/font

## 🏗️ Architecture

### Server Components

By default, components in the `app` directory are Server Components, which means they render on the server. This reduces the client-side bundle size and improves performance.

### Client Components

Components that use hooks, event handlers or browser APIs should be marked with `"use client"` directive.

### MUI Integration

MUI is configured with:
- `AppRouterCacheProvider` for proper SSR support
- Custom theme in `lib/theme.ts`
- `CssBaseline` for consistent styling

### Tailwind CSS

Tailwind CSS v4 is configured via PostCSS. You can use Tailwind utility classes alongside MUI components.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material-UI Documentation](https://mui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/simsanfraser)

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is private and proprietary.
