import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  RefreshCw, 
  Settings as SettingsIcon, 
  HelpCircle, 
  User as UserIcon, 
  MessageSquare,
  Info,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, logout } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import FeaturesView from './components/FeaturesView';
import UpdatesView from './components/UpdatesView';
import SettingsView from './components/SettingsView';
import HelpView from './components/HelpView';
import AboutZoyaView from './components/AboutZoyaView';
import CreatorView from './components/CreatorView';
import LoginView from './components/LoginView';

export type TabType = 'dashboard' | 'features' | 'updates' | 'settings' | 'help' | 'about' | 'creator';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView onConnect={() => setActiveTab('creator')} />;
      case 'features': return <FeaturesView />;
      case 'updates': return <UpdatesView />;
      case 'settings': return <SettingsView />;
      case 'help': return <HelpView />;
      case 'about': return <AboutZoyaView />;
      case 'creator': return <CreatorView />;
      default: return <DashboardView onConnect={() => setActiveTab('creator')} />;
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <LoginView />;
  }

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden selection:bg-cyan-500/30">
      {/* Dynamic background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 relative z-10 overflow-auto">
        {/* Navigation Bar (matches image) */}
        <nav className="sticky top-0 z-20 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/5">
          <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Vivek Kumar
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {[
              { id: 'dashboard', label: 'Home' },
              { id: 'about', label: 'About Zoya' },
              { id: 'features', label: 'Services' },
              { id: 'creator', label: 'Creator' },
              { id: 'updates', label: 'Exclusive' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={`relative transition-colors hover:text-cyan-400 ${
                  activeTab === item.id ? 'text-cyan-400' : 'text-gray-400'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <img src={user.photoURL || ''} alt="avatar" className="w-6 h-6 rounded-full" />
              <span className="text-xs font-bold text-gray-300">{user.displayName?.split(' ')[0]}</span>
              <button 
                onClick={() => logout()}
                className="p-1 hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
            <button 
              onClick={() => setActiveTab('creator')}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
            >
              Lets Connect
            </button>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
