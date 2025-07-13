export const Projects:Projects[] = [
    {
        title:"Portfolio",
        description: "A responsive portfolio website highlighting my work, tech stack, and project links. Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL for project management.",
        image:"/Welcome Signage Photo.jpg",
        techUsed:["NextJS" , "Typescript", "Postgresql","Tailwind-css"],
        liveLink:"https://thumbnaily.in",
        githubLink:"https://github.com/rishavr920/Portfolio"
    },
    {
        title:"chat-app",
        description: "A full-stack real-time chat app with React-Vite frontend and Spring Boot backend, using WebSockets for seamless live messaging and Tailwind CSS for responsive design.",
        image:"/Green Square Speech Bubble.jpg",
        techUsed:["React-Vite" , "Spring-boot" , "Tailwind-css" ,"Web-Socket" ],
        liveLink:"https://decerts.anuragmaurya.com",
        githubLink:"https://github.com/rishavr920/chat"
    },
    {
        title:"e-commerce",
        description: "A scalable e-commerce web app using Spring Boot, React, Kafka, and PostgreSQL. Includes features like product catalog, cart, and order processing, all containerized with Docker.",
        image:"/Toy Shopping Cart.jpg",
        techUsed:["Spring-boot" , "Docker" , "Kafka" ,"React" , "Postgresql"],
        liveLink:"https://soldevta.anuragmaurya.com",
        githubLink:"https://github.com/rishavr920/E-commerce"
    },
    {
        title:"Medium",
        description: "A Medium-style blogging web app built with React, TypeScript, Node.js, and PostgreSQL. Features include user authentication, rich text editor, article management, and responsive UI with TailwindCSS.",
        image:"/Brown Fountain Pen on Notebook.jpg",
        techUsed:["React-Vite" , "Typescript" , "Express" ,"NodeJs" , "TailwindCSS","Postgresql"],
        liveLink:"https://baatcheet.anuragmaurya.com",
        githubLink:"https://github.com/justanuragmaurya/realtime-chat-app"
    },
    {
        title:"MRP",
        description:"MRP is a web-app that is created for recording the placement journey of MCA students",
        image:"/",
        techUsed:["Next.JS" , "Typescript" ,  "TailwindCSS"],
        liveLink:"/",
        githubLink:"https://github.com/AnshumanMahato/MRP"
    }
    
]

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}