type ServiceGridCard = {
  title: string;
  desc: string;
};

type ServiceGridProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  items: ServiceGridCard[];
};

export default function ServiceGrid({
  eyebrow,
  title,
  accent,
  items,
}: ServiceGridProps) {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-zinc-100 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
            {title}{' '}
            {accent ? (
              <span className="italic font-light text-zinc-300">{accent}</span>
            ) : null}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {items.map((item) => (
            <div key={`${item.title}-${item.desc}`} className="bg-white p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black leading-none">
                {item.title}
              </h3>
              <p className="mt-4 text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}