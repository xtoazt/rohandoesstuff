import { resources } from '../data/resources';

const ResourcesSection = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Advanced':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide':
        return 'bg-blue-500/20 text-blue-400';
      case 'Tutorial':
        return 'bg-purple-500/20 text-purple-400';
      case 'Documentation':
        return 'bg-cyan-500/20 text-cyan-400';
      case 'Community':
        return 'bg-pink-500/20 text-pink-400';
      case 'Repository':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="mt-16 border-t border-gray-200/10 pt-12">
      <div className="flex flex-col gap-4 p-4 mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-white text-3xl font-bold tracking-tighter">Learning Resources</h2>
          <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-bold">{resources.length} resources</span>
          </div>
        </div>
        <p className="text-gray-400 text-base font-body leading-normal">
          Tutorials, guides, and community resources to master ChromeOS exploitation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {resources.map(resource => (
          <div
            key={resource.id}
            className="group flex gap-4 p-4 bg-card-dark/50 border border-gray-200/10 rounded-lg hover:border-purple-500/30 hover:bg-card-dark transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-400">
                  {resource.icon}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-bold text-base leading-tight group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border flex-shrink-0 ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
              </div>

              <p className="text-gray-400 text-sm font-body leading-relaxed">
                {resource.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
                {resource.topics.slice(0, 3).map((topic, index) => (
                  <span 
                    key={index}
                    className="px-1.5 py-0.5 bg-gray-700/30 text-gray-500 text-[9px] rounded font-body"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors mt-1"
                >
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Access Resource
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links Footer */}
      <div className="mt-8 p-6 bg-card-dark/30 border border-gray-200/10 rounded-lg">
        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://discord.gg/unblock"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all"
          >
            <span className="material-symbols-outlined text-purple-400">groups</span>
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">Join Discord</span>
              <span className="text-gray-400 text-xs">Titanium Network</span>
            </div>
          </a>
          <a
            href="https://github.com/3kh0/ext-remover"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-all"
          >
            <span className="material-symbols-outlined text-blue-400">code</span>
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">ext-remover</span>
              <span className="text-gray-400 text-xs">GitHub Repository</span>
            </div>
          </a>
          <a
            href="https://github.com/3kh0/ext-remover/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-primary">forum</span>
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">Discussions</span>
              <span className="text-gray-400 text-xs">Community Forum</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;

