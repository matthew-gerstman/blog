export interface Talk {
  id: string;
  title: string;
  subtitle: string;
  video: string;
  date: string;
  venue: string;
  description: string;
  tags: string[];
  slidesUrl?: string;
  demoUrl?: string;
}

export const talks: Talk[] = [
  {
    id: 'functional-programming-fundamentals',
    title: 'Functional Programming Fundamentals',
    subtitle: 'React NYC Meetup',
    video: 'kkRyjXDpYqg',
    date: '2018',
    venue: 'NYC',
    description:
      'This was my first public tech talk. It was an introduction to functional programming concepts for JavaScript developers. I covered immutability, pure functions, composition, and higher-order functions',
    tags: ['Functional Programming', 'JavaScript', 'Fundamentals'],
    slidesUrl:
      'https://www.dropbox.com/scl/fi/okj4pkxtb94bk19a0spv9/Functional-Programming-Fundamentals.paper?rlkey=0jbu7mra246ortssb3nopr4e7&dl=0',
  },
  {
    id: 'typescript-seeing-past-the-hype-reactiveconf',
    title: 'TypeScript: Seeing Past the Hype',
    subtitle: 'ReactiveConf',
    video: 'KdvEGPiULAQ',
    date: '2019',
    venue: 'Prague, Czech Republic',
    description:
      "I gave this talk after I fell in love with TypeScript. It's meant to be a pragmatic look at TypeScript adoption beyond the buzz. This talk explores real-world benefits, common pitfalls, and strategies for introducing static types to existing JavaScript codebases without disrupting your team's velocity.",
    tags: ['TypeScript', 'JavaScript', 'Developer Experience'],
    slidesUrl: 'http://typescript.matthewgerstman.com/',
  },
  {
    id: 'typesafe-code-split-react-redux',
    title: 'Building a Typesafe Code Split React-Redux Application',
    subtitle: '',
    video: 'Mumy5YZZ2gs',
    date: '2018',
    venue: 'NYC',
    description:
      "This talk covers the work I did building out Dropbox's state management platform. Combining TypeScript with React and Redux while maintaining code splitting presents unique challenges. This talk demonstrates patterns for achieving full type safety across async boundaries without sacrificing bundle size or load performance.",
    tags: ['React', 'Redux', 'Code Splitting', 'TypeScript'],
    slidesUrl: 'https://slides.slytherin.dev/#0',
    demoUrl: 'https://slytherin.dev/',
  },
  {
    id: 'nothing-generic-about-it',
    title: 'Nothing Generic About It',
    subtitle: 'Advanced TypeScript',
    video: '1YWrc21Uv9g?start=530',
    date: '2020',
    venue: 'Online',
    description:
      'Deep dive into TypeScript generics and advanced type patterns. Learn how to build type-safe, reusable abstractions that scale with your codebase while maintaining excellent developer ergonomics and autocomplete.',
    tags: ['TypeScript', 'Generics', 'Type Systems'],
    slidesUrl: 'https://generics.matthewgerstman.com/',
  },
  {
    id: 'double-your-salary',
    title: 'Double Your Salary With This One Simple Trick',
    subtitle: '',
    video: 'm1XdasrstCc',
    date: '2020',
    venue: 'NYC',
    description: "This is probably the most popular talk I've ever given.",
    tags: ['Career', 'Negotiation', 'Compensation'],
    slidesUrl: 'http://salary.matthewgerstman.com/',
  },
  {
    id: 'typescript-seeing-past-the-hype-react-loop',
    title: 'TypeScript: Seeing Past the Hype',
    subtitle: 'React Loop',
    video: 'veXkJq0Z2Qk',
    date: '2019',
    venue: 'Chicago, IL',
    description:
      'An earlier iteration of the TypeScript adoption talk. I usually recomend the Prague version.',
    tags: ['TypeScript', 'React', 'Migration'],
    slidesUrl: 'http://typescript.matthewgerstman.com/',
  },
  {
    id: 'functional-programming-fundamentals-tlv',
    title: 'Functional Programming Fundamentals',
    subtitle: '',
    video: 'Pjc1AnBLG8c',
    date: '2018',
    venue: 'Tel Aviv, Israel',
    description:
      'Introduction to functional programming concepts for JavaScript developers. The original version of this talk was filled with Taylor Swift references but I replaced them with Natalie Portman for an Israeli audience.',
    tags: ['Functional Programming', 'JavaScript', 'Fundamentals'],
    slidesUrl:
      'https://www.dropbox.com/scl/fi/acxjzwodxgbuw3iwtq675/.paper?rlkey=c9fufxxd9wpuqli3ty0zfn73l&dl=0',
  },
];
