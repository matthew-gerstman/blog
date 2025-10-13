import type { CareerData } from '../types/career';

const careerData: CareerData = {
  hero: {
    title: "Career",
    subtitle: "Building tools, leading teams, and shipping products that matter."
  },
  jobs: [
    {
      id: "datadog",
      company: "Datadog",
      role: "Engineering Manager",
      period: "2022 - Present",
      startDate: "2022-05-01",
      description: "Leading engineering teams building collaborative tools and visualization platforms.",
      color: "#632CA6",
      projects: [
        {
          title: "Graphing Summit",
          year: "2024-2025",
          startYear: 2024,
          endYear: 2025,
          role: "Engineering Manager",
          description: "Organized Datadog\'s Graphing Summit to build cohesive culture in newly-formed org from recent reorg. Led planning with 2 co-organizers, keeping execution lean—1/10 the time investment of typical summits with better relationship outcomes. Ran pre-summit events (IC1 class, org lunches, donut 1:1s) to increase baseline connections and maximize summit\'s force multiplier effect.",
          impact: "Transformed \"kind of knew each other\" relationships into \"really knew each other\" connections. Created foundation for cross-team collaboration in graphing org. Delivered successful summit with minimal committee overhead and 90% less planning time than traditional summits.",
        },
        {
          title: "Notebooks 2.0",
          year: "2023-2024",
          startYear: 2023,
          endYear: 2024,
          role: "Engineering Manager",
          description: "Led the complete rebuild of Datadog\'s collaborative notebook editor, managing a team through parallel rich text and multiplayer initiatives while maintaining a Ted Lasso-inspired leadership approach.",
          impact: "Shipped production collaborative editor to 100% of Datadog customers. Grew team from 0 to 4 engineers with 2 promotions. Established customer-driven release cadence that went from alpha to full GA in 9 months.",
          belowTheFold: [
            // TODO: Add execution and leadership sections
          ],
        },
        {
          title: "Dashboard Reporting & PDF Export",
          year: "2023",
          startYear: 2023,
          endYear: 2023,
          role: "Senior Software Engineer",
          description: "Built Datadog\'s PDF reporting system from scratch—offline dashboard snapshots with 95%+ widget fidelity. Designed client/server rendering handshake, chose Puppeteer over Selenium, established Node.js patterns now used across 15+ services.",
          impact: "Shipped to all customers with 95%+ widget fidelity (up from 70%). Created new revenue stream and permanent team. Node.js foundation code became company standard.",
        }
      ]
    },
    {
      id: "bluecore",
      company: "Bluecore",
      role: "Staff Engineer",
      period: "2021 - 2022",
      startDate: "2021-01-01",
      endDate: "2022-05-01",
      description: "Led frontend platform modernization and architecture initiatives.",
      color: "#0066FF",
      projects: [
      ]
    },
    {
      id: "dropbox",
      company: "Dropbox",
      role: "Senior Software Engineer",
      period: "2017 - 2021",
      startDate: "2017-01-01",
      endDate: "2021-01-01",
      description: "Built file preview systems and developer tools for web platform.",
      color: "#0061FF",
      projects: [
      ]
    },
    {
      id: "todaytix",
      company: "TodayTix",
      role: "Software Engineer",
      period: "2016 - 2017",
      startDate: "2016-01-01",
      endDate: "2017-01-01",
      description: "Developed ticketing features and infrastructure for theater booking platform.",
      color: "#E31C79",
      projects: [
      ]
    },
    {
      id: "zetta",
      company: "Zetta.net",
      role: "Software Engineer",
      period: "2013 - 2016",
      startDate: "2013-01-01",
      endDate: "2016-01-01",
      description: "Built cloud backup and disaster recovery systems.",
      color: "#00A0DC",
      projects: [
      ]
    },
    {
      id: "dancemarathon",
      company: "Dance Marathon at UF",
      role: "Student Developer",
      period: "2012 - 2013",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      description: "Created mobile apps and web platforms for university fundraising events.",
      color: "#FA4616",
      projects: [
      ]
    },
    {
      id: "early",
      company: "Early Programming & Education",
      role: "Student",
      period: "2008 - 2012",
      startDate: "2008-01-01",
      endDate: "2012-01-01",
      description: "First programming projects and educational foundations.",
      color: "#999999",
      projects: [
      ]
    }
  ]
};

export default careerData;
