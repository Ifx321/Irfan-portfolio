# Irfan Salim Portfolio

## Overview

A personal portfolio website for Irfan Salim, a Data Analyst. The application is a modern, dark-themed React single-page application featuring interactive visual effects (pixel trail animations), glassmorphism UI design, and multi-page navigation. The portfolio showcases professional experience, projects, technical skills, and education.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 for fast development and optimized builds
- **Routing**: React Router DOM v7 for client-side navigation between portfolio sections
- **Styling**: Tailwind CSS v4 with custom theme configuration for dark mode (zinc-950 base)
- **Animations**: Framer Motion for smooth UI transitions and interactive effects
- **Icons**: Lucide React for consistent iconography

### Component Structure
- **Layout Component**: Wraps all pages with persistent sidebar navigation and background effects
- **PixelTrail Component**: Interactive background animation that responds to mouse movement with neon color effects
- **ParticleButton Component**: Animated button with hover/tap effects
- **Page Components**: Home, Experience, Projects, Skills, Education - each as separate route

### Design System
- **Theme**: Dark mode with zinc-950 background
- **Aesthetic**: "Liquid Glass" glassmorphism using `bg-zinc-900/40 backdrop-blur-xl border border-white/10`
- **Typography**: Bold tracking-tight headings with white/opacity-based text hierarchy

### Utility Functions
- **cn()**: Combines clsx and tailwind-merge for conditional class handling
- **useDimensions hook**: Tracks container dimensions for responsive pixel grid calculations

## External Dependencies

### Runtime Dependencies
- **react** / **react-dom**: Core React framework
- **react-router-dom**: Client-side routing
- **framer-motion**: Animation library
- **uuid**: Unique ID generation for pixel trail elements

### Development Dependencies
- **@vitejs/plugin-react**: Vite React integration
- **@tailwindcss/vite**: Tailwind CSS Vite plugin
- **typescript**: Type checking
- **lucide-react**: Icon library
- **clsx** / **tailwind-merge**: Class name utilities

### Build Configuration
- Development server runs on port 5000 with host 0.0.0.0 for Replit compatibility
- TypeScript configured with ESNext target and React JSX transform