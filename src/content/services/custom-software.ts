const customSoftwarePage = {
  slug: 'custom-software',
  navTitle: 'Custom Software',

  hero: {
    eyebrow: '//_DECISION_PAGE',
    titleLine1: 'Custom',
    titleLine2: 'Software.',
    description:
      'Most small businesses do not need custom software. But when your tools stop fitting how you work, or your setup becomes messy, repetitive, and expensive, it can start making practical sense.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See_Use_Cases',
    secondaryCtaHref: '#use-cases',
  },

  intro: {
    eyebrow: '//_WHEN_IT_MAKES_SENSE',
    title: 'Not every business needs it.',
    body: [
      'A lot of businesses are fine with standard tools for a long time. That is normal.',
      'The problem usually starts when you begin stacking spreadsheets, disconnected apps, manual work, and little workarounds just to keep things moving. At that point, the software is no longer helping the workflow — the workflow is adapting to the software.',
      'That is usually where custom software starts becoming a practical decision. Not because “custom” sounds impressive, but because a repeated business problem needs a cleaner system behind it.',
    ],
  },

  signs: [
    'You are using too many tools that do not connect properly.',
    'Important work still depends on spreadsheets or manual entry.',
    'Your workflow does not really fit the software you are paying for.',
    'You keep adapting your business to the tool instead of the other way around.',
    'Your team loses time repeating the same admin steps every day.',
    'You need something simpler, clearer, and built around how you actually work.',
  ],

  useCases: [
    {
      title: 'Operations_Systems',
      desc: 'For businesses that need jobs, scheduling, team coordination, approvals, and customer history in one clear flow.',
    },
    {
      title: 'CRM_&_Automation',
      desc: 'For setups where leads, reminders, follow-ups, and admin work should connect instead of living in separate tools.',
    },
    {
      title: 'Internal_Tools',
      desc: 'For businesses with one specific process that generic software never really handles properly.',
    },
  ],

  comparison: {
    leftTitle: 'Off_The_Shelf',
    leftPoints: [
      'Fast to start',
      'Usually cheaper at the beginning',
      'Works well when the workflow is simple and standard',
      'Good when the business can adapt to the tool',
      'Can become limiting as operations grow or become more specific',
    ],
    rightTitle: 'Custom_Software',
    rightPoints: [
      'Built around the actual workflow',
      'Removes repeated manual steps and workarounds',
      'Can reduce dependence on multiple subscriptions',
      'Makes more sense when the pain is specific and recurring',
      'Gives more control when the business has already outgrown generic tools',
    ],
  },

  process: [
    {
      title: 'Review_The_Setup',
      desc: 'We look at how the business currently works, what tools are in place, and where the workflow starts to break.',
    },
    {
      title: 'Define_The_Logic',
      desc: 'We shape the workflow clearly before building anything, so the system reflects real operations instead of assumptions.',
    },
    {
      title: 'Build_The_Right_Part',
      desc: 'In many cases, the answer is not a huge platform — just the right piece built properly.',
    },
    {
      title: 'Keep_It_Stable',
      desc: 'Once live, the goal is simple: fewer moving parts, less admin, and a setup that stays reliable.',
    },
  ],

  faq: [
    {
      q: 'Do I actually need custom software?',
      a: 'Probably not by default. It only starts making sense when standard tools create daily friction, repeated admin work, or force the business into awkward workarounds.',
    },
    {
      q: 'Can this be done without replacing everything?',
      a: 'Yes. Often the best solution is improving one important part of the workflow instead of rebuilding the entire setup.',
    },
    {
      q: 'Is this only for big businesses?',
      a: 'No. It is more about workflow complexity than company size. A small business with one painful repeated process can benefit more than a larger business with simple operations.',
    },
    {
      q: 'Will this become harder to maintain?',
      a: 'It should be the opposite. The goal is to reduce complexity, not add more of it.',
    },
    {
      q: 'What if I already use tools like a CRM or booking software?',
      a: 'That is usually the starting point. The question is not whether tools exist, but whether they actually fit the way the business works.',
    },
    {
      q: 'Can custom software start small?',
      a: 'Yes. In many cases that is the best path — fix one expensive pain point first, then expand only if it is useful.',
    },
  ],

  cta: {
    eyebrow: '//_START_HERE',
    titleLine1: 'Let’s',
    titleLine2: 'Look.',
    description:
      'If your setup feels harder than it should, describe what is going on and we can figure out whether custom software actually makes sense.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '/connect',
    secondaryCtaLabel: 'View_Services',
    secondaryCtaHref: '/services',
  },
} as const;

export default customSoftwarePage;