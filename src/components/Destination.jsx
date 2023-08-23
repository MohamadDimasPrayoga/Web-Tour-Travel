import LabuanBajo1 from "../assets/labuanbajo1.jpg";
import LabuanBajo2 from "../assets/labuanbajo2.jpg";
import Bali1 from "../assets/bali1.jpg";
import Bali2 from "../assets/bali2.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Destinasi Paling Populer</h1>
      <p>Temukan petualangan terbaik Anda di destinasi wisata unik kami</p>

      <DestinationData
        className="f-des"
        heading="Labuan Bajo"
        text="Labuan Bajo adalah sebuah kota kecil yang terletak di pesisir barat Pulau Flores, Indonesia. Kota ini adalah pintu gerbang utama menuju Taman Nasional Komodo, yang terkenal dengan populasi komodo liar, reptil raksasa yang menjadi ikonik untuk wilayah ini. Labuan Bajo juga merupakan titik awal yang populer bagi para wisatawan yang ingin menjelajahi keindahan alam dan kehidupan bawah laut di sekitar Kepulauan Komodo. Daerah ini terkenal dengan pantainya yang indah, kegiatan snorkeling dan diving yang luar biasa, serta pemandangan matahari terbenam yang spektakuler. Selain itu, Labuan Bajo juga memiliki fasilitas akomodasi, restoran, dan toko-toko yang mendukung industri pariwisata yang berkembang pesat di daerah tersebut"
        img1={LabuanBajo1}
        img2={LabuanBajo2}
      />

      <DestinationData
        className="f-des-reverse"
        heading="Bali"
        text="Bali adalah sebuah pulau yang terletak di Indonesia, terkenal sebagai tujuan pariwisata utama di dunia. Pulau ini dikenal karena keindahan alamnya yang menakjubkan, seperti pantai-pantai pasir putih, sawah hijau yang terasering, dan gunung-gunung yang indah. Bali juga memiliki budaya yang kaya, termasuk upacara keagamaan, tari-tarian tradisional, dan seni patung kayu serta batik. Tempat-tempat seperti Ubud menjadi pusat seni dan kebudayaan di pulau ini. Pulau Bali juga dikenal sebagai surga bagi para penggemar surfing, diving, dan aktivitas air lainnya"
        img1={Bali1}
        img2={Bali2}
      />
    </div>
  );
};

export default Destination;
