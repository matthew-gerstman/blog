import type { Project } from './types/resume.types';

/**
 * Map of all projects by their unique key.
 * Keys are generated as: {jobId}-{title-slug}
 */
export const projectsMap: Record<string, Project> = {
  'datadog-notebooks-2-0': {
    title: 'Notebooks 2.0',
    emoji: '📓',
    year: '2023-2024',
    startYear: 2023,
    endYear: 2024,
    role: 'Engineering Manager',
    description:
      "First-time engineering manager leading the rebuild of Datadog's collaborative rich text editor. Focused on team growth, customer engagement, and enabling technical excellence. Built customer council with rapid feedback loop.",
    impact:
      'Shipped complete Notebooks 2.0 rebuild with rich text editing and real-time multiplayer collaboration. Grew team from 4 to 6 engineers with 2 promotions. Established customer council that accelerated feedback cycles.',
    technologies: [
      'ProseMirror',
      'CRDTs (Yjs)',
      'WebSockets',
      'React',
      'Rich Text Editing',
      'Multiplayer Collaboration',
      'TypeScript',
      'Team Leadership',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Team Culture & Development',
            text: 'Grew team from 4 to 6 engineers with 2 promotions; established daily pairing and weekly learning sessions; created environment where people wanted to work together and help each other succeed. My favorite part of the job was coach, I aspired to be Ted Lasso.',
          },
          {
            prefix: 'Feature Development Oversight',
            text: 'Oversaw development of: Rich text editor with ProseMirror; Real-time multiplayer with CRDTs (Yjs) and WebSockets; Inlined widgets; Copy/paste; Toolbar and formatting; List indentation; Code blocks with syntax highlighting; Comments and version history; Inline tables; Print mode (personally implemented); Markdown import/export for API users',
          },
          {
            prefix: 'Customer Engagement',
            text: 'Built customer council with shared Slack channels; identified high-usage customers and coordinated with CSMs. Spoke with multiple external customers per week during rollout. Rapidly implemented feedback—nothing a customer loves more than hearing their feature request was implemented in 48 hours. Product manager was focused elsewhere for 6 months; I handled prioritization and release management. Established principle: ship to someone new every week. We slowed down for customer feedback and sped up where it didn\'t apply. For example: released to 98% of customers while finishing API support for the remaining 2%. When a customer didn\'t like keyboard-first design, we paused for a week to implement "Bring Back Buttons" initiative.',
          },
        ],
      },
    ],
    key: 'datadog-notebooks-2-0',
    emoji: '📓',
  },
  'datadog-dashboard-reporting-pdf-export': {
    title: 'Dashboard Reporting & PDF Export',
    emoji: '📊',
    year: '2022-2023',
    startYear: 2022,
    endYear: 2023,
    role: 'Software Engineer',
    description:
      "Built Datadog's report-printer node service from scratch—offline dashboard snapshots with 98%+ widget fidelity. Designed client/server rendering handshake, chose Puppeteer, established Node.js patterns now used across 15+ services.",
    impact:
      'Shipped to all customers with 95%+ widget fidelity (up from 70%). Created new revenue stream and permanent team. Node.js foundation code became company standard.',
    technologies: [
      'Node.js',
      'Puppeteer',
      'React',
      'TypeScript',
      'PDF Generation',
      'gRPC',
      'Queue Systems',
      'Smithing',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Architecture & Design',
            text: 'Prototyped for 6 weeks with weekly reviews; designed stateless queue-based system with heartbeat monitoring; built client/server handshake to coordinate React rendering, data fetching, viewport resizing, and snapshot timing',
          },
          {
            prefix: 'Rendering Engine Selection',
            text: 'Evaluated Selenium, Puppeteer, and Cypress; chose Puppeteer for browser-fidelity PDFs and thin Chrome wrapper; interviewed engineers about Selenium pain to inform decision',
          },
          {
            prefix: 'Quality & Fidelity',
            text: 'Created PrintModeAdapter to aggregate widget status; collaborated with Univiz team to expose fetch completion signals; solved split graph rendering bugs with proxy context providers',
          },
          {
            prefix: 'Service Foundation',
            text: 'Wrote all Node.js HTTP/gRPC communication code, tests, and documentation (pre-AI era); established patterns now foundational for 15+ services; implemented OBO token authentication with Puppeteer request interception',
          },
          {
            prefix: 'Smithing',
            text: 'Reduced dev loop from 30min to 1min by automating tooling',
          },
          {
            prefix: 'Performance & Constraints',
            text: 'Navigated security restrictions on Node.js infrastructure access; optimized print mode rendering by disabling interactivity; handled edge cases (note widgets, image security risks, file size bloat)',
          },
        ],
      },
      {
        title: 'Leadership',
        content: [
          'Built consensus through prototyping and stakeholder reviews',
          'Mentored backend team on browser implementation',
          'Transitioned to Notebooks management as project reached production',
        ],
      },
    ],
    key: 'datadog-dashboard-reporting-pdf-export',
    emoji: '📊',
  },
  'datadog-integration-testing-framework': {
    title: 'Integration Testing Framework',
    emoji: '🧪',
    year: '2023',
    startYear: 2023,
    endYear: 2023,
    role: 'Software Engineer',
    description:
      "Pioneered integration testing framework for Datadog's dashboard platform, enabling reliable testing of complex multi-widget interactions (drag and drop, resizing) that were previously untestable. Built comprehensive test suite covering critical user workflows and edge cases.",
    impact:
      'Caught regressions before production that unit tests missed. Enabled confident refactoring of complex dashboard code. Set standard for integration testing across frontend teams. Reduced bug escape rate for dashboard features.',
    technologies: [
      'TypeScript',
      'React',
      'Testing Frameworks',
      'Integration Testing',
      'Data Dense UIs',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Framework Design',
            text: 'Built testing infrastructure supporting complex dashboard scenarios (widget interactions, time range changes, template variables, cross-widget dependencies)',
          },
          {
            prefix: 'Test Coverage',
            text: 'Wrote comprehensive integration tests for critical paths: dashboard loading, widget editing, template variable propagation, and multi-widget coordination',
          },
          {
            prefix: 'Developer Experience',
            text: 'Created clear patterns and documentation for writing integration tests, enabling other engineers to expand coverage. Balanced test reliability with execution speed',
          },
        ],
      },
    ],
    key: 'datadog-integration-testing-framework',
    emoji: '🧪',
  },
  'datadog-typescript-cleanup-initiative': {
    title: 'TypeScript Cleanup Initiative',
    emoji: '🧹',
    year: '2023',
    startYear: 2023,
    endYear: 2023,
    role: 'Software Engineer',
    description:
      'Led systematic TypeScript type safety improvements across dashboard codebase. Eliminated unsafe type assertions and established patterns for type-safe code development.',
    impact:
      'Reduced runtime type errors. Improved developer velocity through better IDE support. Set standard for TypeScript usage across frontend teams. Made codebase more maintainable for future engineers.',
    technologies: ['TypeScript', 'React', 'Type Systems'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Systematic Audit',
            text: 'Reviewed codebase for unsafe type usage patterns. Prioritized fixes by impact and risk',
          },
          {
            prefix: 'Pattern Establishment',
            text: 'Created reusable patterns for common type-safety scenarios. Documented best practices for team',
          },
          {
            prefix: 'Team Enablement',
            text: 'Reviewed PRs to maintain type safety standards. Mentored engineers on advanced TypeScript features',
          },
        ],
      },
    ],
    key: 'datadog-typescript-cleanup-initiative',
    emoji: '🧹',
  },
  'datadog-graphing-summit': {
    title: 'Graphing Summit',
    emoji: '📈',
    year: '2024-2025',
    startYear: 2024,
    endYear: 2025,
    role: 'Engineering Manager',
    description:
      "Organized Datadog's Graphing Summit to build cohesive culture within a newly-formed graphing org from a recent reorg. Led planning with 2 co-organizers, keeping execution lean—1/10 the time investment of typical summits with better relationship outcomes.",
    impact:
      'Transformed "kind of knew each other" relationships into "really knew each other" connections. Created foundation for cross-team collaboration in graphing org.',
    technologies: [
      'Event Planning',
      'Team Building',
      'Cross-functional Coordination',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Pre-Summit Relationship Building - Organized events leading up to the summit (IC1 class, org lunches, donut 1:1s) to increase relationship foundation',
          {
            prefix: 'Lean Planning',
            text: 'Avoided committee bloat; 1/10 the time investment of other summits',
          },
          'Outcome-Focused Design - Prioritized relationships over presentations',
          {
            prefix: 'Logistics',
            text: 'Managed CFP, ops, scheduling, speakers, budget, swag',
          },
        ],
      },
    ],
    key: 'datadog-graphing-summit',
    emoji: '📈',
  },
  'datadog-ic1-class': {
    title: 'IC1 Class',
    emoji: '🎓',
    year: '2024-2025',
    startYear: 2024,
    endYear: 2025,
    role: 'Engineering Manager',
    description:
      "Designed and taught Datadog's first IC1 engineering class—a covering career development, technical leadership, and organizational impact for early-career engineers.",
    impact:
      'Graduated 12 engineers with stronger career frameworks and clearer growth paths. Created reusable curriculum adopted by other teams. Demonstrated leadership in engineer development and organizational culture building.',
    technologies: [
      'Teaching',
      'Career Development',
      'Technical Leadership',
      'Curriculum Design',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Curriculum Design',
            text: 'Created 6-week program covering: technical decision-making, code review best practices, effective communication, project scoping, and career navigation. Balanced theory with practical exercises',
          },
          {
            prefix: 'Interactive Teaching',
            text: 'Led weekly 90-minute sessions with 15 engineers. Used real Datadog scenarios and case studies. Facilitated group discussions and peer learning',
          },
          {
            prefix: 'Career Framework Development',
            text: 'Built structured approach to career progression at IC1 level. Clarified expectations and growth paths. Provided actionable advice for advancement',
          },
          {
            prefix: 'Organizational Impact',
            text: 'Identified gap in early-career support and created solution. Collaborated with engineering leadership to align curriculum with company values. Set precedent for structured engineer development programs',
          },
        ],
      },
    ],
    key: 'datadog-ic1-class',
    emoji: '🎓',
  },
  'datadog-frontend-summit': {
    title: 'Frontend Summit',
    emoji: '🎤',
    year: '2023',
    startYear: 2023,
    endYear: 2023,
    role: 'Software Engineer',
    description:
      "Organized and ran Datadog's first-ever Frontend Summit—a multi-day conference bringing together frontend engineers across the company. Created venue for cross-team knowledge sharing, technical deep dives, and community building.",
    impact:
      'Established myself as a leader in the frontend community early in my tenure at the company',
    technologies: [
      'Event Planning',
      'Technical Leadership',
      'Community Building',
    ],
    key: 'datadog-frontend-summit',
    emoji: '🎤',
  },
  'bluecore-frontend-north-star-architecture-modernization': {
    title: 'Frontend North Star & Architecture Modernization',
    emoji: '🌟',
    year: '2021-2022',
    startYear: 2021,
    endYear: 2022,
    role: 'Staff Engineer / Frontend Lead',
    description:
      "Led frontend transformation at newly-minted unicorn ($1B valuation, $125M Series E). Established technical vision and modernized architecture to enable complex retail marketing workflows as company scaled from data science focus to product-led growth. Wrote comprehensive RFC establishing 'composable LEGO blocks' philosophy and platform layer architecture.",
    impact:
      'Published engineering blog defining frontend strategy. Established TypeScript-first culture across engineering org. Built foundation for next-generation product workflows serving enterprise retail customers.',
    technologies: [
      'TypeScript',
      'React',
      'Modern CSS',
      'CSS Variables',
      'Design Systems',
      'gRPC',
      'HTTP Transcoding',
      'Code Generation',
      'Accessibility',
    ],
    links: [
      {
        text: 'Frontend North Star Blog Post',
        url: 'https://medium.com/bluecore-engineering/bluecores-frontend-north-star-eb7d2a04167a',
      },
    ],
    belowTheFold: [
      {
        title: 'Context',
        content: [
          'Bluecore had invested heavily in data science and infrastructure while building a relatively light frontend. As the company reached unicorn status and needed to enable more complex customer workflows, the frontend needed to scale both technically and organizationally. Wrote Frontend North Star to align the team around modern practices and establish technical direction.',
        ],
      },
      {
        title: 'Details',
        content: [
          "Authored 'Bluecore's Frontend North Star' blog post establishing technical vision and principles for scaling frontend at unicorn-stage company",
          'Wrote comprehensive RFC covering design system specifications, reusable components with embedded business logic, and API interface requirements with code generation',
          'Led complete TypeScript migration of component library with modern CSS architecture and design system principles',
          'Architected autogenerated API client system with gRPC/HTTP transcoding, eliminating manual client maintenance',
          'Implemented CSS variables for theming and created responsive layout systems',
          'Designed and taught comprehensive weekly training curriculum for entire engineering team covering TypeScript fundamentals and advanced React patterns',
          'Improved accessibility and performance across component library',
          'Established code generation pipeline from API definitions with type-safe clients and automatic updates',
          'Created hands-on exercises and code review processes to upskill team',
          "Established Frontend Platform team values: developer experience excellence, simplicity & usability, proactive support, trust & reliability, and collaborative problem-solving. Created 'One Bluecore' culture focused on user delight and systematic friction reduction",
        ],
      },
      {
        title: 'Leadership',
        content: [
          'Defined frontend technical strategy for unicorn-stage company transitioning to product-led growth',
          'Built TypeScript-first culture through teaching and hands-on mentorship',
          'Collaborated with data science and infrastructure teams to align frontend with company mission',
          'Published public engineering content representing company technical brand',
        ],
      },
    ],
    key: 'bluecore-frontend-north-star-architecture-modernization',
    emoji: '🌟',
  },
  'bluecore-frontend-interview-loop-design': {
    title: 'Frontend Interview Loop Design',
    emoji: '💼',
    year: '2021-2022',
    startYear: 2021,
    endYear: 2022,
    role: 'Staff Engineer',
    description:
      'Designed comprehensive frontend interview loop for Bluecore, creating structured questions, evaluation criteria, and interviewer guides. Built question bank covering system design (Design Instagram), JavaScript fundamentals (Event Emitter), and React patterns (Auto Suggest Input).',
    impact:
      'Standardized frontend hiring process with consistent evaluation criteria. Improved candidate experience through well-structured, fair questions. Enabled consistent bar-raising across all frontend interviews. Created reusable interview materials for scaling frontend hiring.',
    technologies: ['System Design', 'JavaScript', 'React', 'Interview Design'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Question Design',
            text: 'Created three comprehensive interview questions: system design (Instagram feed with infinite scroll, image optimization, caching), JavaScript fundamentals (Event Emitter with edge cases), and React practical (Auto Suggest with debouncing, accessibility)',
          },
          {
            prefix: 'Evaluation Framework',
            text: 'Built detailed rubrics for each question covering technical depth, problem-solving approach, communication, and trade-off analysis. Included follow-up questions and extension scenarios',
          },
          {
            prefix: 'Interviewer Enablement',
            text: 'Documented complete interviewer guides with question flow, evaluation criteria, common pitfalls, and calibration guidance. Enabled consistent interview quality across team',
          },
        ],
      },
    ],
    key: 'bluecore-frontend-interview-loop-design',
    emoji: '💼',
  },
  'bluecore-nextserver-next-js-on-kubernetes': {
    title: 'NextServer (Next.js on Kubernetes)',
    emoji: '☸️',
    year: '2022',
    startYear: 2022,
    endYear: 2022,
    role: 'Staff Engineer',
    description:
      'Replaced expensive Google App Engine monolith running Python 2.7 (facing deprecation) with modern NextJS on Google Kubernetes Engine. Led technical architecture and milestone-based migration strategy.',
    impact:
      'Achieved significant cost savings from GAE to GKE migration. Improved performance with server-side rendering. Enabled modern frontend development practices. Zero downtime migration from legacy Python 2.7 system.',
    technologies: [
      'Next.js',
      'Kubernetes',
      'Google Cloud',
      'Node.js',
      'Python 2.7 Migration',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Milestone-Based Development - Created phased rollout strategy: M0 (prototype validation), M1 (QA infrastructure), M2 (internal tools), M3 (first customer route), M4 (complete migration). Enabled incremental validation and risk reduction',
          {
            prefix: 'Architecture & Infrastructure',
            text: 'Designed NextJS server on Google Kubernetes Engine with Node.js runtime. Worked with DevOps on deployment strategy, scaling configuration, and production optimization',
          },
          {
            prefix: 'Legacy Integration',
            text: 'Managed transition from Python 2.7 App Engine monolith while maintaining API compatibility and zero downtime for customer-facing features',
          },
        ],
      },
    ],
    key: 'bluecore-nextserver-next-js-on-kubernetes',
    emoji: '☸️',
  },
  'bluecore-autogenerated-api-client': {
    title: 'Autogenerated API Client',
    emoji: '🤖',
    year: '2022',
    startYear: 2022,
    endYear: 2022,
    role: 'Staff Engineer',
    description:
      'Architected and led implementation of autogenerated API client system using gRPC with HTTP transcoding. Replaced manual Redux thunk creation for every API call with type-safe, automatically generated clients.',
    impact:
      'Eliminated manual client maintenance for dozens of API endpoints. Standardized loading and error state management across application. Improved developer experience for API integration. Reduced API integration time from hours to minutes.',
    technologies: [
      'gRPC',
      'HTTP Transcoding',
      'Code Generation',
      'TypeScript',
      'Redux',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Code Generation Pipeline',
            text: 'Designed system to automatically generate TypeScript clients from gRPC definitions with full type safety',
          },
          {
            prefix: 'HTTP Transcoding Integration',
            text: 'Implemented gRPC-Web transcoding layer enabling browser-compatible API calls',
          },
          {
            prefix: 'Team Mentorship',
            text: 'Architected solution via tech design doc, then mentored team members through implementation and ensured knowledge transfer for long-term ownership',
          },
        ],
      },
    ],
    key: 'bluecore-autogenerated-api-client',
    emoji: '🤖',
  },
  'bluecore-component-library-consolidation': {
    title: 'Component Library Consolidation',
    emoji: '🧩',
    year: '2021-2022',
    startYear: 2021,
    endYear: 2022,
    role: 'Staff Engineer',
    description:
      "Consolidated Bluecore's dual component libraries (VanillaJS and TypeScript with only 80% feature parity) into single TypeScript-based system. Led cross-functional migration effort eliminating code duplication and any type pollution from legacy components.",
    impact:
      'Eliminated entire class of type safety issues from VanillaJS any injection. Reduced component maintenance burden by 50% (one library vs two). Improved developer experience with consistent component API. Enabled full TypeScript adoption across frontend.',
    technologies: [
      'TypeScript',
      'React',
      'VanillaJS Migration',
      'Component Libraries',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Migration Strategy',
            text: 'Created parallelization approach enabling multiple product teams to work simultaneously on different components without blocking each other',
          },
          'Cross-Team Coordination - Coordinated migration across product teams, establishing shared timeline and success criteria. Ensured consistent migration patterns',
          'Detail-Oriented Execution - Methodical component-by-component migration ensuring type safety and feature parity. Validated each component before deprecating VanillaJS version',
        ],
      },
    ],
    key: 'bluecore-component-library-consolidation',
    emoji: '🧩',
  },
  'bluecore-typescript-adoption-strict-types': {
    title: 'TypeScript Adoption & Strict Types',
    emoji: '🔒',
    year: '2021',
    startYear: 2021,
    endYear: 2021,
    role: 'Staff Engineer',
    description:
      'Led organization-wide TypeScript adoption, establishing strict type checking standards and migrating existing JavaScript codebase. Created training materials and mentorship program.',
    impact:
      'Achieved 100% TypeScript adoption across frontend codebase. Reduced runtime type errors significantly. Improved code maintainability and developer confidence. Established TypeScript-first culture.',
    technologies: ['TypeScript', 'JavaScript', 'Type Systems'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Migration Strategy',
            text: 'Designed incremental migration path from JavaScript to TypeScript with strict mode enabled',
          },
          {
            prefix: 'Training & Education',
            text: 'Created comprehensive weekly training curriculum covering TypeScript fundamentals through advanced patterns',
          },
          {
            prefix: 'Tooling & Standards',
            text: 'Established linting rules, type checking standards, and best practices documentation',
          },
        ],
      },
    ],
    key: 'bluecore-typescript-adoption-strict-types',
    emoji: '🔒',
  },
  'bluecore-tti-dashboard-frontend-monitoring': {
    title: 'TTI Dashboard & Frontend Monitoring',
    emoji: '📡',
    year: '2021',
    startYear: 2021,
    endYear: 2022,
    role: 'Staff Engineer',
    description:
      'Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes. Improved frontend observability and performance tracking across customer-facing features.',
    impact:
      'Improved frontend observability and performance tracking. Enabled data-driven performance optimization decisions.',
    technologies: [
      'Performance Monitoring',
      'Time to Interactive',
      'Frontend Observability',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes',
          'Improved frontend observability and performance tracking across customer-facing features',
          'Enabled data-driven performance optimization decisions',
        ],
      },
    ],
    key: 'bluecore-tti-dashboard-frontend-monitoring',
    emoji: '📡',
  },
  'bluecore-customer-360-revamp': {
    title: 'Customer 360 Revamp',
    emoji: '👤',
    year: '2021',
    startYear: 2021,
    endYear: 2021,
    role: 'Staff Engineer',
    description:
      'Revamped Customer 360 feature on Campaigns team. Proposed long-term improvement plan and handled BFCM (Black Friday/Cyber Monday) frontend readiness.',
    impact:
      'Improved Customer 360 feature performance and reliability. Successfully handled BFCM traffic spike.',
    technologies: [
      'React',
      'Performance Optimization',
      'High Traffic Events',
      'DOM Virtualization',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Added DOM virtualization to improve performance',
          'Revamped Customer 360 feature on Campaigns team',
          'Proposed long-term improvement plan',
          'Handled BFCM (Black Friday/Cyber Monday) frontend readiness',
        ],
      },
    ],
    key: 'bluecore-customer-360-revamp',
    emoji: '👤',
  },
  'dropbox-plus-plus-family-plans-life-vault': {
    title: 'Plus Plus: Family Plans & Life Vault',
    emoji: '👨‍👩‍👧‍👦',
    year: '2020',
    startYear: 2020,
    endYear: 2020,
    role: 'Software Engineer',
    description:
      'My work on Dropbox Plus followed a clear quarterly progression: I started on the Family team in Q1, then my manager and I were pulled to support the Vault team in Q2, and again to support the Backup team in Q3. By Q4, having touched all major feature areas, I joined the go-to-market integration squad. This unique progression made me the person who understood how all the product pieces fit together, enabling me to effectively coordinate across teams for a successful launch.',
    impact:
      'Successfully launched a new revenue-driving product with contributions from ~150 people across teams. Delivered a sophisticated family sharing experience enabling secure, credential-free family account management. Introduced a secure Vault feature with PIN access and comprehensive management UI. Contributed to robust computer backup functionality. Published engineering lifecycle insights on the Dropbox Tech Blog, highlighting effective team integration and pragmatic decision-making.',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Rust',
      'Family Sharing',
      'Vault',
      'Computer Backup',
    ],
    links: [
      {
        text: 'Dropbox Tech Blog Post',
        url: 'https://dropbox.tech/frontend/building-a-living-styleguide-at-dropbox',
      },
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Family Plans (Q1) - Joined the Family team, where I built the credential-free family sharing experience and the family account management UI. I established 1:1s with the team (engineers, PM, designer) and shipped my first feature within two weeks. Navigated remote work transition during COVID',
          'Vault (Q2) - My manager and I were pulled in to support the Vault team. Led Vault web frontend development, mentoring another engineer through setup flow, PIN access system, and management interface implementation. I proposed team coding standards for consistency across five engineers',
          'Computer Backup (Q3) - My manager and I were again pulled to support the Backup team. Built backup feature frontend and contributed to backend, including small change to Rust sync engine',
          'Go-to-Market Integration (Q4) - Because I had touched all major feature areas (Family Plans, Vault, and Computer Backup), I became responsible for cross-functional coordination. I worked with approximately 150 people across various teams (engineering, product, design, marketing, legal) to successfully launch this new revenue-driving product. I also published engineering lifecycle insights on the Dropbox Tech Blog, sharing lessons learned from this large-scale product launch',
        ],
      },
    ],
    key: 'dropbox-plus-plus-family-plans-life-vault',
    emoji: '👨‍👩‍👧‍👦',
  },
  'dropbox-redux-state-management-system': {
    title: 'Redux State Management System',
    emoji: '🗃️',
    year: '2018',
    startYear: 2018,
    endYear: 2018,
    role: 'Software Engineer',
    description:
      "Designed and rolled out comprehensive Redux architecture with TypeScript type-safe patterns across Dropbox's frontend organization. Created reusable patterns, extensive documentation, and systematic team-by-team adoption strategy.",
    impact:
      "Adopted by ~10 teams across ~25 features, becoming company standard for state management. Reduced state-related bugs significantly. Improved developer velocity and code maintainability. Created foundation for future frontend architecture decisions. Presented approach in public talk 'Building a Typesafe Code Split React-Redux Application'.",
    technologies: [
      'Redux',
      'TypeScript',
      'React',
      'State Management',
      'Architecture',
    ],
    links: [
      {
        text: 'Building a Typesafe Code Split React-Redux Application',
        url: 'https://www.matthewgerstman.com/talks/',
      },
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Architecture Design',
            text: 'Built comprehensive Redux patterns with TypeScript type safety, covering common state operations and establishing best practices for complex state management',
          },
          {
            prefix: 'Organizational Rollout',
            text: 'Created extensive documentation and training materials. Systematic team-by-team adoption with direct support and code review guidelines',
          },
          {
            prefix: 'Standards Establishment',
            text: 'Set company-wide patterns for state management that influenced frontend direction across organization',
          },
        ],
      },
    ],
    key: 'dropbox-redux-state-management-system',
    emoji: '🗃️',
  },
  'dropbox-underscore-lodash-migration': {
    title: 'Underscore → Lodash Migration',
    emoji: '🔄',
    year: '2018',
    startYear: 2018,
    endYear: 2018,
    role: 'Software Engineer',
    description:
      "Co-led migration of Dropbox's 10-year-old codebase from deprecated Underscore to Lodash, modernizing utility library used by millions daily. Built custom Webpack bundle, created comprehensive migration strategy, and executed phased rollout with only one production bug.",
    impact:
      'Modernized entire codebase dependency serving millions of users. Maintained bundle size targets through custom builds. Only one production bug despite thousands of lines migrated. Published migration approach on Dropbox Tech Blog. Established patterns for large-scale technical migrations.',
    technologies: [
      'Lodash',
      'Underscore',
      'Webpack',
      'Migration',
      'Build Optimization',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Research & Alignment',
            text: 'Wrote Web Enhancement Proposal (WEP) to build organizational consensus. Analyzed codebase to identify all Underscore usage and map to Lodash equivalents. Evaluated migration approaches and chose hybrid automated codemod + manual review strategy',
          },
          {
            prefix: 'Custom Build Optimization',
            text: 'Created custom Webpack Lodash bundle containing only needed functions to maintain bundle size. Built separate typings and treeshaking configs to optimize for production while preserving developer experience',
          },
          {
            prefix: 'Phased Migration',
            text: 'Split into four phases: direct 1:1 mappings, functions requiring modifications, edge cases, and final Underscore removal. Deployed each phase separately to catch issues incrementally. Thorough testing caught subtle differences (e.g., _.compact empty array handling)',
          },
        ],
      },
    ],
    key: 'dropbox-underscore-lodash-migration',
    emoji: '🔄',
  },
  'dropbox-file-viewer-sdk': {
    title: 'File Viewer SDK',
    emoji: '👁️',
    year: '2018',
    startYear: 2018,
    endYear: 2018,
    role: 'Software Engineer',
    description:
      'Led architecture and bootstrapping of cross-platform SDK for consistent file preview functionality across Dropbox web and desktop surfaces. Owned build pipeline, asset optimization, and API design for embedding file previews.',
    impact:
      'Infrastructure used across multiple Dropbox surfaces. Consistent file preview experience across platforms. Reusable component for future products. Optimized asset delivery and performance.',
    technologies: [
      'SDK Development',
      'Cross-Platform',
      'File Preview',
      'Build Pipeline',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Cross-Platform Architecture - Designed SDK architecture supporting both web and desktop platforms with consistent API surface',
          {
            prefix: 'Build Pipeline',
            text: 'Owned build pipeline and asset optimization for efficient file preview delivery',
          },
          {
            prefix: 'Extensibility',
            text: 'Built system for easily adding new file type support, enabling future expansion',
          },
        ],
      },
    ],
    key: 'dropbox-file-viewer-sdk',
    emoji: '👁️',
  },
  'dropbox-javascript-guild': {
    title: 'JavaScript Guild',
    emoji: '🛠️',
    year: '2017-2020',
    startYear: 2017,
    endYear: 2020,
    role: 'Software Engineer',
    description:
      'Founded JavaScript Guild as community of practice for frontend engineers across Dropbox. Organized knowledge-sharing sessions, published newsletters, coordinated cross-team initiatives, and established forum for frontend challenges.',
    impact:
      'Improved frontend culture and standards organization-wide. Created lasting community of practice across teams. Facilitated knowledge transfer and collaboration. Influenced organizational frontend direction through shared learning and discussion.',
    technologies: [
      'Community Building',
      'Knowledge Sharing',
      'Frontend Culture',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Community Building',
            text: 'Founded and nurtured frontend community across growing engineering organization with no centralized frontend coordination',
          },
          {
            prefix: 'Knowledge Sharing',
            text: 'Organized regular sessions and published newsletters with tips, updates, and best practices',
          },
          'Cross-Team Coordination - Created forum for discussing frontend challenges and coordinating initiatives across teams',
        ],
      },
    ],
    key: 'dropbox-javascript-guild',
    emoji: '🛠️',
  },
  'dropbox-javascript-guild-summit': {
    title: 'JavaScript Guild Summit',
    emoji: '🎪',
    year: '2019-2020',
    startYear: 2019,
    endYear: 2020,
    role: 'Software Engineer',
    description:
      'Organized multi-day technical summits (2019-2020) bringing together frontend engineers from across remote-first organization. Curated technical talks, workshops, and collaboration sessions for deep technical discussions and relationship building.',
    impact:
      'Strengthened cross-team relationships in remote-first organization. Enabled deeper technical collaboration. Created lasting organizational connections. Established model for future technical events.',
    technologies: [
      'Event Planning',
      'Technical Summits',
      'Remote Collaboration',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Event Design',
            text: 'Planned multi-day summits with curated technical content, workshops, and collaboration time',
          },
          {
            prefix: 'Community Connection',
            text: 'Created space for in-person connection and relationship building in remote-first company',
          },
          {
            prefix: 'Knowledge Transfer',
            text: 'Facilitated deep technical discussions and cross-team learning',
          },
        ],
      },
    ],
    key: 'dropbox-javascript-guild-summit',
    emoji: '🎪',
  },
  'dropbox-previews-mobile-web': {
    title: 'Previews Mobile Web',
    emoji: '📱',
    year: '2017',
    startYear: 2017,
    endYear: 2017,
    role: 'Software Engineer',
    description:
      'Built mobile web file preview experience for Dropbox, creating responsive preview interface optimized for mobile browsers. Early project at Dropbox establishing frontend patterns for mobile optimization and touch interactions.',
    impact:
      'Enabled file preview functionality for mobile web users without requiring app download. Improved mobile web experience for millions of users. Established mobile-first patterns for future Dropbox web features.',
    technologies: [
      'Mobile Web',
      'Responsive Design',
      'File Preview',
      'Touch Interactions',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Mobile Optimization',
            text: 'Designed responsive preview interface optimized for mobile viewports, touch interactions, and varying network conditions',
          },
          {
            prefix: 'Performance Focus',
            text: 'Implemented progressive loading and optimized asset delivery for mobile bandwidth constraints',
          },
          'Cross-Browser Support - Ensured consistent experience across mobile browsers (Safari, Chrome, Firefox) with varying capabilities',
        ],
      },
    ],
    key: 'dropbox-previews-mobile-web',
    emoji: '📱',
  },
  'dropbox-showcase': {
    title: 'Showcase',
    emoji: '🎨',
    year: '2017',
    startYear: 2017,
    endYear: 2017,
    role: 'Software Engineer',
    description:
      'Contributed to Showcase product development, enabling professionals to create portfolio presentations from Dropbox files. Built frontend components for customizable layouts, branding, and file organization into professional showcases.',
    impact:
      'Enabled new use case for Dropbox files beyond storage—professional portfolio creation. Expanded Dropbox value proposition for creative professionals and freelancers.',
    technologies: ['React', 'Product Development', 'Portfolio Creation'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Component Development',
            text: 'Built frontend components for showcase creation, customization, and viewing experience',
          },
          {
            prefix: 'File Integration',
            text: 'Integrated with Dropbox file system to enable seamless file selection and organization into showcases',
          },
          {
            prefix: 'Presentation Layer',
            text: 'Created polished viewing experience for showcase recipients with responsive layouts and branding options',
          },
        ],
      },
    ],
    key: 'dropbox-showcase',
    emoji: '🎨',
  },
  'dropbox-zip-file-previews': {
    title: 'ZIP File Previews',
    emoji: '📦',
    year: '2017',
    startYear: 2017,
    endYear: 2017,
    role: 'Software Engineer',
    description:
      'Built ZIP file preview functionality allowing users to browse ZIP archive contents without downloading entire file. Created file tree navigation, preview support for contained files, and selective download capabilities.',
    impact:
      'Reduced unnecessary downloads by enabling preview-before-download workflow. Improved user experience for large ZIP files where users only need specific contents. Saved bandwidth and time for millions of users.',
    technologies: ['File Preview', 'ZIP Parsing', 'File Tree UI'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Archive Parsing',
            text: 'Implemented ZIP file parsing to extract directory structure and file metadata without full download',
          },
          {
            prefix: 'Navigation Interface',
            text: 'Built file tree UI for browsing ZIP contents with folder expansion, file preview, and selective download',
          },
          {
            prefix: 'Preview Integration',
            text: 'Integrated with existing file preview system to support previewing files within ZIP archives before downloading',
          },
          {
            prefix: 'Performance Optimization',
            text: 'Added DOM virtualization to improve performance for large ZIP files',
          },
        ],
      },
    ],
    key: 'dropbox-zip-file-previews',
    emoji: '📦',
  },
  'todaytix-web-2-0-react-redux-rebuild': {
    title: 'Web 2.0: React + Redux Rebuild',
    emoji: '⚛️',
    year: 'Q3-Q4 2016',
    startYear: 2016,
    endYear: 2016,
    role: 'Software Engineer',
    description:
      'Worked on team of 4 building greenfield React + Redux application from scratch. Learned modern React/Redux architecture and functional programming patterns by diving deep—read all of Lodash and Redux source code for fun. Built checkout flow, show landing pages, and authentication/SSR strategies. Integrated with new Swagger-based API client.',
    impact:
      'Shipped production app serving real customers. Deep-dive learning approach (reading source code) established strong foundation in React/Redux patterns that influenced entire career. Created scalable architecture enabling faster feature development.',
    technologies: [
      'React',
      'Redux',
      'Lodash',
      'Functional Programming',
      'SSR',
      'Swagger',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Deep Learning',
            text: 'Learned React/Redux architecture through hands-on building and reading Lodash and Redux source code. Heavy functional programming focus shaped technical approach',
          },
          {
            prefix: 'Feature Ownership',
            text: 'Built checkout flow (core revenue path), show landing pages, and authentication/server-side rendering strategies. Integrated with new Swagger-based API client',
          },
          {
            prefix: 'Greenfield Architecture',
            text: 'Collaborated with team of 4 on greenfield architecture decisions, component patterns, and state management approach for production application',
          },
        ],
      },
    ],
    key: 'todaytix-web-2-0-react-redux-rebuild',
    emoji: '⚛️',
  },
  'todaytix-special-offers-feature': {
    title: 'Special Offers Feature',
    emoji: '🎟️',
    year: 'Q2 2016',
    startYear: 2016,
    endYear: 2016,
    role: 'Software Engineer',
    description:
      'Built feature converting lottery losers into buyers through personalized alternative show offers. Built APIs in a Groovy on Grails backend with complex SQL queries for offer matching, designed frontend offer selection experience, implemented business logic for eligibility.',
    impact:
      'Captured revenue from users who lost lotteries and would have left empty-handed. Turned user disappointment into conversion opportunity. Demonstrated end-to-end product engineering capability.',
    technologies: ['Groovy on Grails', 'SQL', 'Backend APIs', 'Frontend'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Backend Development',
            text: 'Built APIs in Groovy on Grails with complex SQL queries for matching alternative show offers based on user preferences and availability',
          },
          {
            prefix: 'Frontend Experience',
            text: 'Designed and implemented offer selection interface for lottery losers to browse and purchase alternative shows',
          },
          {
            prefix: 'Business Logic',
            text: 'Implemented eligibility rules and offer matching algorithms to personalize recommendations',
          },
        ],
      },
    ],
    key: 'todaytix-special-offers-feature',
    emoji: '🎟️',
  },
  'todaytix-rush-ticketing': {
    title: 'Rush Ticketing',
    emoji: '⏰',
    year: 'Q1 2016',
    startYear: 2016,
    endYear: 2016,
    role: 'Software Engineer',
    description:
      'Enabled same-day limited ticket purchases through new backend APIs and business logic. Built RESTful API design for rush ticket operations with complex availability and eligibility rules.',
    impact:
      'Expanded business model with same-day sales capability. Demonstrated backend architecture skills and successful cross-team collaboration with mobile engineers.',
    technologies: ['RESTful APIs', 'Backend Development', 'Business Logic'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'API Design',
            text: 'Built RESTful APIs for rush ticket operations including availability checks, purchase flow, and eligibility verification',
          },
          {
            prefix: 'Business Rules',
            text: 'Implemented complex availability and eligibility logic for same-day limited ticket sales',
          },
          'Cross-Team Collaboration - Worked with mobile engineers to ensure consistent API behavior across platforms',
        ],
      },
    ],
    key: 'todaytix-rush-ticketing',
    emoji: '⏰',
  },
  'todaytix-sentry-rollout': {
    title: 'Sentry Rollout',
    emoji: '🔍',
    year: 'Q4 2016',
    startYear: 2016,
    endYear: 2016,
    role: 'Software Engineer',
    description:
      'Established production error monitoring with Sentry, moving from user-reported bugs to proactive error detection. Configured alerting, monitoring, and error triage processes.',
    impact:
      'Dramatically improved production visibility. Enabled proactive error detection before user reports. Reduced mean time to resolution. Established operational excellence culture.',
    technologies: ['Sentry', 'Error Monitoring', 'Alerting', 'DevOps'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Monitoring Setup',
            text: 'Configured Sentry for production error tracking with appropriate sampling and alert thresholds',
          },
          {
            prefix: 'Process Establishment',
            text: 'Created error triage processes and alerting workflows for team response',
          },
          {
            prefix: 'Operational Excellence',
            text: 'Shifted culture from reactive user-reported bugs to proactive error detection and resolution',
          },
        ],
      },
    ],
    key: 'todaytix-sentry-rollout',
    emoji: '🔍',
  },
  'todaytix-ansible-deployment-automation': {
    title: 'Ansible Deployment Automation',
    emoji: '🤖',
    year: 'Q1 2017',
    startYear: 2017,
    endYear: 2017,
    role: 'Software Engineer',
    description:
      'Automated deployment process with Ansible playbooks for Node.js applications, replacing manual error-prone deployments. Created reliable, repeatable deployment process with Sentry integration.',
    impact:
      'Faster, more reliable deployments with reduced friction and errors. Enabled more frequent releases and improved team velocity.',
    technologies: ['Ansible', 'Deployment Automation', 'Node.js', 'DevOps'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Automation',
            text: 'Created Ansible playbooks for Node.js application deployments replacing manual processes',
          },
          {
            prefix: 'Reliability',
            text: 'Built repeatable deployment process reducing errors and deployment time',
          },
          {
            prefix: 'Integration',
            text: 'Integrated deployment automation with Sentry for immediate error detection post-deploy',
          },
        ],
      },
    ],
    key: 'todaytix-ansible-deployment-automation',
    emoji: '🤖',
  },
  'zetta-backbone-restful-apis-migration': {
    title: 'Backbone + RESTful APIs Migration',
    emoji: '🔌',
    year: '2015',
    startYear: 2015,
    endYear: 2015,
    role: 'Software Engineer',
    description:
      'Led complete backend migration to RESTful resource architecture and frontend migration to Backbone.js. Established API design standards, created documentation, and coordinated organization-wide adoption. Trained more senior engineers on REST paradigms.',
    impact:
      'Modernized entire API layer. Improved maintainability and developer experience. Reduced API-related bugs. Established patterns for future development. Trained other engineers in REST paradigm.',
    technologies: [
      'Backbone.js',
      'RESTful APIs',
      'API Design',
      'Documentation',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'API Architecture',
            text: 'Led complete backend migration to RESTful resource architecture with proper HTTP verbs and status codes',
          },
          {
            prefix: 'Frontend Migration',
            text: 'Migrated frontend to Backbone.js with proper MVC patterns and data binding',
          },
          {
            prefix: 'Standards & Documentation',
            text: 'Established API design standards and created comprehensive documentation for organization-wide adoption',
          },
          {
            prefix: 'Training',
            text: 'Trained more senior engineers on REST paradigms and best practices',
          },
        ],
      },
    ],
    key: 'zetta-backbone-restful-apis-migration',
    emoji: '🔌',
  },
  'zetta-ci-sentry-implementation': {
    title: 'CI + Sentry Implementation',
    emoji: '🚨',
    year: '2015',
    startYear: 2015,
    endYear: 2015,
    role: 'Software Engineer',
    description:
      'Set up continuous integration pipeline and implemented Sentry for production error tracking. Established quality standards, monitoring dashboards, and culture of observability.',
    impact:
      'Caught bugs before production deployment. Improved system visibility and reliability. Reduced customer-impacting incidents. Established operational excellence practices.',
    technologies: ['CI/CD', 'Sentry', 'Error Monitoring', 'DevOps'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'CI Pipeline',
            text: 'Set up continuous integration pipeline for automated testing and quality checks',
          },
          {
            prefix: 'Error Monitoring',
            text: 'Implemented Sentry for production error tracking and alerting',
          },
          {
            prefix: 'Observability Culture',
            text: 'Established monitoring dashboards and culture of observability across team',
          },
        ],
      },
    ],
    key: 'zetta-ci-sentry-implementation',
    emoji: '🚨',
  },
  'zetta-svn-to-git-migration': {
    title: 'SVN to Git Migration',
    emoji: '🌿',
    year: '2015',
    startYear: 2015,
    endYear: 2015,
    role: 'Software Engineer',
    description:
      'Planned and executed organizational migration from SVN to Git. Established branching strategies, PR processes, and code review practices. Provided hands-on training for entire team.',
    impact:
      'Modernized development workflow. Improved collaboration through PR reviews. Enabled better branching and experimentation. Reduced merge conflicts.',
    technologies: ['Git', 'SVN', 'Version Control', 'Code Review'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Migration Planning',
            text: 'Planned and executed organizational migration from SVN to Git with minimal disruption',
          },
          {
            prefix: 'Process Establishment',
            text: 'Established branching strategies, PR processes, and code review practices',
          },
          {
            prefix: 'Training',
            text: 'Provided hands-on training for entire team on Git workflows',
          },
        ],
      },
    ],
    key: 'zetta-svn-to-git-migration',
    emoji: '🌿',
  },
  'zetta-data-restore-flow': {
    title: 'Data Restore Flow',
    emoji: '♻️',
    year: '2014',
    startYear: 2014,
    endYear: 2014,
    role: 'Software Engineer',
    description:
      'Built complete data restore flow enabling users to restore deleted or previous versions of data. Core revenue-driving feature (the money feature) for cloud storage product.',
    impact:
      'Critical differentiator for cloud storage product. Core revenue driver. Excellent user experience for complex operation. Demonstrated product engineering capability.',
    technologies: ['Full-Stack', 'Cloud Storage', 'UX Design'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Full-Stack Development - Built complete restore flow from file selection UI to backend restore operations',
          {
            prefix: 'UX Design',
            text: 'Designed intuitive user experience for complex operations including version history and conflict resolution',
          },
          {
            prefix: 'Backend Integration',
            text: 'Integrated backend restore operations with proper error handling and edge cases',
          },
        ],
      },
    ],
    key: 'zetta-data-restore-flow',
    emoji: '♻️',
  },
  'zetta-user-enrollment-flow-refactor': {
    title: 'User Enrollment Flow Refactor',
    emoji: '📝',
    year: '2014',
    startYear: 2014,
    endYear: 2014,
    role: 'Software Engineer',
    description:
      'Refactored user enrollment and onboarding flow for improved conversion and user experience. Modernized legacy enrollment code.',
    impact:
      'Improved user onboarding experience. Better conversion rates. Cleaner, more maintainable enrollment code.',
    technologies: ['User Onboarding', 'Conversion Optimization'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Flow Refactor',
            text: 'Refactored user enrollment and onboarding flow for improved conversion',
          },
          {
            prefix: 'Code Modernization',
            text: 'Modernized legacy enrollment code for better maintainability',
          },
          {
            prefix: 'UX Improvements',
            text: 'Enhanced user experience throughout enrollment process',
          },
        ],
      },
    ],
    key: 'zetta-user-enrollment-flow-refactor',
    emoji: '📝',
  },
  'zetta-performance-optimization-grunt-build-system': {
    title: 'Performance Optimization & Grunt Build System',
    emoji: '⚡',
    year: '2014',
    startYear: 2014,
    endYear: 2014,
    role: 'Software Engineer',
    description:
      'Systematically profiled and optimized web application performance, significantly reducing page load times. Simultaneously migrated the build system to Grunt, optimizing asset compilation and improving developer experience.',
    impact:
      'Achieved a dramatic reduction in initial page load time from 8 seconds to 500 milliseconds. Delivered faster, more efficient builds and significantly improved developer productivity through modern tooling and optimized workflows.',
    technologies: [
      'Performance Optimization',
      'Grunt',
      'Build Systems',
      'Profiling',
    ],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Build System Migration to Grunt',
            text: 'Migrated the legacy build system to Grunt, implementing optimized asset compilation, bundling, and minification',
          },
          {
            prefix: 'Page Load Optimization',
            text: 'Performed systematic profiling and refactoring of critical paths, including asset loading, rendering, and data fetching, to drastically reduce initial page load times',
          },
          {
            prefix: 'Developer Experience Improvements',
            text: 'Enhanced the overall development workflow with faster builds, modern tooling, and a more efficient build pipeline',
          },
        ],
      },
    ],
    key: 'zetta-performance-optimization-grunt-build-system',
    emoji: '⚡',
  },
  'zetta-data-deletion-queue': {
    title: 'Data Deletion Queue',
    emoji: '🗑️',
    year: '2014',
    startYear: 2014,
    endYear: 2014,
    role: 'Software Engineer',
    description:
      'Built data deletion queue system for lifecycle management and compliance. Created UI for managing deletion requests with backend job processing.',
    impact:
      'Core product feature for cloud storage. Enabled compliance with data retention policies. Improved user control over storage. Demonstrated full-stack product development capability.',
    technologies: ['Queue Systems', 'Lifecycle Management', 'Compliance'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Queue System',
            text: 'Built data deletion queue with lifecycle management and scheduling',
          },
          'Full-Stack Implementation - Created UI for deletion requests and backend job processing',
          {
            prefix: 'Edge Cases',
            text: 'Handled error scenarios and edge cases for reliable deletion',
          },
        ],
      },
    ],
    key: 'zetta-data-deletion-queue',
    emoji: '🗑️',
  },
  'zetta-structured-logging': {
    title: 'Structured Logging',
    emoji: '📋',
    year: '2013',
    startYear: 2013,
    endYear: 2013,
    role: 'Software Engineer',
    description:
      'Implemented structured logging system during first three months at company. Established logging standards and practices for better system observability.',
    impact:
      'Improved system debugging and monitoring capabilities. Established foundation for operational excellence. Early impact as new engineer.',
    technologies: ['Logging', 'Observability', 'DevOps'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Logging System',
            text: 'Implemented structured logging system for better observability',
          },
          {
            prefix: 'Standards',
            text: 'Established logging standards and practices across codebase',
          },
          {
            prefix: 'Early Impact',
            text: 'Delivered significant infrastructure improvement in first three months',
          },
        ],
      },
    ],
    key: 'zetta-structured-logging',
    emoji: '📋',
  },
  'zetta-release-gating': {
    title: 'Release Gating',
    emoji: '🚦',
    year: '2013',
    startYear: 2013,
    endYear: 2013,
    role: 'Software Engineer',
    description:
      'Built release gating system to ensure quality before production deployments. Created automated checks and manual approval workflows.',
    impact:
      'Improved release quality and reduced production incidents. Established quality gates for deployments.',
    technologies: ['Release Management', 'Quality Assurance', 'Automation'],
    belowTheFold: [
      {
        title: 'Details',
        content: [
          {
            prefix: 'Gating System',
            text: 'Built release gating system with automated quality checks',
          },
          {
            prefix: 'Approval Workflows',
            text: 'Created manual approval workflows for production releases',
          },
          {
            prefix: 'Quality Improvement',
            text: 'Reduced production incidents through systematic quality gates',
          },
        ],
      },
    ],
    key: 'zetta-release-gating',
    emoji: '🚦',
  },
  'dance-marathon-tweet-two-screens': {
    title: 'Tweet Two Screens',
    emoji: '🐦',
    year: '2013',
    description:
      'Custom tweet visualizers optimized for Jumbotron display with real-time aggregation.',
    technologies: ['Twitter API', 'jQuery', 'Real-time'],
    role: '',
    startYear: 2013,
    endYear: 2013,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Built custom tweet visualizers optimized for Jumbotron display',
          'Implemented real-time tweet aggregation via Twitter API',
          'Created visual design specifically for large-screen viewing',
          'Built content moderation system for appropriate messaging',
        ],
      },
    ],
    key: 'dance-marathon-tweet-two-screens',
  },
  'dance-marathon-dmatuf-iphone-app': {
    title: 'DMatUF iPhone App',
    emoji: '📲',
    year: '2013',
    description:
      'Native iOS event app with schedule, song requests, and arena map for offline-first usage.',
    technologies: ['iOS', 'Objective-C', 'Native Mobile'],
    role: '',
    startYear: 2013,
    endYear: 2013,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Built native iOS event app (pre-widespread adoption era)',
          'Implemented event schedule and timing features',
          'Created song request functionality',
          'Designed locally hosted basketball arena map',
        ],
      },
    ],
    key: 'dance-marathon-dmatuf-iphone-app',
  },
  'dance-marathon-dmassassins': {
    title: 'DMAssassins',
    emoji: '🎯',
    year: '2012',
    description:
      "Real-life 'assassins' game with target assignment system keeping thousands engaged throughout 26.6-hour marathon.",
    impact: 'Used by thousands for 5+ years',
    technologies: ['PHP', 'MySQL', 'jQuery', 'Game Design'],
    role: '',
    startYear: 2012,
    endYear: 2012,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          "Designed real-life 'assassins' game with target assignment system",
          "Built pin verification system for 'hits'",
          'Implemented automatic target reassignment upon elimination',
          'Created MySQL backend for game state management',
          'Built jQuery frontend for game interface',
        ],
      },
    ],
    key: 'dance-marathon-dmassassins',
  },
  'early-programming-university-of-florida-computer-science-degree': {
    title: 'University of Florida - Computer Science Degree',
    emoji: '🎓',
    year: '2009-2013',
    description:
      'Comprehensive computer science education covering programming, algorithms, systems, and mathematics.',
    technologies: ['Java', 'C', 'PHP', 'MySQL', 'WordPress', 'CS Fundamentals'],
    role: '',
    startYear: 2009,
    endYear: 2013,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Core CS: Data Structures, Algorithms, Operating Systems, Networks, Databases',
          'Systems: Computer Organization, Digital Logic, Circuits',
          'Mathematics: Calculus 1-3, Differential Equations, Linear Algebra, Statistics',
          'Languages: Java, C, PHP, MySQL',
          'Continued WordPress contracting work during college',
        ],
      },
    ],
    key: 'early-programming-university-of-florida-computer-science-degree',
  },
  'early-programming-body-logic-md-it-support': {
    title: 'Body Logic MD - IT Support',
    emoji: '💻',
    year: '2008-2009',
    description:
      "First 'real' job in office environment during high school, supporting workplace users.",
    technologies: ['IT Support', 'QA Testing'],
    role: '',
    startYear: 2008,
    endYear: 2009,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Supported systems people depended on for their jobs',
          'Learned professional work skills',
          'Handled non-technical workplace users',
          "Organized group of friends to QA company's new website on weekend",
        ],
      },
      {
        title: 'Leadership',
        content: ['Team leadership: Organized QA testing weekend with friends'],
      },
    ],
    key: 'early-programming-body-logic-md-it-support',
  },
  'early-programming-johns-hopkins-summer-program': {
    title: 'Johns Hopkins Summer Program',
    emoji: '🏫',
    year: '2008',
    description:
      'Programming 1 course providing deeper dive into computer science fundamentals, plus philosophy course developing critical thinking.',
    technologies: ['Computer Science Fundamentals', 'Philosophy'],
    role: '',
    startYear: 2008,
    endYear: 2008,
    key: 'early-programming-johns-hopkins-summer-program',
  },
  'early-programming-freelance-computer-repair-web-design': {
    title: 'Freelance Computer Repair & Web Design',
    emoji: '🔧',
    year: '2006-2009',
    description:
      'High school freelance work doing computer repair, virus removal, and building simple websites.',
    technologies: ['Computer Repair', 'Web Design', 'Customer Service'],
    role: '',
    startYear: 2006,
    endYear: 2009,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Computer repair and troubleshooting',
          "Virus removal during 'era of constant malware'",
          'Software installation and configuration',
          'Teaching people how to use computers',
          'Designing and building simple websites',
        ],
      },
    ],
    key: 'early-programming-freelance-computer-repair-web-design',
  },
  'early-programming-don-estridge-high-tech-middle-school': {
    title: 'Don Estridge High Tech Middle School',
    emoji: '🏫',
    year: '2005',
    description:
      'Programming in Pascal, hardware assembly, field support, and early security research.',
    technologies: ['Pascal', 'Hardware Assembly', 'Field Support'],
    role: '',
    startYear: 2005,
    endYear: 2005,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'Wrote programs for fun in Pascal classes',
          'Built command line interactive Periodic Table for science project',
          'Discovered and reported printer security vulnerability',
          'Learned computer assembly, BIOS configuration, and hardware troubleshooting',
          'Fixed computers for students and teachers',
          'Developed skills explaining technical concepts to non-technical users',
        ],
      },
    ],
    key: 'early-programming-don-estridge-high-tech-middle-school',
  },
  'early-programming-first-programs-websites': {
    title: 'First Programs & Websites',
    emoji: '🌐',
    year: '1999-2000',
    description:
      "Started with Visual Basic guest book, then built websites with HTML and JavaScript including the legendary 'DBZ dance party site'.",
    technologies: ['Visual Basic', 'HTML', 'JavaScript'],
    role: '',
    startYear: 1999,
    endYear: 2000,
    belowTheFold: [
      {
        title: 'Details',
        content: [
          'First program: Generic guest book using Visual Basic 5',
          'Built websites to show classmates at school',
          'Created site with personalized message prompts',
          "Made 'DBZ dance party' site with Dragon Ball Z gifs and Ocarina of Time music",
        ],
      },
    ],
    key: 'early-programming-first-programs-websites',
  },
};

/**
 * Ordered array of project keys matching their display order in the resume.
 */
