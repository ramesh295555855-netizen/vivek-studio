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
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

import AIDashboardView from './components/AIDashboardView';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ToolsView from './components/ToolsView';
import BrainView from './components/BrainView';

export type TabType = 'home' | 'features' | 'dashboard' | 'brain' | 'tools' | 'contact' | 'creator' | 'updates';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
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
      case 'home': return <DashboardView onConnect={() => setActiveTab('dashboard')} />;
      case 'features': return <FeaturesView />;
      case 'dashboard': return <AIDashboardView />;
      case 'brain': return <BrainView />;
      case 'tools': return <ToolsView />;
      case 'contact': return (
        <div className="bg-black min-h-screen">
          <ContactSection />
          <Footer />
        </div>
      );
      case 'creator': return <CreatorView />;
      case 'updates': return <UpdatesView />;
      default: return <DashboardView onConnect={() => setActiveTab('dashboard')} />;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <LoginView />;
  }

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden selection:bg-cyan-500/30">
      <CustomCursor />
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
              { id: 'home', label: 'Home' },
              { id: 'features', label: 'Features' },
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'brain', label: 'Zoya AI' },
              { id: 'tools', label: 'Tools' },
              { id: 'contact', label: 'Contact' },
              { id: 'creator', label: 'Creator' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={`relative transition-colors hover:text-cyan-400 font-bold uppercase tracking-widest text-[10px] ${
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
