
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
                <h1 className="text-xl font-black tracking-tight leading-none">{content.brand.name}</h1>
                <a href={`tel:${content.brand.phone}`} className="text-xl font-bold whitespace-nowrap" style={{ color: '#dc2626' }}>
                  {content.brand.phone}
                </a>
              </div>
              <p className="text-base font-cursive font-bold mt-0.5" style={{ color: '#15803d' }}>טווינא בשילוב ייעוץ כושר עד הבית</p>
            </div>
          </div>

          {/* Tablet/Desktop Header */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-4">
            <div className={`w-16 h-16 flex items-center justify-center text-white ${theme.borderRadius}`} style={{ backgroundColor: theme.primaryColor }}>
              <Icon name="Leaf" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-6">
                <h1 className="text-5xl font-black tracking-tight leading-none">{content.brand.name}</h1>
                <a href={`tel:${content.brand.phone}`} className="text-5xl font-bold whitespace-nowrap" style={{ color: '#dc2626' }}>
                  {content.brand.phone}
                </a>
              </div>
              <p className="text-xl font-cursive font-bold mt-1" style={{ color: '#15803d' }}>טווינא בשילוב ייעוץ כושר ובריאות עד הבית</p>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${content.brand.whatsapp.number}?text=${encodeURIComponent(content.brand.whatsapp.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 top-20 sm:top-32 z-40 hover:scale-110 transition-transform duration-200 shadow-lg rounded-full"
        title="Contact via WhatsApp"
      >
        <img src="/whatsapp-icon.jpg" alt="WhatsApp" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
      </a>

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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-8 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
            <div className="max-w-4xl mx-auto">
              <div className={`p-3 sm:p-4 ${theme.borderRadius} bg-white/35 border-2 border-black`}>
                <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold leading-relaxed text-gray-900">
                  {content.sections.what.content.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                  {content.sections.what.content2.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-32 space-y-8 sm:space-y-12">

          {/* Section 2: About & Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* About */}
            <div className="lg:col-span-2">
              <div className={`p-4 sm:p-6 ${theme.borderRadius} bg-green-50 border-2 border-black`}>
                 <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold leading-relaxed text-gray-900">
                    {content.sections.about.content.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>)}
                 </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-2 space-y-4">
               {/* Benefits Header */}
               <div className={`p-2 sm:p-3 text-white ${theme.borderRadius} border-2`} style={{ backgroundColor: '#475569', borderColor: '#f0fdf4' }}>
                 <h3 className="text-2xl sm:text-3xl font-bold text-center">
                   {content.sections.benefits.title}
                 </h3>
               </div>

               {/* Benefits Items */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {content.sections.benefits.items.map((item, i) => (
                   <div key={i} className={`p-2 sm:p-3 text-white ${theme.borderRadius} border-2`} style={{ backgroundColor: '#475569', borderColor: '#f0fdf4' }}>
                     <div className="flex gap-3 sm:gap-4">
                       <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-sm sm:text-lg font-bold text-green-400">
                         ✓
                       </div>
                       <div>
                         <h4 className="font-bold text-lg sm:text-2xl mb-1 text-white">{item.title}</h4>
                         <p className="text-base sm:text-xl text-green-400">{item.description}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default LayoutEngine;
