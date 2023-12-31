import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImg from "../assets/herobg.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
return(
    <>
    <Navbar />
    <Hero 
    cName="hero"
    heroImg={heroImg}
    title="Merangkai Kenangan Menjelajahi Destinasi"
    text="Cari Destinasi Perjalananmu disini"
    buttonText="Rencana Perjalanan"
    url="/"
    btnClass="show"/>
    <Destination />
    <Trip />
    <Footer />
    </>
)
}

export default Home;