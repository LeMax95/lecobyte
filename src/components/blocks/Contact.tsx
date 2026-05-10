'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageSquare,
  SendHorizontal,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import type { ContactContent, SiteConfig } from '@/lib/schema';

type ContactProps = {
  content: ContactContent;
  directLinks: SiteConfig['directLinks'];
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact({ content, directLinks }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus('loading');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="overflow-hidden border-t border-zinc-100 bg-white px-6 py-24 md:py-44"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-16 md:gap-24 lg:grid-cols-12">
          <div className="min-w-0 space-y-10 md:space-y-12 lg:col-span-5">
            <div className="relative max-w-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-[#FF4D00] md:w-12" />
                <span className="font-mono text-[9px] font-black uppercase tracking-[0.35em] text-[#FF4D00] md:text-[10px] md:tracking-[0.6em]">
                  {content.eyebrow}
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem]">
                Let’s
                <br />
                <span
                  className="block font-light italic text-transparent opacity-20"
                  style={{ WebkitTextStroke: '1px black' }}
                >
                  Talk.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
              {content.description}
            </p>

            <div className="space-y-4 border-t border-zinc-100 pt-10 md:pt-12">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400 md:mb-6">
                //_DIRECT_COMM_UPLINKS
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={directLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center justify-between border border-zinc-100 bg-zinc-50 px-6 py-4 transition-all hover:border-[#FF4D00] sm:flex-1"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <MessageSquare className="h-5 w-5 shrink-0 text-[#FF4D00]" />
                    <span className="truncate font-mono text-[10px] font-black uppercase tracking-widest">
                      {content.whatsappLabel}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-100 transition-all sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100" />
                </a>

                <a
                  href={directLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center justify-between border border-zinc-100 bg-zinc-50 px-6 py-4 transition-all hover:border-[#FF4D00] sm:flex-1"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <SendHorizontal className="h-5 w-5 shrink-0 text-[#FF4D00]" />
                    <span className="truncate font-mono text-[10px] font-black uppercase tracking-widest">
                      {content.telegramLabel}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-100 transition-all sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 border border-zinc-100 bg-zinc-50 p-6 sm:p-10 md:p-16 lg:col-span-7">
            <div className="absolute left-0 right-0 top-0 h-1 overflow-hidden bg-zinc-200">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="h-full w-1/3 bg-[#FF4D00]"
              />
            </div>

            <form className="space-y-12 md:space-y-16" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                <div className="group min-w-0 space-y-4">
                  <label
                    htmlFor="contact-name"
                    className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-widest text-[#FF4D00]"
                  >
                    <div className="h-1 w-1 shrink-0 bg-[#FF4D00]" />
                    <span>01_IDENTITY_NAME</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={status === 'loading'}
                    className="w-full min-w-0 border-b border-zinc-200 bg-transparent py-4 text-lg font-bold uppercase text-black outline-none transition-colors placeholder:text-zinc-300 focus:border-black disabled:cursor-not-allowed disabled:opacity-50 sm:text-xl md:text-2xl"
                    placeholder="YOUR_NAME"
                  />
                </div>

                <div className="group min-w-0 space-y-4">
                  <label
                    htmlFor="contact-email"
                    className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-widest text-[#FF4D00]"
                  >
                    <div className="h-1 w-1 shrink-0 bg-[#FF4D00]" />
                    <span>02_CHANNEL_UPLINK</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={status === 'loading'}
                    className="w-full min-w-0 border-b border-zinc-200 bg-transparent py-4 text-lg font-bold uppercase text-black outline-none transition-colors placeholder:text-zinc-300 focus:border-black disabled:cursor-not-allowed disabled:opacity-50 sm:text-xl md:text-2xl"
                    placeholder="EMAIL"
                  />
                </div>
              </div>

              <div className="group min-w-0 space-y-4">
                <label
                  htmlFor="contact-message"
                  className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-widest text-[#FF4D00]"
                >
                  <div className="h-1 w-1 shrink-0 bg-[#FF4D00]" />
                  <span>03_PROJECT_PARAMETERS</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  disabled={status === 'loading'}
                  className="w-full min-w-0 resize-none border-b border-zinc-200 bg-transparent py-4 text-base font-bold uppercase text-black outline-none transition-colors placeholder:text-zinc-300 focus:border-black disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg md:text-xl"
                  placeholder="TELL_ME_WHAT’S_GOING_ON"
                />
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: status === 'loading' ? 1 : 0.99 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                  className="group relative flex w-full items-center justify-center gap-4 overflow-hidden bg-black py-6 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-70 md:gap-6 md:py-8"
                  type="submit"
                  disabled={status === 'loading'}
                >
                  <div className="absolute inset-0 translate-y-full bg-[#FF4D00] transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="relative z-10 text-center font-mono text-[10px] font-black uppercase tracking-[0.2em] md:text-xs md:tracking-[0.35em]">
                    {status === 'loading'
                      ? 'TRANSMITTING...'
                      : status === 'success'
                        ? 'MESSAGE_RECEIVED'
                        : content.formButtonLabel}
                  </span>

                  <Send className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 md:h-5 md:w-5" />
                </motion.button>

                {status === 'success' && (
                  <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF4D00]">
                    //_MESSAGE_RECEIVED. I’ll get back to you soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="font-mono text-[10px] font-black uppercase tracking-widest text-red-500">
                    //_TRANSMISSION_FAILED. Try again or use direct links.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 opacity-40">
                <span className="font-mono text-[8px] uppercase tracking-widest">
                  Honeypot_Protection_Active
                </span>
                <Cpu
                  className="h-3 w-3 shrink-0 animate-spin"
                  style={{ animationDuration: '3s' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}