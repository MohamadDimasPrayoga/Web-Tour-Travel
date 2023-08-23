import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutHero from "../assets/abouthero.jpg"

function About() {
  return (
    <>
      <Navbar />
      <Hero
         cName="hero-mid"
         heroImg={aboutHero}
         title="About"
         btnClass="hide"
      />
    </>
  );
}

export default About;
