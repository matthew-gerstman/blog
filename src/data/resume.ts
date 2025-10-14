import type { ResumeData } from './types/resume.types';

const resumeData: ResumeData = {
  "hero": {
    "title": "Career Timeline",
    "subtitle": "25+ years of building and learning"
  },
  "jobs": [
    {
      "id": "datadog",
      "company": "Datadog",
      "role": "Senior Software Engineer",
      "period": "September 2022 - Present",
      "startDate": "2022-09",
      "description": "Leading development of collaborative data science tooling and dashboard infrastructure.",
      "color": "#632CA6",
      "projects": [
        {
          "title": "Notebooks 2.0",
          "year": "2023-2024",
          "startYear": 2023,
          "endYear": 2024,
          "role": "Engineering Manager",
          "description": "First-time engineering manager leading the rebuild of Datadog's collaborative notebook editor. Focused on team growth, customer engagement, and enabling technical excellence. Built customer council with rapid feedback loop.",
          "impact": "Shipped complete Notebooks 2.0 rebuild with rich text editing and real-time multiplayer collaboration. Grew team from 4 to 6 engineers with 2 promotions. Established customer council that accelerated feedback cycles.",
          "technologies": [
        "CRDTs",
        "CRDTs (Yjs)",
        "Markdown",
        "ProseMirror",
        "React",
        "Slack",
        "Team Leadership",
        "TypeScript",
        "WebSockets",
        "Yjs"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Team Culture & Development - Grew team from 4 to 6 engineers with 2 promotions; established daily pairing and weekly learning sessions; created environment where people wanted to work together and help each other succeed. My favorite part of the job was coach, I aspired to be Ted Lasso.",
                "Feature Development Oversight - Oversaw development of: Rich text editor with ProseMirror; Real-time multiplayer with CRDTs (Yjs) and WebSockets; Inlined widgets; Copy/paste; Toolbar and formatting; List indentation; Code blocks with syntax highlighting; Comments and version history; Inline tables; Print mode (personally implemented); Markdown import/export for API users",
                "Customer Engagement - Built customer council with shared Slack channels; identified high-usage customers and coordinated with CSMs. Spoke with multiple external customers per week during rollout. Rapidly implemented feedback\u2014nothing a customer loves more than hearing their feature request was implemented in 48 hours. Product manager was focused elsewhere for 6 months; I handled prioritization and release management. Established principle: ship to someone new every week. We slowed down for customer feedback and sped up where it didn't apply. For example: released to 98% of customers while finishing API support for the remaining 2%. When a customer didn't like keyboard-first design, we paused for a week to implement \"Bring Back Buttons\" initiative."
              ]
            }
          ]
        },
        {
          "title": "Graphing Summit",
          "year": "2024-2025",
          "startYear": 2024,
          "endYear": 2025,
          "role": "Engineering Manager",
          "description": "Organized Datadog's Graphing Summit to build cohesive culture within a newly-formed graphing org from a recent reorg. Led planning with 2 co-organizers, keeping execution lean\u20141/10 the time investment of typical summits with better relationship outcomes.",
          "impact": "Transformed \"kind of knew each other\" relationships into \"really knew each other\" connections. Created foundation for cross-team collaboration in graphing org.",
          "technologies": [
        "Cross-functional Coordination",
        "Event Planning",
        "Team Building"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Pre-Summit Relationship Building - Organized events leading up to the summit (IC1 class, org lunches, donut 1:1s) to increase relationship foundation",
                "Lean Planning - Avoided committee bloat; 1/10 the time investment of other summits",
                "Outcome-Focused Design - Prioritized relationships over presentations",
                "Logistics - Managed ops, scheduling, speakers, budget, swag"
              ]
            }
          ]
        },
        {
          "title": "IC1 Class",
          "year": "2024-2025",
          "startYear": 2024,
          "endYear": 2025,
          "role": "Engineering Manager",
          "description": "Designed and taught Datadog's first IC1 engineering class\u2014a 6-week intensive program covering career development, technical leadership, and organizational impact for early-career engineers.",
          "impact": "Graduated 15 engineers with stronger career frameworks and clearer growth paths. Created reusable curriculum adopted by other teams. Demonstrated leadership in engineer development and organizational culture building.",
          "technologies": [
        "Career Development",
        "Curriculum Design",
        "Teaching",
        "Technical Leadership"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Curriculum Design - Created 6-week program covering: technical decision-making, code review best practices, effective communication, project scoping, and career navigation. Balanced theory with practical exercises",
                "Interactive Teaching - Led weekly 90-minute sessions with 15 engineers. Used real Datadog scenarios and case studies. Facilitated group discussions and peer learning",
                "Career Framework Development - Built structured approach to career progression at IC1 level. Clarified expectations and growth paths. Provided actionable advice for advancement",
                "Organizational Impact - Identified gap in early-career support and created solution. Collaborated with engineering leadership to align curriculum with company values. Set precedent for structured engineer development programs"
              ]
            }
          ]
        },
        {
          "title": "Dashboard Reporting & PDF Export",
          "year": "2022-2023",
          "startYear": 2022,
          "endYear": 2023,
          "role": "Software Engineer",
          "description": "Built Datadog's report-printer node service from scratch\u2014offline dashboard snapshots with 98%+ widget fidelity. Designed client/server rendering handshake, chose Puppeteer, established Node.js patterns now used across 15+ services.",
          "impact": "Shipped to all customers with 95%+ widget fidelity (up from 70%). Created new revenue stream and permanent team. Node.js foundation code became company standard.",
          "technologies": [
        "Node.js",
        "PDF Generation",
        "Puppeteer",
        "Queue Systems",
        "React",
        "TypeScript",
        "gRPC"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Architecture & Design - Prototyped for 6 weeks with weekly reviews; designed stateless queue-based system with heartbeat monitoring; built client/server handshake to coordinate React rendering, data fetching, viewport resizing, and snapshot timing",
                "Rendering Engine Selection - Evaluated Selenium, Puppeteer, and Cypress; chose Puppeteer for browser-fidelity PDFs and thin Chrome wrapper; interviewed engineers about Selenium pain to inform decision",
                "Quality & Fidelity - Created PrintModeAdapter to aggregate widget status; collaborated with Univiz team to expose fetch completion signals; solved split graph rendering bugs with proxy context providers",
                "Service Foundation - Wrote all Node.js HTTP/gRPC communication code, tests, and documentation (pre-AI era); established patterns now foundational for 15+ services; implemented OBO token authentication with Puppeteer request interception",
                "Performance & Constraints - Reduced dev loop from 30min to 1min; navigated security restrictions on Node.js infrastructure access; optimized print mode rendering by disabling interactivity; handled edge cases (note widgets, image security risks, file size bloat)"
              ]
            },
            {
              "title": "Leadership",
              "content": [
                "Built consensus through prototyping and stakeholder reviews",
                "Mentored backend team on browser implementation",
                "Transitioned to Notebooks management as project reached production"
              ]
            }
          ]
        },
        {
          "title": "Integration Testing Framework",
          "year": "2023",
          "startYear": 2023,
          "endYear": 2023,
          "role": "Software Engineer",
          "description": "Pioneered integration testing framework for Datadog's dashboard platform, enabling reliable testing of complex multi-widget interactions that were previously untestable. Built comprehensive test suite covering critical user workflows and edge cases.",
          "impact": "Caught regressions before production that unit tests missed. Enabled confident refactoring of complex dashboard code. Set standard for integration testing across frontend teams. Reduced bug escape rate for dashboard features.",
          "technologies": [
        "Integration Testing",
        "React",
        "Testing Frameworks",
        "TypeScript"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Framework Design - Built testing infrastructure supporting complex dashboard scenarios (widget interactions, time range changes, template variables, cross-widget dependencies)",
                "Test Coverage - Wrote comprehensive integration tests for critical paths: dashboard loading, widget editing, template variable propagation, and multi-widget coordination",
                "Developer Experience - Created clear patterns and documentation for writing integration tests, enabling other engineers to expand coverage. Balanced test reliability with execution speed"
              ]
            }
          ]
        },
        {
          "title": "Dashboard Type Safety & Documentation",
          "year": "2022",
          "startYear": 2022,
          "endYear": 2022,
          "role": "Software Engineer",
          "description": "Led org-wide TypeScript migration and type safety improvement initiative for Datadog's dashboard codebase. Systematically eliminated any types, added proper type definitions, and established patterns for type-safe code.",
          "impact": "Cut TypeScript any usage by 50% across Dashboards codebase. Reduced runtime type errors. Improved developer velocity through better IDE autocomplete and compile-time error catching. Set standard for TypeScript usage across frontend teams.",
          "technologies": [
        "React",
        "Redux",
        "Type Systems",
        "TypeScript"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Incremental Migration Strategy - Created phased approach to eliminate any types without blocking feature work. Prioritized high-impact areas (API boundaries, shared utilities, core data models)",
                "Type System Design - Built comprehensive type definitions for dashboard domain models, widget configurations, and API responses. Established patterns for discriminated unions and type guards",
                "Documentation & Tooling - Wrote comprehensive guides for widget development including configuration schemas, lifecycle hooks, and common patterns. Built tooling to validate widget configurations at compile time"
              ]
            }
          ]
        },
        {
          "title": "TypeScript Cleanup Initiative",
          "year": "2023",
          "startYear": 2023,
          "endYear": 2023,
          "role": "Software Engineer",
          "description": "Led systematic TypeScript type safety improvements across dashboard codebase. Eliminated unsafe type assertions and established patterns for type-safe code development.",
          "impact": "Reduced runtime type errors. Improved developer velocity through better IDE support. Set standard for TypeScript usage across frontend teams. Made codebase more maintainable for future engineers.",
          "technologies": [
        "React",
        "Type Systems",
        "TypeScript"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Systematic Audit - Reviewed codebase for unsafe type usage patterns. Prioritized fixes by impact and risk",
                "Pattern Establishment - Created reusable patterns for common type-safety scenarios. Documented best practices for team",
                "Team Enablement - Reviewed PRs to maintain type safety standards. Mentored engineers on advanced TypeScript features"
              ]
            }
          ]
        },
        {
          "title": "Frontend Summit",
          "year": "2023",
          "startYear": 2023,
          "endYear": 2023,
          "role": "Software Engineer",
          "description": "Organized and ran Datadog's first-ever Frontend Summit\u2014a multi-day conference bringing together frontend engineers across the company. Created venue for cross-team knowledge sharing, technical deep dives, and community building.",
          "impact": "Established precedent for frontend community events at Datadog. Built cross-org relationships and shared knowledge across previously siloed teams. Demonstrated leadership in frontend community building.",
          "technologies": [
        "Community Building",
        "Event Planning",
        "Technical Leadership"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Event Design & Logistics - Planned multi-day agenda with technical talks, workshops, and networking sessions. Coordinated speakers, venues, and schedules across distributed teams",
                "Content Curation - Identified key technical topics (performance, architecture, testing, tooling) and recruited speakers from across frontend teams to share expertise",
                "Community Building - Created space for informal knowledge transfer and relationship building across teams that rarely interacted. Established foundation for ongoing frontend collaboration"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "bluecore",
      "company": "Bluecore",
      "role": "Staff Engineer",
      "period": "June 2021 - September 2022",
      "startDate": "2021-06",
      "endDate": "2022-09",
      "description": "Led frontend platform architecture and TypeScript migration for marketing technology platform.",
      "color": "#00254a",
      "projects": [
        {
          "title": "Frontend North Star & Architecture Modernization",
          "year": "2021-2022",
          "startYear": 2021,
          "endYear": 2022,
          "role": "Staff Engineer / Frontend Lead",
          "description": "Led frontend transformation at newly-minted unicorn ($1B valuation, $125M Series E). Established technical vision and modernized architecture to enable complex retail marketing workflows as company scaled from data science focus to product-led growth. Wrote comprehensive RFC establishing 'composable LEGO blocks' philosophy and platform layer architecture.",
          "impact": "Published engineering blog defining frontend strategy. Established TypeScript-first culture across engineering org. Built foundation for next-generation product workflows serving enterprise retail customers.",
          "technologies": [
        "Accessibility",
        "CSS",
        "CSS Variables",
        "Code Generation",
        "Design Systems",
        "HTTP Transcoding",
        "Modern CSS",
        "React",
        "TypeScript",
        "gRPC"
      ],
          "links": [
            {
              "text": "Frontend North Star Blog Post",
              "url": "https://medium.com/bluecore-engineering/bluecores-frontend-north-star-eb7d2a04167a"
            }
          ],
          "belowTheFold": [
            {
              "title": "Context",
              "content": [
                "Bluecore had invested heavily in data science and infrastructure while building a relatively light frontend. As the company reached unicorn status and needed to enable more complex customer workflows, the frontend needed to scale both technically and organizationally. Wrote Frontend North Star to align the team around modern practices and establish technical direction."
              ]
            },
            {
              "title": "Execution",
              "content": [
                "Authored 'Bluecore's Frontend North Star' blog post establishing technical vision and principles for scaling frontend at unicorn-stage company",
                "Wrote comprehensive RFC covering design system specifications, reusable components with embedded business logic, and API interface requirements with code generation",
                "Led complete TypeScript migration of component library with modern CSS architecture and design system principles",
                "Architected autogenerated API client system with gRPC/HTTP transcoding, eliminating manual client maintenance",
                "Implemented CSS variables for theming and created responsive layout systems",
                "Designed and taught comprehensive weekly training curriculum for entire engineering team covering TypeScript fundamentals and advanced React patterns",
                "Improved accessibility and performance across component library",
                "Established code generation pipeline from API definitions with type-safe clients and automatic updates",
                "Created hands-on exercises and code review processes to upskill team",
                "Established Frontend Platform team values: developer experience excellence, simplicity & usability, proactive support, trust & reliability, and collaborative problem-solving. Created 'One Bluecore' culture focused on user delight and systematic friction reduction"
              ]
            },
            {
              "title": "Leadership",
              "content": [
                "Defined frontend technical strategy for unicorn-stage company transitioning to product-led growth",
                "Built TypeScript-first culture through teaching and hands-on mentorship",
                "Collaborated with data science and infrastructure teams to align frontend with company mission",
                "Published public engineering content representing company technical brand"
              ]
            }
          ]
        },
        {
          "title": "Frontend Interview Loop Design",
          "year": "2021-2022",
          "startYear": 2021,
          "endYear": 2022,
          "role": "Staff Engineer",
          "description": "Designed comprehensive frontend interview loop for Bluecore, creating structured questions, evaluation criteria, and interviewer guides. Built question bank covering system design (Design Instagram), JavaScript fundamentals (Event Emitter), and React patterns (Auto Suggest Input).",
          "impact": "Standardized frontend hiring process with consistent evaluation criteria. Improved candidate experience through well-structured, fair questions. Enabled consistent bar-raising across all frontend interviews. Created reusable interview materials for scaling frontend hiring.",
          "technologies": [
        "Interview Design",
        "JavaScript",
        "React",
        "System Design"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Question Design - Created three comprehensive interview questions: system design (Instagram feed with infinite scroll, image optimization, caching), JavaScript fundamentals (Event Emitter with edge cases), and React practical (Auto Suggest with debouncing, accessibility)",
                "Evaluation Framework - Built detailed rubrics for each question covering technical depth, problem-solving approach, communication, and trade-off analysis. Included follow-up questions and extension scenarios",
                "Interviewer Enablement - Documented complete interviewer guides with question flow, evaluation criteria, common pitfalls, and calibration guidance. Enabled consistent interview quality across team"
              ]
            }
          ]
        },
        {
          "title": "NextServer (Next.js on Kubernetes)",
          "year": "2022",
          "startYear": 2022,
          "endYear": 2022,
          "role": "Staff Engineer",
          "description": "Replaced expensive Google App Engine monolith running Python 2.7 (facing deprecation) with modern NextJS on Google Kubernetes Engine. Led technical architecture and milestone-based migration strategy.",
          "impact": "Achieved significant cost savings from GAE to GKE migration. Improved performance with server-side rendering. Enabled modern frontend development practices. Zero downtime migration from legacy Python 2.7 system.",
          "technologies": [
        "Google Cloud",
        "Kubernetes",
        "Next.js",
        "Node.js",
        "Python",
        "Python 2.7 Migration",
        "SSR"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Milestone-Based Development - Created phased rollout strategy: M0 (prototype validation), M1 (QA infrastructure), M2 (internal tools), M3 (first customer route), M4 (complete migration). Enabled incremental validation and risk reduction",
                "Architecture & Infrastructure - Designed NextJS server on Google Kubernetes Engine with Node.js runtime. Worked with DevOps on deployment strategy, scaling configuration, and production optimization",
                "Legacy Integration - Managed transition from Python 2.7 App Engine monolith while maintaining API compatibility and zero downtime for customer-facing features"
              ]
            }
          ]
        },        
        {
          "title": "Autogenerated API Client",
          "year": "2022",
          "startYear": 2022,
          "endYear": 2022,
          "role": "Staff Engineer",
          "description": "Architected and led implementation of autogenerated API client system using gRPC with HTTP transcoding. Replaced manual Redux thunk creation for every API call with type-safe, automatically generated clients.",
          "impact": "Eliminated manual client maintenance for dozens of API endpoints. Standardized loading and error state management across application. Improved developer experience for API integration. Reduced API integration time from hours to minutes.",
          "technologies": [
        "Code Generation",
        "HTTP Transcoding",
        "Redux",
        "TypeScript",
        "gRPC"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Code Generation Pipeline - Designed system to automatically generate TypeScript clients from gRPC definitions with full type safety",
                "HTTP Transcoding Integration - Implemented gRPC-Web transcoding layer enabling browser-compatible API calls",
                "Team Mentorship - Architected solution via tech design doc, then mentored team members through implementation and ensured knowledge transfer for long-term ownership"
              ]
            },
            
          ]
        },
        {
          "title": "Component Library Consolidation",
          "year": "2021-2022",
          "startYear": 2021,
          "endYear": 2022,
          "role": "Staff Engineer",
          "description": "Consolidated Bluecore's dual component libraries (VanillaJS and TypeScript with only 80% feature parity) into single TypeScript-based system. Led cross-functional migration effort eliminating code duplication and any type pollution from legacy components.",
          "impact": "Eliminated entire class of type safety issues from VanillaJS any injection. Reduced component maintenance burden by 50% (one library vs two). Improved developer experience with consistent component API. Enabled full TypeScript adoption across frontend.",
          "technologies": [
        "Component Libraries",
        "React",
        "TypeScript",
        "VanillaJS Migration"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Migration Strategy - Created parallelization approach enabling multiple product teams to work simultaneously on different components without blocking each other",
                "Cross-Team Coordination - Coordinated migration across product teams, establishing shared timeline and success criteria. Ensured consistent migration patterns",
                "Detail-Oriented Execution - Methodical component-by-component migration ensuring type safety and feature parity. Validated each component before deprecating VanillaJS version"
              ]
            }
          ]
        },        
        {
          "title": "TypeScript Adoption & Strict Types",
          "year": "2021",
          "startYear": 2021,
          "endYear": 2021,
          "role": "Staff Engineer",
          "description": "Led organization-wide TypeScript adoption, establishing strict type checking standards and migrating existing JavaScript codebase. Created training materials and mentorship program.",
          "impact": "Achieved 100% TypeScript adoption across frontend codebase. Reduced runtime type errors significantly. Improved code maintainability and developer confidence. Established TypeScript-first culture.",
          "technologies": [
        "JavaScript",
        "Type Systems",
        "TypeScript"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Migration Strategy - Designed incremental migration path from JavaScript to TypeScript with strict mode enabled",
                "Training & Education - Created comprehensive weekly training curriculum covering TypeScript fundamentals through advanced patterns",
                "Tooling & Standards - Established linting rules, type checking standards, and best practices documentation"
              ]
            }
          ]
        },
        {
              "title": "TTI Dashboard & Frontend Monitoring",
              "year": "2021",
              "startYear": 2021,
              "endYear": 2022,
              "role": "Staff Engineer",
              "description": "Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes. Improved frontend observability and performance tracking across customer-facing features.",
              "impact": "Improved frontend observability and performance tracking. Enabled data-driven performance optimization decisions.",
              "technologies": [
        "Frontend Observability",
        "Performance Monitoring",
        "Time to Interactive"
      ],
              "belowTheFold": [
                {
                  "title": "Execution",
                  "content": [
                    "Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes",
                    "Improved frontend observability and performance tracking across customer-facing features",
                    "Enabled data-driven performance optimization decisions"
                  ]
                }
              ]
            },
            {
              "title": "Customer 360 Revamp",              
              "year": "2021",
              "startYear": 2021,
              "endYear": 2021,
              "role": "Staff Engineer",
              "description": "Revamped Customer 360 feature on Campaigns team. Proposed long-term improvement plan and handled BFCM (Black Friday/Cyber Monday) frontend readiness.",
              "impact": "Improved Customer 360 feature performance and reliability. Successfully handled BFCM traffic spike.",
              "technologies": [
        "High Traffic Events",
        "Performance Optimization",
        "React"
      ],
              "belowTheFold": [
                {
                  "title": "Execution",
                  "content": [
                    "Revamped Customer 360 feature on Campaigns team",
                    "Proposed long-term improvement plan",
                    "Handled BFCM (Black Friday/Cyber Monday) frontend readiness"
                  ]
                }
              ]
            }
      
      ]
    },
    {
      "id": "dropbox",
      "company": "Dropbox",            
      "startDate": "April 2017",
      "endDate": "April 2021",
      "period": "April 2017 - April 2021",
      "role": "Software Engineer \u2192 Senior Software Engineer",
      "description": "Architected state management systems and founded JavaScript Guild for organizational best practices.",
      "color": "#0061FF",
      "projects": [
        {
          "title": "Plus Plus: Family Plans & Life Vault",
          "year": "2020",
          "startYear": 2020,
          "endYear": 2020,
          "role": "Software Engineer",
          "description": "My work on Dropbox Plus followed a clear quarterly progression: I started on the Family team in Q1, then my manager and I were pulled to support the Vault team in Q2, and again to support the Backup team in Q3. By Q4, having touched all major feature areas, I joined the go-to-market integration squad. This unique progression made me the person who understood how all the product pieces fit together, enabling me to effectively coordinate across teams for a successful launch.",
          "impact": "Successfully launched a new revenue-driving product with contributions from ~150 people across teams. Delivered a sophisticated family sharing experience enabling secure, credential-free family account management. Introduced a secure Vault feature with PIN access and comprehensive management UI. Contributed to robust computer backup functionality. Published engineering lifecycle insights on the Dropbox Tech Blog, highlighting effective team integration and pragmatic decision-making.",
          "technologies": [
        "Computer Backup",
        "Family Sharing",
        "React",
        "Redux",
        "Rust",
        "TypeScript",
        "Vault"
      ],
          "links": [
            {
              "text": "Dropbox Tech Blog Post",
              "url": "https://dropbox.tech/frontend/building-a-living-styleguide-at-dropbox"
            }
          ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Family Plans (Q1) - Joined the Family team, where I built the credential-free family sharing experience and the family account management UI. I established 1:1s with the team (engineers, PM, designer) and shipped my first feature within two weeks. Navigated remote work transition during COVID",
                "Vault (Q2) - My manager and I were pulled in to support the Vault team. Led Vault web frontend development, mentoring another engineer through setup flow, PIN access system, and management interface implementation. I proposed team coding standards for consistency across five engineers",
                "Computer Backup (Q3) - My manager and I were again pulled to support the Backup team. Built backup feature frontend and contributed to backend, including small change to Rust sync engine",
                "Go-to-Market Integration (Q4) - Because I had touched all major feature areas (Family Plans, Vault, and Computer Backup), I became responsible for cross-functional coordination. I worked with approximately 150 people across various teams (engineering, product, design, marketing, legal) to successfully launch this new revenue-driving product. I also published engineering lifecycle insights on the Dropbox Tech Blog, sharing lessons learned from this large-scale product launch"
              ]
            }
          ]
        },
        {
          "title": "Redux State Management System",
          "year": "2018",
          "startYear": 2018,
          "endYear": 2018,
          "role": "Software Engineer",
          "description": "Designed and rolled out comprehensive Redux architecture with TypeScript type-safe patterns across Dropbox's frontend organization. Created reusable patterns, extensive documentation, and systematic team-by-team adoption strategy.",
          "impact": "Adopted by ~10 teams across ~25 features, becoming company standard for state management. Reduced state-related bugs significantly. Improved developer velocity and code maintainability. Created foundation for future frontend architecture decisions. Presented approach in public talk 'Building a Typesafe Code Split React-Redux Application'.",
          "technologies": [
        "Architecture",
        "React",
        "Redux",
        "State Management",
        "TypeScript"
      ],
          "links": [
            {
              "text": "Building a Typesafe Code Split React-Redux Application",
              "url": "https://www.matthewgerstman.com/talks/"
            }
          ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Architecture Design - Built comprehensive Redux patterns with TypeScript type safety, covering common state operations and establishing best practices for complex state management",
                "Organizational Rollout - Created extensive documentation and training materials. Systematic team-by-team adoption with direct support and code review guidelines",
                "Standards Establishment - Set company-wide patterns for state management that influenced frontend direction across organization"
              ]
            }
          ]
        },
        {
          "title": "Underscore → Lodash Migration",
          "year": "2018",
          "startYear": 2018,
          "endYear": 2018,
          "role": "Software Engineer",
          "description": "Co-led migration of Dropbox's 10-year-old codebase from deprecated Underscore to Lodash, modernizing utility library used by millions daily. Built custom Webpack bundle, created comprehensive migration strategy, and executed phased rollout with only one production bug.",
          "impact": "Modernized entire codebase dependency serving millions of users. Maintained bundle size targets through custom builds. Only one production bug despite thousands of lines migrated. Published migration approach on Dropbox Tech Blog. Established patterns for large-scale technical migrations.",
          "technologies": [
        "Build Optimization",
        "Lodash",
        "Migration",
        "Underscore",
        "Webpack"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Research & Alignment - Wrote Web Enhancement Proposal (WEP) to build organizational consensus. Analyzed codebase to identify all Underscore usage and map to Lodash equivalents. Evaluated migration approaches and chose hybrid automated codemod + manual review strategy",
                "Custom Build Optimization - Created custom Webpack Lodash bundle containing only needed functions to maintain bundle size. Built separate typings and treeshaking configs to optimize for production while preserving developer experience",
                "Phased Migration - Split into four phases: direct 1:1 mappings, functions requiring modifications, edge cases, and final Underscore removal. Deployed each phase separately to catch issues incrementally. Thorough testing caught subtle differences (e.g., _.compact empty array handling)"
              ]
            }
          ]
        },
        {
          "title": "File Viewer SDK",
          "year": "2018",
          "startYear": 2018,
          "endYear": 2018,
          "role": "Software Engineer",
          "description": "Led architecture and bootstrapping of cross-platform SDK for consistent file preview functionality across Dropbox web and desktop surfaces. Owned build pipeline, asset optimization, and API design for embedding file previews.",
          "impact": "Infrastructure used across multiple Dropbox surfaces. Consistent file preview experience across platforms. Reusable component for future products. Optimized asset delivery and performance.",
          "technologies": [
        "Build Pipeline",
        "Cross-Platform",
        "File Preview",
        "SDK Development"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Cross-Platform Architecture - Designed SDK architecture supporting both web and desktop platforms with consistent API surface",
                "Build Pipeline - Owned build pipeline and asset optimization for efficient file preview delivery",
                "Extensibility - Built system for easily adding new file type support, enabling future expansion"
              ]
            }
          ]
        },
        {
          "title": "JavaScript Guild",
          "year": "2017-2020",
          "startYear": 2017,
          "endYear": 2020,
          "role": "Software Engineer",
          "description": "Founded JavaScript Guild as community of practice for frontend engineers across Dropbox. Organized knowledge-sharing sessions, published newsletters, coordinated cross-team initiatives, and established forum for frontend challenges.",
          "impact": "Improved frontend culture and standards organization-wide. Created lasting community of practice across teams. Facilitated knowledge transfer and collaboration. Influenced organizational frontend direction through shared learning and discussion.",
          "technologies": [
        "Community Building",
        "Frontend Culture",
        "JavaScript",
        "Knowledge Sharing"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Community Building - Founded and nurtured frontend community across growing engineering organization with no centralized frontend coordination",
                "Knowledge Sharing - Organized regular sessions and published newsletters with tips, updates, and best practices",
                "Cross-Team Coordination - Created forum for discussing frontend challenges and coordinating initiatives across teams"
              ]
            }
          ]
        },
        {
          "title": "JavaScript Guild Summit",
          "year": "2019-2020",
          "startYear": 2019,
          "endYear": 2020,
          "role": "Software Engineer",
          "description": "Organized multi-day technical summits (2019-2020) bringing together frontend engineers from across remote-first organization. Curated technical talks, workshops, and collaboration sessions for deep technical discussions and relationship building.",
          "impact": "Strengthened cross-team relationships in remote-first organization. Enabled deeper technical collaboration. Created lasting organizational connections. Established model for future technical events.",
          "technologies": [
        "Event Planning",
        "Remote Collaboration",
        "Technical Summits"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Event Design - Planned multi-day summits with curated technical content, workshops, and collaboration time",
                "Community Connection - Created space for in-person connection and relationship building in remote-first company",
                "Knowledge Transfer - Facilitated deep technical discussions and cross-team learning"
              ]
            }
          ]
        },
        {
          "title": "Previews Mobile Web",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "Built mobile web file preview experience for Dropbox, creating responsive preview interface optimized for mobile browsers. Early project at Dropbox establishing frontend patterns for mobile optimization and touch interactions.",
          "impact": "Enabled file preview functionality for mobile web users without requiring app download. Improved mobile web experience for millions of users. Established mobile-first patterns for future Dropbox web features.",
          "technologies": [
        "File Preview",
        "Mobile Web",
        "Responsive Design",
        "Touch Interactions"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Mobile Optimization - Designed responsive preview interface optimized for mobile viewports, touch interactions, and varying network conditions",
                "Performance Focus - Implemented progressive loading and optimized asset delivery for mobile bandwidth constraints",
                "Cross-Browser Support - Ensured consistent experience across mobile browsers (Safari, Chrome, Firefox) with varying capabilities"
              ]
            }
          ]
        },
        {
          "title": "Showcase",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "Contributed to Showcase product development, enabling professionals to create portfolio presentations from Dropbox files. Built frontend components for customizable layouts, branding, and file organization into professional showcases.",
          "impact": "Enabled new use case for Dropbox files beyond storage—professional portfolio creation. Expanded Dropbox value proposition for creative professionals and freelancers.",
          "technologies": [
        "Portfolio Creation",
        "Product Development",
        "React"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Component Development - Built frontend components for showcase creation, customization, and viewing experience",
                "File Integration - Integrated with Dropbox file system to enable seamless file selection and organization into showcases",
                "Presentation Layer - Created polished viewing experience for showcase recipients with responsive layouts and branding options"
              ]
            }
          ]
        },
        {
          "title": "ZIP File Previews",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "Built ZIP file preview functionality allowing users to browse ZIP archive contents without downloading entire file. Created file tree navigation, preview support for contained files, and selective download capabilities.",
          "impact": "Reduced unnecessary downloads by enabling preview-before-download workflow. Improved user experience for large ZIP files where users only need specific contents. Saved bandwidth and time for millions of users.",
          "technologies": [
        "File Preview",
        "File Tree UI",
        "ZIP Parsing"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Archive Parsing - Implemented ZIP file parsing to extract directory structure and file metadata without full download",
                "Navigation Interface - Built file tree UI for browsing ZIP contents with folder expansion, file preview, and selective download",
                "Preview Integration - Integrated with existing file preview system to support previewing files within ZIP archives before downloading"
              ]
            }
          ]
        }
      ],
    },
    {"id": "todaytix",
      "company": "TodayTix",
      "role": "Senior Software Engineer",
      "period": "2015 - 2017",
      "startDate": "2015-01",
      "endDate": "2017-12",
      "description": "Led frontend development and architecture.",
      "color": "#E94C89",
      "projects": [
        {
          "title": "Web 2.0: React + Redux Rebuild",
          "year": "Q3-Q4 2016",
          "startYear": 2016,
          "endYear": 2016,
          "role": "Software Engineer",
          "description": "Worked on team of 4 building greenfield React + Redux application from scratch. Learned modern React/Redux architecture and functional programming patterns by diving deep—read all of Lodash and Redux source code for fun. Built checkout flow, show landing pages, and authentication/SSR strategies. Integrated with new Swagger-based API client.",
          "impact": "Shipped production app serving real customers. Deep-dive learning approach (reading source code) established strong foundation in React/Redux patterns that influenced entire career. Created scalable architecture enabling faster feature development.",
          "technologies": [
        "Functional Programming",
        "Lodash",
        "React",
        "Redux",
        "SSR",
        "Swagger"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Deep Learning - Learned React/Redux architecture through hands-on building and reading Lodash and Redux source code. Heavy functional programming focus shaped technical approach",
                "Feature Ownership - Built checkout flow (core revenue path), show landing pages, and authentication/server-side rendering strategies. Integrated with new Swagger-based API client",
                "Greenfield Architecture - Collaborated with team of 4 on greenfield architecture decisions, component patterns, and state management approach for production application"
              ]
            }
          ]
        },
        {
          "title": "Special Offers Feature",
          "year": "Q2 2016",
          "startYear": 2016,
          "endYear": 2016,
          "role": "Software Engineer",
          "description": "Built feature converting lottery losers into buyers through personalized alternative show offers. Built APIs in a Groovy on Grails backend with complex SQL queries for offer matching, designed frontend offer selection experience, implemented business logic for eligibility.",
          "impact": "Captured revenue from users who lost lotteries and would have left empty-handed. Turned user disappointment into conversion opportunity. Demonstrated end-to-end product engineering capability.",
          "technologies": [
        "Backend APIs",
        "Frontend",
        "Grails",
        "Groovy",
        "Groovy on Grails",
        "SQL"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Backend Development - Built APIs in Groovy on Grails with complex SQL queries for matching alternative show offers based on user preferences and availability",
                "Frontend Experience - Designed and implemented offer selection interface for lottery losers to browse and purchase alternative shows",
                "Business Logic - Implemented eligibility rules and offer matching algorithms to personalize recommendations"
              ]
            }
          ]
        },
        {
          "title": "Rush Ticketing",
          "year": "Q1 2016",
          "startYear": 2016,
          "endYear": 2016,
          "role": "Software Engineer",
          "description": "Enabled same-day limited ticket purchases through new backend APIs and business logic. Built RESTful API design for rush ticket operations with complex availability and eligibility rules.",
          "impact": "Expanded business model with same-day sales capability. Demonstrated backend architecture skills and successful cross-team collaboration with mobile engineers.",
          "technologies": [
        "Backend Development",
        "Business Logic",
        "REST",
        "RESTful APIs"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "API Design - Built RESTful APIs for rush ticket operations including availability checks, purchase flow, and eligibility verification",
                "Business Rules - Implemented complex availability and eligibility logic for same-day limited ticket sales",
                "Cross-Team Collaboration - Worked with mobile engineers to ensure consistent API behavior across platforms"
              ]
            }
          ]
        },
        {
          "title": "Sentry Rollout",
          "year": "Q4 2016",
          "startYear": 2016,
          "endYear": 2016,
          "role": "Software Engineer",
          "description": "Established production error monitoring with Sentry, moving from user-reported bugs to proactive error detection. Configured alerting, monitoring, and error triage processes.",
          "impact": "Dramatically improved production visibility. Enabled proactive error detection before user reports. Reduced mean time to resolution. Established operational excellence culture.",
          "technologies": [
        "Alerting",
        "DevOps",
        "Error Monitoring",
        "Sentry"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Monitoring Setup - Configured Sentry for production error tracking with appropriate sampling and alert thresholds",
                "Process Establishment - Created error triage processes and alerting workflows for team response",
                "Operational Excellence - Shifted culture from reactive user-reported bugs to proactive error detection and resolution"
              ]
            }
          ]
        },
        {
          "title": "Ansible Deployment Automation",
          "year": "Q1 2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "Automated deployment process with Ansible playbooks for Node.js applications, replacing manual error-prone deployments. Created reliable, repeatable deployment process with Sentry integration.",
          "impact": "Faster, more reliable deployments with reduced friction and errors. Enabled more frequent releases and improved team velocity.",
          "technologies": [
        "Ansible",
        "Deployment Automation",
        "DevOps",
        "Node.js",
        "Sentry"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Automation - Created Ansible playbooks for Node.js application deployments replacing manual processes",
                "Reliability - Built repeatable deployment process reducing errors and deployment time",
                "Integration - Integrated deployment automation with Sentry for immediate error detection post-deploy"
              ]
            }
          ]
        }
      ],
    },
    {
      "id": "zetta",
      "company": "Zetta.net",
      "role": "Software Engineer",
      "period": "2013 - 2015",
      "startDate": "2013-01",
      "endDate": "2015-12",
      "description": "Full-stack web development.",
      "color": "#4A90E2",
      "projects": [
        {
          "title": "Backbone + RESTful APIs Migration",
          "year": "2015",
          "startYear": 2015,
          "endYear": 2015,
          "role": "Software Engineer",
          "description": "Led complete backend migration to RESTful resource architecture and frontend migration to Backbone.js. Established API design standards, created documentation, and coordinated organization-wide adoption. Trained more senior engineers on REST paradigms.",
          "impact": "Modernized entire API layer. Improved maintainability and developer experience. Reduced API-related bugs. Established patterns for future development. Trained other engineers in REST paradigm.",
          "technologies": [
        "API Design",
        "Backbone",
        "Backbone.js",
        "Documentation",
        "REST",
        "RESTful APIs"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "API Architecture - Led complete backend migration to RESTful resource architecture with proper HTTP verbs and status codes",
                "Frontend Migration - Migrated frontend to Backbone.js with proper MVC patterns and data binding",
                "Standards & Documentation - Established API design standards and created comprehensive documentation for organization-wide adoption",
                "Training - Trained more senior engineers on REST paradigms and best practices"
              ]
            }
          ]
        },
        {
          "title": "CI + Sentry Implementation",
          "year": "2015",
          "startYear": 2015,
          "endYear": 2015,
          "role": "Software Engineer",
          "description": "Set up continuous integration pipeline and implemented Sentry for production error tracking. Established quality standards, monitoring dashboards, and culture of observability.",
          "impact": "Caught bugs before production deployment. Improved system visibility and reliability. Reduced customer-impacting incidents. Established operational excellence practices.",
          "technologies": [
        "CI/CD",
        "DevOps",
        "Error Monitoring",
        "Sentry"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "CI Pipeline - Set up continuous integration pipeline for automated testing and quality checks",
                "Error Monitoring - Implemented Sentry for production error tracking and alerting",
                "Observability Culture - Established monitoring dashboards and culture of observability across team"
              ]
            }
          ]
        },
        {
          "title": "SVN to Git Migration",
          "year": "2015",
          "startYear": 2015,
          "endYear": 2015,
          "role": "Software Engineer",
          "description": "Planned and executed organizational migration from SVN to Git. Established branching strategies, PR processes, and code review practices. Provided hands-on training for entire team.",
          "impact": "Modernized development workflow. Improved collaboration through PR reviews. Enabled better branching and experimentation. Reduced merge conflicts.",
          "technologies": [
        "Code Review",
        "Git",
        "SVN",
        "Version Control"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Migration Planning - Planned and executed organizational migration from SVN to Git with minimal disruption",
                "Process Establishment - Established branching strategies, PR processes, and code review practices",
                "Training - Provided hands-on training for entire team on Git workflows"
              ]
            }
          ]
        },
        {
          "title": "Data Restore Flow",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Software Engineer",
          "description": "Built complete data restore flow enabling users to restore deleted or previous versions of data. Core revenue-driving feature (the money feature) for cloud storage product.",
          "impact": "Critical differentiator for cloud storage product. Core revenue driver. Excellent user experience for complex operation. Demonstrated product engineering capability.",
          "technologies": [
        "Cloud Storage",
        "Full-Stack",
        "UX Design"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Full-Stack Development - Built complete restore flow from file selection UI to backend restore operations",
                "UX Design - Designed intuitive user experience for complex operations including version history and conflict resolution",
                "Backend Integration - Integrated backend restore operations with proper error handling and edge cases"
              ]
            }
          ]
        },
        {
          "title": "User Enrollment Flow Refactor",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Software Engineer",
          "description": "Refactored user enrollment and onboarding flow for improved conversion and user experience. Modernized legacy enrollment code.",
          "impact": "Improved user onboarding experience. Better conversion rates. Cleaner, more maintainable enrollment code.",
          "technologies": [
        "Conversion Optimization",
        "User Onboarding"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Flow Refactor - Refactored user enrollment and onboarding flow for improved conversion",
                "Code Modernization - Modernized legacy enrollment code for better maintainability",
                "UX Improvements - Enhanced user experience throughout enrollment process"
              ]
            }
          ]
        },
        {
          "title": "Performance Optimization & Grunt Build System",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Software Engineer",
          "description": "Systematically profiled and optimized web application performance, significantly reducing page load times. Simultaneously migrated the build system to Grunt, optimizing asset compilation and improving developer experience.",
          "impact": "Achieved a dramatic reduction in initial page load time from 8 seconds to 500 milliseconds. Delivered faster, more efficient builds and significantly improved developer productivity through modern tooling and optimized workflows.",
          "technologies": [
        "Build Systems",
        "Grunt",
        "Performance Optimization",
        "Profiling"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Build System Migration to Grunt - Migrated the legacy build system to Grunt, implementing optimized asset compilation, bundling, and minification",
                "Page Load Optimization - Performed systematic profiling and refactoring of critical paths, including asset loading, rendering, and data fetching, to drastically reduce initial page load times",
                "Developer Experience Improvements - Enhanced the overall development workflow with faster builds, modern tooling, and a more efficient build pipeline"
              ]
            }
          ]
        },
        {
          "title": "Data Deletion Queue",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Software Engineer",
          "description": "Built data deletion queue system for lifecycle management and compliance. Created UI for managing deletion requests with backend job processing.",
          "impact": "Core product feature for cloud storage. Enabled compliance with data retention policies. Improved user control over storage. Demonstrated full-stack product development capability.",
          "technologies": [
        "Compliance",
        "Lifecycle Management",
        "Queue Systems"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Queue System - Built data deletion queue with lifecycle management and scheduling",
                "Full-Stack Implementation - Created UI for deletion requests and backend job processing",
                "Edge Cases - Handled error scenarios and edge cases for reliable deletion"
              ]
            }
          ]
        },
        {
          "title": "Structured Logging",
          "year": "2013",
          "startYear": 2013,
          "endYear": 2013,
          "role": "Software Engineer",
          "description": "Implemented structured logging system during first three months at company. Established logging standards and practices for better system observability.",
          "impact": "Improved system debugging and monitoring capabilities. Established foundation for operational excellence. Early impact as new engineer.",
          "technologies": [
        "DevOps",
        "Logging",
        "Observability"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Logging System - Implemented structured logging system for better observability",
                "Standards - Established logging standards and practices across codebase",
                "Early Impact - Delivered significant infrastructure improvement in first three months"
              ]
            }
          ]
        },
        {
          "title": "Release Gating",
          "year": "2013",
          "startYear": 2013,
          "endYear": 2013,
          "role": "Software Engineer",
          "description": "Built release gating system to ensure quality before production deployments. Created automated checks and manual approval workflows.",
          "impact": "Improved release quality and reduced production incidents. Established quality gates for deployments.",
          "technologies": [
        "Automation",
        "Quality Assurance",
        "Release Management"
      ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Gating System - Built release gating system with automated quality checks",
                "Approval Workflows - Created manual approval workflows for production releases",
                "Quality Improvement - Reduced production incidents through systematic quality gates"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "dance-marathon",
      "company": "Dance Marathon at UF",
      "role": "Technology Captain \u2192 Technology Overall Director",
      "period": "September 2010 - April 2013",
      "startDate": "2010-09",
      "endDate": "2013-04",
      "description": "Led technology strategy for one of the largest student-run philanthropies.",
      "color": "#FFD93D",
      "projects": [
        {
          "title": "Tweet Two Screens",
          "year": "2013",
          "description": "Custom tweet visualizers optimized for Jumbotron display with real-time aggregation.",
          "technologies": [
        "Real-time",
        "Twitter API",
        "jQuery"
      ],
          "role": "",
          "startYear": 2013,
          "endYear": 2013,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Built custom tweet visualizers optimized for Jumbotron display",
                "Implemented real-time tweet aggregation via Twitter API",
                "Created visual design specifically for large-screen viewing",
                "Built content moderation system for appropriate messaging"
              ]
            }
          ]
        },
        {
          "title": "DMatUF iPhone App",
          "year": "2013",
          "description": "Native iOS event app with schedule, song requests, and arena map for offline-first usage.",
          "technologies": [
        "Native Mobile",
        "Objective-C",
        "iOS"
      ],
          "role": "",
          "startYear": 2013,
          "endYear": 2013,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Built native iOS event app (pre-widespread adoption era)",
                "Implemented event schedule and timing features",
                "Created song request functionality",
                "Designed locally hosted basketball arena map"
              ]
            }
          ]
        },
        {
          "title": "DMAssassins",
          "year": "2012",
          "description": "Real-life 'assassins' game with target assignment system keeping thousands engaged throughout 26.6-hour marathon.",
          "impact": "Used by thousands for 5+ years",
          "technologies": [
        "Game Design",
        "MySQL",
        "PHP",
        "jQuery"
      ],
          "role": "",
          "startYear": 2012,
          "endYear": 2012,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Designed real-life 'assassins' game with target assignment system",
                "Built pin verification system for 'hits'",
                "Implemented automatic target reassignment upon elimination",
                "Created MySQL backend for game state management",
                "Built jQuery frontend for game interface"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "early-programming",
      "company": "Early Programming & Education",
      "role": "Student & Freelance Developer",
      "period": "1999 - 2013",
      "startDate": "1999",
      "endDate": "2013",
      "description": "From first Visual Basic program at age 11 to computer science degree, building websites, fixing computers, and developing deep technical foundations.",
      "color": "#95E1D3",
      "projects": [
        {
          "title": "University of Florida - Computer Science Degree",
          "year": "2009-2013",
          "description": "Comprehensive computer science education covering programming, algorithms, systems, and mathematics.",
          "technologies": [
        "C",
        "CS Fundamentals",
        "Java",
        "MySQL",
        "PHP",
        "WordPress"
      ],
          "role": "",
          "startYear": 2009,
          "endYear": 2013,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Core CS: Data Structures, Algorithms, Operating Systems, Networks, Databases",
                "Systems: Computer Organization, Digital Logic, Circuits",
                "Mathematics: Calculus 1-3, Differential Equations, Linear Algebra, Statistics",
                "Languages: Java, C, PHP, MySQL",
                "Continued WordPress contracting work during college"
              ]
            }
          ]
        },
        {
          "title": "Body Logic MD - IT Support",
          "year": "2008-2009",
          "description": "First 'real' job in office environment during high school, supporting workplace users.",
          "technologies": [
        "IT Support",
        "QA Testing"
      ],
          "role": "",
          "startYear": 2008,
          "endYear": 2009,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Supported systems people depended on for their jobs",
                "Learned professional work skills",
                "Handled non-technical workplace users",
                "Organized group of friends to QA company's new website on weekend"
              ]
            },
            {
              "title": "Leadership",
              "content": [
                "Team leadership: Organized QA testing weekend with friends"
              ]
            }
          ]
        },
        {
          "title": "Johns Hopkins Summer Program",
          "year": "2008",
          "description": "Programming 1 course providing deeper dive into computer science fundamentals, plus philosophy course developing critical thinking.",
          "technologies": [
        "Computer Science Fundamentals",
        "Philosophy"
      ],
          "role": "",
          "startYear": 2008,
          "endYear": 2008
        },
        {
          "title": "Freelance Computer Repair & Web Design",
          "year": "2006-2009",
          "description": "High school freelance work doing computer repair, virus removal, and building simple websites.",
          "technologies": [
        "Computer Repair",
        "Customer Service",
        "Web Design"
      ],
          "role": "",
          "startYear": 2006,
          "endYear": 2009,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Computer repair and troubleshooting",
                "Virus removal during 'era of constant malware'",
                "Software installation and configuration",
                "Teaching people how to use computers",
                "Designing and building simple websites"
              ]
            }
          ]
        },
        {
          "title": "Don Estridge High Tech Middle School",
          "year": "2005",
          "description": "Programming in Pascal, hardware assembly, field support, and early security research.",
          "technologies": [
        "Field Support",
        "Hardware Assembly",
        "Pascal"
      ],
          "role": "",
          "startYear": 2005,
          "endYear": 2005,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Wrote programs for fun in Pascal classes",
                "Built command line interactive Periodic Table for science project",
                "Discovered and reported printer security vulnerability",
                "Learned computer assembly, BIOS configuration, and hardware troubleshooting",
                "Fixed computers for students and teachers",
                "Developed skills explaining technical concepts to non-technical users"
              ]
            }
          ]
        },
        {
          "title": "First Programs & Websites",
          "year": "1999-2000",
          "description": "Started with Visual Basic guest book, then built websites with HTML and JavaScript including the legendary 'DBZ dance party site'.",
          "technologies": [
        "HTML",
        "JavaScript",
        "Visual Basic"
      ],
          "role": "",
          "startYear": 1999,
          "endYear": 2000,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "First program: Generic guest book using Visual Basic 5",
                "Built websites to show classmates at school",
                "Created site with personalized message prompts",
                "Made 'DBZ dance party' site with Dragon Ball Z gifs and Ocarina of Time music"
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default resumeData;

