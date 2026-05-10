import { z } from "zod";

/* =========================
   SHARED SEO SCHEMAS
========================= */

export const SeoOverrideSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  image: z.string().min(1).optional(),
  keywords: z.array(z.string().min(1)).optional(),
});

export const PageSeoConfigSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1).optional(),
  keywords: z.array(z.string().min(1)).optional(),
});

export const SiteSeoConfigSchema = z.object({
  siteName: z.string().min(1),
  siteUrl: z.string().min(1),
  defaultTitle: z.string().min(1),
  titleTemplate: z.string().min(1),
  defaultDescription: z.string().min(1),
  defaultLocale: z.string().min(1),
  defaultOgImage: z.object({
    url: z.string().min(1),
    width: z.number().optional(),
    height: z.number().optional(),
    alt: z.string().optional(),
  }),
});

/* =========================
   PROJECTS
========================= */

export const ProjectResultSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const ProjectGalleryViewSchema = z.object({
  label: z.string().min(1),
  image: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});

export const ProjectGalleryItemSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('single'),
    image: z.string().min(1),
    alt: z.string().min(1),
    title: z.string().min(1).optional(),
    caption: z.string().min(1).optional(),
    href: z.string().min(1).optional(),
    hrefLabel: z.string().min(1).optional(),
    emphasis: z.enum(['primary', 'secondary']).optional(),
    fit: z.enum(['contain', 'cover']).optional(),
    kind: z
      .enum([
        'deployment',
        'engine',
        'architecture',
        'integration',
        'workflow',
        'document',
        'conversion',
        'seo'
      ])
      .optional(),
  }),
  z.object({
    type: z.literal('composite'),
    title: z.string().min(1),
    intro: z.string().min(1).optional(),
    kind: z
      .enum([
        'deployment',
        'engine',
        'architecture',
        'integration',
        'workflow',
        'document',
      ])
      .optional(),
    emphasis: z.enum(['primary', 'secondary']).optional(),
    fit: z.enum(['contain', 'cover']).optional(),
    views: z.array(ProjectGalleryViewSchema).min(2),
  }),
]);

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  id: z.string().min(1),
  title: z.string().min(1),
  clientName: z.string().min(1),
  category: z.string().min(1),
  mainImage: z.string().min(1),

  summary: z.string().min(1),
  beforeState: z.string().min(1),
  builtFor: z.string().min(1),

  serviceSlug: z.string().min(1),
  serviceLabel: z.string().min(1),

  relevanceTitle: z.string().min(1),
  relevanceBody: z.string().min(1),

  metric: z.string().min(1),
  duration: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),

  challenge: z.string().min(1),
  solution: z.string().min(1),
  testimonial: z.string().min(1),

  results: z.array(ProjectResultSchema).min(1),

  gallery: z.array(ProjectGalleryItemSchema).optional(),
  galleryTitle: z.string().min(1).optional(),
  galleryIntro: z.string().min(1).optional(),

  heroImageFit: z.enum(['contain', 'cover']).optional(),
  heroImageMuted: z.boolean().optional(),

  liveUrl: z.string().min(1).optional(),
  liveLabel: z.string().min(1).optional(),
  liveRel: z.enum(['nofollow', 'dofollow']).optional(),

  seo: SeoOverrideSchema.optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

/* =========================
   INTEL / BLOG
========================= */

export const IntelAuthorSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
});

export const IntelFrontmatterSchema = z.object({
  slug: z.string().min(1),
  id: z.string().min(1),
  title: z.string().min(1),
  date: z.string().min(1),
  category: z.string().min(1),
  readingTime: z.string().min(1),
  summary: z.string().min(1),
  author: IntelAuthorSchema,
  seo: SeoOverrideSchema.optional(),
});

export const IntelPostSchema = IntelFrontmatterSchema.extend({
  body: z.string().min(1),
});

/* =========================
   SITE CONFIG
========================= */

export const SiteConfigSchema = z.object({
  brandName: z.string().min(1),
  email: z.string().min(1),
  availabilityLabel: z.string().min(1),
  socialLinks: z.object({
    github: z.string().min(1),
    linkedin: z.string().min(1),
    x: z.string().min(1),
    instagram: z.string().min(1),
  }),
  directLinks: z.object({
    whatsapp: z.string().min(1),
    telegram: z.string().min(1),
  }),
});

/* =========================
   HOME CONTENT
========================= */

export const HeroSchema = z.object({
  statusLabel: z.string().min(1),
  versionLabel: z.string().min(1),
  titleMain: z.string().min(1),
  titleAccent: z.string().min(1),
  description: z.string().min(1),
  primaryCtaLabel: z.string().min(1),
  primaryCtaHref: z.string().min(1),
  secondaryCtaLabel: z.string().min(1),
  secondaryCtaHref: z.string().min(1),
  founderImage: z.string().min(1),
  founderAlt: z.string().min(1),
  founderBadgeLabel: z.string().min(1),
  founderBadgeValue: z.string().min(1),
});

