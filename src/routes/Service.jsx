import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../assets/servicebg.jpg"
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
    </>
  );
}

export default Service;