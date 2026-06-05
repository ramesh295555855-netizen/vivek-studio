import { 
  LayoutDashboard, 
  Sparkles, 
  RefreshCw, 
  User, 
  MessageSquare,
  Info,
  DollarSign,
  Zap,
  Briefcase,
  X
} from 'lucide-react';
import { TabType } from '../App';
import studioLogo from '../assets/images/studio_logo_1780654565249.png';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, isMobile = false, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: LayoutDashboard, label: 'Home' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'dashboard', icon: Zap, label: 'Portal' },
    { id: 'brain', icon: MessageSquare, label: 'Neuro AI' },
    { id: 'tools', icon: Sparkles, label: 'Tools' },
    { id: 'features', icon: RefreshCw, label: 'Features' },
    { id: 'creator', icon: User, label: 'Creator' },
  ];

  const bottomItems = [
    { id: 'contact', icon: MessageSquare, label: 'Contact' },
  ];

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <aside 
      className={`flex flex-col h-full bg-black/90 backdrop-blur-2xl border-r border-white/5 z-50 transition-all duration-300 ${
        isMobile ? 'w-72' : 'w-20 md:w-64 hidden md:flex'
      }`}
    >
      <div className="p-6 flex items-center justify-between border-b border-white/5 pb-6">
        <div 
          onClick={() => handleTabClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <img 
            src={studioLogo} 
            alt="Maa Santoshi Studio" 
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-2xl object-cover border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/15 group-hover:rotate-6 transition-transform"
          />
          <div className={isMobile ? 'block' : 'hidden md:block'}>
            <h1 className="text-xs font-black tracking-widest text-white leading-tight uppercase font-display italic">Maa Santoshi</h1>
            <p className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest leading-none">Studio</p>
          </div>
        </div>

        {isMobile && onClose && (
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:text-cyan-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-3 mt-8 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id as TabType)}
            className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative border ${
              activeTab === item.id 
                ? 'bg-white/10 text-white border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-cyan-400 border-transparent outline-none'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-all duration-300 ${activeTab === item.id ? 'text-cyan-400 scale-110' : 'group-hover:scale-110'}`} />
            <span className={`${isMobile ? 'block' : 'hidden md:block'} text-xs font-black uppercase tracking-widest`}>{item.label}</span>
            {activeTab === item.id && (
              <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            )}
          </button>
        ))}
      </nav>

      <div className="px-4 pb-8 space-y-3">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id as TabType)}
            className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative border ${
              activeTab === item.id 
                ? 'bg-white/10 text-white border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-cyan-400 border-transparent outline-none'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-all duration-300 ${activeTab === item.id ? 'text-cyan-400 scale-110' : 'group-hover:scale-110'}`} />
            <span className={`${isMobile ? 'block' : 'hidden md:block'} text-xs font-black uppercase tracking-widest`}>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
