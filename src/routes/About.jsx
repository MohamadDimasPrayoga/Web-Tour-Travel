import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutHero from "../assets/abouthero.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

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
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
