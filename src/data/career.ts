import type { CareerData } from './types/career.types';

const careerData: CareerData = {
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
            "ProseMirror",
            "CRDTs (Yjs)",
            "WebSockets",
            "React",
            "TypeScript",
            "Team Leadership"
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
            "Event Planning",
            "Team Building",
            "Cross-functional Coordination"
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
            "Teaching",
            "Career Development",
            "Technical Leadership",
            "Curriculum Design"
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
            "Puppeteer",
            "React",
            "TypeScript",
            "PDF Generation",
            "gRPC",
            "Queue Systems"
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
            "TypeScript",
            "React",
            "Testing Frameworks",
            "Integration Testing"
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
            "TypeScript",
            "React",
            "Redux",
            "Type Systems"
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
            "TypeScript",
            "React",
            "Type Systems"
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
            "Event Planning",
            "Technical Leadership",
            "Community Building"
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
          "role": "Staff Engineer",
          "description": "Designed cohesive frontend platform strategy to unify fragmented architecture across product surfaces. Led TypeScript migration of component library with modern CSS architecture. Established patterns, created shared infrastructure, and coordinated cross-team adoption.",
          "impact": "Unified frontend development practices. Modernized entire codebase with TypeScript and modern CSS. Reduced duplication and maintenance burden. Improved developer experience and velocity. Created scalable foundation for growth.",
          "technologies": [
            "TypeScript",
            "React",
            "CSS Variables",
            "Component Design Systems",
            "Architecture Patterns"
          ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Platform Strategy - Designed cohesive frontend platform strategy. Established architectural patterns and standards. Built bridges between legacy and modern systems",
                "TypeScript Migration - Led migration of entire component library to TypeScript. Created type-safe patterns for common UI components. Incremental migration strategy to avoid breaking changes",
                "Modern CSS Architecture - Standardized component library with CSS variables for theming. Implemented responsive layout systems. Improved accessibility and performance",
                "Cross-Team Coordination - Coordinated adoption across teams. Created comprehensive documentation. Built culture of continuous learning through weekly training"
              ]
            }
          ]
        },
        {
          "title": "NextServer (Next.js on Kubernetes)",
          "year": "2022",
          "startYear": 2022,
          "endYear": 2022,
          "role": "Senior Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "TypeScript Adoption & Strict Types",
          "year": "2021-2022",
          "startYear": 2021,
          "endYear": 2022,
          "role": "Staff Engineer",
          "description": "Designed and taught comprehensive training curriculum on TypeScript fundamentals and advanced React patterns. Weekly classes with hands-on exercises to upskill entire engineering team on modern development practices.",
          "impact": "Upskilled entire engineering team. Improved code quality across organization. Accelerated adoption of TypeScript and modern patterns. Built culture of continuous learning. Reduced onboarding time for new engineers.",
          "technologies": [
            "TypeScript",
            "React",
            "Redux",
            "Teaching"
          ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Curriculum Design - Created comprehensive training covering TypeScript fundamentals, advanced React patterns, and best practices. Balanced theory with practical exercises",
                "Interactive Teaching - Led weekly classes with hands-on exercises and code reviews. Created learning resources and documentation",
                "Team Impact - Built culture of continuous learning. Improved code quality and reduced onboarding time. Enabled confident adoption of new patterns"
              ]
            }
          ]
        },
        {
          "title": "Autogenerated API Client",
          "year": "2021",
          "startYear": 2021,
          "endYear": 2021,
          "role": "Staff Engineer",
          "description": "Architected autogenerated API client system using gRPC/HTTP transcoding. Eliminated manual API client maintenance through code generation pipeline from API definitions with type-safe client and automatic updates.",
          "impact": "Eliminated manual API client maintenance. Reduced API-related bugs significantly. Improved frontend/backend contract clarity. Accelerated feature development velocity. Set standard for API integration across organization.",
          "technologies": [
            "TypeScript",
            "gRPC",
            "HTTP Transcoding",
            "Code Generation"
          ],
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Architecture Design - Implemented gRPC/HTTP transcoding for seamless protocol translation. Created code generation pipeline from API definitions",
                "Type-Safe Client - Built autogenerated client with type safety and automatic updates. Designed error handling and retry logic",
                "Developer Experience - Ensured automatic sync with backend changes. Set standard for API integration. Reduced integration bugs"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "dropbox",
      "company": "Dropbox",
      "role": "Software Engineer \u2192 Senior Software Engineer",
      "period": "June 2017 - June 2021",
      "startDate": "2017-06",
      "endDate": "2021-06",
      "description": "Architected state management systems and founded JavaScript Guild for organizational best practices.",
      "color": "#0061FF",
      "projects": [
        {
          "title": "Plus Plus: Family Plans & Life Vault",
          "year": "2020",
          "description": "Led end-to-end frontend architecture for new product line with complex family sharing features.",
          "impact": "Created new revenue stream",
          "technologies": [
            "TypeScript",
            "React",
            "Redux"
          ],
          "role": "",
          "startYear": 2020,
          "endYear": 2020,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Led end-to-end frontend architecture from ideation to launch",
                "Designed complex state management for family account relationships",
                "Built intuitive UI for family plan management",
                "Coordinated cross-functional teams (design, product, backend)",
                "Implemented Life Vault feature for important document storage"
              ]
            }
          ]
        },
        {
          "title": "Redux State Management System",
          "year": "2018",
          "description": "Designed comprehensive Redux architecture with TypeScript type-safe patterns adopted across the organization.",
          "impact": "Adopted by ~10 teams across ~25 features",
          "technologies": [
            "TypeScript",
            "Redux",
            "React"
          ],
          "role": "",
          "startYear": 2018,
          "endYear": 2018,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Designed comprehensive Redux architecture with TypeScript",
                "Created reusable patterns for common state operations",
                "Built extensive documentation and training materials",
                "Systematic rollout across organization with team support",
                "Established best practices and code review guidelines"
              ]
            }
          ]
        },
        {
          "title": "File Viewer SDK",
          "year": "2018",
          "description": "Led architecture and bootstrapping of cross-platform SDK for file preview functionality.",
          "technologies": [
            "TypeScript",
            "React",
            "SDK Development"
          ],
          "role": "",
          "startYear": 2018,
          "endYear": 2018,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Led architecture and bootstrapping of cross-platform SDK",
                "Owned build pipeline and asset optimization",
                "Designed API for embedding file previews",
                "Coordinated between web and desktop teams"
              ]
            }
          ]
        },
        {
          "title": "Underscore \u2192 Lodash Migration",
          "year": "2018",
          "startYear": 2018,
          "endYear": 2018,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "JavaScript Guild",
          "year": "2017-2021",
          "description": "Founded JavaScript Guild and organized 100+ attendee technical summits for frontend engineers.",
          "technologies": [
            "Community",
            "Leadership"
          ],
          "role": "",
          "startYear": 2017,
          "endYear": 2021,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Founded JavaScript Guild as community for frontend engineers",
                "Organized regular knowledge-sharing sessions",
                "Published newsletters with tips and updates",
                "Coordinated multi-day technical summits"
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
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Showcase",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "ZIP File Previews",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        }
      ]
    },
    {
      "id": "todaytix",
      "company": "TodayTix",
      "role": "Software Engineer",
      "period": "January 2016 - June 2017",
      "startDate": "2016-01",
      "endDate": "2017-06",
      "description": "Full-stack development for theater ticketing platform with dramatic performance improvements.",
      "color": "#E2231A",
      "projects": [
        {
          "title": "Ansible Deployment Automation",
          "year": "2017",
          "startYear": 2017,
          "endYear": 2017,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Web 2.0: React + Redux Rebuild",
          "year": "2016",
          "description": "Built production-ready React + Redux application from scratch with comprehensive component library.",
          "technologies": [
            "React",
            "Redux",
            "Node.js",
            "ES6+"
          ],
          "role": "",
          "startYear": 2016,
          "endYear": 2016,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Complete application architecture design",
                "Built comprehensive component library",
                "Implemented Redux state management patterns",
                "Created Node.js authentication layer",
                "Designed and built checkout flow"
              ]
            }
          ]
        },
        {
          "title": "Special Offers Feature",
          "year": "2016",
          "description": "End-to-end feature design converting users who lost lottery into alternative sales.",
          "impact": "New revenue stream from lost sales",
          "technologies": [
            "Groovy",
            "React",
            "SQL",
            "Full-Stack"
          ],
          "role": "",
          "startYear": 2016,
          "endYear": 2016,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "End-to-end feature design from user research to implementation",
                "Built Groovy APIs with complex SQL queries for offer matching",
                "Designed frontend experience for offer selection",
                "Implemented business logic for offer eligibility"
              ]
            }
          ]
        },
        {
          "title": "Rush Ticketing",
          "year": "2016",
          "startYear": 2016,
          "endYear": 2016,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        }
      ]
    },
    {
      "id": "zetta",
      "company": "Zetta.net",
      "role": "Intern \u2192 Software Engineer",
      "period": "June 2012 - December 2015",
      "startDate": "2012-06",
      "endDate": "2015-12",
      "description": "Cloud storage platform development with rapid progression to technical leadership.",
      "color": "#FF6B35",
      "projects": [
        {
          "title": "Page Load Optimization",
          "year": "2016",
          "description": "Comprehensive performance profiling and systematic optimization of mobile-first theater ticketing app.",
          "impact": "95% reduction: 8 seconds \u2192 400ms",
          "technologies": [
            "JavaScript",
            "Webpack",
            "Performance"
          ],
          "role": "",
          "startYear": 2016,
          "endYear": 2016,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Comprehensive performance profiling to identify bottlenecks",
                "Systematic bundle strategy optimization and code splitting",
                "Asset delivery improvements (compression, CDN, caching)",
                "Render path performance enhancements",
                "Critical path optimization for above-the-fold content"
              ]
            }
          ]
        },
        {
          "title": "Backbone + RESTful APIs Migration",
          "year": "2015",
          "description": "Led complete backend migration to RESTful architecture and frontend migration to Backbone.js.",
          "impact": "First major technical leadership role",
          "technologies": [
            "Backbone.js",
            "RESTful APIs",
            "JavaScript"
          ],
          "role": "",
          "startYear": 2015,
          "endYear": 2015,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Led complete backend migration to RESTful resource architecture",
                "Migrated frontend to Backbone.js for better structure",
                "Established API design standards and conventions",
                "Created documentation and training materials"
              ]
            }
          ]
        },
        {
          "title": "SVN \u2192 Git Migration",
          "year": "2015",
          "description": "Planned and executed organizational migration with team training and code review processes.",
          "technologies": [
            "Git",
            "Version Control"
          ],
          "role": "",
          "startYear": 2015,
          "endYear": 2015,
          "belowTheFold": [
            {
              "title": "Leadership",
              "content": [
                "Planned and executed organizational migration from SVN to Git",
                "Established branching strategies and PR processes",
                "Created Git training materials and documentation",
                "Provided hands-on training for team members"
              ]
            }
          ]
        },
        {
          "title": "CI + Sentry Implementation",
          "year": "2015",
          "description": "Set up continuous integration pipeline and Sentry for production error tracking.",
          "technologies": [
            "CI/CD",
            "Sentry",
            "Testing"
          ],
          "role": "",
          "startYear": 2015,
          "endYear": 2015,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Set up continuous integration pipeline",
                "Implemented Sentry for production error tracking",
                "Established quality standards and gates"
              ]
            }
          ]
        },
        {
          "title": "Data Restore Flow",
          "year": "2014",
          "description": "Built complete data restore flow with intuitive UI for version history and conflict resolution.",
          "impact": "Core revenue-driving feature",
          "technologies": [
            "Full-Stack",
            "UI/UX",
            "Product Engineering"
          ],
          "role": "",
          "startYear": 2014,
          "endYear": 2014,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Built complete data restore flow",
                "Created file selection and restoration UI",
                "Integrated backend restore operations",
                "Designed user experience for complex operations"
              ]
            }
          ]
        },
        {
          "title": "User Enrollment Flow Refactor",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Fullstack Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Performance Refactor & Grunt Build System",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Fullstack Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Data Deletion Queue",
          "year": "2014",
          "startYear": 2014,
          "endYear": 2014,
          "role": "Fullstack Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Structured Logging",
          "year": "2013",
          "startYear": 2013,
          "endYear": 2013,
          "role": "Engineering Intern",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
        },
        {
          "title": "Release Gating",
          "year": "2013",
          "startYear": 2013,
          "endYear": 2013,
          "role": "Software Engineer",
          "description": "",
          "impact": "",
          "technologies": [],
          "belowTheFold": []
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
            "Twitter API",
            "jQuery",
            "Real-time"
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
            "iOS",
            "Objective-C",
            "Native Mobile"
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
            "PHP",
            "MySQL",
            "jQuery",
            "Game Design"
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
            "Java",
            "C",
            "PHP",
            "MySQL",
            "WordPress",
            "CS Fundamentals"
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
            "Web Design",
            "Customer Service"
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
            "Pascal",
            "Hardware Assembly",
            "Field Support"
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
            "Visual Basic",
            "HTML",
            "JavaScript"
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

export default careerData;

