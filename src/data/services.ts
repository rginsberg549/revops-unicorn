// Central data file for all RevOps Unicorn services
// 8 AI service capabilities + 3 engagement models

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  category: 'ai-service' | 'engagement';
  icon: string;
  demandLevel?: string;
  demandCount?: string;
  shortDescription: string;
  problem: string;
  solution: string;
  deliverables: string[];
  timeline: string;
  valuationImpact: string;
  pricing: {
    setup?: string;
    ongoing?: string;
    label: string;
  };
  includedIn?: string[]; // slugs of engagement tiers that include this AI service
  seo: {
    title: string;
    description: string;
  };
}

// ─── AI Services (8 capabilities) ─────────────────────────────────────────────

const aiServices: Service[] = [
  {
    slug: 'ai-tax-preparation',
    name: 'AI Tax Preparation & Filing',
    tagline: 'Automate the work that consumes your busiest months',
    category: 'ai-service',
    icon: 'tax',
    demandLevel: 'Very High',
    demandCount: '15 of 44 firms',
    shortDescription: 'Automated tax preparation workflows that reduce manual data entry, catch errors before filing, and free your team for advisory work.',
    problem: 'Tax season dominates your firm\'s calendar. Your team spends hundreds of hours on repetitive data entry, manual calculations, and cross-referencing source documents. Errors slip through when people are exhausted. And every hour spent on compliance is an hour not spent on the advisory work that builds real relationships with clients.',
    solution: 'We implement AI-powered tax preparation workflows that automate data extraction from source documents, populate returns with validated information, and flag anomalies for human review. Your team shifts from data entry to quality review and client advisory—work that\'s more valuable and more satisfying.',
    deliverables: [
      'AI document extraction and data mapping configuration',
      'Automated return population workflows',
      'Error detection and anomaly flagging rules',
      'Quality review checklists and approval workflows',
      'Staff training on AI-assisted preparation process',
      'Performance metrics dashboard (time savings, error rates)',
    ],
    timeline: '4-8 weeks for core implementation',
    valuationImpact: 'Automated tax workflows reduce peak-season burnout, cut error rates by 40-60%, and free your team to deliver advisory services that strengthen client relationships year-round.',
    pricing: {
      setup: '$8,000 - $20,000',
      ongoing: 'Software licensing from $50/user/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Tax Preparation & Filing | RevOps Unicorn',
      description: 'Automate tax preparation workflows for your accounting practice. Reduce manual data entry, catch errors, and free your team for advisory work.',
    },
  },
  {
    slug: 'ai-practice-management',
    name: 'AI Workflow & Practice Management',
    tagline: 'Run your practice on systems, not memory',
    category: 'ai-service',
    icon: 'process',
    demandLevel: 'Very High',
    demandCount: '11 of 44 firms',
    shortDescription: 'Modern practice management systems that automate task assignment, deadline tracking, and workflow routing across your entire firm.',
    problem: 'Your practice runs on tribal knowledge. Work assignments live in the owner\'s head, deadlines are tracked on spreadsheets, and client communication happens through personal email inboxes. When someone is out, things fall through the cracks. And when it\'s time to sell, acquirers see a practice that can\'t function without you.',
    solution: 'We implement and configure modern practice management platforms that centralize workflows, automate task routing, and create visibility across your firm. Every engagement follows a documented process. Every deadline is tracked. Every client interaction is logged. Your practice runs on systems, not on you.',
    deliverables: [
      'Practice management platform selection and configuration',
      'Workflow templates for all recurring engagement types',
      'Automated task assignment and deadline tracking',
      'Client communication templates and sequences',
      'Capacity planning and utilization dashboards',
      'Data migration from legacy systems',
    ],
    timeline: '3-6 weeks for platform deployment',
    valuationImpact: 'Documented, systematic workflows reduce training time for new hires, ensure consistent client service, and free the owner from being the bottleneck. This is the single biggest driver of operational resilience.',
    pricing: {
      setup: '$8,000 - $20,000',
      ongoing: 'Platform licensing from $49/user/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Workflow & Practice Management | RevOps Unicorn',
      description: 'Implement modern practice management systems that automate workflows, track deadlines, and reduce owner dependency in your accounting firm.',
    },
  },
  {
    slug: 'ai-bookkeeping',
    name: 'AI Bookkeeping Automation',
    tagline: 'Turn bookkeeping from a bottleneck into a profit center',
    category: 'ai-service',
    icon: 'chart',
    demandLevel: 'High',
    demandCount: '12 of 44 firms',
    shortDescription: 'AI-powered bookkeeping that automates transaction categorization, reconciliation, and client reporting with human oversight.',
    problem: 'Bookkeeping is essential but labor-intensive. Your team spends hours categorizing transactions, reconciling accounts, and preparing monthly reports. The work is repetitive, error-prone when done manually, and increasingly difficult to staff. Meanwhile, clients expect faster turnaround and more frequent reporting.',
    solution: 'We deploy AI bookkeeping automation that handles transaction categorization, bank reconciliation, and report generation with minimal human intervention. Your team reviews and approves rather than performs. Clients get faster, more accurate reporting. And you can scale your bookkeeping practice without proportional headcount increases.',
    deliverables: [
      'AI bookkeeping platform configuration and integration',
      'Transaction categorization rules and learning models',
      'Automated bank reconciliation workflows',
      'Client reporting templates and delivery schedules',
      'Exception handling and review procedures',
      'Staff redeployment plan (from data entry to review)',
    ],
    timeline: '4-8 weeks per client segment',
    valuationImpact: 'Automated bookkeeping operations show 30-50% margin improvement and enable you to scale recurring revenue without proportional headcount increases.',
    pricing: {
      setup: '$5,000 - $15,000',
      ongoing: 'Per-entity licensing from $69/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Bookkeeping Automation | RevOps Unicorn',
      description: 'Automate bookkeeping with AI-powered transaction categorization, reconciliation, and reporting. Scale your practice without scaling headcount.',
    },
  },
  {
    slug: 'ai-cfo-advisory',
    name: 'AI Financial Analysis & CFO Advisory',
    tagline: 'Deliver the advisory services your best clients deserve',
    category: 'ai-service',
    icon: 'advisor',
    demandLevel: 'High',
    demandCount: '10 of 44 firms',
    shortDescription: 'AI-enhanced financial analysis tools that enable your firm to offer CFO-level advisory services at scale.',
    problem: 'Your most profitable, most valuable client relationships are advisory ones—but delivering consistent, data-driven financial analysis takes expertise and time most firms don\'t have. You know clients want more from you than compliance work, but the tools and processes to deliver advisory services at scale don\'t exist in your current setup.',
    solution: 'We implement AI-powered financial analysis and reporting platforms that transform your client data into actionable insights. Automated dashboards, trend analysis, and benchmarking give your team the tools to deliver CFO-level advisory services without hiring CFOs. This shifts your revenue mix from compliance to advisory—exactly what acquirers pay premium for.',
    deliverables: [
      'Financial analysis platform selection and configuration',
      'Automated KPI dashboards for client industries',
      'Benchmarking and trend analysis templates',
      'Advisory engagement frameworks and pricing models',
      'Cash flow forecasting and scenario planning tools',
      'Staff training on advisory service delivery',
    ],
    timeline: '6-10 weeks for full deployment',
    valuationImpact: 'Firms that shift to 30%+ advisory revenue see significantly higher margins and client retention. Advisory relationships are stickier, more profitable, and more rewarding for your team.',
    pricing: {
      setup: '$10,000 - $25,000',
      ongoing: 'Platform and analytics tools from $100/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Financial Analysis & CFO Advisory | RevOps Unicorn',
      description: 'Enable your accounting practice to deliver CFO-level advisory services at scale with AI-powered financial analysis and reporting tools.',
    },
  },
  {
    slug: 'document-intake',
    name: 'Automated Document Collection',
    tagline: 'Stop chasing clients for paperwork',
    category: 'ai-service',
    icon: 'document',
    demandLevel: 'High',
    demandCount: '8 of 44 firms',
    shortDescription: 'Automated client document collection portals with intelligent reminders, status tracking, and secure upload workflows.',
    problem: 'Every tax season, your team spends weeks chasing clients for documents. Emails go unanswered. Documents arrive in random formats—photos of receipts, password-protected PDFs, paper dropped off in bags. You track who\'s sent what on spreadsheets. It\'s the most frustrating part of every engagement, and it delays everything downstream.',
    solution: 'We implement secure document collection portals with intelligent request lists, automated reminders, and real-time status tracking. Clients see exactly what\'s needed, upload securely, and get confirmation. Your team sees a dashboard of who\'s complete and who needs follow-up—no more chasing.',
    deliverables: [
      'Client document portal setup and branding',
      'Engagement-specific document request templates',
      'Automated reminder sequences (email + SMS)',
      'Real-time collection status dashboards',
      'Secure upload and document organization workflows',
      'Client onboarding guide and training materials',
    ],
    timeline: '2-4 weeks for implementation',
    valuationImpact: 'Streamlined document collection eliminates weeks of chasing during peak season, improves the client experience, and lets your team focus on substantive work instead of logistics.',
    pricing: {
      setup: '$3,000 - $10,000',
      ongoing: 'Portal licensing from $30/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'Automated Document Collection | RevOps Unicorn',
      description: 'Stop chasing clients for documents. Implement automated collection portals with intelligent reminders and secure upload workflows.',
    },
  },
  {
    slug: 'ai-client-portal',
    name: 'AI Client Portal & Communication',
    tagline: 'Give your clients a modern, self-service experience',
    category: 'ai-service',
    icon: 'portal',
    demandLevel: 'Medium-High',
    demandCount: '7 of 44 firms',
    shortDescription: 'Branded client portals with secure messaging, document sharing, and AI-powered response suggestions for common inquiries.',
    problem: 'Client communication happens through a mix of personal emails, phone calls, and maybe a shared drive. There\'s no central place for clients to check their engagement status, access documents, or ask questions. Important messages get lost in inboxes. And when a team member leaves, their client communication history goes with them.',
    solution: 'We deploy branded client portals that centralize all communication, document sharing, and engagement tracking. Clients log in to see their status, download completed work, and send secure messages. AI-powered response suggestions help your team handle common inquiries quickly and consistently.',
    deliverables: [
      'Branded client portal configuration and deployment',
      'Secure messaging and notification system',
      'Document library with version control',
      'Engagement status tracking visible to clients',
      'AI response templates for common inquiries',
      'Client migration plan and communication rollout',
    ],
    timeline: '3-5 weeks for deployment',
    valuationImpact: 'Client portals modernize the client experience, reduce one-off communication overhead, and ensure relationships live in systems rather than individual inboxes.',
    pricing: {
      setup: '$4,000 - $12,000',
      ongoing: 'Portal platform from $40/user/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Client Portal & Communication | RevOps Unicorn',
      description: 'Deploy branded client portals with secure messaging, document sharing, and AI-powered communication for your accounting practice.',
    },
  },
  {
    slug: 'ai-compliance',
    name: 'AI Compliance & Regulatory',
    tagline: 'Stay ahead of regulatory changes automatically',
    category: 'ai-service',
    icon: 'shield',
    demandLevel: 'Medium',
    demandCount: '5 of 44 firms',
    shortDescription: 'AI-powered compliance monitoring that tracks regulatory changes, updates procedures, and ensures your practice stays current.',
    problem: 'Regulatory requirements change constantly—new tax laws, updated filing requirements, evolving professional standards. Keeping your practice current requires constant monitoring, and missing a change can mean costly errors or penalties for clients. Most firms rely on individual CPAs staying current through CE, which is inconsistent and unscalable.',
    solution: 'We implement AI-powered compliance monitoring systems that track regulatory changes relevant to your practice areas, flag required procedure updates, and maintain compliance checklists. Your firm stays current systematically, not through individual effort.',
    deliverables: [
      'Compliance monitoring system configuration',
      'Regulatory change tracking for relevant jurisdictions',
      'Automated procedure update alerts and workflows',
      'Compliance checklist templates by engagement type',
      'Annual compliance review framework',
      'Staff notification and training update protocols',
    ],
    timeline: '4-6 weeks for implementation',
    valuationImpact: 'Systematic compliance processes reduce risk exposure, catch regulatory changes before they become problems, and give clients confidence that their firm is always current.',
    pricing: {
      setup: '$6,000 - $18,000',
      ongoing: 'Monitoring platform from $75/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Compliance & Regulatory | RevOps Unicorn',
      description: 'Implement AI-powered compliance monitoring that tracks regulatory changes and keeps your accounting practice current automatically.',
    },
  },
  {
    slug: 'ai-payroll',
    name: 'AI Payroll Processing',
    tagline: 'Automate the payroll work that ties up your team',
    category: 'ai-service',
    icon: 'recurring',
    demandLevel: 'Medium',
    demandCount: '4 of 44 firms',
    shortDescription: 'AI-enhanced payroll processing that automates calculations, tax filings, and compliance across multiple jurisdictions.',
    problem: 'Payroll processing is high-volume, deadline-driven, and unforgiving of errors. Every pay period requires accurate calculations across varying tax jurisdictions, deduction types, and compliance requirements. Manual processing is risky and time-consuming, but it\'s reliable recurring revenue you can\'t afford to lose.',
    solution: 'We implement AI-enhanced payroll systems that automate calculations, handle multi-jurisdiction tax compliance, and process filings with minimal manual intervention. Your team oversees rather than performs, turning payroll from a time sink into efficient recurring revenue.',
    deliverables: [
      'Payroll platform selection and configuration',
      'Multi-jurisdiction tax calculation automation',
      'Direct deposit and payment processing setup',
      'Compliance filing automation (941s, W-2s, state filings)',
      'Exception handling and approval workflows',
      'Client onboarding and data migration procedures',
    ],
    timeline: '4-6 weeks for implementation',
    valuationImpact: 'Automated payroll services deliver stable, recurring revenue with high client retention. Efficient payroll operations also create natural cross-sell opportunities for advisory services.',
    pricing: {
      setup: '$5,000 - $15,000',
      ongoing: 'Per-employee processing from $4/month',
      label: 'Implementation',
    },
    includedIn: ['transformation-partnership', 'transition-partnership'],
    seo: {
      title: 'AI Payroll Processing | RevOps Unicorn',
      description: 'Automate payroll processing with AI-enhanced calculations, multi-jurisdiction compliance, and streamlined filing for your accounting practice.',
    },
  },
];

