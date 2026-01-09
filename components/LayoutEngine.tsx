
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { DesignTheme, LandingContent } from '../types';

interface LayoutEngineProps {
  theme: DesignTheme;
  content: LandingContent;
}

// Fixed Icon component to accept style prop
const Icon = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  const LucideIcon = (LucideIcons as any)[name] || LucideIcons.Heart;
  return <LucideIcon className={className} style={style} />;
};

const LayoutEngine: React.FC<LayoutEngineProps> = ({ theme, content }) => {
  return (
    <>
      {/* Dynamic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-opacity-5 bg-white/70" style={{ borderBottomColor: theme.primaryColor }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-auto sm:h-28 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-8 py-2 sm:py-0">
          {/* Mobile Header: Name and Tagline on same line */}
          <div className="sm:hidden flex items-center gap-2">
            <div className={`w-12 h-12 flex items-center justify-center text-white ${theme.borderRadius}`} style={{ backgroundColor: theme.primaryColor }}>
              <Icon name="Leaf" className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <h1 className="text-lg font-black tracking-tight leading-none">{content.brand.name}</h1>
                <a href={`tel:${content.brand.phone}`} className="text-base font-bold whitespace-nowrap" style={{ color: '#dc2626' }}>
                  {content.brand.phone}
                </a>
              </div>
              <p className="text-sm font-cursive font-bold mt-0.5" style={{ color: '#15803d' }}>טווינא בשילוב ייעוץ כושר ובריאות עד המשרד</p>
            </div>
          </div>

          {/* Tablet/Desktop Header */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-4">
            <div className={`w-16 h-16 flex items-center justify-center text-white ${theme.borderRadius}`} style={{ backgroundColor: theme.primaryColor }}>
              <Icon name="Leaf" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-4">
                <h1 className="text-4xl font-black tracking-tight leading-none">{content.brand.name}</h1>
                <a href={`tel:${content.brand.phone}`} className="text-3xl font-bold whitespace-nowrap" style={{ color: '#dc2626' }}>
                  {content.brand.phone}
                </a>
              </div>
              <p className="text-base font-cursive font-bold mt-1" style={{ color: '#15803d' }}>טווינא בשילוב ייעוץ כושר ובריאות עד המשרד</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Experience */}
      <main className="relative pt-0 sm:pt-28">
        {/* Top Section with Background Image */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <img
              src="/bed_1.png"
              className="w-full h-full object-cover"
              alt="Tuina Massage Background"
            />
            <div className="absolute inset-0 bg-white/5"></div>
          </div>

          {/* What is Tuina Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0 pb-8 sm:pb-12 space-y-8 sm:space-y-12">
            <div className="max-w-4xl mx-auto">
              <div className={`p-3 sm:p-4 ${theme.borderRadius} bg-white/70`}>
                <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold leading-relaxed text-gray-900">
                  {content.sections.what.content.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className={`p-3 sm:p-4 ${theme.borderRadius} bg-white/70`}>
                <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold leading-relaxed text-gray-900">
                  {content.sections.what.content2.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-32 space-y-8 sm:space-y-12">

          {/* Section 2: About & Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* About */}
            <div className="lg:col-span-2">
              <div className={`p-6 sm:p-10 ${theme.borderRadius} bg-green-50 border-2 border-black`} style={{ marginTop: '10px' }}>
                 <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                   {content.sections.about.title}
                 </h3>
                 <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold leading-relaxed text-gray-900">
                    {content.sections.about.content.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>)}
                 </div>
              </div>
            </div>

            {/* Benefits */}
            <div className={`p-6 bg-slate-900 text-white ${theme.borderRadius} shadow-2xl`}>
               <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                 <Icon name="Target" className="text-white opacity-40" />
                 {content.sections.benefits.title}
               </h3>
               <div className="grid gap-4 sm:gap-6">
                  {content.sections.benefits.items.map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-sm sm:text-lg font-bold text-green-400">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-lg sm:text-2xl mb-1" style={{ color: theme.accentColor }}>{item.title}</h4>
                        <p className="text-sm sm:text-lg opacity-50">{item.description}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Section 3: Service Corporate */}
          <div className={`relative overflow-hidden p-6 sm:p-8 lg:p-12 ${theme.borderRadius} bg-white border-2 border-black`}>
             <div className="relative z-10 max-w-4xl mx-auto">
                <div className="bg-black px-6 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6 text-center">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">{content.sections.service.title}</h3>
                </div>
                <p className="text-gray-900 text-lg sm:text-2xl mb-8 sm:mb-12 text-center font-bold">{content.sections.service.description}</p>

                <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16">
                   {content.sections.service.features.map((f, i) => (
                     <div key={i} className="flex items-center gap-3 sm:gap-4 text-gray-900 text-lg sm:text-2xl" style={{ marginLeft: i === 0 ? '15px' : '0' }}>
                       <Icon name="Star" className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" style={{ fill: '#22c55e' }} />
                       <span className="text-right" dangerouslySetInnerHTML={{ __html: f }}></span>
                     </div>
                   ))}
                </div>

                <div className="pt-6 sm:pt-10 border-t border-gray-300">
                   <p className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">חברות שנהנו מהשירות</p>
                   <div className="flex justify-center gap-3 sm:gap-6 items-center flex-wrap">
                      {content.sections.service.clients.map((c, i) => (
                        <div key={i} className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-2xl border-2 border-black" style={{ color: '#dc2626' }}>
                          {c}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default LayoutEngine;
