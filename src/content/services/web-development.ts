const webDevelopmentPage = {
  slug: 'web-development',
  navTitle: 'Web Development',

  hero: {
    eyebrow: '//_WEB_SYSTEMS',
    titleLine1: 'Web',
    titleLine2: 'Development.',
    description:
      'Websites and web apps built for service businesses that need more than a placeholder online presence. Clear structure, fast performance, and a setup you actually control.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See_Use_Cases',
    secondaryCtaHref: '#use-cases',
  },

  intro: {
    eyebrow: '//_BEYOND_A_WEBSITE',
    title: 'A website should do more than exist.',
    body: [
      'A lot of businesses technically have a website, but it does not really support the business. It loads slowly, depends too much on third parties, is difficult to update, or does not fit the real customer flow.',
      'For service businesses, the website is often part presence, part trust layer, part conversion path, and part operations. It might need to handle lead capture, booking, location pages, forms, content, or customer guidance.',
      'That means web development is not just about visuals. It is about building a structure that supports how the business actually works and how customers actually arrive.',
    ],
  },

  signs: [
    'The current website feels more like a brochure than a working business tool.',
    'Important lead or booking steps are disconnected, unclear, or hard to track.',
    'The business depends too much on listings or third-party platforms.',
    'The website is slow, unstable, or difficult to update safely.',
    'Landing pages, service pages, or local SEO pages are hard to manage.',
    'The site does not really reflect how the business works today.',
  ],

  useCases: [
    {
      title: 'Service_Websites',
      desc: 'Structured websites for service businesses that need clarity, trust, and clean conversion paths.',
    },
    {
      title: 'Web_Apps',
      desc: 'Web-based systems for bookings, dashboards, portals, or internal operational workflows.',
    },
    {
      title: 'SEO_Page_Systems',
      desc: 'Scalable page structures for multi-location, multi-service, or growth-focused content setups.',
    },
  ],

  comparison: {
    leftTitle: 'Template_Sites',
    leftPoints: [
      'Fast to launch',
      'Fine for simple brochure-style presence',
      'Usually limited in structure and flexibility',
      'Often depend on plugins or visual builders',
      'Can become hard to scale or maintain cleanly',
    ],
    rightTitle: 'Custom_Web_Development',
    rightPoints: [
      'Built around the real service flow',
      'Cleaner performance and stronger structure',
      'Easier to scale when content or functionality grows',
      'More control over SEO, forms, and integrations',
      'Better fit when the website is part of the business system',
    ],
  },

  process: [
    {
      title: 'Understand_The_Flow',
      desc: 'We start with how customers arrive, what they need to do, and what the business needs the site to support.',
    },
    {
      title: 'Shape_The_Structure',
      desc: 'Pages, logic, internal linking, and conversion paths are planned before visual polish.',
    },
    {
      title: 'Build_The_System',
      desc: 'The site is built to be fast, stable, and clean to manage — not bloated with unnecessary layers.',
    },
    {
      title: 'Launch_Cleanly',
      desc: 'Deployment, technical setup, and post-launch stability matter just as much as the design itself.',
    },
  ],

  faq: [
    {
      q: 'Is this just for service businesses?',
      a: 'That is the main fit. The structure, language, and decision-making are strongest when the website needs to support a real service workflow.',
    },
    {
      q: 'Can this include booking, forms, or lead routing?',
      a: 'Yes. That is often part of the point — the site should support the actual customer journey, not stop at design.',
    },
    {
      q: 'Can you rebuild an existing site instead of starting from zero?',
      a: 'Yes. Sometimes a rebuild is the cleanest option, but sometimes the right answer is improving and restructuring what already exists.',
    },
    {
      q: 'Is performance part of the work?',
      a: 'Yes. Speed, structure, and technical stability are part of web development, not an afterthought.',
    },
    {
      q: 'Can this support SEO?',
      a: 'Yes. A properly built website gives much better foundations for SEO than a messy or fragile setup.',
    },
    {
      q: 'Do I need a huge site for this to matter?',
      a: 'No. Even small sites benefit when they are clear, fast, and aligned with how the business actually works.',
    },
  ],

  cta: {
    eyebrow: '//_NEXT_STEP',
    titleLine1: 'Let’s',
    titleLine2: 'Build.',
    description:
      'If the current website feels limited, disconnected, or harder to manage than it should be, we can look at the structure and see what should change.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '/connect',
    secondaryCtaLabel: 'View_Services',
    secondaryCtaHref: '/services',
  },
} as const;

export default webDevelopmentPage;