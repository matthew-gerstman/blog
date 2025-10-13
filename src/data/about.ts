export interface Hero {
  title: string;
  subtitle: string;
  lead: string;
}

export interface ProfessionalSummary {
  description: string;
  coreStrengths: string[];
}

export interface TechnicalCategory {
  title: string;
  description: string;
}

export interface TechnicalExpertise {
  categories: TechnicalCategory[];
}

export interface FeaturedProject {
  title: string;
  company: string;
  year: string;
  description: string;
}

export interface OriginStory {
  paragraphs: string[];
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface Contact {
  links: ContactLink[];
}

export interface AboutData {
  hero: Hero;
  professionalSummary: ProfessionalSummary;
  technicalExpertise: TechnicalExpertise;
  featuredProjects: FeaturedProject[];
  originStory: OriginStory;
  contact: Contact;
}

const aboutData: AboutData = {
  hero: {
    title: "About Me",
    subtitle: "Software Engineer",
    lead: "Over 12 years building complex, performant systems that make sophisticated technology feel simple. I specialize in bridging powerful capabilities with production-ready interfaces, with a proven track record of leading technical initiatives from concept to full rollout at scale companies."
  },
  professionalSummary: {
    description: "Frontend Product Engineer with deep full-stack experience, focused on building systems that scale across teams and organizations. I thrive at the intersection of complex technical challenges and user experience, with particular expertise in making non-deterministic systems feel reliable and trustworthy.",
    coreStrengths: [
      "Systems thinking and scalable architecture design",
      "Performance engineering and optimization",
      "Technical leadership and knowledge sharing",
      "End-to-end product ownership",
      "Migration expertise and organizational change management"
    ]
  },
  technicalExpertise: {
    categories: [
      {
        title: "Languages & Frameworks",
        description: "TypeScript, JavaScript, React, Redux, Node.js, Python, PHP, SQL"
      },
      {
        title: "Specializations",
        description: "Real-time collaboration systems, Complex UI, Performance optimization, State management at scale, API architecture"
      },
      {
        title: "Leadership & Process",
        description: "Technical mentorship, Migration planning, Community building, Cross-functional coordination"
      }
    ]
  },
  featuredProjects: [
    {
      title: "Notebooks 2.0",
      company: "Datadog",
      year: "2024",
      description: "Complete rebuild of collaborative data science tooling with real-time multi-user editing."
    },
    {
      title: "PDF Reporting System",
      company: "Datadog",
      year: "2023",
      description: "Built horizontally scalable Node.js/Puppeteer system, improving widget fidelity from ~70% to near 100%."
    },
    {
      title: "Redux State Management",
      company: "Dropbox",
      year: "2018",
      description: "Designed Redux architecture adopted by ~10 teams across ~25 features, becoming company standard."
    },
    {
      title: "Page Load Optimization",
      company: "TodayTix",
      year: "2016",
      description: "Achieved 95% reduction in page load time (8 seconds → 400ms) through systematic optimization."
    }
  ],
  originStory: {
    paragraphs: [
      "Started programming at age 11 with Visual Basic, driven by curiosity about how programs work. Built websites at 12, explored networking protocols at 13, and ran a freelance tech support business in high school.",
      "Won the Don Estridge Award for technical achievement in middle school. Formal CS education covered algorithms, data structures, and hardware fundamentals. Early experiences emphasized deep technical understanding, strong communication, and user empathy—principles that continue to shape my work today."
    ]
  },
  contact: {
    links: [
      {
        label: "Blog: matthewgerstman.com",
        url: "https://matthewgerstman.com"
      },
      {
        label: "GitHub: github.com/matthewgerstman",
        url: "https://github.com/matthewgerstman"
      },
      {
        label: "LinkedIn: linkedin.com/in/matthewgerstman",
        url: "https://linkedin.com/in/matthewgerstman"
      }
    ]
  }
};

export default aboutData;
