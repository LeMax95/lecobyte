"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-220, 220], [4, -4]), {
    stiffness: 140,
    damping: 26,
  });

  const rotateY = useSpring(useTransform(mouseX, [-220, 220], [-6, 6]), {
    stiffness: 140,
    damping: 26,
  });

  const driftX = useSpring(useTransform(mouseX, [-220, 220], [-6, 6]), {
    stiffness: 100,
    damping: 28,
  });

  const driftY = useSpring(useTransform(mouseY, [-220, 220], [-6, 6]), {
    stiffness: 100,
    damping: 28,
  });

  const glowX = useSpring(useTransform(mouseX, [-220, 220], [-14, 14]), {
    stiffness: 90,
    damping: 28,
  });

  const glowY = useSpring(useTransform(mouseY, [-220, 220], [-14, 14]), {
    stiffness: 90,
    damping: 28,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full overflow-visible"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute inset-[8%] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,92,0,0.12),rgba(255,92,0,0.04),transparent_68%)]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0%,rgba(17,17,17,0.04)_50%,transparent_100%)] bg-[length:100%_4px]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          x: driftX,
          y: driftY,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mx-auto h-[540px] w-[560px] max-w-full"
      >
        <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,92,0,0.13),rgba(255,92,0,0.045),transparent_68%)] blur-3xl" />

        <div className="absolute right-[7%] top-[15%] h-[230px] w-[300px] rotate-[7deg] rounded-[2rem] border border-black/[0.06] bg-white/45 shadow-[0_35px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl" />

        <div className="absolute bottom-[19%] left-[9%] h-[170px] w-[290px] -rotate-[6deg] rounded-[2rem] border border-black/[0.06] bg-white/55 shadow-[0_35px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl">
          <div className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-2 w-24 rounded-full bg-black/15" />
              <div className="h-2 w-8 rounded-full bg-[#ff5c00]" />
            </div>

            <div className="space-y-3">
              <div className="h-2 w-[86%] rounded-full bg-black/10" />
              <div className="h-2 w-[64%] rounded-full bg-black/10" />
              <div className="h-2 w-[74%] rounded-full bg-black/10" />
            </div>
          </div>
        </div>

        <div className="absolute left-[16%] top-[17%] h-[330px] w-[390px] rounded-[2.25rem] border border-black/[0.07] bg-white/75 shadow-[0_44px_110px_rgba(17,17,17,0.13)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-5">
            <div>
              <div className="font-mono text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">
                OPERATING_LAYER
              </div>
              <div className="mt-2 h-1.5 w-20 rounded-full bg-[#ff5c00]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black/20" />
              <span className="h-2 w-2 rounded-full bg-black/20" />
              <span className="h-2 w-2 rounded-full bg-[#ff5c00]" />
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6 rounded-[1.5rem] border border-black/[0.06] bg-slate-50/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2.5 w-28 rounded-full bg-black/70" />
                <div className="font-mono text-[10px] font-black text-[#ff5c00]">
                  LIVE
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-black/10" />
                <div className="h-2 w-[78%] rounded-full bg-black/10" />
                <div className="h-2 w-[58%] rounded-full bg-black/10" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_14px_40px_rgba(17,17,17,0.045)]">
                <div className="mb-4 h-2 w-12 rounded-full bg-black/20" />
                <div className="h-12 rounded-xl bg-slate-100" />
              </div>

              <div className="rounded-2xl border border-black/[0.06] bg-[#111111] p-4 shadow-[0_18px_45px_rgba(17,17,17,0.12)]">
                <div className="mb-4 h-2 w-12 rounded-full bg-white/30" />
                <div className="h-12 rounded-xl bg-[#ff5c00]" />
              </div>

              <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_14px_40px_rgba(17,17,17,0.045)]">
                <div className="mb-4 h-2 w-12 rounded-full bg-black/20" />
                <div className="h-12 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[12%] rounded-2xl border border-black/[0.06] bg-white/80 px-5 py-4 shadow-[0_24px_70px_rgba(17,17,17,0.10)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5c00]" />
            <div className="space-y-2">
              <div className="h-1.5 w-20 rounded-full bg-black/20" />
              <div className="h-1.5 w-12 rounded-full bg-black/10" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[28%] right-[13%] h-3 w-3 rounded-full bg-[#ff5c00] shadow-[0_0_0_8px_rgba(255,92,0,0.08),0_0_34px_rgba(255,92,0,0.35)]"
        />
      </motion.div>
    </div>
  );
}