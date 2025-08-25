import { AnimatedGradientText } from "./magicUi/animated-gradient-text"
import { RainbowButton } from "./magicUi/rainbow-button";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import {Mail,File} from "lucide-react"
import { TypingAnimation } from "./magicUi/typing-animation"
import Image from "next/image";

const font = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["200","300","400","500","600","700","800"],
});
export default function HeroSection(){
    return(
        <div className="pt-12 w-full flex flex-col md:flex-row gap-6 md:gap-8 md:justify-between md:items-center relative">
            <div className="w-auto flex justify-center md:justify-end">
                 <div className="w-50 h-50 rounded-full overflow-hidden">
                    <img
                        src="/rishav.png"
                        alt="Rishav Raj"
                    />
                </div>
            </div>

            <div className="text-center px-4 max-w-2xl md:text-left md:px-0">
                <h1 className={`text-2xl md:text-3xl font-medium`}>
                    <TypingAnimation>Hey there,</TypingAnimation>
                </h1>
                <h1 className={`text-4xl md:text-5xl font-semibold`}>
                    I&apos;m{" "}
                    <span className={`${font.className}`}>
                        <AnimatedGradientText>Rishav Raj</AnimatedGradientText>
                    </span>
                </h1>
                <p className="py-3 text-md">
                    I&apos;m a full-stack developer, turning ideas into
                    production-ready products—handling everything from concept to
                    deployment with a complete modern tech stack.
                </p>
               
                <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start items-center">
                   <Link href="mailto:rishavr920@gmail.com">

                        <RainbowButton>
                            <Mail/>
                                Get in touch
                        </RainbowButton>
                    </Link>
                    
                    <Link href="https://drive.google.com/file/d/1AwzsS_fBHSxT6G_2LPVQ6goowJEv2k4X/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer">
                        <RainbowButton variant="outline">
                            <File className="mr-2 h-4 w-4"/>
                                My Resume
                        </RainbowButton>
                    </Link>
                </div>
            </div>
           
        </div>  
    )
}