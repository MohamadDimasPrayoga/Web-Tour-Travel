import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/trip2.jpg";
import Trip3 from "../assets/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Perjalanan Baru Baru ini</h1>
      <p>Anda dapat menemukan destinasi lainnya dengan mengecek google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Dieng"
          text="Dieng adalah sebuah dataran tinggi yang terletak di Provinsi Jawa Tengah, Indonesia. Tempat ini terkenal karena keindahan alamnya yang unik, termasuk pemandangan pegunungan, danau-danau kecil, serta hawa sejuk yang menyegarkan. Dieng juga dikenal karena kompleks candi-candi Hindu kuno yang menjadi saksi sejarah budaya di wilayah ini. Salah satu daya tarik utama Dieng adalah Telaga Warna dan Telaga Pengilon, dua danau dengan air berwarna-warni yang menciptakan pemandangan yang menakjubkan. Selain itu, Dieng juga sering dikunjungi oleh para pendaki gunung yang ingin menaklukkan puncak tertinggi di Jawa Tengah, yakni Gunung Prau."
        />

        <TripData
          image={Trip2}
          heading="Bromo"
          text="Dieng adalah sebuah dataran tinggi yang terletak di Provinsi Jawa Tengah, Indonesia. Tempat ini terkenal karena keindahan alamnya yang unik, termasuk pemandangan pegunungan, danau-danau kecil, serta hawa sejuk yang menyegarkan. Dieng juga dikenal karena kompleks candi-candi Hindu kuno yang menjadi saksi sejarah budaya di wilayah ini. Salah satu daya tarik utama Dieng adalah Telaga Warna dan Telaga Pengilon, dua danau dengan air berwarna-warni yang menciptakan pemandangan yang menakjubkan. Selain itu, Dieng juga sering dikunjungi oleh para pendaki gunung yang ingin menaklukkan puncak tertinggi di Jawa Tengah, yakni Gunung Prau."
        />

        <TripData
          image={Trip3}
          heading="Padar Island"
          text="Dieng adalah sebuah dataran tinggi yang terletak di Provinsi Jawa Tengah, Indonesia. Tempat ini terkenal karena keindahan alamnya yang unik, termasuk pemandangan pegunungan, danau-danau kecil, serta hawa sejuk yang menyegarkan. Dieng juga dikenal karena kompleks candi-candi Hindu kuno yang menjadi saksi sejarah budaya di wilayah ini. Salah satu daya tarik utama Dieng adalah Telaga Warna dan Telaga Pengilon, dua danau dengan air berwarna-warni yang menciptakan pemandangan yang menakjubkan. Selain itu, Dieng juga sering dikunjungi oleh para pendaki gunung yang ingin menaklukkan puncak tertinggi di Jawa Tengah, yakni Gunung Prau."
        />
      </div>
    </div>
  );
}

export default Trip;
