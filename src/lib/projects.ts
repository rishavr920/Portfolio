export const Projects:Projects[] = [
    {
        title:"Portfolio",
        description: "A responsive portfolio website highlighting my work, tech stack, and project links. Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL for project management.",
        image:"/Welcome Signage Photo.jpg",
        techUsed:["NextJS" , "Typescript", "Postgresql","Tailwind-css"],
        liveLink:"https://portfolio-eta-two-56ve570lri.vercel.app/",
        githubLink:"https://github.com/rishavr920/Portfolio"
    },
    {
        title:"Trie-Autocomplete",
        description: "Full-stack autocomplete app with a C++ backend using a Trie for fast prefix search and REST APIs to insert words and fetch suggestions.",
        image:"/trie.png",
        techUsed:["html,css,cmake,docker" ],
        liveLink:"https://trie-autocomplete-1.onrender.com/",
        githubLink:"https://github.com/rishavr920/TRIE-AUTOCOMPLETE/tree/main"
    },
    {
        title:"e-commerce",
        description: "A scalable e-commerce web app using Spring Boot, React, Kafka, and PostgreSQL. Includes features like product catalog, cart, and order processing, all containerized with Docker.",
        image:"/Toy Shopping Cart.jpg",
        techUsed:["Spring-boot" , "Docker" , "Kafka" ,"React" , "Postgresql"],
        liveLink:"",
        githubLink:"https://github.com/rishavr920/E-commerce"
    },
    {
        title:"Medium",
        description: "A Medium-style blogging web app built with React, TypeScript, Node.js, and PostgreSQL. Features include user authentication, rich text editor, article management, and responsive UI with TailwindCSS.",
        image:"/Brown Fountain Pen on Notebook.jpg",
        techUsed:["React-Vite" , "Typescript" , "Express" ,"NodeJs" , "TailwindCSS","Postgresql"],
        liveLink:"https://mediumfrontend-alpha.vercel.app/",
        githubLink:"https://github.com/rishavr920/cohort-2/tree/main/week13/Medium"
    },
    {
        title:"MRP",
        description:"MRP is a web-app that is created for recording the placement journey of MCA students",
        image:"/MRP.png",
        techUsed:["Next.JS" , "Typescript" ,  "TailwindCSS"],
        liveLink:"https://mrp-nitjsr.vercel.app/",
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