interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/10 dark:border-b-[#233648]/50 px-4 sm:px-10 py-4 ${className}`}>
      <div className="flex items-center gap-3 text-white">
        <span className="material-symbols-outlined text-primary">
          terminal
        </span>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          rohandoesstuff
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden sm:flex items-center gap-9">
          <a 
            className="text-gray-400 hover:text-primary text-sm font-medium leading-normal transition-colors" 
            href="#"
          >
            Home
          </a>
          <a 
            className="text-gray-400 hover:text-primary text-sm font-medium leading-normal transition-colors" 
            href="https://github.com/3kh0/ext-remover/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </a>
          <a 
            className="text-gray-400 hover:text-primary text-sm font-medium leading-normal transition-colors" 
            href="https://discord.gg/unblock"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

