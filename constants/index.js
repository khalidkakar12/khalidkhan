import { Poppins, Titillium_Web, Montserrat  } from 'next/font/google';

export const poppins = Poppins({
    weight:['300','600'],
    subsets: ['latin'],
  })
export const montserrat = Montserrat({
    weight:['300','600'],
    subsets: ['latin'],
  })
  export const titilliumweb = Titillium_Web({
    weight:['300','600'],
    subsets: ['latin'],
  })


export const socialPlatforms = [
    {
        icon: '/insta.svg',
        link: 'https://www.instagram.com/khalidkakar331/'
    },
    {
        icon: '/github.svg',
        link: 'https://github.com/khalidkhankakar'
    },
    {
        icon: '/linkdien.svg',
        link: 'https://www.linkedin.com/in/khalid-kakar-6957b9290/'
    },
    {
        icon: '/facebook.svg',
        link: 'https://www.facebook.com/profile.php?id=61551065548789'
    },
    {
        icon: '/twitter.svg',
        link: 'https://twitter.com/KhalidKakar331'
    },
]

export const navLinks = [
    {
        tag: 'Home',
        link: '/'
    },
    {
        tag: 'About',
        link: '#about'
    }, {
        tag: 'Contact',
        link: '#contact'
    }, {
        tag: 'Projects',
        link: '#projects'
    }
]

export const technologies = [
    {
        name: 'Next Js',
        skillRate: 80,
        img: '/nextjs.png'
    }, 
    {
        name: 'React Js',
        skillRate: 85,
        img: '/reactjs.png'
    },
    {
        name: 'Tailwind CSS',
        skillRate: 75,
        img: '/tailwind.png'
    },
    {
        name: 'MongoDB',
        skillRate: 73,
        img: '/mongo.png'
    },
    {
        name: 'HTML',
        skillRate: 90,
        img: '/html.png'
    },
    {
        name: 'CSS',
        skillRate: 90,
        img: '/css.png'
    },
    {
        name: 'JavaScript',
        skillRate: 83,
        img: '/javascrip.png'
    },
];


export const projectDetails = [
    {
        projectName: 'Indeed Clone - jobFinder',
        projectDetail:"Introducing my creation: a job finder website revolutionizing employment. Explore diverse job opportunities, craft personalized resumes, and apply seamlessly with advanced authentication. Using the Next js, tailwind CSS and more...",
        githubLink:"#",
        liveLink: "#",
        disable:true,
        message:'project is in development phase will be deploy as soon as possible'
    },
    {
        projectName: 'Inventry Shop',
        projectDetail:"Presenting my Inventory Shop Project: a cutting-edge platform where you can effortlessly manage your inventory through seamless CRUD operations. With the power of Next.js and MongoDB, this project ensures secure authentication using Next Auth.js. Experience a streamlined way to create, read, update, and delete inventory items.",
        githubLink:"https://github.com/khalidkhankakar/project_shop",
        liveLink: "https://project-shop-gamma.vercel.app/",
        disable:false,

    },
    {
        projectName: '3K - translater',
        projectDetail:"Introducing 3K - Translator Mini Project: our passport to a world of languages. With this nifty creation, you can effortlessly translate text between different languages. This mini project packs a punch, making language barriers a thing of the past. Explore, connect, and understand the world with ease, one translation at a time.",
        githubLink:"https://github.com/khalidkhankakar/3ktranslater",
        liveLink: "https://3ktranslater-4e50b6le3-khalidkhankakar.vercel.app/",
        disable:false,

    },
    {
        projectName: '3K - Summarizer',
        projectDetail:"Introducing 3K AI Summarizer Project: Simplify your reading. This innovative creation allows you to paste a link to an article, and with the magic of AI, it generates a concise, informative summary. Say goodbye to lengthy texts and hello to the power of efficiency. Embrace the future of digesting information effortlessly, one link at a time.",
        githubLink:"https://github.com/khalidkhankakar/3ksummary",
        liveLink: "https://3ksummary-n8bmk2yk1-khalidkhankakar.vercel.app/",
        disable:false,

    },
    {
        projectName: 'Youtube - Clone',
        projectDetail:"Introducing my YouTube clone — a dynamic video platform that combines seamless video playback, intuitive search functionality, detailed channel insights, and a vibrant community engagement through comments. Enjoy personalized suggestions, discover new content, and experience entertainment tailored to your preferences. With a commitment to privacy and security, this platform offers a user-friendly interface accessible anytime, anywhere. Elevate your video streaming experience with the ultimate hub for content discovery and community interaction.",
        githubLink:"https://github.com/khalidkhankakar/youtube-clone",
        liveLink: "https://youtube-clone-23tuaa3ym-khalidkhankakar.vercel.app/",
        disable:false,

    },
    
]
