import { ReactNode, ComponentPropsWithoutRef } from 'react';

// Define the type for the components to ensure strict compatibility with react-markdown
import { Components } from 'react-markdown';

export const MarkdownComponents: Components = {
  // Main Sections
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-16 md:mt-24 mb-8 text-black border-l-4 border-[#FF4D00] pl-6 break-words">
      {children}
    </h2>
  ),
  
  // Subheaders
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-12 mb-6 text-black flex items-center gap-3">
      <span className="text-[#FF4D00]">#</span> {children}
    </h3>
  ),
  
  // Body Text
  p: ({ children }) => (
    <p className="text-base md:text-xl leading-[1.8] text-zinc-700 mb-8 font-medium">
      {children}
    </p>
  ),
  
  // Terminal-style Lists
  ul: ({ children }) => (
    <ul className="space-y-4 mb-10 list-none font-mono text-sm md:text-base uppercase tracking-tight bg-zinc-50/50 p-6 border border-zinc-100">
      {children}
    </ul>
  ),
  
  li: ({ children }) => (
    <li className="flex gap-3 before:content-['//'] before:text-[#FF4D00] before:font-black">
      {children}
    </li>
  ),
  
  // FIXED: Type-safe Lab-style Images
  img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => (
    <div className="my-16 border border-zinc-100 p-2 bg-white shadow-sm group relative">
      <div className="overflow-hidden bg-zinc-100">
        <img 
          {...props}
          src={src as string} 
          alt={alt} 
          className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-crosshair transform group-hover:scale-[1.01]" 
        />
      </div>
      {alt && (
        <p className="text-[10px] font-mono text-zinc-400 mt-4 uppercase tracking-[0.3em] text-center border-t border-zinc-50 pt-4">
          //_VISUAL_RECON: {alt}
        </p>
      )}
      {/* Visual Accents */}
      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  ),
  
  // System Quotes
  blockquote: ({ children }) => (
    <div className="my-12 p-8 bg-black text-white font-mono text-sm md:text-base border-l-8 border-[#FF4D00] relative overflow-hidden">
      <div className="relative z-10 italic">"{children}"</div>
      <span className="absolute right-4 bottom-2 opacity-10 text-6xl font-black select-none uppercase pointer-events-none">
        DEBRIEF
      </span>
    </div>
  ),
  
  // Bold Text
  strong: ({ children }) => (
    <strong className="font-black text-black tracking-tight underline decoration-[#FF4D00]/30 decoration-2 underline-offset-4">
      {children}
    </strong>
  ),

  // Links
  a: ({ children, href }) => (
    <a 
      href={href} 
      className="text-black font-bold underline decoration-[#FF4D00] decoration-2 underline-offset-2 hover:bg-[#FF4D00] hover:text-white transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};