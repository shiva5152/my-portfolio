import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    postman,
    cpp,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github_tech,
    ccdesign_pic,
    dalle_pic,
    portfolio_pic,
    threejs,
    openAI,
    portPholio_icon,
    ccdesign,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN stack Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "Postman",
      icon: postman,
    },
    {
      name: "github",
      icon: github_tech,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    
  ];
  
  const experiences = [
    {
      title: "DALL.E clone",
      sub_title: "Image generating dynamic web app using AI",
      icon: openAI,
      iconBg: "#E6DEDD",
      date: "15 Mar 2023",
      points: [
        "Using Open AI Api for generating images in the backend.",
        "Login/SignIn functionality using jwt web token, Storing images on cloudinary ,Full Stack (MERN) app.",
        "Well defined user and post Schema using mongoose, Api testing using postman.",
        "useContext hook is used as store includes actions,reducers and data.",
      ],
    },
    {
      title: "Personal Portfolio",
      sub_title: "Portfolio made with 3D object and animation",
      icon: portPholio_icon,
      iconBg: "#E6DEDD",
      date: "10 Apr 2023",
      points: [
        "Created with React+Vite, tailwind for styling and react-router for routing.",
        "Use of Threejs concepts for rendering 3D objects with help of react-three-fiber and react-three-drei.",
        "Framer motion is used for cool animation effects with the help of other npm pakages.",
        "Contains animating 3D object and a working contact form with use of emailjs"
      ],
    },
    {
      title: "CC Dedign",
      sub_title: "A Website for CC design : created as freelance project",
      icon: ccdesign,
      iconBg: "#E6DEDD",
      date: "19 Feb 2023",
      points: [
        "It is made up of tech like React-Router, Framer motion, SwiperJs.",
        "Contains hamburger menu , working contact form ,mobile responsiveness.",
        "Pure Css 3 for styling, Framer motion for animation and functional React with hooks.",  
      ],
    },
   
  ];
  
  
  const projects = [
    {
      name: "DALL.E clone",
      description:
        "A clone of Dall.E web app which is used for generating images based on you text. It has features like user account ,history ,download generated image and many more.",
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
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
       
      ],
      image: dalle_pic,
      source_code_link: "https://github.com/shiva5152/dall-e",
      live_at_link:"https://dalle-clone-backend-196n.onrender.com/"
    },
    {
      name: "My portfolio",
      description:
        "This is my personal portfolio which includes technologies such as react, tailwind,framer motion and threejs. It has cool animations and contains 3D objects ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio_pic,
      source_code_link: "https://github.com/shiva5152/my-portfolio",
      live_at_link:"/"
    },
    {
      name: "CC design",
      description:
        "It was my freelance project of interior and stall designing based firm CC Design.It has animations, menu, navbar and working contact form.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framerMotion",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ccdesign_pic,
      source_code_link: "https://github.com/shiva5152/cc-design",
      live_at_link:"https://rainbow-sawine-0cc806.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, projects };