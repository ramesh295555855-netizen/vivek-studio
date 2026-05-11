import { motion } from 'motion/react';
import { useState } from 'react';
import { LogIn, Sparkles, Shield, User, Loader2 } from 'lucide-react';
import { signInWithGoogle } from '../lib/firebase';

export default function LoginView() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const handleLogin = async () => {
    if (isLoggingIn) return;
    
    setIsLoggingIn(true);
    setErrorStatus(null);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      // Ignore cancellation errors
      if (error?.code === 'auth/cancelled-popup-request' || error?.code === 'auth/popup-closed-by-user') {
        return;
      }

      console.error('Login error:', error);
      
      // Specifically check for unauthorized domain error
      if (error?.code === 'auth/unauthorized-domain') {
        setErrorStatus('DOMAIN_UNAUTHORIZED');
      } else {
        setErrorStatus(error.message || 'Login failed. Please try again.');
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
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30 rotate-3">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white uppercase italic font-display">Maa Santoshi <span className="text-cyan-400">Studio</span></h2>
            <p className="text-gray-400 font-medium lowercase tracking-tight">The ultimate dashboard for the neural future.</p>
          </div>

          <div className="space-y-4">
            {errorStatus && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest text-left"
              >
                {errorStatus === 'DOMAIN_UNAUTHORIZED' ? (
                  <p>
                    Domain Not Authorized! <br/>
                    Please add <code className="text-white px-1">officialvivekstudio.netlify.app</code> 
                    to your Firebase Console &gt; Authentication &gt; Authorized domains.
                  </p>
                ) : (
                  <p>{errorStatus}</p>
                )}
              </motion.div>
            )}

            <button 
              onClick={handleLogin}
              disabled={isLoggingIn}
              className={`w-full py-5 rounded-2xl font-black flex items-center justify-center space-x-3 transition-all group shadow-xl ${
                isLoggingIn 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5' 
                : 'bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 shadow-cyan-500/20'
              }`}
            >
              {isLoggingIn ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <User className="w-5 h-5 transition-transform group-hover:rotate-12" />
              )}
              <span className="text-xs uppercase tracking-widest">{isLoggingIn ? 'Establishing Link...' : 'Portal Access (Google)'}</span>
            </button>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.3em] flex items-center justify-center space-x-2">
                <Shield className="w-3 h-3" />
                <span>Quantum Encryption Enabled</span>
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-white/10" />
                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Enterprise Access</span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>

              <button className="text-[10px] font-black text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                Login with Email instead
              </button>
            </div>
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
