import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../assets/servicebg.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
