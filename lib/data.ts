// Edit this one file to update your whole website and resume.
// Entries marked SAMPLE are example content: change them to match your real background.

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
};

export type Education = {
  degree: string;
  school: string;
  dates: string;
  details: string[];
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  points: string[];
};

export const profile = {
  name: "John Earl Flores",
  age: 21,
  title: "Information Technology Student",
  headline: "Web developer in training, focused on Next.js and TypeScript.",
  intro:
    "I'm a 2nd year IT student who builds clean, working web apps. I'm looking for an internship where I can contribute to real projects and learn from experienced developers.",
  location: "Philippines",
  email: "johnearlflores571@gmail.com",
  phone: "09161118960",
  github: "https://github.com/jhnflores",
  linkedin: "https://linkedin.com/in/your-username", // TODO
  about: [
    "I'm John Earl Flores, a 21-year-old second year Information Technology student. I like turning ideas into small, reliable web applications and understanding how the pieces fit together.",
    "Right now I'm building my skills in Next.js, React, and TypeScript, and I practice by making personal projects and reading documentation until things click.",
    "I work well in teams, ask questions early, and care about writing code that other people can read.",
  ],
  facts: [
    { label: "Age", value: "21" },
    { label: "Studying", value: "BS Information Technology, 2nd year" },
    { label: "Based in", value: "Philippines" },
    { label: "Focus", value: "Web development" },
    { label: "Learning", value: "Next.js, TypeScript, databases" },
    { label: "Languages", value: "English, Filipino" },
  ],
};

// SAMPLE: replace the school name and years with your own.
export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "College of Information Technology, State University",
    dates: "2024 - Present (2nd year)",
    details: [
      "Coursework: Programming Fundamentals, Data Structures, Database Management, Web Development, Networking",
      "Expected graduation: 2028",
    ],
  },
  {
    degree: "Senior High School, Technical-Vocational Track (ICT)",
    school: "Your Senior High School",
    dates: "2022 - 2024",
    details: ["Studied computer programming, computer systems servicing, and web basics."],
  },
];

// SAMPLE: replace with your real experience (internship, org role, part-time job, volunteer work).
export const experience: Experience[] = [
  {
    role: "Student Web Developer",
    org: "University Academic Projects",
    dates: "2025 - Present",
    points: [
      "Built and presented web applications for class projects using HTML, CSS, JavaScript, and Next.js.",
      "Collaborated in a team of four using Git and GitHub for version control and code reviews.",
      "Learned to plan features, test them, and fix bugs before each project demo.",
    ],
  },
  {
    role: "Member, IT Student Organization",
    org: "College of Information Technology",
    dates: "2024 - Present",
    points: [
      "Helped organize tech seminars and workshops for fellow IT students.",
      "Supported members by sharing study notes and basic web development tips.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
  { group: "Frameworks", items: ["Next.js", "React"] },
  { group: "Tools", items: ["Git and GitHub", "VS Code", "Figma"] },
  { group: "Strengths", items: ["Problem solving", "Teamwork", "Time management"] },
];

// SAMPLE: replace with your real projects and add links when they are online.
export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A multi-page portfolio with a printable resume, built with Next.js and TypeScript.",
    highlights: [
      "Keeps all content in one typed data file, so updates take minutes.",
      "Responsive layout that works on phones, tablets, and desktops.",
    ],
    stack: ["Next.js", "TypeScript", "CSS"],
    github: "https://github.com/jhnflores/portfolio", // TODO: create this repo or change the link
  },
  {
    title: "Task Manager Web App",
    description:
      "A simple app for adding, completing, and filtering daily tasks, made to practice React state and components.",
    highlights: [
      "Built reusable components and typed props with TypeScript.",
      "Added filters for all, active, and completed tasks.",
    ],
    stack: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Online Enrollment System",
    description:
      "A class project where students can register and view available subjects, backed by a relational database.",
    highlights: [
      "Designed the database tables and wrote SQL queries for subjects and students.",
      "Built the forms and validation for the registration flow.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];
