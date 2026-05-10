import Link from 'next/link';

export default function IntelArticleCta() {
  return (
    <section className="mt-20 md:mt-28">
      <div className="border border-zinc-100 bg-zinc-50 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#FF4D00]" />
          <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.35em] md:tracking-[0.5em]">
            //_NEXT_STEP
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          If_This <span className="italic font-light text-zinc-300">Feels_Familiar</span>
        </h3>

        <p className="mt-6 max-w-2xl text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
          The article explains the pattern. The next step is looking at your actual setup and deciding whether this is a content problem, a workflow problem, or a systems problem.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/connect"
            className="inline-flex items-center justify-center px-6 py-4 bg-black text-white font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:bg-[#FF4D00] transition-colors"
          >
            Start_Conversation
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-4 border border-zinc-200 text-black font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.25em] hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
          >
            View_Services
          </Link>
        </div>
      </div>
    </section>
  );
}