export const AboutStatSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const AboutSchema = z.object({
  eyebrow: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  titleLine3: z.string().min(1),
  intro: z.string().min(1),
  body: z.string().min(1),
  stats: z.array(AboutStatSchema).min(1),
});

export const ServiceSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  code: z.string().min(1),
  href: z.string().min(1),
  icon: z.enum(["server", "zap", "smartphone", "barchart3"]),
});

export const ProcessStepSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  icon: z.enum(["cpu", "zap", "shield", "repeat"]),
});

export const TestimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  text: z.string().min(1),
  metric: z.string().min(1),
  tag: z.string().min(1),
});

export const FaqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
  tag: z.string().min(1),
});

export const ImpactSchema = z.object({
  eyebrow: z.string().min(1),
  mainValue: z.string().min(1),
  badge: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  metricOneLabel: z.string().min(1),
  metricOneValue: z.string().min(1),
  metricTwoLabel: z.string().min(1),
  metricTwoValue: z.string().min(1),
  metricTwoStatus: z.string().min(1),
});

export const ContactSchema = z.object({
  eyebrow: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  description: z.string().min(1),
  whatsappLabel: z.string().min(1),
  telegramLabel: z.string().min(1),
  formButtonLabel: z.string().min(1),
});

export const LogoItemSchema = z.string().min(1);
export const ArsenalItemSchema = z.string().min(1);

export const IndustryFocusItemSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  detail: z.string().min(1),
});

export const TechStackGroupSchema = z.object({
  area: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
});

export const StudioSchema = z.object({
  image: z.string().min(1),
  imageAlt: z.string().min(1),
  label: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  description: z.string().min(1),
  socialLinks: z.array(
    z.object({
      label: z.string().min(1),
      shortLabel: z.string().min(1),
      href: z.string().min(1),
    })
  ).min(1),
  codeFragment: z.string().min(1),
});

export const VisualArchiveItemSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  size: z.string().min(1),
  img: z.string().min(1),
  tag: z.string().min(1),
  desc: z.string().min(1),
  href: z.string().min(1).optional(),
  hrefLabel: z.string().min(1).optional(),
  linkType: z.enum(["internal", "external"]).optional(),
});

export const HomePageSchema = z.object({
  hero: HeroSchema,
  about: AboutSchema,
  services: z.array(ServiceSchema).min(1),
  process: z.array(ProcessStepSchema).min(1),
  impact: ImpactSchema,
  testimonials: z.array(TestimonialSchema).min(1),
  faqs: z.array(FaqSchema).min(1),
  contact: ContactSchema,

  logos: z.array(LogoItemSchema).min(1),
  arsenal: z.array(ArsenalItemSchema).min(1),
  industryFocus: z.array(IndustryFocusItemSchema).min(1),
  techStack: z.array(TechStackGroupSchema).min(1),
  studio: StudioSchema,
  visualArchive: z.array(VisualArchiveItemSchema).min(1),
});

/* =========================
   ARCHIVE PAGE
========================= */

export const ArchiveItemSchema = z.object({
  year: z.string().min(1),
  title: z.string().min(1),
  client: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  link: z.string().min(1),
});

export const ArchivePageSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  searchPlaceholder: z.string().min(1),
  emptyStateLabel: z.string().min(1),
  footerIdleLabel: z.string().min(1),
  footerFilterPrefix: z.string().min(1),
  lastSync: z.string().min(1),
  items: z.array(ArchiveItemSchema).min(1),
  seo: SeoOverrideSchema.optional(),
});

/* =========================
   CAPABILITIES PAGE
========================= */

export const CapabilityCardSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  icon: z.enum(["layers", "cpu", "shield"]),
});

export const CapabilityStackGroupSchema = z.object({
  category: z.string().min(1),
  tools: z.array(z.string().min(1)).min(1),
});

export const CapabilityStatSchema = z.object({
  label: z.string().min(1),
  val: z.string().min(1),
  icon: z.enum(["activity", "globe", "lock"]),
});

export const CapabilityMethodStepSchema = z.object({
  label: z.string().min(1),
  desc: z.string().min(1),
});

export const CapabilitiesPageSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  eyebrow: z.string().min(1),
  inventoryLabel: z.string().min(1),
  methodologyEyebrow: z.string().min(1),
  methodologyTitle: z.string().min(1),
  methodologyQuote: z.string().min(1),
  ctaTitle: z.string().min(1),
  ctaLabel: z.string().min(1),
  cards: z.array(CapabilityCardSchema).min(1),
  stack: z.array(CapabilityStackGroupSchema).min(1),
  stats: z.array(CapabilityStatSchema).min(1),
  methodSteps: z.array(CapabilityMethodStepSchema).min(1),
  seo: SeoOverrideSchema.optional(),
});

/* =========================
   CONNECT PAGE
========================= */

