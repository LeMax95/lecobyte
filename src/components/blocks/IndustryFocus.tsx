import type { IndustryFocusItem } from '@/lib/schema';

export default function IndustryFocus({ industries }: { industries: IndustryFocusItem[] }) {
  return (
    <section className="py-24 md:py-44 px-6 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10 md:gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
              <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                //_FOCUS_AREAS
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-black">
              Where_This <br />
              <span
                className="text-transparent stroke-black stroke-1 opacity-20 italic font-light"
                style={{ WebkitTextStroke: '1px black' }}
              >
                Fits
              </span>
            </h2>
          </div>

          <div className="max-w-xs space-y-4">
            <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest leading-relaxed">
              The types of businesses and setups where this approach actually makes sense.
            </p>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1 w-4 bg-zinc-100" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors group"
            >
              <span className="font-mono text-[#FF4D00] text-[10px] mb-6 block uppercase tracking-widest">
                //_{ind.id}
              </span>

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 group-hover:translate-x-2 transition-transform text-black">
                {ind.name}
              </h3>

              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                {ind.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}