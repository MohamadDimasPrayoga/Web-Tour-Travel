import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../assets/contactbg.jpg"
function Contact(){
    return(
        <>
          <Navbar />
      <Hero
         cName="hero-mid"
         heroImg={contactImg}
         title="Contact"
         btnClass="hide"
      />
        </>
    )
    }
    
    export default Contact;