export const ConnectPageSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  statusLabel: z.string().min(1),
  linkLabel: z.string().min(1),
  latencyLabel: z.string().min(1),
  instructionsTitle: z.string().min(1),
  instructionsBody: z.string().min(1),
  socialLinks: z.array(
    z.object({
      label: z.string().min(1),
      href: z.string().min(1),
    })
  ).min(1),
  identifierLabel: z.string().min(1),
  identifierPlaceholder: z.string().min(1),
  emailLabel: z.string().min(1),
  emailPlaceholder: z.string().min(1),
  briefLabel: z.string().min(1),
  briefPlaceholder: z.string().min(1),
  submitLabel: z.string().min(1),
  footerLabel: z.string().min(1),
  footerBuild: z.string().min(1),
  seo: SeoOverrideSchema.optional(),
});

/* =========================
   SERVICES
========================= */

export const ServiceHeroSchema = z.object({
  eyebrow: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  description: z.string().min(1),
  primaryCtaLabel: z.string().min(1),
  primaryCtaHref: z.string().min(1),
  secondaryCtaLabel: z.string().min(1),
  secondaryCtaHref: z.string().min(1),
});

export const ServiceIntroSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.array(z.string().min(1)).min(1),
});

export const ServiceGridItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
});

export const ServiceComparisonSchema = z.object({
  leftTitle: z.string().min(1),
  leftPoints: z.array(z.string().min(1)).min(1),
  rightTitle: z.string().min(1),
  rightPoints: z.array(z.string().min(1)).min(1),
});

export const ServiceProcessStepSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
});

export const ServiceFaqItemSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

export const ServiceCtaSchema = z.object({
  eyebrow: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  description: z.string().min(1),
  primaryCtaLabel: z.string().min(1),
  primaryCtaHref: z.string().min(1),
  secondaryCtaLabel: z.string().min(1).optional(),
  secondaryCtaHref: z.string().min(1).optional(),
});

export const ServicePageSchema = z.object({
  slug: z.string().min(1),
  navTitle: z.string().min(1),
  hero: ServiceHeroSchema,
  intro: ServiceIntroSchema,
  signs: z.array(z.string().min(1)).min(1),
  useCases: z.array(ServiceGridItemSchema).min(1),
  comparison: ServiceComparisonSchema,
  process: z.array(ServiceProcessStepSchema).min(1),
  faq: z.array(ServiceFaqItemSchema).min(1),
  cta: ServiceCtaSchema,
});

/* =========================
   TYPES
========================= */

export type SeoOverride = z.infer<typeof SeoOverrideSchema>;
export type PageSeoConfig = z.infer<typeof PageSeoConfigSchema>;
export type SiteSeoConfig = z.infer<typeof SiteSeoConfigSchema>;
export type ProjectGalleryItem = z.infer<typeof ProjectGalleryItemSchema>;
export type ProjectResult = z.infer<typeof ProjectResultSchema>;
export type Project = z.infer<typeof ProjectSchema>;


export type IntelAuthor = z.infer<typeof IntelAuthorSchema>;
export type IntelFrontmatter = z.infer<typeof IntelFrontmatterSchema>;
export type IntelPost = z.infer<typeof IntelPostSchema>;

export type SiteConfig = z.infer<typeof SiteConfigSchema>;

export type HomePage = z.infer<typeof HomePageSchema>;
export type HeroContent = z.infer<typeof HeroSchema>;
export type AboutContent = z.infer<typeof AboutSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type ProcessStep = z.infer<typeof ProcessStepSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Faq = z.infer<typeof FaqSchema>;
export type ImpactContent = z.infer<typeof ImpactSchema>;
export type ContactContent = z.infer<typeof ContactSchema>;

export type LogoItem = z.infer<typeof LogoItemSchema>;
export type ArsenalItem = z.infer<typeof ArsenalItemSchema>;
export type IndustryFocusItem = z.infer<typeof IndustryFocusItemSchema>;
export type TechStackGroup = z.infer<typeof TechStackGroupSchema>;
export type StudioContent = z.infer<typeof StudioSchema>;
export type VisualArchiveItem = z.infer<typeof VisualArchiveItemSchema>;

export type ArchiveItem = z.infer<typeof ArchiveItemSchema>;
export type ArchivePageContent = z.infer<typeof ArchivePageSchema>;

export type CapabilityCard = z.infer<typeof CapabilityCardSchema>;
export type CapabilityStackGroup = z.infer<typeof CapabilityStackGroupSchema>;
export type CapabilityStat = z.infer<typeof CapabilityStatSchema>;
export type CapabilityMethodStep = z.infer<typeof CapabilityMethodStepSchema>;
export type CapabilitiesPageContent = z.infer<typeof CapabilitiesPageSchema>;

export type ConnectPageContent = z.infer<typeof ConnectPageSchema>;
export type ServiceHeroContent = z.infer<typeof ServiceHeroSchema>;
export type ServiceIntroContent = z.infer<typeof ServiceIntroSchema>;
export type ServiceGridItem = z.infer<typeof ServiceGridItemSchema>;
export type ServiceComparisonContent = z.infer<typeof ServiceComparisonSchema>;
export type ServiceProcessStep = z.infer<typeof ServiceProcessStepSchema>;
export type ServiceFaqItem = z.infer<typeof ServiceFaqItemSchema>;
export type ServiceCtaContent = z.infer<typeof ServiceCtaSchema>;
export type ServicePageContent = z.infer<typeof ServicePageSchema>;