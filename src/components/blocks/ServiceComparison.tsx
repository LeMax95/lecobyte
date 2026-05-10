import type { ServiceComparisonContent } from '@/lib/schema';

export default function ServiceComparison({
  content,
}: {
  content: ServiceComparisonContent;
}) {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-zinc-100 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 md:w-12 bg-[#FF4D00]" />
            <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
              //_DECISION_FRAME
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
            Standard_Tools <span className="italic font-light text-zinc-300">vs_Custom</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
          <div className="bg-white p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              {content.leftTitle.split('_').join(' ')}
            </h3>

            <ul className="mt-8 space-y-4">
              {content.leftPoints.map((point) => (
                <li
                  key={point}
                  className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">
              {content.rightTitle.split('_').join(' ')}
            </h3>

            <ul className="mt-8 space-y-4">
              {content.rightPoints.map((point) => (
                <li
                  key={point}
                  className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}