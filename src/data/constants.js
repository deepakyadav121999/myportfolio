import robo1 from '../images/robo1.png';

export const Bio = {
    name: "Deepak Yadav",
    roles: [
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer"
    ],
    description: " I am a dedicated and passionate Full Stack Web Developer with a solid foundation in Computer Science and Engineering. Graduating with a Bachelor's degree in Computer Science and Engineering in 2022, I embarked on a transformative journey to further enhance my skills. This led me to pursue a rigorous 9-month Full Stack Web Development bootcamp at Newton School, where I honed my expertise in modern web technologies and best practices.",
    github: "https://github.com/deepakyadav121999",
    resume: "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/deepak-yadav-094a6a235/",
    twitter: "https://twitter.com/kjcreddy666",
    insta: "https://www.instagram.com/deepak_x_121999/",
    facebook: "https://www.facebook.com/profile.php?id=100051516276567",
};
  
export const skills = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "C++",
          image: "CPP-logo.png",
        },
        {
          name: "Java",
          image: "java-logo.svg",
        }
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: "html5-logo.png",
        },
        {
          name: "CSS",
          image:
            "CSS3-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "bootstrap-logo.png",
        },
        {
          name: "JavaScript",
          image:
            "JavaScript-logo.png",
        },
        {
          name: "TypeScript",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "React Js",
          image:
            "react-logo.png",
        },
        {
          name: "Next.js",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          image:
            "talwind.png",
        },
       
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "nodejs-logo.svg",
        },
         {
        name: "Express Js",
       image: "express.png"
        
       },
       {
        name: "NestJS",
       image: "https://shorturl.at/qxmWB"
        
       },
       {
        name: "TypeScript",
       image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        
       },
       {
        name: "MongoDB",
       image: "mongo.png"
        
       },
       {
        name: "SQL",
       image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
        
       },
      ],
    },
    {
      title: "Others",
      skills: [
         {
          name: "Docker",
          image:
            "docker.png",
        },
        {
          name: "GitHub",
          image:
            "GitHub-logo.png",
        },
        

        {
          name: "VS Code",
          image:
            "vscode-logo.png",
        },
      ],
    },
];
  
export const experiences = [
   {
      id: 0,
      img: robo1, // swap in Robkriti's logo if you have one
      role: "Full Stack Developer",
      company: "Robkriti, Jabalpur",
      date: "Present",
      desc: "Working as a Full Stack Developer on IoT-based server applications, building and deploying backend systems that communicate with IoT devices over MQTT. Handling containerization, deployment, and maintenance of production code.",
      skills: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "SQL",
        "MQTT",
        "IoT",
        "Docker",
        "Containerization",
        "Deployment",
      ],
    },
    {
      id: 1,
      img: "https://portal.docpoc.app/_next/image?url=https%3A%2F%2Fdocpoc-assets.s3.ap-south-1.amazonaws.com%2Fdocpoc-images%2Flogo-dark.png&w=96&q=75",
      role: "Full Stack Developer",
      company: "DocPoc.app",
      date: "1 Year",
      desc: "Currently working as a Full Stack Developer building real-time clinic management system. Developing comprehensive healthcare solutions with modern web technologies, implementing real-time features for clinic operations, patient management, and healthcare workflows.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "NextUI",
        "Hero UI",
        "SQL",
        "NestJS",
        "Real-time Systems",
        "Healthcare Solutions",
      ],
    },
];
  
export const education = [
  {
    id: 0,
    img: "logo.png",
    school: "30 Days Codding",
    date: "2024 - 2024",
    grade: "A+",
    desc: "I have Completed Full Stack Web Development Course Where i have learn various tech stacks like Html, Css, Javascript, Reactjs, Nodejs, MongoDb, Expressjs and tailwind css and created 50+ assignment/project using these tech stacks.",
    degree: "Full Stack Web Developer / Mern Stack Web Developer",
  },
    {
      id: 2,
      img: "college1.png",
      school: "St. Aloysius Institute Of Technology, Jabalpur",
      date: "2017 - 2022",
      grade: "6.80 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering at St. Aloysius Institute Of Technology, Jabalpur with a CGPA of 6.8. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems.",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 2,
      img: "school.png",
      school: "Govt Higher Secondary School Maneri, Niwas",
      date: "2015 - 2017",
      grade: "5.49 GPA",
      desc: "I completed my Intermediate at Govt Higher Secondary School Maneri",
      degree: "Board Of Secondary Education Mp - MPC(Maths, Physics, Chemistry)",
    },
    {
      id: 3,
      img: "school.png",
      school: "Govt Higher Secondary School Maneri, Niwas",
      date: "2013 - 2015",
      grade: "6.8 GPA",
      desc: "I completed my class 10 education at Govt Higher Secondary School Maneri.",
      degree: "Board Of Secondary Education Mp",
    },
];
  
export const projects = [
   
    {
      id: 1,
      title: "DocPoc",
      description:
        "Built a real-time clinic management platform for small healthcare practices, digitizing patient records, appointments, and clinical documentation. Replaced manual paperwork with a real-time workflow for patient intake, visit notes, and record-keeping, reducing administrative overhead for clinic staff.",
      image: "docpoc.png",
      tags: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "SQL",
        "Tailwind CSS",
        "Real-time Systems",
      ],
      category: "web app",
      github: "https://docpoc.app/",
      webapp: "https://docpoc.app/",
    },

    {
      id: 2,
      title: "Robkriti – IoT Platform",
      description:
        "Developing backend infrastructure for IoT-based systems, handling device communication over MQTT, containerized deployments, and production maintenance. Designed to reliably ingest and process data streams from connected IoT hardware in real time.",
      image: "robo.png",
      tags: [
        "NestJS",
        "TypeScript",
        "MQTT",
        "IoT",
        "Docker",
        "SQL",
        "Next.js",
      ],
      category: "web app",
      github: "https://robokriti.co.in/",
      webapp: "",
    },
    {
      id: 3,
      title: "Meesho Clone",
      description:
        "Developed a user-friendly e-commerce website with a range of features, including search functionality, wishlist creation, filtering options, and a seamless shopping cart system",
      image:
        "meesho.png",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJs",
        "Redux",
        "firebase"
      ],
      category: "web app",
      github: "https://github.com/deepakyadav121999/justtry",
      webapp: "https://project1-omega-one.vercel.app/",
    },

    {
      id: 4,
      title: "Portfolio",
      description:
        "Explore my sleek portfolio, built with HTML5, CSS3, JavaScript, and React.js. Discover my skills and projects through seamless design and interactivity, optimized for any device.",
      image:
        "port.png",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
      ],
      category: "web app",
      github: "",
      webapp: "#",
    },

    {
      id: 5,
      title: "Linkedin Clone",
      description:
        "Developed a dynamic web application using React.js that allows users to create, share, and manage personalized lists of favorite links. .",
      image:
        "linkedin.png",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJs"
      ],
      category: "web app",
      github: "https://github.com/deepakyadav121999/linkedin-clone-final",
      webapp: "https://clone-linked.vercel.app/",
    },



];
  

export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
];