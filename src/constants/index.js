import { title } from "framer-motion/client";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import UIUX from "../assets/uiux.png";
import FAF from "../assets/company/FAF.png"
import FriedNFrossted from "../assets/company/FriedNFrossted.png"
import mediswift2 from "../assets/company/mediswift2.png"
import FAF1 from "../assets/company/FAF1.png"
import mediswift from "../assets/company/mediswift.png"
import mediswift1 from "../assets/company/mediswift1.png"
import vroom from "../assets/company/vroom.png"
import vroom1 from "../assets/company/vroom1.png"
import vroom2 from "../assets/company/vroom2.png"
import shopfinity from "../assets/company/shopfinity.png"
import { html } from "../assets";
import { css } from "../assets";
import { figma } from "../assets";
import { javascript } from "../assets";
import { mongodb } from "../assets";
import { nodejs } from "../assets";
import { reactjs } from "../assets";
import { redux } from "../assets";
import { tailwind } from "../assets";
import { threejs } from "../assets";
import { git } from "../assets";
import blender from "../assets/tech/blender.png";
import flutter from "../assets/tech/flutter.png";
// import nextjs from "../assets/tech/nextjs.png";
// import typescript from "../assets/tech/typescript.png";

// import { typescript } from "../assets";
  
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: frontend
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: UIUX,
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
      name: "flutter",
      icon: flutter
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
      name: "blender",
      icon: blender,
    }
  ];
  
  const experiences = [
    {
      title: "Web Developer (MERN Stack)",
      company_name: "Fried-N-Frossted",
      icon: FAF1,
      iconBg: "#F08827",
      date: "October 2024 - January 2025",
      points: [
        "Independently developed and managed Fried_N_Frossted, a full-stack cafe management web application tailored for efficient order handling and operations.",
        "Designed and implemented the UI/UX, ensuring an intuitive and visually appealing interface with a focus on user experience.",
        "Built the frontend using React.js, delivering responsive design and seamless user interaction across devices and browsers.",
        "Engineered the backend with Node.js and Express.js, handling order processing, user authentication, and business logic.",
        "Integrated MongoDB as the primary NoSQL database, enabling real-time data management and scalability.",
        "Deployed the frontend on Vercel and the backend on Render, ensuring smooth and reliable access to the live application.",
        "Conducted thorough testing and optimization to ensure performance, reliability, and security.",
        "Continuously enhance features based on user feedback and emerging needs, demonstrating strong product ownership and adaptability."
      ],
    },
    {
      title: "Web Developer (MERN Stack)",
      company_name: "Mediswift",
      icon: mediswift1,
      iconBg: "#E6ECF3",
      date: "Feb 2025 - present",
      points: [
       "Independently developed and currently managing Mediswift, a full-stack doctor consulting web application tailored for efficient appointment handling and operations.",
        "Designed and implemented the UI/UX, ensuring an intuitive and visually appealing interface with a focus on user experience.",
        "Built the frontend using React.js, delivering responsive design and seamless user interaction across devices and browsers.",
        "Engineered the backend with Node.js and Express.js, handling appointment processing, user authentication, and business logic.",
        "Integrated MongoDB as the primary NoSQL database, enabling real-time data management and scalability.",
        "Conducted thorough testing and optimization to ensure performance, reliability, and security.",
        "Currently developing core features including real-time chat, voice/video calling, payment gateway integration, and role-based access using JWT tokens for doctors, patients, and admins."
      ],
    },
    {
      title: "Web Developer (MERN Stack)",
      company_name: "Vroom",
      icon: vroom1,
      iconBg: "#FFFFFF",
      date: "Upcoming",
      points: [
        "Planned as a full-stack car and bike rental platform aimed at providing users with a seamless experience for booking, cart management, and secure payments.",
        "Set to independently design and develop the entire system, ensuring full control over functionality, scalability, and UX flow.",
    "UI/UX design is expected to focus on simplicity and intuitiveness, offering a visually engaging and effortless rental journey.",
    "React.js  is chosen for the frontend to deliver high responsiveness and smooth cross-device performance.",
    "The backend is scheduled to be developed using Node.js and Express.js, handling rental listings, user roles, and transaction workflows.",
    "MongoDB is planned to be used as the database to support dynamic data handling and real-time updates.",
    "Thorough testing procedures will be adopted before launch to ensure performance, security, and reliability.",
    
      ],
    },
    {
      title: "Mobile Developer (Flutter)",
      company_name: "Mediswift",
      icon: mediswift1,
      iconBg: "#E6ECF3",
      date: "Planned",
      points: [
       "While developing Mediswift as a web application, I planned its mobile version to address medical emergencies—since people may not have access to a PC, but always have their phones to reach doctors quickly.",
    "The mobile app will be designed as a real-time doctor-patient consulting platform with emergency accessibility at its core.",
    "UI/UX will be thoughtfully crafted using Flutter to provide a smooth, responsive experience across Android and iOS devices.",
    "The backend is set to be developed using Node.js and Express.js, focusing on secure appointment scheduling and user authentication.",
    "MongoDB is planned as the core database solution to support high availability and real-time data handling.",
    "Thorough testing and optimization phases are expected to ensure top-notch performance, stability, and security.",
    "The app’s features are intended to evolve continuously based on user insights, prioritizing usability in urgent healthcare scenarios."
      ],
    },
    
    {
      title: "Web Developer (MERN Stack)",
      company_name: "Shopfinity",
      icon: shopfinity,
      iconBg: "#FCFBFA",
      date: "Planned",
      points: [
        
        "Set to independently build and manage Shopfinity, a full-stack e-commerce web application designed for streamlined product browsing, cart management, and secure transactions.",
    "UI/UX will be thoughtfully designed to deliver a clean, engaging shopping experience that prioritizes usability and aesthetics.",
    "Frontend development is planned using React.js to ensure fast performance, responsive layouts, and smooth user interaction across devices.",
    "Backend architecture will be built with Node.js and Express.js to support dynamic product management, user authentication, and order processing.",
    "MongoDB is intended as the database of choice for handling scalable, real-time data with high availability and flexibility.",
    "Robust testing strategies will be implemented to ensure optimal performance, security, and reliability before deployment.",
   
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
      name: "Fried N Frossted",
      description:
        "Web-based platform designed to streamline cafe operations by enabling efficient order placement, real-time menu updates, and user-friendly management tools for staff and admins.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: FriedNFrossted,
      source_code_link: "https://github.com/rishi598/FNF",
      live_demo_link: "https://fnf-puce.vercel.app/",
      status:"Deployed"
    },
    {
      name: "Mediswift",
      description:
        "A comprehensive online healthcare platform that allows patients to book doctor appointments, consult via chat or calls, and access emergency medical support anytime, directly from their web device.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: mediswift2,
      source_code_link: "https://github.com/rishi598/mediswift",
      live_demo_link: "",
      status: "On-Going"
    },
    {
      name: "Vroom",
      description:
        "A comprehensive car rental booking platform that allows users to book rental cars, and offers curated recommendations for popular cars.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: vroom2,
      source_code_link: "https://github.com/",
      status: "Yet to Start"
    },
  ];
  
  export { services,  technologies, experiences, testimonials, projects };