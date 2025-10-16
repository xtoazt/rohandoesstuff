export interface IndexedItem {
  id: string;
  title: string;
  filename: string;
  path: string;
  category: string;
  source: 'ext-remover' | 'corellium' | 'chromebook-utilities';
  type: 'link' | 'page' | 'script' | 'file';
  dateIndexed: string;
}

export interface CompleteIndex {
  exploits: IndexedItem[];
  tools: IndexedItem[];
  proxies: IndexedItem[];
  games: IndexedItem[];
  resources: IndexedItem[];
  stats: {
    total: number;
    exploits: number;
    tools: number;
    proxies: number;
    games: number;
    resources: number;
    lastIndexed: string;
  };
}

