import { 
  LayoutDashboard, 
  Sparkles, 
  RefreshCw, 
  User, 
  MessageSquare,
  Info,
  DollarSign,
  Zap
} from 'lucide-react';
import { TabType } from '../App';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: LayoutDashboard, label: 'Home' },
    { id: 'dashboard', icon: Zap, label: 'Portal' },
    { id: 'brain', icon: MessageSquare, label: 'Neuro AI' },
    { id: 'tools', icon: Sparkles, label: 'Tools' },
    { id: 'features', icon: RefreshCw, label: 'Features' },
    { id: 'creator', icon: User, label: 'Creator' },
  ];

  const bottomItems = [
    { id: 'contact', icon: MessageSquare, label: 'Contact' },
  ];

  return (
    <aside className="w-20 md:w-64 flex flex-col h-full bg-black/60 backdrop-blur-2xl border-r border-white/5 z-30 transition-all duration-300">
      <div className="p-6 flex justify-center md:justify-start">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group cursor-pointer hover:rotate-6 transition-transform">
          <MessageSquare className="w-7 h-7 text-white" />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-3 mt-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as TabType)}
            className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative border ${
              activeTab === item.id 
                ? 'bg-white/10 text-white border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-cyan-400 border-transparent outline-none'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-all duration-300 ${activeTab === item.id ? 'text-cyan-400 scale-110' : 'group-hover:scale-110'}`} />
            <span className="hidden md:block text-xs font-black uppercase tracking-widest">{item.label}</span>
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
            onClick={() => setActiveTab(item.id as TabType)}
            className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative border ${
              activeTab === item.id 
                ? 'bg-white/10 text-white border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-cyan-400 border-transparent outline-none'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-all duration-300 ${activeTab === item.id ? 'text-cyan-400 scale-110' : 'group-hover:scale-110'}`} />
            <span className="hidden md:block text-xs font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
