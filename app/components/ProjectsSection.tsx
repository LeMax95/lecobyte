import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Projects</h2>

        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: 'Bronzora — Metal Clay Studio',
              href: 'https://bronzora.com/',
              description:
                'Full-stack site for a Los Angeles metal clay studio offering classes and an online store, including a custom booking system with backend integration and database.',
              metrics: { performance: 96, accessibility: 91, seo: 100 },
              techDetails: [
                'React + TypeScript + Tailwind (Vite)',
                'Node.js backend with Prisma ORM',
                'Custom booking system with backend + DB',
                'Responsive UI/UX and clean design',
              ],
              image: '/bronzora.png',
            },
            {
              title: 'Cheap Movers Glendale',
              href: 'https://cheapmoversglendale.com/',
              description:
                'Local moving site focused on transport-only service with Armenian SEO localization.',
              metrics: { performance: 99, accessibility: 100, seo: 100 },
              techDetails: [
                'Technical SEO: schema, meta, sitemap, robots',
                'Google Search Console integration',
                'Armenian SEO localization (transport-only)',
                'Mobile-first HTML + Tailwind CSS',
              ],
              image: '/cheap-movers-glendale.png',
            },
            {
              title: 'Laprom Movers',
              href: 'https://lapromoving.net',
              description:
                'Lead-gen site for a Los Angeles moving company with mobile-first design and a dynamic multi-step booking flow featuring smart ZIP code autocomplete.',
              metrics: { performance: 93, accessibility: 94, seo: 100 },
              techDetails: [
                'React + Tailwind (Vite)',
                'Dynamic multi-step booking form',
                'ZIP code autocomplete via library',
                'Technical SEO: schema, meta, sitemap, robots',
              ],
              image: '/lapro-moving.png',
            },
            {
              title: 'Fixed Price Towing',
              href: 'https://fixedpricetowing.com/',
              description:
                'Towing company MVP in North Hollywood, Los Angeles — mobile-first lead-gen site with transparent pricing and technical SEO. Includes a Node.js backend that processes form submissions (validation, spam checks, and lead capture).',
              metrics: { performance: 97, accessibility: 98, seo: 91 },
              techDetails: [
                'HTML/CSS/JS (mobile-first)',
                'Node.js backend (form POST → validation & persistence)',
                'Technical SEO: schema, meta, sitemap, robots',
                'Click-to-call CTAs and clear pricing blocks',
              ],
              image: '/fpt-2.png',
            },
          ].map((project) => (
            <div key={project.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Title + View live */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>

                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live (opens in a new tab)`}
                        className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                      >
                        <span>View live</span>
                        {/* external-link icon */}
                        <svg
                          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600">{project.description}</p>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Technical Implementation</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-600">▹</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:via-gray-50/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
