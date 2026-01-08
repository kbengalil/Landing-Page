
import React, { useState } from 'react';
import { Settings, Sparkles, Wand2, X, RefreshCw } from 'lucide-react';
import LayoutEngine from './components/LayoutEngine';
import { generateThemeFromVibe } from './services/geminiService';
import { DesignTheme, DesignVibe } from './types';
import { DEFAULT_THEME, TUINA_CONTENT } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DesignTheme>(DEFAULT_THEME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [history, setHistory] = useState<DesignTheme[]>([DEFAULT_THEME]);

  const handleRedesign = async (prompt: string) => {
    setIsGenerating(true);
    const newTheme = await generateThemeFromVibe(prompt);
    if (newTheme) {
      setTheme(newTheme);
      setHistory(prev => [newTheme, ...prev].slice(0, 5));
    }
    setIsGenerating(false);
  };

  const applyHistoricalTheme = (t: DesignTheme) => {
    setTheme(t);
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* AI Design Controls - Sidebar */}
      <aside 
        className={`fixed right-0 top-0 h-full w-80 z-[100] transition-transform duration-500 ease-in-out border-l shadow-2xl flex flex-col ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
        dir="ltr"
      >
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-slate-800">Design Morph Lab</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 hover:bg-slate-200 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Preset Vibes</label>
            <div className="grid grid-cols-1 gap-3">
              {Object.values(DesignVibe).map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => handleRedesign(`Give me a ${vibe} look for a Tuina clinic`)}
                  disabled={isGenerating}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all text-sm font-medium ${theme.vibe === vibe ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-emerald-200 text-slate-600'}`}
                >
                  {vibe}
                  {isGenerating && theme.vibe !== vibe ? null : <Wand2 className="w-4 h-4 opacity-40" />}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Custom Transformation</label>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="e.g., A minimalist Japanese aesthetic with beige tones and sans-serif Hebrew fonts"
              className="w-full h-32 p-4 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"
            />
            <button
              onClick={() => handleRedesign(customPrompt)}
              disabled={isGenerating || !customPrompt}
              className="w-full mt-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg"
            >
              {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isGenerating ? 'Morphing...' : 'Redesign Page'}
            </button>
          </div>

          {history.length > 1 && (
            <div className="pt-6 border-t">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Version History</label>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {history.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => applyHistoricalTheme(t)}
                    className="w-12 h-12 rounded-lg border-2 border-white shadow-md flex-shrink-0 relative overflow-hidden group"
                    style={{ backgroundColor: t.backgroundColor }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.primaryColor }}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-50 border-t text-[10px] text-slate-400 font-medium">
          Morphed by Gemini 3 Flash
        </div>
      </aside>


      {/* Main Content Area */}
      <main>
        {isGenerating && (
          <div className="fixed inset-0 z-[110] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
              <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-emerald-600 animate-pulse" />
            </div>
            <p className="mt-8 text-2xl font-black text-slate-800 tracking-tight">משנה את העיצוב עבורך...</p>
            <p className="mt-2 text-slate-500 text-sm font-bold opacity-60">הבינה המלאכותית מעבדת קומפוזיציה חדשה</p>
          </div>
        )}
        <LayoutEngine theme={theme} content={TUINA_CONTENT} />
      </main>
    </div>
  );
};

export default App;
