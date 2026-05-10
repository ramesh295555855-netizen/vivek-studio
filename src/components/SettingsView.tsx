import { motion } from 'motion/react';
import { 
  User, 
  Bell, 
  ShieldCheck, 
  Moon, 
  Globe, 
  Smartphone,
  Eye,
  Trash2
} from 'lucide-react';

export default function SettingsView() {
  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        { label: 'Appearance', icon: Moon, value: 'Dark Dynamic' },
        { label: 'Language', icon: Globe, value: 'English (US)' },
        { label: 'Notifications', icon: Bell, value: 'Important only' },
      ]
    },
    {
      title: 'Security',
      items: [
        { label: 'Account Identity', icon: User, value: 'Verified' },
        { label: 'Privacy Mode', icon: ShieldCheck, value: 'Maximum' },
        { label: 'Mobile Sync', icon: Smartphone, value: 'Connected' },
      ]
    }
  ];

  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto space-y-12">
      <div className="space-y-1">
        <h2 className="text-4xl font-black">Settings</h2>
        <p className="text-gray-500 text-sm">Configure your Zoya AI experience.</p>
      </div>

      <div className="space-y-10">
        {settingsGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-4">{group.title}</h3>
            <div className="bg-white/5 border border-white/5 rounded-[32px] overflow-hidden">
              {group.items.map((item, i) => (
                <div 
                  key={item.label}
                  className={`flex items-center justify-between p-6 hover:bg-white/5 transition-colors cursor-pointer ${
                    i !== group.items.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <span className="font-bold">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{item.value}</span>
                    <Eye className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-8 border-t border-white/10">
          <button className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all w-full font-bold">
            <Trash2 className="w-5 h-5" />
            <span>Delete All Session Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
