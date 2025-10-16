# rohandoesstuff - Complete Exploitation Resource Hub

The ultimate all-in-one platform with **673 exploits, tools, and resources** from multiple repositories - built with React, TypeScript, and Tailwind CSS.

## About

**Your Complete ChromeOS Exploitation Database**

Access **ALL 673 files** from the top exploitation repositories in one searchable interface:
- **475 Exploits** from ext-remover, Corellium, and chromebook-utilities
- **142 Tools** including scripts, bookmarklets, and utilities
- **36 Proxy Collections** and unblock methods
- **12 Learning Resources** with tutorials and guides
- **8 Game Categories** for entertainment

Everything is indexed, searchable, and filterable. No more browsing through multiple GitHub repos - find what you need instantly.

## Features

- 🌗 Dark theme with neon green accents
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🔷 Built with TypeScript for type safety
- 🎭 Material Symbols icons
- 📊 Project showcase with progress indicators
- 💻 **673 Total Items** - Complete catalog from 3 repositories
- 🔍 **Advanced Search** - Real-time filtering across all items
- 📁 **Git Submodules** - Always up-to-date with source repos
- 🏷️ **Smart Categorization** - Exploits, tools, proxies, games, resources
- 🎯 **Multiple Sources** - ext-remover, Corellium, chromebook-utilities
- 🔄 **Auto-Indexing** - One command to refresh entire catalog

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
- Git

### Installation

1. Clone the repository **with submodules**:
```bash
git clone --recursive https://github.com/yourusername/rohandoesstuff.git
cd rohandoesstuff
```

Or if already cloned:
```bash
cd rohandoesstuff
git submodule init
git submodule update
```

2. Install dependencies:
```bash
npm install
```

3. Index all exploits (creates searchable database):
```bash
npm run index-exploits
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Updating the Catalog

To get the latest exploits from all source repositories:

```bash
npm run refresh-catalog
```

This will:
1. Pull latest changes from all Git submodules
2. Re-index all 673+ files
3. Update the searchable database

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
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── Dashboard.tsx        # Main dashboard view
│   │   ├── ProjectCard.tsx      # Individual project cards
│   │   └── FullCatalog.tsx      # Complete catalog (673 items)
│   ├── data/
│   │   ├── projects.ts          # Project showcase data
│   │   ├── exploits.ts          # Curated exploits with details
│   │   ├── tools.ts             # Curated tools collection
│   │   ├── resources.ts         # Learning resources
│   │   └── indexed/
│   │       ├── complete-index.json  # All 673 indexed items
│   │       ├── exploits-index.json  # 475 exploits
│   │       ├── tools-index.json     # 142 tools
│   │       ├── proxies-index.json   # 36 proxies
│   │       ├── games-index.json     # 8 game categories
│   │       ├── resources-index.json # 12 resources
│   │       └── types.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
├── repos/                       # Git submodules
│   ├── ext-remover/             # 3kh0's ext-remover repo
│   ├── corellium/               # Burvyn's Corellium repo
│   └── chromebook-utilities/    # S-PScripts utilities
├── scripts/
│   └── index-exploits.js        # Repository indexer
├── index.html                   # HTML template
├── .gitmodules                  # Submodule configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── package.json                 # Project dependencies
```

## Complete Catalog (673 Items)

### 💻 Exploits & Tools (475 items)
Everything from the source repositories:
- **Webview Exploits** - App-based browser access
- **Extension Manipulation** - Remove/disable monitoring
- **ChromeOS Exploits** - System-level access methods
- **Bypass Scripts** - Filter circumvention tools
- **Bookmarklets** - JavaScript-based utilities
- **Network Tools** - DNS and proxy configurations
- Plus hundreds more...

### 🛠️ Tools Collection (142 items)
Scripts, utilities, and automation:
- Extension removers and managers
- Policy bypass tools
- System manipulation scripts
- Automation utilities
- Configuration files
- Helper scripts

### 🌐 Proxy Collection (36 items)
Web proxies and unblockers:
- Titanium Network proxies
- Ultraviolet implementations
- Rammerhead proxies
- Custom proxy configs
- Unblock hub links
- Mirror sites

### 🎮 Games & Entertainment (8 categories)
Game libraries and hubs:
- Sorted game collections (3kh0, Pizza Edition, etc.)
- Emulator links
- Console games
- App links (Minecraft, Roblox, etc.)
- Entertainment resources

### 📚 Learning Resources (12 items)
Tutorials and documentation:
- Setup guides
- Hosting tutorials
- IP address guides
- Technical documentation
- Community resources

## Customization

### Adding New Exploits

Edit `src/data/exploits.ts` to add exploits:

```typescript
{
  id: "unique-id",
  title: "Exploit Name",
  category: "Webview" | "ChromeOS" | "Bypass" | "VM" | "Extension" | "Network",
  description: "What the exploit does",
  difficulty: "Easy" | "Medium" | "Hard",
  status: "Working" | "Patched" | "Untested",
  author: "Your Name",
  dateAdded: "Oct 16, 2025",
  tags: ["tag1", "tag2"],
  requirements: ["Requirement 1", "Requirement 2"],
  instructions: "Step by step instructions",
  notes: "Important notes and warnings"
}
```

### Adding Tools

Edit `src/data/tools.ts`:

```typescript
{
  id: "tool-id",
  name: "Tool Name",
  description: "What it does",
  category: "Extension Manager" | "Proxy" | "Unblock" | "System" | "Network" | "Utility",
  url: "https://github.com/...",
  features: ["Feature 1", "Feature 2"],
  difficulty: "Easy" | "Medium" | "Hard",
  tags: ["tag1", "tag2"]
}
```

### Adding Resources

Edit `src/data/resources.ts`:

```typescript
{
  id: "resource-id",
  title: "Resource Title",
  description: "What it covers",
  type: "Guide" | "Tutorial" | "Documentation" | "Community" | "Repository",
  difficulty: "Beginner" | "Intermediate" | "Advanced",
  url: "https://...",
  topics: ["topic1", "topic2"],
  icon: "material_icon_name"
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
- `npm run update-repos` - Pull latest changes from all submodules
- `npm run index-exploits` - Re-index all repository files
- `npm run refresh-catalog` - Update repos + re-index (one command)

## Content Sources

This platform aggregates content from multiple trusted sources:
- [3kh0/ext-remover](https://github.com/3kh0/ext-remover) - Primary exploits and discussions
- [Burvyn/Corellium](https://github.com/Burvyn/Corellium) - Tools and utilities repository
- [S-PScripts/chromebook-utilities](https://github.com/S-PScripts/chromebook-utilities) - ChromeOS tools
- Titanium Network Discord - Community discoveries
- Various security researchers and contributors

## Disclaimer

⚠️ **All content is intended for educational and research purposes only. Use responsibly and comply with all applicable laws.**

## License

© 2025 rohandoesstuff. All rights reserved.

