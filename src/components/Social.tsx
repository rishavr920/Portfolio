//created with help of ai agents 
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter,Github } from "lucide-react"
import { AnimatedGradientText } from "./magicUi/animated-gradient-text"
export default function Social() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rishav-raj-232033184/", 
      icon: Linkedin,
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-blue-50",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/rishav0317", 
      icon: Twitter,
      color: "hover:bg-black hover:text-white",
      bgColor: "bg-gray-50",
    },
   {
      name: "GitHub",
      href: "https://github.com/rishavr920", // Replace with your GitHub URL
      icon: Github,
      color: "hover:bg-gray-800 hover:text-white",
      bgColor: "bg-gray-50",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/rishavr920", // Replace with your LeetCode URL
      icon: () => (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      color: "hover:bg-orange-500 hover:text-white",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="py-24 bg-transparent">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2"> <AnimatedGradientText>Connect With Me</AnimatedGradientText></h1>
        <p className="text-gray-600">Follow me on social media</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {socialLinks.map((social) => {
          const IconComponent = social.icon
          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex items-center justify-center
                w-16 h-16 rounded-full transition-all duration-300 ease-in-out
                ${social.bgColor} ${social.color}
                hover:scale-110 hover:shadow-lg hover:shadow-gray-400/25
                focus:outline-none focus:ring-4 focus:ring-gray-300
                transform hover:-translate-y-1
              `}
            >
              <IconComponent className="w-7 h-7 text-gray-700 group-hover:text-current transition-colors duration-300" />

              {/* Tooltip */}
              <span
                className="
                absolute -top-12 left-1/2 transform -translate-x-1/2
                bg-gray-800 text-white text-sm px-3 py-1 rounded-lg
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none whitespace-nowrap
                before:content-[''] before:absolute before:top-full before:left-1/2 
                before:transform before:-translate-x-1/2 before:border-4 
                before:border-transparent before:border-t-gray-800
              "
              >
                {social.name}
              </span>
            </Link>
          )
        })}
      </div>

      
    </div>
  )
}
