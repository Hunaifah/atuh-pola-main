import "../App.css";
import warninggymguest from "../assets/warninggymguest.png";

function Authentification() {
  return (
    <>
      <div className="warning-gym">
        <div className="warning-gym-pictures">
          <img src={warninggymguest}></img>
          <h1>Ups! Kamu Memerlukan Akun untuk Mengakses Halaman Ini</h1>
          <p>
            Ingin melihat lebih banyak detail tentang tempat gym tersebut?
            Silakan masuk atau daftar untuk mengakses konten lengkap kami.
          </p>
          <a href="/login" className="button-warning-gym">
            Masuk
          </a>
        </div>
      </div>
    </>
  );
}

export default Authentification;
