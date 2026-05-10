import Link from 'next/link';
import type { IntelLinkGroup } from '@/content/intel/link-map';

function kindLabel(kind: "service" | "project" | "article") {
  switch (kind) {
    case "service":
      return "SERVICE";
    case "project":
      return "PROJECT";
    case "article":
      return "INTEL";
  }
}

export default function IntelRelatedLinks({
  links,
}: {
  links?: IntelLinkGroup;
}) {
  if (!links?.primary && (!links?.secondary || links.secondary.length === 0)) {
    return null;
  }

  return (
    <section className="mt-20 md:mt-28 border-t border-zinc-100 pt-10 md:pt-14">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px w-10 bg-[#FF4D00]" />
        <span className="font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.35em] md:tracking-[0.5em]">
          //_LINKED_PATHS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
        {links.primary ? (
          <Link
            href={links.primary.href}
            className="lg:col-span-2 bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors group"
          >
            <span className="inline-block mb-4 px-3 py-1 bg-zinc-50 border border-zinc-100 text-[#FF4D00] font-mono text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
              PRIMARY_{kindLabel(links.primary.kind)}
            </span>

            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black leading-[0.95] group-hover:translate-x-2 transition-transform">
              {links.primary.label.replaceAll('_', ' ')}
            </h3>

            <p className="mt-4 text-zinc-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              Continue from explanation into the closest service or implementation path.
            </p>
          </Link>
        ) : null}

        <div className="bg-white">
          {(links.secondary ?? []).map((item) => (
            <Link
              key={`${item.kind}-${item.href}`}
              href={item.href}
              className="block p-6 md:p-8 border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50 transition-colors group"
            >
              <span className="inline-block mb-3 font-mono text-[9px] md:text-[10px] text-[#FF4D00] font-black uppercase tracking-[0.3em]">
                {kindLabel(item.kind)}
              </span>

              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-black group-hover:translate-x-1 transition-transform">
                {item.label.replaceAll('_', ' ')}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}