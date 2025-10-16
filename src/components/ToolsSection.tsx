import { tools } from '../data/tools';

const ToolsSection = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/10';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/10';
      case 'Hard':
        return 'text-red-400 bg-red-500/10';
      default:
        return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="mt-16 border-t border-gray-200/10 pt-12">
      <div className="flex flex-col gap-4 p-4 mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-white text-3xl font-bold tracking-tighter">Essential Tools</h2>
          <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-bold">{tools.length} tools</span>
          </div>
        </div>
        <p className="text-gray-400 text-base font-body leading-normal">
          Curated collection of the most effective tools for ChromeOS exploitation and restriction bypass
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {tools.map(tool => (
          <div
            key={tool.id}
            className="group flex flex-col gap-3 p-4 bg-card-dark/50 border border-gray-200/10 rounded-lg hover:border-blue-500/30 hover:bg-card-dark transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white font-bold text-base leading-tight group-hover:text-blue-400 transition-colors flex-1">
                {tool.name}
              </h3>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getDifficultyColor(tool.difficulty)}`}>
                {tool.difficulty}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm font-body leading-relaxed">
              {tool.description}
            </p>

            {/* Category */}
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/30 w-fit">
              {tool.category}
            </span>

            {/* Features */}
            <div className="flex flex-col gap-1.5">
              {tool.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></span>
                  <span className="text-xs text-gray-400 font-body">{feature}</span>
                </div>
              ))}
              {tool.features.length > 3 && (
                <span className="text-xs text-gray-500 font-body ml-3">
                  +{tool.features.length - 3} more features
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-2">
              {tool.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="px-1.5 py-0.5 bg-gray-700/30 text-gray-500 text-[9px] rounded font-body"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {tool.url && (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-all"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                View Tool
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;

