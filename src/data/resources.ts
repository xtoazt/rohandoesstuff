export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Guide' | 'Tutorial' | 'Documentation' | 'Community' | 'Repository';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  url?: string;
  topics: string[];
  icon: string;
}

export const resources: Resource[] = [
  {
    id: "getting-started",
    title: "Getting Started with ChromeOS Exploitation",
    description: "Complete beginner's guide to understanding ChromeOS security and basic bypass methods",
    type: "Guide",
    difficulty: "Beginner",
    topics: ["chromeos", "basics", "security", "introduction"],
    icon: "school"
  },
  {
    id: "extension-removal",
    title: "Extension Removal Tutorial",
    description: "Step-by-step guide to removing force-installed extensions using various methods",
    type: "Tutorial",
    difficulty: "Beginner",
    topics: ["extensions", "removal", "bypass", "step-by-step"],
    icon: "delete"
  },
  {
    id: "webview-hunting",
    title: "Finding WebView Exploits",
    description: "Learn how to discover and exploit webviews in Android apps and Chrome extensions",
    type: "Guide",
    difficulty: "Intermediate",
    topics: ["webview", "discovery", "android", "exploitation"],
    icon: "search"
  },
  {
    id: "proxy-setup",
    title: "Setting Up Web Proxies",
    description: "Configure and deploy web proxies for bypassing network restrictions",
    type: "Tutorial",
    difficulty: "Beginner",
    topics: ["proxy", "network", "setup", "deployment"],
    icon: "dns"
  },
  {
    id: "titanium-network",
    title: "Titanium Network Discord",
    description: "Active community for sharing exploits, tools, and getting help with ChromeOS restrictions",
    type: "Community",
    difficulty: "Beginner",
    url: "https://discord.gg/unblock",
    topics: ["community", "discord", "support", "collaboration"],
    icon: "groups"
  },
  {
    id: "policy-exploits",
    title: "Chrome Policy Exploitation",
    description: "Advanced techniques for bypassing and modifying Chrome enterprise policies",
    type: "Guide",
    difficulty: "Advanced",
    topics: ["policy", "enterprise", "advanced", "bypass"],
    icon: "shield"
  },
  {
    id: "unenrollment-guide",
    title: "Chromebook Unenrollment Methods",
    description: "Comprehensive guide to unenrolling Chromebooks using various hardware and software methods",
    type: "Tutorial",
    difficulty: "Advanced",
    topics: ["unenroll", "hardware", "firmware", "advanced"],
    icon: "device_reset"
  },
  {
    id: "ext-remover-docs",
    title: "ext-remover Documentation",
    description: "Official documentation for the ext-remover tool and all its features",
    type: "Documentation",
    difficulty: "Intermediate",
    url: "https://github.com/3kh0/ext-remover",
    topics: ["ext-remover", "documentation", "tools", "reference"],
    icon: "description"
  },
  {
    id: "bookmarklet-creation",
    title: "Creating Custom Bookmarklets",
    description: "Learn JavaScript basics and create your own bookmarklets for exploitation",
    type: "Tutorial",
    difficulty: "Intermediate",
    topics: ["bookmarklets", "javascript", "coding", "custom"],
    icon: "code"
  },
  {
    id: "filter-analysis",
    title: "Web Filter Analysis",
    description: "Understanding how different web filters work and finding weaknesses",
    type: "Guide",
    difficulty: "Advanced",
    topics: ["filters", "analysis", "security", "research"],
    icon: "analytics"
  },
  {
    id: "ltbeef-usage",
    title: "LTBEEF Exploitation Framework",
    description: "Using LTBEEF for XSS-based exploitation and payload delivery",
    type: "Tutorial",
    difficulty: "Advanced",
    topics: ["ltbeef", "xss", "exploitation", "payloads"],
    icon: "bug_report"
  },
  {
    id: "chromebook-utilities",
    title: "Chromebook Utilities Repository",
    description: "Collection of scripts and tools for ChromeOS exploitation",
    type: "Repository",
    difficulty: "Intermediate",
    url: "https://github.com/S-PScripts/chromebook-utilities",
    topics: ["tools", "scripts", "collection", "chromeos"],
    icon: "folder"
  },
  {
    id: "stealth-techniques",
    title: "Staying Undetected",
    description: "Best practices for using exploits without triggering monitoring software",
    type: "Guide",
    difficulty: "Advanced",
    topics: ["stealth", "opsec", "security", "best-practices"],
    icon: "visibility_off"
  },
  {
    id: "downgrade-tutorial",
    title: "ChromeOS Version Downgrade",
    description: "Downgrade to older ChromeOS versions for better exploit compatibility",
    type: "Tutorial",
    difficulty: "Advanced",
    topics: ["downgrade", "chromeos", "version", "recovery"],
    icon: "update"
  },
  {
    id: "suzyqable-guide",
    title: "SuzyQable Hardware Debugging",
    description: "Using SuzyQable debug cable for firmware-level access",
    type: "Guide",
    difficulty: "Advanced",
    topics: ["suzyqable", "hardware", "firmware", "debug"],
    icon: "cable"
  },
  {
    id: "corellium-repo",
    title: "Corellium Repository",
    description: "Premium collection of cheats, tools, and exploits",
    type: "Repository",
    difficulty: "Intermediate",
    url: "https://github.com/Burvyn/Corellium",
    topics: ["repository", "tools", "exploits", "collection"],
    icon: "inventory_2"
  }
];

export const resourcesByType = {
  'Guide': resources.filter(r => r.type === 'Guide'),
  'Tutorial': resources.filter(r => r.type === 'Tutorial'),
  'Documentation': resources.filter(r => r.type === 'Documentation'),
  'Community': resources.filter(r => r.type === 'Community'),
  'Repository': resources.filter(r => r.type === 'Repository')
};

export const beginnerResources = resources.filter(r => r.difficulty === 'Beginner');

