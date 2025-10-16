export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Extension Manager' | 'Proxy' | 'Unblock' | 'System' | 'Network' | 'Utility';
  url?: string;
  features: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export const tools: Tool[] = [
  {
    id: "ext-remover",
    name: "ext-remover",
    description: "Primary tool for removing and managing Chrome extensions on managed Chromebooks",
    category: "Extension Manager",
    url: "https://github.com/3kh0/ext-remover",
    features: [
      "Remove force-installed extensions",
      "Disable monitoring software",
      "Policy bypass capabilities",
      "Works on most ChromeOS versions"
    ],
    difficulty: "Medium",
    tags: ["chromeos", "extensions", "bypass", "essential"]
  },
  {
    id: "ltbeef",
    name: "LTBEEF",
    description: "Framework for exploiting XSS vulnerabilities to execute code on restricted systems",
    category: "Utility",
    url: "https://github.com/3kh0/ltbeef",
    features: [
      "XSS exploitation framework",
      "Custom payload injection",
      "Browser-based execution",
      "Bypass content restrictions"
    ],
    difficulty: "Hard",
    tags: ["xss", "exploitation", "javascript", "advanced"]
  },
  {
    id: "titanium-network",
    name: "Titanium Network Proxies",
    description: "Collection of web proxies and unblockers maintained by the community",
    category: "Proxy",
    features: [
      "Multiple proxy implementations",
      "Regularly updated mirrors",
      "Discord community support",
      "Various unblock methods"
    ],
    difficulty: "Easy",
    tags: ["proxy", "unblock", "community", "web"]
  },
  {
    id: "sh1mmer",
    name: "Sh1mmer",
    description: "ChromeOS unenrollment exploit using RMA shim",
    category: "System",
    features: [
      "Complete device unenrollment",
      "Works on most Chromebooks",
      "Requires USB drive",
      "Factory reset alternative"
    ],
    difficulty: "Hard",
    tags: ["unenroll", "rma", "chromeos", "hardware"]
  },
  {
    id: "suzyqable",
    name: "SuzyQable Debug Cable",
    description: "Hardware debugging tool for ChromeOS firmware access",
    category: "System",
    features: [
      "Firmware-level access",
      "Disable write protection",
      "Hardware debugging",
      "Professional tool"
    ],
    difficulty: "Hard",
    tags: ["hardware", "firmware", "debug", "professional"]
  },
  {
    id: "chromebook-utilities",
    name: "Chromebook Utilities",
    description: "Collection of tools and scripts for ChromeOS exploitation",
    category: "Utility",
    url: "https://github.com/S-PScripts/chromebook-utilities",
    features: [
      "Multiple exploit methods",
      "Tool collection",
      "Regular updates",
      "Community driven"
    ],
    difficulty: "Medium",
    tags: ["chromeos", "tools", "collection", "utilities"]
  },
  {
    id: "crankshaft",
    name: "Crankshaft",
    description: "Point-and-shoot web proxy for quick unblocking",
    category: "Proxy",
    features: [
      "Simple interface",
      "Fast deployment",
      "No configuration needed",
      "Multiple hosting options"
    ],
    difficulty: "Easy",
    tags: ["proxy", "simple", "web", "unblock"]
  },
  {
    id: "ultraviolet",
    name: "Ultraviolet",
    description: "Sophisticated web proxy with advanced features",
    category: "Proxy",
    features: [
      "Advanced filtering bypass",
      "Multiple protocols",
      "Service worker based",
      "High compatibility"
    ],
    difficulty: "Medium",
    tags: ["proxy", "advanced", "service-worker", "web"]
  },
  {
    id: "pollen",
    name: "Pollen",
    description: "Bookmarklet collection for various exploits and utilities",
    category: "Utility",
    features: [
      "JavaScript-based tools",
      "No installation needed",
      "Works in any browser",
      "Extensive collection"
    ],
    difficulty: "Easy",
    tags: ["bookmarklets", "javascript", "browser", "easy"]
  },
  {
    id: "caub",
    name: "CAUB (Chromebook Auto-Unblocker)",
    description: "Automated tool for bypassing common restrictions",
    category: "Unblock",
    features: [
      "Automated bypass",
      "Multiple methods",
      "Regular updates",
      "Easy to use"
    ],
    difficulty: "Easy",
    tags: ["automation", "bypass", "chromeos", "simple"]
  },
  {
    id: "point-blank",
    name: "Point Blank",
    description: "Extension and policy management tool",
    category: "Extension Manager",
    features: [
      "Extension control",
      "Policy modification",
      "Stealth mode",
      "Advanced features"
    ],
    difficulty: "Hard",
    tags: ["extensions", "policy", "advanced", "stealth"]
  },
  {
    id: "doh-proxy",
    name: "DNS-over-HTTPS Tools",
    description: "Bypass filtering using encrypted DNS requests",
    category: "Network",
    features: [
      "Encrypted DNS",
      "Filter bypass",
      "Network level",
      "Multiple providers"
    ],
    difficulty: "Medium",
    tags: ["dns", "encryption", "network", "privacy"]
  }
];

export const toolsByCategory = {
  'Extension Manager': tools.filter(t => t.category === 'Extension Manager'),
  'Proxy': tools.filter(t => t.category === 'Proxy'),
  'Unblock': tools.filter(t => t.category === 'Unblock'),
  'System': tools.filter(t => t.category === 'System'),
  'Network': tools.filter(t => t.category === 'Network'),
  'Utility': tools.filter(t => t.category === 'Utility')
};

export const easyTools = tools.filter(t => t.difficulty === 'Easy');

