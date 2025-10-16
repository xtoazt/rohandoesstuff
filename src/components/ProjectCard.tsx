interface ProjectCardProps {
  title: string;
  progress: number;
  imageUrl: string;
  status?: 'In Dev' | 'On Hold' | null;
  description: string;
}

const ProjectCard = ({ title, progress, imageUrl, status = null, description }: ProjectCardProps) => {
  const getStatusColors = (status: string) => {
    switch (status) {
      case 'In Dev':
        return 'bg-primary/20 text-primary';
      case 'On Hold':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return '';
    }
  };

  return (
    <div className="group flex flex-col gap-4 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
      <div 
        className="relative bg-cover bg-center aspect-video overflow-hidden rounded-md"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        {status && (
          <div className={`absolute top-2 right-2 ${getStatusColors(status)} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
            {status}
          </div>
        )}
      </div>
      <div className="flex flex-col px-1">
        <p className="text-white text-lg font-bold leading-tight">{title}</p>
        <p className="text-gray-400 text-sm mt-1 font-body leading-snug">{description}</p>
        <div className="w-full bg-gray-700/50 rounded-full h-1.5 mt-2">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

