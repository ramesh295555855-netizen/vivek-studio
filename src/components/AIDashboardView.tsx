import { motion } from 'motion/react';
import { BarChart3, Users, Layers, Activity, MessageSquare, Search, Bell, Plus, MoreVertical, ArrowUpRight, ArrowDownRight, TrendingUp, Cpu, Zap, Globe, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { streamAIChatResponse } from '../services/gemini';

export default function AIDashboardView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hello Vivek! All neural systems are nominal. How can I assist with your project today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  const handleChatSend = async () => {
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      let assistantResponse = '';
      setChatMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      const stream = streamAIChatResponse(userMsg);
      for await (const chunk of stream) {
        assistantResponse += chunk;
        setChatMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = assistantResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const stats = [
    { label: 'Neural Queries', value: '45.2k', change: '+12.5%', trend: 'up', icon: Cpu, color: 'text-cyan-400' },
    { label: 'Active Agents', value: '1,284', change: '+5.2%', trend: 'up', icon: Zap, color: 'text-yellow-400' },
    { label: 'System Load', value: '24%', change: '-2.1%', trend: 'down', icon: Activity, color: 'text-purple-400' },
    { label: 'Global Reach', value: '84', change: '+3', trend: 'up', icon: Globe, color: 'text-green-400' },
  ];

  const recentProjects = [
    { name: 'Quantum UI Kit', status: 'In Progress', progress: 65, category: 'Design', date: '2h ago' },
    { name: 'Neural Chat Bot', status: 'Completed', progress: 100, category: 'AI', date: '5h ago' },
    { name: 'Core Tech Portal', status: 'Review', progress: 85, category: 'Web', date: '1d ago' },
    { name: 'Agentic Workflow', status: 'In Progress', progress: 30, category: 'Automation', date: '2d ago' },
  ];

  return (
    <div className="p-8 space-y-8 bg-black min-h-screen">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight leading-none uppercase italic">AI Command Center</h2>
          <p className="text-gray-500 text-sm font-bold mt-2 uppercase tracking-widest">Real-time neural network performance & project oversight</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search neural data..." 
              className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-3 text-sm font-bold text-white focus:outline-none focus:border-cyan-400/50 w-full md:w-64 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
            <Plus className="w-4 h-4" />
            <span>Deploy Agent</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center space-x-1 text-[10px] font-black uppercase tracking-widest ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                <span>{stat.change}</span>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-black text-white tracking-tight">{stat.value}</h3>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analytics Chart Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-black text-white tracking-tight uppercase italic">Growth Metrics</h3>
              </div>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                {['Day', 'Week', 'Month'].map((t) => (
                  <button key={t} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${t === 'Week' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mock Chart Area */}
            <div className="h-64 flex items-end justify-between gap-2 relative z-10">
              {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 45, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className={`flex-1 rounded-t-lg bg-gradient-to-t ${i === 7 ? 'from-cyan-500 to-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'from-white/10 to-white/20 hover:from-cyan-500/50 hover:to-cyan-400/50'}`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Project List */}
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-white tracking-tight uppercase italic">Active Projects</h3>
              <button className="text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black text-cyan-400 shadow-inner">
                      {project.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white tracking-tight">{project.name}</h4>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{project.category} • {project.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="hidden md:block w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        className="h-full bg-cyan-400"
                      />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      project.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 
                      project.status === 'In Progress' ? 'bg-cyan-500/10 text-cyan-400' :
                      'bg-purple-500/10 text-purple-400'
                    }`}>
                      {project.status}
                    </div>
                    <button className="text-gray-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Panel - AI Chat & Activity */}
        <div className="space-y-8">
          {/* AI Quick Chat Panel */}
          <div className="p-8 rounded-[40px] bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-white/10 flex flex-col h-[500px]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">ZOYA AI CORE</h3>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>

            <div ref={chatScrollRef} className="flex-1 overflow-auto space-y-4 pr-2 custom-scrollbar mb-6">
              {chatMessages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`rounded-2xl p-4 text-xs font-bold leading-relaxed max-w-[85%] ${
                    msg.role === 'assistant' 
                    ? 'bg-white/5 text-gray-300' 
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 ml-auto text-right'
                  }`}
                >
                  {msg.content || (isTyping && i === chatMessages.length - 1 && <span className="animate-pulse">Typing...</span>)}
                </div>
              ))}
            </div>

            <div className="relative">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                placeholder="Ask Zoya anything..." 
                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-xs font-bold text-white focus:outline-none focus:border-cyan-400/50"
              />
              <button 
                onClick={handleChatSend}
                disabled={isTyping || !chatInput.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300 disabled:bg-gray-700"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="p-8 rounded-[40px] bg-white/5 border border-white/5 overflow-hidden">
             <div className="flex items-center space-x-3 mb-8">
              <Activity className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-black text-white tracking-tight uppercase italic">Activity</h3>
            </div>
            <div className="space-y-6">
              {[
                { user: 'V. Kumar', action: 'Deployed Agent X-1', time: '12m ago', icon: Zap, color: 'text-cyan-400' },
                { user: 'System', action: 'Auto-scaled Main Cluster', time: '45m ago', icon: Cpu, color: 'text-purple-400' },
                { user: 'Admin', action: 'Security Protocol Updated', time: '2h ago', icon: ShieldCheck, color: 'text-green-400' },
                { user: 'V. Kumar', action: 'New Project: Neural CMS', time: '5h ago', icon: Layers, color: 'text-pink-400' },
              ].map((act, i) => (
                <div key={i} className="flex items-center space-x-4 relative">
                  {i !== 3 && <div className="absolute left-6 top-10 bottom-[-24px] w-[2px] bg-white/5" />}
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center z-10 shrink-0`}>
                    <act.icon className={`w-5 h-5 ${act.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white tracking-tight">{act.action}</h4>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{act.user} • {act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return <TrendingUp className={className} />; // Fallback for icon or missing export
}
