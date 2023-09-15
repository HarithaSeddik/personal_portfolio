import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  flutter,
  tailwind,
  python,
  firebase,
  git,
  bilkent_uni,
  railacoustic,
  kobil,
  enekom,
  threejs,
  webpage,
  github,
  bookstore_gif,
  object_recog_gif,
  who_knows,
  bestgardeniq,
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
    name: "Flutter",
    icon: flutter,
    iconName: "devicon-flutter-plain colored",
    hover: "Flutter",
  },
  {
    name: "Firebase",
    icon: firebase,
    iconName: "devicon-firebase-plain colored",
    hover: "Firebase",
  },
  {
    name: "React JS",
    icon: reactjs,
    iconName: "devicon-react-original colored",
    hover: "ReactJs",
  },
  {
    name: "JavaScript",
    icon: javascript,
    iconName: "devicon-javascript-plain colored",
    hover: "JavaScript",
  },
  {
    name: "Python",
    icon: python,
    iconName: "devicon-python-plain colored",
    hover: "Python",
  },

  {
    name: "Typescript",
    icon: typescript,
    iconName: "devicon-typescript-plain colored",
    hover: "Typescript",
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
    iconName: "devicon-tailwindcss-plain colored",
    hover: "Tailwind CSS",
  },
  {
    name: "Git",
    icon: git,
    iconName: "devicon-git-plain",
    hover: "Git",
  },
  {
    name: "Three JS",
    icon: threejs,
    iconName: "devicon-threejs-original",
    hover: "Three.js",
  },
  {
    name: "CSS 3",
    icon: css,
    iconName: "devicon-css3-plain colored",
    hover: "CSS 3",
  },
];

const experiences = [
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
    name: "Development of a Hunter Drone Platform",
    description:
      "Project Lead for a team of undergraduate engineers to develop a hunter-drone platform to neutralize malicious drones, sponsored by Meteksan Defense.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: object_recog_gif,
    source_code_link:
      "https://github.com/HarithaSeddik/Object-Tracking-Image-Recognition-with-Python-OpenCV",
    source_code_link_2: "https://www.youtube.com/watch?v=UcJCYKdf6GM",
    source_image: github,
    source_image_2: webpage,
  },
  {
    name: "Who Knows",
    description:
      "Mobile app that serves as a platform for finding and matching services with service providers. Includes a review system, chat, video/audio calls. Implemented with Firebase backend and Flutter.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Agora",
        color: "pink-text-gradient",
      },
    ],
    image: who_knows,
    source_image: github,
    source_code_link: "https://github.com/HarithaSeddik/who_knows",
  },
  {
    name: "Best Garden IQ",
    description:
      "Web e-commerce app for providing gardening equipment and supplies in the United States. Implemented with a Django admin mode backend for inventory management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: bestgardeniq,
    source_image: webpage,
    source_code_link: "https://www.bestgardeniq.com/AboutUs",
  },
  {
    name: "Online Bookstore",
    description:
      "E-commerce web app, an online bookstore website, Functioning store backend handled by headless eCommerce API (commerceJS). Integrated with a payment provider (Stripe).",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "CommerceJs",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore_gif,
    source_image: github,
    source_image_2: webpage,
    source_code_link:
      "https://github.com/HarithaSeddik/OnlineStoreWebsite-React-CommerceJS",
    source_code_link_2: "https://examplebookstore.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
