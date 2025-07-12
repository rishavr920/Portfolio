export const Projects:Projects[] = [
    {
        title:"Portfolio",
        description:"An AI thumbnail generator, takes a reference image from users and prompt and then crafts perfect thumbnail for the required title",
        image:"/thumbnaily.avif",
        techUsed:["NextJS" , "Typescript", "Postgresql" , "Prisma"],
        liveLink:"https://thumbnaily.in",
        githubLink:"https://github.com/justanuragmaurya/thumbnaily-ai"
    },
    {
        title:"chat-app",
        description:"A decentralized certificate generator built on top of solana blockchain network, It mints an NFT for each certificate to introduce authenticity.",
        image:"/decert.png",
        techUsed:["React-Vite" , "Solana" , "Blockchain" ,"Metaplex NFT" , "RPC Nodes"],
        liveLink:"https://decerts.anuragmaurya.com",
        githubLink:"https://github.com/justanuragmaurya/decerts"
    },
    {
        title:"e-commerce",
        description:"A solana token dispenser for solana testnet blockchain network. Users link their wallet and request for airdrops, the tool provides them with tokens in devnet for them to use while testing.",
        image:"/soldevta.png",
        techUsed:["React-Vite" , "Express" , "Solana" ,"AlchemyRPC" , "Blockchain"],
        liveLink:"https://soldevta.anuragmaurya.com",
        githubLink:"https://github.com/justanuragmaurya/solana-faucet"
    },
    {
        title:"Medium",
        description:"A real-time chat application with WebSocket protocol enabling instant message delivery and room-based communication",
        image:"/baatcheet.png",
        techUsed:["React-Vite" , "Typescript" , "Websockets" ,"NodeJs" , "TailwindCSS"],
        liveLink:"https://baatcheet.anuragmaurya.com",
        githubLink:"https://github.com/justanuragmaurya/realtime-chat-app"
    },
    {
        title:"MRP",
        description:"MRP is a web-app that is created for recording the placement journey of MCA students",
        image:"/",
        techUsed:["React-Vite" , "Typescript" , "Websockets" ,"NodeJs" , "TailwindCSS"],
        liveLink:"/",
        githubLink:"/"
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