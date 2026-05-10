// components/SearchInput.tsx
import { Search, X } from 'lucide-react';

interface SearchProps {
  query: string;
  setQuery: (val: string) => void;
  placeholder: string;
}

export function SearchInput({ query, setQuery, placeholder }: SearchProps) {
  return (
    <div className="relative w-full max-w-xl group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#FF4D00] transition-colors">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-zinc-50 border border-zinc-100 py-4 pl-12 pr-12 font-mono text-xs uppercase tracking-widest focus:outline-none focus:border-[#FF4D00] focus:bg-white transition-all placeholder:text-zinc-300"
      />
      {query && (
        <button 
          onClick={() => setQuery('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      {/* Decorative scanline on input */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-[#FF4D00] transition-all duration-500 ease-in-out" style={{ width: query ? '100%' : '0%' }} />
    </div>
  );
}