// ─── Engagement Models (3 tiers) ──────────────────────────────────────────────

const engagementModels: Service[] = [
  {
    slug: 'practice-clarity',
    name: 'Practice Clarity Assessment',
    tagline: 'Understand where you are and map your path forward',
    category: 'engagement',
    icon: 'star',
    shortDescription: 'A comprehensive 2-3 week assessment that evaluates your practice across all operational dimensions and identifies exactly which AI services will drive the biggest improvements.',
    problem: 'You know your practice needs to modernize, but you don\'t know where to start. Every technology vendor says their tool is essential. Every advisor has a different opinion. You need an honest, comprehensive assessment from specialists who understand accounting practices—not a sales pitch disguised as consulting.',
    solution: 'Our Practice Clarity Assessment evaluates your firm across every dimension that drives operational excellence: technology infrastructure, workflow efficiency, client relationships, team capability, revenue mix, and growth potential. You receive a clear-eyed scorecard and a prioritized roadmap—including which of our 8 AI service areas would deliver the greatest impact for your specific situation.',
    deliverables: [
      'Practice health analysis across 6 operational dimensions',
      'Technology infrastructure audit and gap assessment',
      'Client relationship and revenue concentration analysis',
      'Team capability and dependency assessment',
      'AI readiness scorecard with benchmark comparisons',
      'Prioritized AI service roadmap with ROI projections',
      'Implementation timeline scenarios (quick wins through full transformation)',
    ],
    timeline: '2-3 weeks',
    valuationImpact: 'Understanding your starting point is the foundation. Firms that begin with a structured assessment achieve 20-40% better outcomes than those who jump straight to implementation.',
    pricing: {
      label: '$7,500',
    },
    seo: {
      title: 'Practice Clarity Assessment | RevOps Unicorn',
      description: 'Comprehensive assessment of your accounting practice across every operational dimension. Get an honest scorecard and prioritized AI roadmap in 2-3 weeks.',
    },
  },
  {
    slug: 'transformation-partnership',
    name: 'Transformation Partnership',
    tagline: '12-18 months of hands-on practice transformation',
    category: 'engagement',
    icon: 'growth',
    shortDescription: 'A comprehensive 12-18 month engagement where we implement 3-5 AI services, modernize your operations, and build a practice that runs on systems instead of you.',
    problem: 'You\'ve identified the gaps in your practice—maybe through our Clarity Assessment, maybe through your own analysis. You know technology modernization, workflow documentation, and team development are essential. But implementation is where most firms stall. You don\'t have the internal expertise to select, configure, and deploy these systems while still running your practice.',
    solution: 'We work alongside you for 12-18 months implementing the AI services your practice needs most. This isn\'t advisory from the sidelines—we configure systems, migrate data, train your team, and ensure adoption sticks. Monthly partnership sessions keep everything on track. By the end, your practice runs on documented systems, your team operates independently, and you have the freedom to focus on what matters most.',
    deliverables: [
      'Everything in the Clarity Assessment',
      '3-5 AI service implementations selected for your practice',
      'Complete technology stack modernization',
      'Workflow documentation for all recurring engagements',
      'Team development and cross-training program',
      'Client service enhancement and communication upgrade',
      'Monthly partnership sessions with progress tracking',
      'Quarterly business reviews with ROI tracking',
    ],
    timeline: '12-18 months',
    valuationImpact: 'Transformation Partnership clients typically see 30-45% improvement in operational efficiency through combined effects of AI automation, reduced owner dependency, and systematic workflows. These improvements also translate directly into higher practice value.',
    pricing: {
      label: '$37,500',
    },
    seo: {
      title: 'Transformation Partnership | RevOps Unicorn',
      description: '12-18 month hands-on practice transformation. We implement AI services, modernize operations, and build accounting firms that run on systems instead of the owner.',
    },
  },
  {
    slug: 'transition-partnership',
    name: 'Transition Partnership',
    tagline: 'Full transformation through your successful transition',
    category: 'engagement',
    icon: 'growth',
    shortDescription: 'Comprehensive transformation plus transition support—from modernization through ownership change. We only succeed when you do.',
    problem: 'You\'re planning for the future of your practice and want a single partner who handles everything—technology modernization, operations improvement, team development, and eventually transition planning. You don\'t want to hire separate consultants for each piece. You want someone who understands the whole journey and whose success is tied to yours.',
    solution: 'Our Transition Partnership is the complete journey—every AI service your practice needs, plus strategic planning for your eventual transition. Our success-aligned fee structure means we\'re invested in your outcome, not just our hours. We stay with you through the full arc, building a practice that runs excellently today and is ready for whatever comes next.',
    deliverables: [
      'Everything in the Transformation Partnership',
      'All 8 AI service implementations as needed',
      'Strategic succession and transition planning',
      'Practice documentation and operational playbooks',
      'Client relationship continuity planning',
      'Team retention and development strategy',
      'Transition execution support and coordination',
      'Post-transition assistance (90 days)',
    ],
    timeline: '18-36 months (through transition)',
    valuationImpact: 'Transition Partnership clients build the most resilient, well-documented practices—which also happen to command the highest valuations when it\'s time to transition. The success-aligned fee structure ensures our incentives match yours.',
    pricing: {
      label: '2% of value created',
    },
    seo: {
      title: 'Transition Partnership | RevOps Unicorn',
      description: 'Full practice transformation through successful transition. Success-aligned partnership for accounting firm owners ready for comprehensive support.',
    },
  },
];

// ─── Exports & Helpers ────────────────────────────────────────────────────────

export const services: Service[] = [...aiServices, ...engagementModels];

export function getAIServices(): Service[] {
  return aiServices;
}

export function getEngagementServices(): Service[] {
  return engagementModels;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map(s => s.slug);
}
