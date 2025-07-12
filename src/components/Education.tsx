import { Bricolage_Grotesque} from "next/font/google"
import Image from "next/image"
import {AnimatedShinyText} from "@/components/magicUi/animated-shiny-text"
const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export default function Education(){
    return (
        <div className="flex flex-col items-center  px-4 py-8 mt-5 w-full max-w-4xl mx-auto">
            <h1 className={`${font.className} font-semibold text-2xl md:text-3xl text-center`}>Education</h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-4 mt-6">
                <div>
                    <Image src={"/nitjsr_logo.png"} width={50} height={50} alt="NITLOGO" className="rounded-full"/>
                </div>
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <h1 className="font-bold text-center md:text-left">
                                National Institute Of Technology,
                                <AnimatedShinyText>JAMSHEDPUR</AnimatedShinyText>
                            </h1>
                            <h1 className="text-sm font-normal text-primary/70">
                                Post Graduating In June2026
                            </h1>
                    </div>
                    <span className="text-sm font-normal text-primary/70">
                        Master In Computer Application
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-4 mt-6">
                <div>
                    <Image src={"/lnmcbm_logo.png"} width={50} height={50} alt="LNLOGO" className="rounded-full mx-auto md:mx-0"/>
                </div>
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h1 className="font-bold text-center md:text-left">
                            LN Mishra College of Business and Management
                        </h1>
                        <h1 className="text-sm font-normal text-primary/70 mt-1 md:mt-0 text-center md:text-right">Graduated In June2022</h1>
                    </div>
                    <span className="text-sm font-normal text-primary/70 text-center md:text-left">Bachelor In Computer Application</span>
                </div>
            </div>
        </div>
    )
}