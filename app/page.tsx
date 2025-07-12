import Container from "@/components/container";
import Education from "@/components/Education";
import HeroSection from "@/components/Hero";
import Social from "@/components/Social"
import { ModeToggle } from "@/components/toggle";
import Project from "@/components/Projects"
import Footer from "@/components/Footer";
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <Container>
      
      <ModeToggle/>
      <HeroSection/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
      <Social/>
    </Container>
  );
}

