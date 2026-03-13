<div align="center">
  <h1>✨ Prajwal Chaple - 3D Developer Portfolio</h1>
  <p>An immersive, highly interactive 3D developer portfolio built with React, Three.js, and Rapier Physics.</p>

  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
  [![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

---

## 🚀 Overview

Welcome to the source code of my personal developer portfolio! This project is designed to be more than just a resume—it's an interactive experience that showcases my skills in modern web development, 3D graphics, and creative UI/UX design.

The portfolio features a fully interactive 3D background, physics-based technology representations (interactive balls), smooth scrolling, and complex text animations, all optimized for high performance across devices.

## 🎯 Key Features

*   **Interactive 3D Environment**: Powered by `@react-three/fiber` and `@react-three/drei`, featuring a custom 3D character and lighting system.
*   **Physics-Based Tech Stack**: An interactive "Tech Stack" section where technologies are represented as physical spheres that respond to mouse movements, powered by `@react-three/rapier`.
*   **Silky Smooth Scrolling**: Integrated `lenis` for premium, hardware-accelerated smooth scrolling across the entire application.
*   **Advanced Text Animations**: Utilizing `split-type` and `gsap` for highly choreographed loading sequences and scroll-triggered text reveals.
*   **Modern UI/UX**: Glassmorphism effects, custom engaging layouts for the "About" and "Projects" sections, and a horizontal scroll image carousel.
*   **Fully Responsive**: Meticulously styled to look stunning on both desktop and mobile devices.

## 🛠️ Built With

*   **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) / JavaScript
*   **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [@react-three/drei](https://github.com/pmndrs/drei)
*   **Physics Engine**: [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)
*   **Animations**: [GSAP](https://gsap.com/) (Core) + [SplitType](https://github.com/lukePeavey/SplitType)
*   **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
*   **Styling**: Vanilla CSS with modern custom properties and media queries.

## 📂 Project Structure

```text
src/
├── components/          # React components (Landing, About, Work, TechStack, etc.)
│   ├── styles/          # Component-specific CSS files
│   └── utils/           # Animation and utility functions (splitText, initialFX)
├── App.tsx              # Main application entry point
└── index.css            # Global CSS variables and resets
public/
├── images/              # Optimized WebP assets and tech logos
└── models/              # HDR environment maps and 3D GLTF/GLB models
```

## 🏁 Getting Started

### Prerequisites
Make sure you have Node.js (v16 or higher) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrajwalChaple/portfoliomain.git
   cd portfoliomain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

The design moves away from traditional "text-heavy" layouts into a dynamic, presentation-style format. 
*   **The About Section** utilizes cards and clear visual highlights to make reading effortless.
*   **The Work Carousel** focuses entirely on project descriptions and technologies without cluttering the screen, letting the 3D background maintain its presence.

## 👨‍💻 Author

**Prajwal Chaple**
*   LinkedIn: [@prajwalchaple](https://www.linkedin.com/in/prajwalchaple)
*   Instagram: [@prajwal__14_](https://www.instagram.com/prajwal__14_)

---
<p align="center">Built with 💻 and ☕ by Prajwal Chaple.</p>
