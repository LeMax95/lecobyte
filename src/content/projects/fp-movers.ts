export const fpMoversProject = {
  slug: "moviq",
  id: "PRJ_002",
  title: "Moviq",
  clientName: "Moving Company (Private Deployment)",
  category: "Operations Management System for Service Business",

  mainImage: "/projects/moviq/moviq-dashboard-operations-system.webp",

  summary:
    "A custom operations management system built for a moving company to replace spreadsheets, chats, and manual coordination with a structured workflow for jobs, scheduling, crews, execution, and internal visibility.",

  beforeState:
    "The business was running operations through a mix of phone calls, WhatsApp messages, spreadsheets, and memory. As job volume increased, coordination became harder: scheduling conflicts appeared, job details were scattered, responsibilities were unclear, and important context was often lost.\n\nThere was no single system where jobs, crews, schedules, and customer information were structured together, which made scaling the business increasingly chaotic.",

  builtFor:
    "Moving company / local service business with growing operational complexity",

  serviceSlug: "custom-software",
  serviceLabel: "Custom Software",

  relevanceTitle: "If your business works — but the system behind it doesn’t.",
  relevanceBody:
    "This kind of system becomes relevant when a service business starts growing beyond what spreadsheets, chats, and basic tools can handle. If jobs, scheduling, teams, and customer information are spread across multiple places, the issue is not lack of effort — it is lack of structure. Custom software becomes the layer that organizes operations into a clear, scalable workflow.",

  metric: "Manual coordination replaced",
  duration: "System design & implementation",

  tech: [
    "Node.js Backend",
    "PostgreSQL",
    "Express API",
    "Operational Workflow Modeling",
    "Event System",
    "Notification System",
    "Telegram Integration",
  ],

  challenge:
    "The main challenge was not technical complexity alone, but translating real-world moving operations into a structured system.\n\nA moving business is not just a list of jobs. Each job includes timing, crew coordination, logistics, pricing context, customer constraints, documents, and execution details.\n\nWithout structure, all of this lives across chats, notes, and memory.",

  solution:
    "Moviq was built as a custom operations platform where each job becomes a structured entity instead of a scattered set of notes.\n\nJobs move through a defined lifecycle, from creation to execution and completion, with scheduling, crew assignment, tracking, financials, and documentation all tied to the same system.\n\nThis transforms operations from reactive coordination into a controlled, scalable process.",

  testimonial:
    "We stopped relying on memory and messages. Everything is now in one place, and we actually see what’s happening in the business.",

  results: [
    { label: "Coordination", value: "Centralized" },
    { label: "Scheduling", value: "Structured" },
    { label: "Manual_Work", value: "Reduced" },
    { label: "Operational_Clarity", value: "Improved" },
  ],

  heroImageFit: "cover",
  heroImageMuted: false,

  galleryTitle: "System_Views_And_Operational_Flows",
  galleryIntro:
    "Selected product views showing how jobs, scheduling, crew coordination, execution, and financial control are structured inside the system.",

  gallery: [
    // HERO
    {
      type: "single",
      image: "/projects/moviq/moviq-dashboard-operations-system.webp",
      alt: "Moving company operations dashboard showing jobs, revenue, scheduling, and live operational metrics",
      title: "Operations_Dashboard",
      caption:
        "Centralized dashboard showing jobs, revenue, and operational activity.",
      kind: "deployment",
      emphasis: "primary",
      fit: "cover",
    },

    // JOB STRUCTURE
    {
      type: "composite",
      title: "Job_Structure",
      intro:
        "How each job is structured internally, combining logistics, execution tracking, financials, and damage handling.",
      kind: "engine",
      fit: "contain",
      views: [
        {
          label: "Overview",
          image: "/projects/moviq/moviq-job-overview-filtering.webp",
          alt: "Moving job overview screen with customer details, scheduling, and contract context",
        },
        {
          label: "Execution",
          image: "/projects/moviq/moviq-job-execution-context.webp",
          alt: "Job execution timeline with crew progress tracking for a moving company workflow",
        },
        {
          label: "Financials",
          image: "/projects/moviq/moviq-job-financials.webp",
          alt: "Moving job financial summary with totals, charges, and extra service costs",
        },
        {
          label: "Damage",
          image: "/projects/moviq/moviq-job-damage-tracking.webp",
          alt: "Damage tracking interface with photos, notes, and issue logs for moving jobs",
        },
      ],
    },

    // JOB CREATION
    {
      type: "composite",
      title: "Job_Creation",
      intro:
        "How jobs are created with scheduling, route definition, and assignment.",
      kind: "workflow",
      fit: "contain",
      views: [
        {
          label: "Scheduling",
          image:
            "/projects/moviq/moviq-job-create-scheduling-calendar.webp",
          alt: "Job creation calendar for moving company scheduling and crew planning",
        },
        {
          label: "Route",
          image: "/projects/moviq/moviq-job-create-route-details.webp",
          alt: "Route planning screen with pickup location, stops, and dropoff details for a moving job",
        },
        {
          label: "Assignment",
          image: "/projects/moviq/moviq-job-create-assignment.webp",
          alt: "Crew assignment interface for dispatching a moving team and operational notes",
        },
      ],
    },

    // FIELD FLOW
    {
      type: "composite",
      title: "Field_Execution_Flow",
      intro:
        "Step-by-step workflow used by field crews during real job execution.",
      kind: "deployment",
      fit: "contain",
      views: [
        {
          label: "Assigned Jobs",
          image: "/projects/moviq/moviq-field-assigned-jobs.webp",
          alt: "Mobile field app showing assigned moving jobs for crew members",
        },
        {
          label: "Job Context",
          image: "/projects/moviq/moviq-field-job-context.webp",
          alt: "Field execution screen showing moving job context, customer details, and task information",
        },
        {
          label: "Contracts",
          image: "/projects/moviq/moviq-field-contract-confirmation.webp",
          alt: "Contract confirmation step in the moving crew mobile workflow before job execution",
        },
      ],
    },

    // EXECUTION ENGINE
    {
      type: "composite",
      title: "Execution_Engine",
      intro:
        "Real-time job execution interface used in the field.",
      kind: "engine",
      emphasis: "primary",
      fit: "contain",
      views: [
        {
          label: "Timer",
          image: "/projects/moviq/moviq-field-execution-timer.webp",
          alt: "Real-time execution timer used by moving crews during active jobs",
        },
        {
          label: "Add Stop",
          image: "/projects/moviq/moviq-field-stop-configuration.webp",
          alt: "Stop configuration screen for adding delivery or service stops during a moving job",
        },
        {
          label: "Stops",
          image: "/projects/moviq/moviq-field-stops-management.webp",
          alt: "Stops management interface for handling multiple locations in a moving workflow",
        },
        {
          label: "Extras",
          image: "/projects/moviq/moviq-field-extras-supplies.webp",
          alt: "Extras and supplies screen for recording additional services and materials on a moving job",
        },
      ],
    },

    // DAMAGE (FIELD)
    {
      type: "single",
      image: "/projects/moviq/moviq-field-damage-recording.webp",
      alt: "Mobile damage recording interface for documenting issues during a moving job",
      title: "Damage_Recording",
      kind: "engine",
      fit: "contain",
    },

    // BILLING
    {
      type: "single",
      image: "/projects/moviq/moviq-field-completion-billing.webp",
      alt: "Final billing and payment summary screen for completed moving jobs",
      title: "Completion_And_Billing",
      kind: "document",
      fit: "contain",
    },

    // NOTIFICATIONS
    {
      type: "single",
      image: "/projects/moviq/event_and_notification_system.webp",
      alt: "Event and notification system showing moving job updates and operational alerts",
      title: "Event_And_Notification_System",
      kind: "engine",
      fit: "contain",
    },
  ],

  seo: {
    title: "Moving Company Software Case Study | Operations System",
    description:
      "Custom moving company operations system managing jobs, scheduling, crews, and execution in one structured workflow.",
    keywords: [
      "moving company software",
      "operations management system",
      "job scheduling software",
      "dispatch system",
      "service business automation",
    ],
    image: "/projects/moviq/moviq-dashboard-operations-system.webp",
  },
} as const;

export default fpMoversProject;