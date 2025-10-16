import { useState, useMemo } from 'react';
import completeIndex from '../data/indexed/complete-index.json';
import type { CompleteIndex, IndexedItem } from '../data/indexed/types';

const index = completeIndex as CompleteIndex;

const FullCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'exploits' | 'tools' | 'proxies' | 'games' | 'resources'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allItems = useMemo(() => {
    return [
      ...index.exploits,
      ...index.tools,
      ...index.proxies,
      ...index.games,
      ...index.resources
    ];
  }, []);

  const filteredItems = useMemo(() => {
    let items = allItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      items = index[selectedCategory];
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower) ||
        item.filename.toLowerCase().includes(searchLower)
      );
    }

    return items;
  }, [selectedCategory, searchTerm, allItems]);

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'ext-remover':
        return 'bg-blue-500/20 text-blue-400';
      case 'corellium':
        return 'bg-purple-500/20 text-purple-400';
      case 'chromebook-utilities':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'script':
        return 'code';
      case 'page':
        return 'web';
      case 'link':
        return 'link';
      default:
        return 'description';
    }
  };

  const getItemUrl = (item: IndexedItem) => {
    const baseUrl = 'https://github.com';
    switch (item.source) {
      case 'ext-remover':
        return `${baseUrl}/3kh0/ext-remover/blob/main/${item.filename}`;
      case 'corellium':
        return `${baseUrl}/Burvyn/Corellium/blob/main/${item.category}/${item.filename}`;
      case 'chromebook-utilities':
        return `${baseUrl}/S-PScripts/chromebook-utilities/blob/main/${item.category}/${item.filename}`;
      default:
        return '#';
    }
  };

  return (
    <div className="mt-16 border-t border-gray-200/10 pt-12">
      {/* Header */}
      <div className="flex flex-col gap-4 p-4 mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-white text-3xl font-bold tracking-tighter">Complete Catalog</h2>
          <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-lg">
            <span className="text-primary text-lg font-bold">{index.stats.total}</span>
            <span className="text-primary text-sm ml-1">items</span>
          </div>
        </div>
        <p className="text-gray-400 text-base font-body leading-normal">
          Search and access all files from the source repositories
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              search
            </span>
            <input
              type="text"
              placeholder="Search exploits, tools, proxies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card-dark border border-gray-200/10 rounded-lg text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as any)}
            className="px-4 py-2 bg-card-dark border border-gray-200/10 rounded-lg text-white focus:border-primary/50 focus:outline-none"
          >
            <option value="all">All ({index.stats.total})</option>
            <option value="exploits">Exploits ({index.stats.exploits})</option>
            <option value="tools">Tools ({index.stats.tools})</option>
            <option value="proxies">Proxies ({index.stats.proxies})</option>
            <option value="games">Games ({index.stats.games})</option>
            <option value="resources">Resources ({index.stats.resources})</option>
          </select>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.map((item) => (
          <a
            key={item.id}
            href={getItemUrl(item)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-4 bg-card-dark/50 border border-gray-200/10 rounded-lg hover:border-primary/30 hover:bg-card-dark transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                {getTypeIcon(item.type)}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base leading-tight group-hover:text-primary transition-colors break-words">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 truncate">{item.filename}</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getSourceColor(item.source)}`}>
                {item.source}
              </span>
              <span className="px-2 py-1 rounded text-xs font-medium bg-gray-600/20 text-gray-300">
                {item.type}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200/10">
              <span className="font-body">{item.category}</span>
              <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* No results message */}
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          <span className="material-symbols-outlined text-gray-600 text-5xl">
            search_off
          </span>
          <p className="text-gray-400 text-lg">No items found</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Results count */}
      {filteredItems.length > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-8">
          <span className="material-symbols-outlined text-primary text-sm">filter_list</span>
          Showing {filteredItems.length} of {index.stats.total} items
        </div>
      )}
    </div>
  );
};

export default FullCatalog;

