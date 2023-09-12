import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bilkent_uni,
  railacoustic,
  kobil,
  enekom,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: backend,
  },
  {
    title: "Engineering Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Researcher",
    company_name: "MiNi Lab, Bilkent University",
    icon: bilkent_uni,
    // iconBg: "#E6DEDD",
    iconBg: "#c92c1e",
    date: "March 2018 - May 2019",
    points: [
      "Studied droplet breakup dynamics in microfluidic junctions under supervision of Assist. Prof. E. Yegan Erdem.",
      "Conducted a research study to analyse the effects of geometry and parameters on the droplet diameter and the necking pressure in microfluidic channels.",
      "Modeled droplet formation with COMSOL’s FEA using the Set method to solve for multiphase flows, used MATLAB for statistical analysis.",
    ],
  },
  {
    title: "R&D Engineer",
    company_name: "Railacoustic - Enekom Energy",
    icon: enekom,
    // iconBg: "#E6DEDD",
    iconBg: "#383E56",
    date: "Sep 2020 - Oct 2021",
    points: [
      "Developed desktop apps with Python for automating tests using microcontroller based devices for the Sivas YHT high speed train project.",
      "Worked on audio-analysis algorithms with Wavelet transforms using Matlab. Performed post-processing and data analysis using Python - Pandas and Numpy libraries.",
      "Built a remote testing platform on Ubuntu Server using RaspberryPi.",
    ],
  },

  {
    title: "Mobile Software Developer",
    company_name: "Kobil",
    icon: kobil,
    iconBg: "#1c19ff",
    date: "Nov 2021 - Present",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Responsible for critical features on Istanbul's SuperApp project used by over 2.5 million users, partnered with the Istanbul Municipality.",
      "Experience with SDK development, FCM integration, push implementation.",
      "Refactoring fetching algorithms for improved performance.",
      "Building and managing CI/CD pipelines.",
      "Deploying store releases",
      "Perfect understanding of BLOC/Cubit state management architecture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
