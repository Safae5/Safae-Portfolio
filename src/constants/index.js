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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "React.js Developer",
      company_name: "Fiverr",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Build static and dynamic landing pages for businesses or personal websites using React.js.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Khamsat",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Build forms using React with proper validation using libraries like Formik or React Hook Form.",
        "Work on apps using Expo, which simplifies the development and deployment process for React Native apps.",
        "Set up navigation with React Navigation for multi-screen apps.",
        "Implement basic UI/UX designs for small-scale apps.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Up Work",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Build simple e-commerce stores using React.js, Next.js and Stripe.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Freelancer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Design mobile app screens with a focus on user experience and intuitive navigation.",
        "Create visually appealing landing page designs that align with the client's branding.",
        "Create simple, clean logos for startups, small businesses, or personal brands.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Saf proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Saf does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Saf optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Next Commerce",
      description:
        "A modern and performant full stack Next.js 14 Ecommerce Website complete with secure Stripe payment integration, efficient content management through Sanity.io ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "sanity.io",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },

      ],
      image: carrent,
      source_code_link: "https://github.com/Safae5/Next-Commerce-Project",
    },
    {
      name: "Food Delivery App",
      description:
        "Food delivery app that offers users a convenient and efficient way to order food from their favorite restaurants and deliver it to their doorstep.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Safae5/food-delivery-app",
    },
    {
      name: "Community Marketplace",
      description:
        "The Community Marketplace mobile app is designed to create a seamless and engaging platform where community members can buy, sell, and trade goods and services.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
        {
          name: "formik",
          color: "blue-text-gradient",
        },

      ],
      image: tripguide,
      source_code_link: "https://github.com/Safae5/community-marketplace-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  