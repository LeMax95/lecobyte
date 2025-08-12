import React from 'react';

export const WebCapabilitiesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Modern Web Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'E-commerce & Payments',
              icon: '💳',
              features: ['Inline checkout & captures', 'Orders, receipts, emails', 'Coupons, taxes, shipping'],
            },
            {
              title: 'Booking & Forms',
              icon: '🗓️',
              features: ['Multi-step flows & UX', 'Server-side validation & rate limits', 'Spam/bot protection'],
            },
            {
              title: 'Progressive Web Apps',
              icon: '📱',
              features: ['Offline & installable', 'Service Worker caching', 'Background sync & precache'],
            },
            {
              title: 'Performance & SEO',
              icon: '🔍',
              features: ['Core Web Vitals', 'Structured data, sitemaps, robots', 'Image/CDN optimization'],
            },
            {
              title: 'Automation & Integrations',
              icon: '🤖',
              features: ['Transactional emails', 'Webhooks & Telegram bots', 'PDF generation & e-sign'],
            },
            {
              title: 'Security & Platform',
              icon: '🔒',
              features: ['CSP & security headers', 'CORS & cookie strategies', 'Monitoring & error handling'],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
