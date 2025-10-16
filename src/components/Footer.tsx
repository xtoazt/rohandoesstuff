interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`flex flex-col gap-6 px-5 py-10 mt-16 text-center border-t border-solid border-gray-200/10 dark:border-t-[#233648]/50 ${className}`}>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://github.com/Burvyn/Corellium" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <span className="material-symbols-outlined text-gray-500 hover:text-primary transition-colors">
              code
            </span>
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-gray-500 hover:text-primary transition-colors">
              school
            </span>
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-gray-500 hover:text-primary transition-colors">
              bug_report
            </span>
          </a>
        </div>
        
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">⚠️ Disclaimer</p>
          <p className="text-gray-400 text-xs font-body leading-relaxed">
            All content is intended for educational and research purposes only. 
            Use responsibly and comply with all applicable laws.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-body text-sm font-normal leading-normal">
          © 2025 rohandoesstuff. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

