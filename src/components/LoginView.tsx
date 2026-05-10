import { motion } from 'motion/react';
import { useState } from 'react';
import { LogIn, Sparkles, Shield, User, Loader2 } from 'lucide-react';
import { signInWithGoogle } from '../lib/firebase';

export default function LoginView() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    if (isLoggingIn) return;
    
    setIsLoggingIn(true);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      // Ignore cancellation errors
      if (error?.code !== 'auth/cancelled-popup-request' && error?.code !== 'auth/popup-closed-by-user') {
        console.error('Login error:', error);
        alert('Login failed: ' + (error.message || 'Please try again.'));
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] pointer-events-none">
        <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent blur-[120px]" />
        <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_10px,rgba(34,211,238,0.03)_11px,rgba(34,211,238,0.03)_12px)] animate-pulse" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8 text-center">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white">Zoya AI</h2>
            <p className="text-gray-400">Unlock the future of agentic intelligence.</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleLogin}
              disabled={isLoggingIn}
              className={`w-full py-4 rounded-xl font-black flex items-center justify-center space-x-3 transition-all group ${
                isLoggingIn 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-cyan-400'
              }`}
            >
              {isLoggingIn ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <User className="w-5 h-5 transition-transform group-hover:scale-110" />
              )}
              <span>{isLoggingIn ? 'Connecting...' : 'Continue with Google'}</span>
            </button>
            <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest flex items-center justify-center space-x-2">
              <Shield className="w-3 h-3" />
              <span>Enterprise Grade Security</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {['Neural', 'Agentic', 'Privacy'].map((item) => (
              <div key={item} className="text-[8px] font-black uppercase text-gray-500 tracking-[0.2em] py-2 border border-white/5 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
