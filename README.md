# rohandoesstuff - Portfolio Website

A modern, dark-themed portfolio website showcasing premium tools and live community exploits - built with React, TypeScript, and Tailwind CSS.

## About

**Premium Cheats, Exploits, Tools & Live Community Updates**

Your central hub for cutting-edge exploits, gaming tools, ChromeOS utilities, and real-time community discoveries from [3kh0/ext-remover discussions](https://github.com/3kh0/ext-remover/discussions). Designed for advanced users seeking the latest in educational security research and development tools.

## Features

- 🌗 Dark theme with neon green accents
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🔷 Built with TypeScript for type safety
- 🎭 Material Symbols icons
- 📊 Project showcase with progress indicators
- 🎮 Interactive repository content display
- 🔴 Live exploits feed from community discussions
- 🔍 Filtered content (exploits and webviews only)

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk, Chakra Petch
- **Icons**: Material Symbols

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/rohan/rohandoesstuff
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
rohandoesstuff/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Dashboard.tsx       # Main dashboard view
│   │   ├── ProjectCard.tsx     # Individual project cards
│   │   └── LiveExploits.tsx    # Live exploits feed
│   ├── data/
│   │   ├── projects.ts         # Project data
│   │   └── discussions.ts      # Live exploits feed data
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project dependencies
```

## Repository Contents

The portfolio showcases the following categories:

- **Advanced Cheats** - Collection of advanced cheats and exploits
- **Game Library** - Extensive collection of games and game mods
- **Exploits and Tools** - Utilities for enhancing functionality
- **Hubs** - Multi-functional integration tools
- **OS Modifications** - Operating system tools and scripts
- **Prxes Collection** - Proxies and network utilities
- **Tutorials** - Comprehensive guides
- **Entertainment** - Miscellaneous media content
- **Bookmarklets** - Browser-based utilities

### Live Exploits Feed

The site features a live section that displays recent discussions from [3kh0/ext-remover](https://github.com/3kh0/ext-remover/discussions), automatically filtered to show:
- 💻 **Exploits** - New bypass methods and security discoveries
- 🌐 **Webviews** - Browser-based exploit discoveries

Questions, help requests, and general discussions are filtered out to maintain focus on actionable exploits.

## Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  title: "Your Project Name",
  progress: 75,  // Progress percentage (0-100)
  imageUrl: "https://your-image-url.com/image.jpg",
  status: 'In Dev' | 'On Hold' | null,
  description: "Brief description of the project"
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  "primary": "#00FF00",  // Change primary color
  "background-light": "#F5F5F5",
  "background-dark": "#0A0F14",
  "card-dark": "#101922"
}
```

### Navigation Links

Update the navigation links in `src/components/Header.tsx`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Updating Live Feed

To update the live exploits feed, edit `src/data/discussions.ts`. The structure is designed to be easily integrated with the GitHub API for automatic updates.

```typescript
{
  title: "Exploit Name",
  category: "Exploits" | "Webview",
  author: "username",
  date: "Oct 16, 2025",
  replies: 5,
  votes: 2,
  url: "https://github.com/3kh0/ext-remover/discussions/...",
  emoji: "💻" // or "🌐"
}
```

## Disclaimer

⚠️ **All content is intended for educational and research purposes only. Use responsibly and comply with all applicable laws.**

## License

© 2025 rohandoesstuff. All rights reserved.

