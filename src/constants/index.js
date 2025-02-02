import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nexalogo,
  git,
  threejs,
  chatBox,
  blurp,
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
    title: "Software Developer",
    company_name: "Bhavitha Tech Solutions Pvt. Ltd.",
    icon:"https://media.designrush.com/agencies/334632/conversions/Bhavitha-TechSolutions-logo-profile.jpg",
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Full-stack development using Node.js, React, NestJS, PostgreSQL, and AWS services like S3, Lambda, and API Gateway.",
      "Expertise in MongoDB, Redis, and AWS for data management and cloud infrastructure, leveraging these for developing the company’s personal ERP software for internal management.",
      "Implemented real-time features with WebSockets in web apps and ERP software for enhanced interactivity.",
      "Collaborated effectively with cross-functional teams, contributing to problem-solving and achieving project goals.",
      "Committed to continuous learning and staying updated with industry best practices to enhance software development techniques."
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Orxa Energies Pvt. Ltd.",
    icon:"https://th.bing.com/th/id/OIP.RYOFwYiFj-GiEOvMpGqXwgHaGZ?pid=ImgDet&rs=1",
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
   " Full-stack development using Node.js and React.",
      "Expertise in MongoDB, Redis, and AWS for data management and cloud infrastructure by using it for developing the company’s personal ERP software for internal management.",
      	"Implementation of real-time features with WebSockets for web app and ERP software.",
      	"Problem-solving and collaboration with cross-functional teams.",
      	"Continuous learning and adaptation to industry best practices."
      ,
    ],
  },
  {
    title: "Backend Developement Trainee",
    company_name: "FunctionUp",
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxqSQvdphysq-025UMye5JHmmc7HZsBzDiTaLn9f3O5EICCaN5UgYi4b1onoPk6X7Xik&usqp=CAU",
    iconBg: "#383E56",
    date: "March 2022 - July 2023",
    points: [
      "Backend developer at Function Up.",
      "Skills in Node.js, MongoDB, Express.js, JavaScript, HTML", "CSS, Axios, Redis, Socket.io, MySQL, AWS, React, Vite, Git, and GitHub.",
      "Built projects using the MERN stack.",
      "Proficient in backend development and real-time communication.",
      "Strong frontend skills with React, HTML, CSS, and Vite.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "AITRADEX CLOUD TECHNOLOGIES PVT. LTD.",
    icon:nexalogo,
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
    image: chatBox,
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
    image: "https://image.lexica.art/full_jpg/fd5841e5-5825-45e7-9c84-cfa44cce6232",
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
    image: "https://image.lexica.art/md2/9c2c89a7-606e-4ada-be7e-3fc7bf3f4807",
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
    image: blurp,
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
    image: "https://image.lexica.art/full_jpg/36d08de1-ea20-4e14-a0e5-b388249b525b",
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
    image: "https://image.lexica.art/full_jpg/0bc47fef-2edf-424c-8b64-b4e1de5ecf08",
    source_code_link: "https://github.com/palbijewar/Aesthetic-Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };
