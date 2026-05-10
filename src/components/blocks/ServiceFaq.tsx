import type { ServiceFaqItem } from '@/lib/schema';

export default function ServiceFaq({ items }: { items: ServiceFaqItem[] }) {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-zinc-100 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
              //_COMMON_QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
            Common_Questions
          </h2>
        </div>

        <div className="space-y-px bg-zinc-100 border border-zinc-100">
          {items.map((item) => (
            <div key={item.q} className="bg-white p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-black text-black tracking-tight">
                {item.q}
              </h3>
              <p className="mt-4 text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}