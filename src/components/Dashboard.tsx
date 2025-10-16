import ProjectCard from './ProjectCard'
import LiveExploits from './LiveExploits'
import { projects } from '../data/projects'

const Dashboard = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col gap-6 p-4 my-8 border-b border-gray-200/10 pb-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-5xl font-bold tracking-tighter">rohandoesstuff</h1>
          <p className="text-primary text-xl font-display">
            Premium Cheats, Exploits, Tools & Live Community Updates
          </p>
          <p className="text-gray-400 text-base font-body leading-relaxed max-w-3xl">
            Your central hub for cutting-edge exploits, gaming tools, ChromeOS utilities, and real-time community discoveries. 
            Designed for advanced users seeking the latest in educational security research and development tools.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-2">
          <a 
            href="https://github.com/Burvyn/Corellium" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all text-primary font-medium text-sm"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            Repository
          </a>
          <a 
            href="https://github.com/3kh0/ext-remover/discussions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-all text-red-400 font-medium text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Live Feed
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 p-4 my-6">
        <div className="flex flex-col gap-2">
          <p className="text-white text-3xl font-bold tracking-tighter">Repository Contents</p>
          <p className="text-gray-400 text-base font-body leading-normal">
            Explore our collection of tools, cheats, and resources
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 border border-primary/20 bg-primary/10 rounded-full text-xs text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          STATUS: OPERATIONAL
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 p-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            progress={project.progress}
            imageUrl={project.imageUrl}
            status={project.status}
            description={project.description}
          />
        ))}
      </div>

      {/* Live Exploits Section */}
      <LiveExploits />
    </>
  )
}

export default Dashboard

