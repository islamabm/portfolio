import {
    mobile,
    backend,
    Vue,
    Notes,
    pdf,
    sassLogo,
    wuzzapp,
    weather,
    mysql,
    bitcoinsR,
    Angular,
    musicV,
    musicR,
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
    LanWanLogo,
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
        id: "CV",
        title: "CV",
        href: pdf,
        download: true,

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
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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
        name: "sass",
        icon: sassLogo,
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
        name: "Vue JS",
        icon: Vue,
    },
    {
        name: "Angular",
        icon: Angular,
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
        name: "mysql",
        icon: mysql,
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
        title: "Full stack developer",
        company_name: "LanWanIT",
        icon: "https://res.cloudinary.com/dmox9pnnx/image/upload/v1701163717/LanWan_logo-01_nirnws.png",
        iconBg: "#383E56",
        date: "October 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Mucikay",
        description: "This is a Spotify-inspired music streaming web application built with React.js, Redux, React Hooks, Styled-components, MongoDB, Node, HTML, and different APIs such as Youtube API , React DnD, Fast Average Color, etc. It was built by a team of 3 as part of a hackathon",
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
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
        ],
        image: musicR,
        source_code_link: "https://music-k9lb.onrender.com/",
        github_link: "https://github.com/islamabm/Spotify-react-frontend"
    },
    {
        name: "Mister-Bitcoin",
        description: "Mister Bitcoin React Contacts Management Application This React application allows users to manage a list of contacts. Users can add, edit, and remove contacts, as well as view details about each contact",
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
                name: "scss",
                color: "pink-text-gradient",
            },

        ],
        image: bitcoinsR,
        source_code_link: "https://islamabm.github.io/Mister-bitcoins-react/#/",
        github_link: "https://github.com/islamabm/Mister-bitcoins-react"
    },
    {
        name: "Weather App",
        description: "This React application allows users to fetch and analyze weather data to aid in event planning. The application makes use of OpenAI for advice and suggestions, weather API for weather data and Google Maps for location services.",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "blue-text-gradient",
            },

            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: weather,
        source_code_link: "https://islamabm.github.io/weather-app-react/",
        github_link: "https://github.com/islamabm/weather-app-react",
    },
    {
        name: "Notes App",
        description: "Note application that allows users to create and manage various types of notes, including image, text, to-do, map, canvas, audio, and video notes.",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "blue-text-gradient",
            },

            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: Notes,
        source_code_link: "https://islamabm.github.io/keep-app/",
        github_link: "https://github.com/islamabm/keep-app"
    },
    {
        name: "wuzzapp",
        description: "Embark on a seamless messaging experience with our state-of-the-art chat application, meticulously crafted using the robust combination of React, JavaScript, MongoDB, and Node.js. Designed to replicate and enhance the essential features of WhatsApp, our application offers a modern, intuitive, and responsive user interface, ensuring a familiar yet upgraded chat experience.",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },

            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
        ],
        image: wuzzapp,
        source_code_link: "https://wuzzapp-oslj.onrender.com",
        github_link: "https://github.com/CrazyDiamond24/WhatsApp-React"
    },
    {
        name: "Muzikay",
        description: "This is a Spotify-inspired music streaming web application built with Vue.js, Vite, Vuex, SCSS, MongoDB, Node, HTML, and different APIs such as Vue3-Youtube , Smooth DnD, Fast Average Color, etc. It was built as a final project for Coding Academy bootcamp by a team of 3 as part of a hackathon.",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
        ],
        image: musicV,
        source_code_link: "https://muzikay.onrender.com/#/station/collection",
        github_link: "https://github.com/islamabm/Muzikay-sprint4"
    },
];

export { services, technologies, experiences, testimonials, projects };