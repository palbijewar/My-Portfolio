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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Backend Developement Trainee",
    company_name: "FunctionUp",
    iconBg: "#383E56",
    date: "March 2022 - February 2023",
    points: [
      "Backend developer at Function Up.",
      "Skills in Node.js, MongoDB, Express.js, JavaScript, HTML", "CSS, Axios, Redis, Socket.io, MySQL, AWS, React, Vite, Git, and GitHub.",
      "Built projects using the MERN stack.",
      "Proficient in backend development and real-time communication.",
      "Strong frontend skills with React, HTML, CSS, and Vite.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "AITRADEX CLOUD TECHNOLOGIES PVT. LTD.",
    iconBg: "#383E56",
    date: "March 2022 - February 2023",
    points: [
      "Frontend developer in an algo trading software company.",
      "Created static websites using HTML, CSS, and vanilla JavaScript. Developed visually appealing and user-friendly interfaces.",
      "Generated APIs for connecting users' demat accounts to the algo trading software.",
      "Ensured seamless integration between frontend and backend systems.",
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
    name: "Chat Box App",
    description:
      "A real time chat application with ful stack tools like Node.js, mongoDB and socket I/o, where user can interact together and get the user joining and leaving info.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket I/O",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/palbijewar/ChatBox-App",
  },
  {
    name: "Sociomate",
    description:
      "SocioMate is a full-stack web application designed to connect people and facilitate social interaction. It utilizes a range of technologies, including React 18 (VITE), Node.js, Express.js, MongoDB, Ant Design, Tailwind CSS, and various other libraries.",
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
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "hhttps://github.com/Priyanshsharma21/Sociomate",
  },
  {
    name: "Ecommerce Site Backend",
    description:
      "A backend integration of an ecommerce app made by using node.js mongodb mongoose express jsonwebtoken and more.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/palbijewar/E-commerce",
  },
  {
    name: "BLURP - URL APP",
    description:
      "BLURP is an URL shortening and redirecting app where user can shorten there big URLs if needed also enter the link they want to get redirected to using backend tools like Node.js, mongoDB and Express also frontend development using HTML , CSS and vanilla javascript.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/palbijewar/BLURP-app",
  },
  {
    name: "E-Book Backend Site",
    description:
      "Book management site like kindle and other e-book websites where user can create a profile publish there e-books and others can read and review them.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/palbijewar/book-management-app",
  },
  {
    name: "Aesthetic Calculator",
    description:
      "Complete front end app for calculation with pastel UI",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/palbijewar/Aesthetic-Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };
