# Treta Mobility – Frontend Application

A production-level modern frontend web application for **Treta Mobility LLP**, a mobility-tech startup focused on smart auto rickshaw infrastructure, transit advertising, and driver empowerment technologies.

## Tech Stack

- **React 19** + **TypeScript** (Vite)
- **TailwindCSS v4** for styling
- **Framer Motion** for animations and scroll effects
- **React Router v7** for routing
- **Zustand** for state management (auth + UI)
- **Axios** with JWT interceptors for API integration
- **react-helmet-async** for SEO meta tags

## Features

- Fully responsive (mobile / tablet / desktop)
- Role-based authentication (Driver / Marketing Partner / Admin)
- JWT-ready auth architecture with Axios interceptors
- Protected dashboard routes per role
- SEO-optimized pages with per-page meta tags
- Smooth scroll animations and micro-interactions
- Clean scalable folder structure

## Pages

| Route | Page |
|-------|------|
| `/` | Home – Hero, features, stats, testimonials, blog highlights |
| `/about` | About Us – Story, team, vision, timeline |
| `/products` | Products – Smart Meter, Transit Ads, Analytics, Route Intelligence, APIs |
| `/blog` | Blog – Search, category filter, pagination |
| `/blog/:id` | Blog Detail |
| `/contact` | Contact – Form, map placeholder, social links |
| `/auth/login` | Login (role selector) |
| `/auth/signup` | Signup |
| `/auth/forgot-password` | Forgot Password |
| `/dashboard/driver` | Driver Dashboard (protected) |
| `/dashboard/marketing` | Marketing Partner Dashboard (protected) |
| `/dashboard/admin` | Admin Dashboard (protected) |

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `https://api.tretamobility.com/v1` |

## Folder Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components (Navbar, Footer, ProductCard, BlogCard, etc.)
├── hooks/           # Custom React hooks
├── layouts/         # Page layout wrappers (Main, Auth, Dashboard)
├── pages/           # Page components
│   ├── auth/        # Authentication pages
│   └── dashboards/  # Role-based dashboard pages
├── services/        # Axios service modules (auth, blog, contact, products)
├── store/           # Zustand stores (authStore, uiStore)
├── types/           # TypeScript interfaces
└── utils/           # Constants, Framer Motion variants
```
