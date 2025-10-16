import { useState, useMemo } from 'react';
import completeIndex from '../data/indexed/complete-index.json';
import type { CompleteIndex } from '../data/indexed/types';

const index = completeIndex as CompleteIndex;

const FullCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'exploits' | 'tools' | 'proxies' | 'games' | 'resources'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState<'all' | 'ext-remover' | 'corellium' | 'chromebook-utilities'>('all');

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

    // Filter by source
    if (selectedSource !== 'all') {
      items = items.filter(item => item.source === selectedSource);
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
  }, [selectedCategory, selectedSource, searchTerm, allItems]);

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'ext-remover':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'corellium':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'chromebook-utilities':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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

  const getCategoryBadgeColor = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('exploit') || cat.includes('tool')) return 'bg-red-500/20 text-red-400';
    if (cat.includes('prx') || cat.includes('proxy')) return 'bg-cyan-500/20 text-cyan-400';
    if (cat.includes('game') || cat.includes('gxme')) return 'bg-pink-500/20 text-pink-400';
    if (cat.includes('cheat')) return 'bg-orange-500/20 text-orange-400';
    if (cat.includes('tutorial') || cat.includes('guide')) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="mt-16 border-t border-gray-200/10 pt-12">
      {/* Header with Stats */}
      <div className="flex flex-col gap-6 p-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-4xl font-bold tracking-tighter">Complete Catalog</h2>
          <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
            <span className="text-primary text-2xl font-bold">{index.stats.total}</span>
            <span className="text-primary text-sm ml-2">items</span>
          </div>
        </div>
        <p className="text-gray-400 text-base font-body leading-normal">
          Every file from all repositories indexed and searchable in one place
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-red-400">{index.stats.exploits}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Exploits & Tools</span>
            </div>
          </div>
          <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-blue-400">{index.stats.tools}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Tools</span>
            </div>
          </div>
          <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-cyan-400">{index.stats.proxies}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Proxies</span>
            </div>
          </div>
          <div className="p-3 bg-pink-500/5 border border-pink-500/20 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-pink-400">{index.stats.games}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Games</span>
            </div>
          </div>
          <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-purple-400">{index.stats.resources}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Resources</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Box */}
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              search
            </span>
            <input
              type="text"
              placeholder="Search across all 673 items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card-dark border border-gray-200/10 rounded-lg text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as any)}
            className="px-4 py-2 bg-card-dark border border-gray-200/10 rounded-lg text-white focus:border-primary/50 focus:outline-none"
          >
            <option value="all">All Categories ({index.stats.total})</option>
            <option value="exploits">Exploits ({index.stats.exploits})</option>
            <option value="tools">Tools ({index.stats.tools})</option>
            <option value="proxies">Proxies ({index.stats.proxies})</option>
            <option value="games">Games ({index.stats.games})</option>
            <option value="resources">Resources ({index.stats.resources})</option>
          </select>

          {/* Source Filter */}
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value as any)}
            className="px-4 py-2 bg-card-dark border border-gray-200/10 rounded-lg text-white focus:border-primary/50 focus:outline-none"
          >
            <option value="all">All Sources</option>
            <option value="ext-remover">ext-remover</option>
            <option value="corellium">Corellium</option>
            <option value="chromebook-utilities">chromebook-utilities</option>
          </select>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="material-symbols-outlined text-primary text-sm">filter_list</span>
          Showing {filteredItems.length} of {index.stats.total} items
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col gap-2 p-3 bg-card-dark/50 border border-gray-200/10 rounded-lg hover:border-primary/30 hover:bg-card-dark transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">
                {getTypeIcon(item.type)}
              </span>
              <h3 className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors flex-1 min-w-0 break-words">
                {item.title}
              </h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5">
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${getSourceColor(item.source)}`}>
                {item.source}
              </span>
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${getCategoryBadgeColor(item.category)}`}>
                {item.category}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-1 border-t border-gray-200/10">
              <span className="font-body truncate">{item.filename}</span>
              <span className="text-[10px]">{item.type}</span>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 py-16">
          <span className="material-symbols-outlined text-gray-600 text-6xl">
            search_off
          </span>
          <p className="text-gray-400 text-lg">No items found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedSource('all');
            }}
            className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FullCatalog;

