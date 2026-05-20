"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

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
    if (window.matchMedia("(pointer: coarse)").matches) return;

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
      className="relative mx-auto h-[360px] w-full max-w-[380px] overflow-visible sm:h-[440px] sm:max-w-[500px] lg:h-full lg:max-w-none"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : glowX,
          y: prefersReducedMotion ? 0 : glowY,
        }}
        className="absolute inset-[4%] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,92,0,0.12),rgba(255,92,0,0.04),transparent_68%)] sm:inset-[8%]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_bottom,transparent_0%,rgba(17,17,17,0.04)_50%,transparent_100%)] bg-[length:100%_4px] sm:opacity-[0.08]" />

      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          x: prefersReducedMotion ? 0 : driftX,
          y: prefersReducedMotion ? 0 : driftY,
          transformStyle: "preserve-3d",
        }}
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mx-auto h-[360px] w-[360px] max-w-full sm:h-[430px] sm:w-[430px] lg:h-[540px] lg:w-[560px]"
      >
        <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,92,0,0.13),rgba(255,92,0,0.045),transparent_68%)] blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[410px] lg:w-[410px]" />

        <div className="absolute right-[4%] top-[15%] hidden h-[180px] w-[230px] rotate-[7deg] rounded-[1.6rem] border border-black/[0.06] bg-white/45 shadow-[0_35px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:block lg:right-[7%] lg:h-[230px] lg:w-[300px] lg:rounded-[2rem]" />

        <div className="absolute bottom-[18%] left-[4%] h-[125px] w-[220px] -rotate-[6deg] rounded-[1.5rem] border border-black/[0.06] bg-white/55 shadow-[0_35px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:bottom-[19%] sm:left-[7%] sm:h-[145px] sm:w-[250px] lg:left-[9%] lg:h-[170px] lg:w-[290px] lg:rounded-[2rem]">
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <div className="h-1.5 w-20 rounded-full bg-black/15 sm:h-2 sm:w-24" />
              <div className="h-1.5 w-7 rounded-full bg-[#ff5c00] sm:h-2 sm:w-8" />
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="h-1.5 w-[86%] rounded-full bg-black/10 sm:h-2" />
              <div className="h-1.5 w-[64%] rounded-full bg-black/10 sm:h-2" />
              <div className="h-1.5 w-[74%] rounded-full bg-black/10 sm:h-2" />
            </div>
          </div>
        </div>

        <div className="absolute left-[5%] top-[16%] h-[270px] w-[322px] rounded-[1.8rem] border border-black/[0.07] bg-white/75 shadow-[0_36px_90px_rgba(17,17,17,0.12)] backdrop-blur-2xl sm:left-[9%] sm:h-[305px] sm:w-[350px] sm:rounded-[2rem] lg:left-[16%] lg:top-[17%] lg:h-[330px] lg:w-[390px] lg:rounded-[2.25rem] lg:shadow-[0_44px_110px_rgba(17,17,17,0.13)]">
          <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-4 sm:px-5 lg:px-6 lg:py-5">
            <div>
              <div className="font-mono text-[8px] font-black uppercase tracking-[0.28em] text-slate-400 sm:text-[9px] lg:text-[10px] lg:tracking-[0.32em]">
                OPERATING_LAYER
              </div>
              <div className="mt-2 h-1 w-16 rounded-full bg-[#ff5c00] sm:h-1.5 sm:w-20" />
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/20 sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-black/20 sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5c00] sm:h-2 sm:w-2" />
            </div>
          </div>

          <div className="p-4 sm:p-5 lg:p-6">
            <div className="mb-4 rounded-[1.25rem] border border-black/[0.06] bg-slate-50/80 p-3 sm:mb-5 sm:p-4 lg:mb-6 lg:rounded-[1.5rem]">
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <div className="h-2 w-24 rounded-full bg-black/70 sm:h-2.5 sm:w-28" />
                <div className="font-mono text-[9px] font-black text-[#ff5c00] sm:text-[10px]">
                  LIVE
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="h-1.5 w-full rounded-full bg-black/10 sm:h-2" />
                <div className="h-1.5 w-[78%] rounded-full bg-black/10 sm:h-2" />
                <div className="h-1.5 w-[58%] rounded-full bg-black/10 sm:h-2" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-[0_14px_40px_rgba(17,17,17,0.045)] sm:rounded-2xl sm:p-4">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-black/20 sm:mb-4 sm:h-2 sm:w-12" />
                <div className="h-9 rounded-lg bg-slate-100 sm:h-12 sm:rounded-xl" />
              </div>

              <div className="rounded-xl border border-black/[0.06] bg-[#111111] p-3 shadow-[0_18px_45px_rgba(17,17,17,0.12)] sm:rounded-2xl sm:p-4">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-white/30 sm:mb-4 sm:h-2 sm:w-12" />
                <div className="h-9 rounded-lg bg-[#ff5c00] sm:h-12 sm:rounded-xl" />
              </div>

              <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-[0_14px_40px_rgba(17,17,17,0.045)] sm:rounded-2xl sm:p-4">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-black/20 sm:mb-4 sm:h-2 sm:w-12" />
                <div className="h-9 rounded-lg bg-slate-100 sm:h-12 sm:rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[11%] rounded-xl border border-black/[0.06] bg-white/80 px-4 py-3 shadow-[0_24px_70px_rgba(17,17,17,0.10)] backdrop-blur-xl sm:right-[12%] sm:rounded-2xl sm:px-5 sm:py-4 lg:right-[15%]"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5c00] sm:h-2.5 sm:w-2.5" />
            <div className="space-y-1.5 sm:space-y-2">
              <div className="h-1.5 w-16 rounded-full bg-black/20 sm:w-20" />
              <div className="h-1.5 w-10 rounded-full bg-black/10 sm:w-12" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[26%] right-[8%] h-2.5 w-2.5 rounded-full bg-[#ff5c00] shadow-[0_0_0_8px_rgba(255,92,0,0.08),0_0_34px_rgba(255,92,0,0.35)] sm:right-[11%] sm:h-3 sm:w-3 lg:bottom-[28%] lg:right-[13%]"
        />
      </motion.div>
    </div>
  );
}