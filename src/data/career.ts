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
          "title": "Graphing Summit",
          "year": "2024-2025",
          "startYear": 2024,
          "endYear": 2025,
          "role": "Engineering Manager",
          "description": "Organized Datadog's Graphing Summit to build cohesive culture within a newly-formed graphing org from a recent reorg. Led planning with 2 co-organizers, keeping execution lean—1/10 the time investment of typical summits with better relationship outcomes.",
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
                "Customer Engagement - Built customer council with shared Slack channels; identified high-usage customers and coordinated with CSMs. Spoke with multiple external customers per week during rollout. Rapidly implemented feedback—nothing a customer loves more than hearing their feature request was implemented in 48 hours. Product manager was focused elsewhere for 6 months; I handled prioritization and release management. Established principle: ship to someone new every week. We slowed down for customer feedback and sped up where it didn't apply. For example: released to 98% of customers while finishing API support for the remaining 2%. When a customer didn't like keyboard-first design, we paused for a week to implement \"Bring Back Buttons\" initiative."
              ]
            }
          ]
        },
        {
          "title": "Dashboard Type Safety Initiative",
          "year": "2023-2024",
          "description": "Systematic TypeScript migration across dashboards codebase.",
          "impact": "Cut TypeScript 'any' usage by 50%",
          "technologies": [
            "TypeScript",
            "React",
            "Redux"
          ],
          "role": "",
          "startYear": 2023,
          "endYear": 2024,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Systematic audit of TypeScript type usage",
                "Incremental migration strategy to proper typing",
                "Created type-safe patterns for common dashboard operations"
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
          "description": "Built Datadog's report-printer node service from scratch—offline dashboard snapshots with 98%+ widget fidelity. Designed client/server rendering handshake, chose Puppeteer, established Node.js patterns now used across 15+ services.",
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
          "description": "Pioneered integration testing approach for complex UI interactions in dashboards.",
          "technologies": [
            "TypeScript",
            "React",
            "Testing"
          ],
          "role": "",
          "startYear": 2023,
          "endYear": 2023,
          "belowTheFold": [
            {
              "title": "Execution",
              "content": [
                "Built testing patterns for multi-widget interactions",
                "Created test utilities for dashboard scenarios",
                "Established best practices for UI testing"
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
          "description": "Led frontend transformation at newly-minted unicorn ($1B valuation, $125M Series E). Established technical vision and modernized architecture to enable complex retail marketing workflows as company scaled from data science focus to product-led growth.",
          "impact": "Published engineering blog defining frontend strategy. Established TypeScript-first culture across engineering org. Built foundation for next-generation product workflows serving enterprise retail customers.",
          "technologies": [
            "TypeScript",
            "React",
            "Modern CSS",
            "CSS Variables",
            "Design Systems",
            "gRPC",
            "HTTP Transcoding",
            "Code Generation",
            "Accessibility"
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
                "Led complete TypeScript migration of component library with modern CSS architecture and design system principles",
                "Architected autogenerated API client system with gRPC/HTTP transcoding, eliminating manual client maintenance",
                "Implemented CSS variables for theming and created responsive layout systems",
                "Designed and taught comprehensive weekly training curriculum for entire engineering team covering TypeScript fundamentals and advanced React patterns",
                "Improved accessibility and performance across component library",
                "Established code generation pipeline from API definitions with type-safe clients and automatic updates",
                "Created hands-on exercises and code review processes to upskill team"
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
        }
      ]
    },
    {
      "id": "dropbox",
      "company": "Dropbox",
      "role": "Software Engineer → Senior Software Engineer",
      "period": "June 2017 - June 2021",
      "startDate": "2017-06",
      "endDate": "2021-06",
      "description": "Architected state management systems and founded JavaScript Guild for organizational best practices.",
      "color": "#0061FF",
      "projects": [
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
          "title": "Page Load Optimization",
          "year": "2016",
          "description": "Comprehensive performance profiling and systematic optimization of mobile-first theater ticketing app.",
          "impact": "95% reduction: 8 seconds → 400ms",
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
        }
      ]
    },
    {
      "id": "zetta",
      "company": "Zetta.net",
      "role": "Intern → Software Engineer",
      "period": "June 2012 - December 2015",
      "startDate": "2012-06",
      "endDate": "2015-12",
      "description": "Cloud storage platform development with rapid progression to technical leadership.",
      "color": "#FF6B35",
      "projects": [
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
          "title": "SVN → Git Migration",
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
        }
      ]
    },
    {
      "id": "dance-marathon",
      "company": "Dance Marathon at UF",
      "role": "Technology Captain → Technology Overall Director",
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

