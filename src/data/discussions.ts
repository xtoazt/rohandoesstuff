export interface Discussion {
  id: string;
  title: string;
  category: 'Exploits' | 'Webview';
  author: string;
  date: string;
  replies: number;
  votes: number;
  url: string;
  emoji: string;
}

// This data structure can be updated with live data from the GitHub API
// For now, it contains recent discussions from 3kh0/ext-remover filtered for exploits
// Automatically filters out Help, General, Fixes, Polls, and Announcements categories
// Only shows: Exploits (💻) and Webview (🌐) categories
export const discussions: Discussion[] = [
  {
    id: "1",
    title: "New WebView Found",
    category: "Exploits",
    author: "2pro12342",
    date: "Oct 9, 2025",
    replies: 1,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "💻"
  },
  {
    id: "2",
    title: "Minecraft Edu WebView Exploit",
    category: "Exploits",
    author: "2pro12342",
    date: "Oct 6, 2025",
    replies: 4,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "💻"
  },
  {
    id: "3",
    title: "horrible youcut webview",
    category: "Webview",
    author: "jazzymakesstuff",
    date: "Oct 6, 2025",
    replies: 0,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "🌐"
  },
  {
    id: "4",
    title: "filmora webview",
    category: "Webview",
    author: "jazzymakesstuff",
    date: "Sep 26, 2025",
    replies: 1,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "🌐"
  },
  {
    id: "5",
    title: "Dockur/windows is an actual vm in the web",
    category: "Exploits",
    author: "sdsdsdsrj4rjj",
    date: "Sep 25, 2025",
    replies: 7,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "💻"
  },
  {
    id: "6",
    title: "Light speed bypass",
    category: "Exploits",
    author: "leondabom",
    date: "Sep 18, 2025",
    replies: 20,
    votes: 1,
    url: "https://github.com/3kh0/ext-remover/discussions",
    emoji: "💻"
  }
];

