export interface Project {
  title: string;
  progress: number;
  imageUrl: string;
  status?: 'In Dev' | 'On Hold' | null;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Advanced Cheats",
    progress: 90,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    status: null,
    description: "Collection of advanced cheats and exploits for experienced users"
  },
  {
    title: "Game Library",
    progress: 85,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    status: 'In Dev',
    description: "Extensive collection of games and game mods"
  },
  {
    title: "Exploits and Tools",
    progress: 95,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    status: null,
    description: "Exploits, cheat tools, and utilities for enhancing functionality"
  },
  {
    title: "Hubs",
    progress: 100,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    status: null,
    description: "Multi-functional hubs for tool integration"
  },
  {
    title: "OS Modifications",
    progress: 75,
    imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop",
    status: 'In Dev',
    description: "Operating system-related tools and scripts"
  },
  {
    title: "Prxes Collection",
    progress: 80,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
    status: null,
    description: "Collection of proxies and network-related utilities"
  },
  {
    title: "Tutorials",
    progress: 60,
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    status: 'In Dev',
    description: "Comprehensive guides for using tools and exploits"
  },
  {
    title: "Entertainment",
    progress: 70,
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop",
    status: null,
    description: "Miscellaneous entertainment content and media"
  },
  {
    title: "Bookmarklets",
    progress: 55,
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop",
    status: 'On Hold',
    description: "Browser-based utilities and quick tools"
  }
];

