const systemRecoveryPage = {
  slug: 'system-recovery',
  navTitle: 'System Recovery',

  hero: {
    eyebrow: '//_RECOVERY_LAYER',
    titleLine1: 'System',
    titleLine2: 'Recovery.',
    description:
      'For businesses dealing with unstable hosting, fragile setups, broken migrations, or websites held together by too many quick fixes. The goal is to clean it up and make it reliable again.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See_Use_Cases',
    secondaryCtaHref: '#use-cases',
  },

  intro: {
    eyebrow: '//_WHEN_SETUPS_GO_SIDEWAYS',
    title: 'A lot of technical setups work until they suddenly do not.',
    body: [
      'Sometimes the problem is obvious: bad hosting, domain issues, a broken deployment, or a platform that was never stable to begin with.',
      'Sometimes it is less dramatic but just as expensive: scattered tools, unclear ownership, fragile integrations, and a system that nobody really trusts anymore.',
      'System recovery is about taking a messy technical foundation and turning it into something clean, stable, and easier to manage.',
    ],
  },

  signs: [
    'The website or system depends on fragile hosting or unclear infrastructure.',
    'Different parts of the setup were patched together over time without a clean plan.',
    'The business does not really trust the current technical foundation.',
    'Migrations, domain changes, or hosting changes feel risky every time.',
    'There is too much hidden dependency on one provider, one plugin, or one fragile workaround.',
    'You need stability before you can build anything else confidently.',
  ],

  useCases: [
    {
      title: 'Hosting_Recovery',
      desc: 'Moving away from unstable hosting or fragile account setups into something safer and easier to manage.',
    },
    {
      title: 'System_Cleanup',
      desc: 'Reducing unnecessary moving parts, removing brittle dependencies, and clarifying what the system actually relies on.',
    },
    {
      title: 'Rebuild_The_Base',
      desc: 'When the setup is too fragile to keep patching, rebuilding the foundation properly so future work has somewhere solid to live.',
    },
  ],

  comparison: {
    leftTitle: 'Quick_Fixes',
    leftPoints: [
      'Can buy time temporarily',
      'Often keep the same hidden fragility in place',
      'Make the setup harder to understand over time',
      'Increase fear around changes and migrations',
      'Rarely improve long-term stability',
    ],
    rightTitle: 'System_Recovery',
    rightPoints: [
      'Clarifies what is actually broken',
      'Reduces dependency on fragile pieces',
      'Creates a cleaner technical base',
      'Makes future changes safer',
      'Restores trust in the system behind the business',
    ],
  },

  process: [
    {
      title: 'Assess_The_State',
      desc: 'First we look at what exists, what is fragile, and what is creating actual risk or repeated instability.',
    },
    {
      title: 'Stabilize_The_Base',
      desc: 'The first goal is not expansion — it is removing the immediate fragility and restoring reliability.',
    },
    {
      title: 'Rebuild_Where_Needed',
      desc: 'If patching is not enough, the broken layer is rebuilt cleanly instead of endlessly worked around.',
    },
    {
      title: 'Leave_It_Clearer',
      desc: 'The result should be easier to manage, easier to trust, and much less stressful to touch later.',
    },
  ],

  faq: [
    {
      q: 'Is this only for websites?',
      a: 'No. Websites are one common case, but the real focus is the technical system behind the business and whether it can be trusted.',
    },
    {
      q: 'Can this include hosting migration?',
      a: 'Yes. Hosting and infrastructure cleanup are often central to the work.',
    },
    {
      q: 'What if I am not sure what is actually broken?',
      a: 'That is normal. Part of the job is figuring out where the instability is really coming from.',
    },
    {
      q: 'Do you always rebuild everything?',
      a: 'No. Sometimes the right move is a focused cleanup or migration. Full rebuild only makes sense when the base is too fragile to keep.',
    },
    {
      q: 'Can you work on existing setups made by other people?',
      a: 'Yes. That is often exactly the situation.',
    },
    {
      q: 'Is this only for emergencies?',
      a: 'Not necessarily. It is also useful when the setup still works, but nobody really trusts it anymore.',
    },
  ],

  cta: {
    eyebrow: '//_RESTORE_STABILITY',
    titleLine1: 'Let’s',
    titleLine2: 'Stabilize.',
    description:
      'If the current setup feels fragile, unclear, or risky to keep building on, send over the situation and we can look at the safest next move.',
    primaryCtaLabel: 'Start_Conversation',
    primaryCtaHref: '/connect',
    secondaryCtaLabel: 'View_Services',
    secondaryCtaHref: '/services',
  },
} as const;

export default systemRecoveryPage;