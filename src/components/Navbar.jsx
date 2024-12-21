import logo from '../assets/rishavLogo.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src = {logo} className="mx-2" width={50} height={33} alt="Logo" /> 
                </a>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            {/* twitter */}
            
                <a href='https://x.com/rishav0317'
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label='Twitter'>
                    <FaSquareXTwitter />
                </a>

            {/* linkedin */}
                <a href='https://www.linkedin.com/in/rishav-shrivastava-232033184/'
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label='LinkedIn'>
                    <FaLinkedin/>
                </a>

            {/* instagram */}
                <a href='https://www.instagram.com/rishavv1712/'
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label='Instagram'>
                    <FaInstagram />
                </a>
            
            {/* github */}
                <a href='https://www.github.com/in/rishavr920/'
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label='GitHub'>
                    <FaGithub />
                </a>
            
            </div>
        </nav>
    )
}

export default Navbar;