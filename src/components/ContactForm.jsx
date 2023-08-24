import "./ContactFormStyle.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Kirim pesan kepada kami</h1>
            <form action="">
                <input type="text" placeholder="Nama" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Pesan"  cols="30" rows="4"></textarea>
                <button>Kirim Pesan</button>
            </form>
        </div>
    )
}

export default ContactForm;