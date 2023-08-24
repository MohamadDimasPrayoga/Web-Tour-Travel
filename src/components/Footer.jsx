import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Relax</h1>
          <p>Temukan Destinasi Kesukaan anda</p>
        </div>
       
        <div>
        <a href="/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Katalog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Komunitas</h4>
          <a href="/">GitHub</a>
          <a href="/">Twitter</a>
          <a href="/">Facebook</a>
          <a href="/">Instargram</a>
        </div>

        <div>
        <h4>Membantu</h4>
          <a href="/">Mendukung</a>
          <a href="/">Penyelesaian Masalah</a>
          <a href="/">Hubungi Kami</a>
        </div>

        <div>
          <h4>Lainnya</h4>
          <a href="/">Layanan</a>
          <a href="/">Pribadi</a>
          <a href="/">Izin Polisi</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
