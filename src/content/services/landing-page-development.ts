const landingPageDevelopmentPage = {
  slug: 'landing-page-development',
  navTitle: 'Landing Page Development',

  hero: {
    eyebrow: '//_CAMPAIGN_SYSTEMS',
    titleLine1: 'Landing',
    titleLine2: 'Pages.',
    description:
      'Landing page development for agencies and growth teams that need more than design alone — build, setup, domain and DNS work, server configuration, CRM or GHL integration, and the technical layer around launch.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See_What’s_Included',
    secondaryCtaHref: '#use-cases',
  },

  intro: {
    eyebrow: '//_WHAT_AGENCIES_ACTUALLY_NEED',
    title: 'The page is only part of the job.',
    body: [
      'In practice, landing page work rarely ends at the page itself. Someone still needs to handle the domain, DNS, hosting or server setup, form routing, CRM connection, and whatever launch details are holding the campaign together.',
      'That is where things usually become messy. The design may be done, but the setup around it is fragile, half-documented, or dependent on too many moving parts.',
      'This service is for agencies, media buyers, and growth teams that need the page built properly, launched cleanly, and connected to the right systems without guesswork.',
    ],
  },

  signs: [
    'The landing page build is blocked by domain, DNS, hosting, or server setup.',
    'Forms need to connect to GHL, a CRM, or another tool after submission.',
    'The agency needs someone to handle both page implementation and technical launch.',
    'Tracking, form routing, or webhook flows feel patched together.',
    'WordPress, GHL, or another builder is in play, but the setup around it is fragile.',
    'The campaign needs a cleaner handoff between page, lead capture, and follow-up.',
  ],

  useCases: [
    {
      title: 'Landing_Page_Build',
      desc: 'Development of landing pages in WordPress or custom stacks, depending on the workflow and campaign needs.',
    },
    {
      title: 'Launch_&_Setup',
      desc: 'Domain connection, DNS changes, server or hosting setup, SSL, and the technical steps required for a clean launch.',
    },
    {
      title: 'CRM_&_GHL_Integration',
      desc: 'Form routing, lead delivery, CRM or GoHighLevel integration, and optional follow-up automation where needed.',
    },
  ],

  comparison: {
    leftTitle: 'Patchwork_Setup',
    leftPoints: [
      'Different people handling different technical layers',
      'Harder to trace where launch problems actually come from',
      'More likely to depend on quick fixes and missing documentation',
      'Lead routing and follow-up often become fragile',
      'Campaign handoff feels messy',
    ],
    rightTitle: 'Build_&_Integration',
    rightPoints: [
      'Page and technical setup handled together',
      'Cleaner launch process',
      'Better fit for agencies that need implementation, not just design',
      'CRM, GHL, and forms wired deliberately',
      'Less guesswork after go-live',
    ],
  },

  process: [
    {
      title: 'Review_The_Stack',
      desc: 'We start with the page requirement and the surrounding setup: builder, hosting, domain, DNS, CRM, and follow-up flow.',
    },
    {
      title: 'Define_The_Connections',
      desc: 'Before launch, the page, forms, tracking, and integration points are clarified so nothing important is left vague.',
    },
    {
      title: 'Build_And_Deploy',
      desc: 'The page is implemented, the technical setup is handled, and the launch path is kept clean and documented.',
    },
    {
      title: 'Support_The_Flow',
      desc: 'If automation or system cleanup is needed after launch, that can be layered in without turning the setup into a mess.',
    },
  ],

  faq: [
    {
      q: 'Do you only work with GoHighLevel?',
      a: 'No. GHL is one common setup, but the broader service is landing page build plus technical setup and CRM integration.',
    },
    {
      q: 'Can this include WordPress?',
      a: 'Yes. WordPress landing page development is part of the work when it makes sense for the team or campaign.',
    },
    {
      q: 'Do you handle domain and DNS setup too?',
      a: 'Yes. That is often part of the actual problem, so it should be handled as part of the service.',
    },
    {
      q: 'Can you connect forms to a CRM or automation tool?',
      a: 'Yes. Lead routing, GHL, CRM integration, and related follow-up flows are part of the implementation layer.',
    },
    {
      q: 'Is this for business owners or agencies?',
      a: 'Primarily agencies, media buyers, and growth teams that need landing pages built and launched properly.',
    },
    {
      q: 'Can this include post-launch automation?',
      a: 'Yes, where useful. The goal is not “automation for the sake of it,” but a cleaner campaign flow after the page goes live.',
    },
  ],

  cta: {
    eyebrow: '//_CAMPAIGN_READY',
    titleLine1: 'Let’s',
    titleLine2: 'Launch.',
    description:
      'If you need a landing page built, set up, connected, and launched without patchwork, send over the stack and the brief.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '/connect',
    secondaryCtaLabel: 'View_Services',
    secondaryCtaHref: '/services',
  },
} as const;

export default landingPageDevelopmentPage;