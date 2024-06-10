import "../../App.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./components/Sidebar";

function IformasiPribadi() {
  const name = "username";
  const activeNav = false;
  const activeSide = "InformasiPribadi";

  return (
    <>
      <Header name={name} activeNav={activeNav} />
      <div className="section-informasi-pribadi">
        <Sidebar active={activeSide} />

        <div className="info-sec-content">
          <h1>Informasi Pribadi</h1>
          <div className="line-title-ip"></div>
          <div className="group-content-informasi-pribadi">
            <div className="group-input-ip">
              <label>Nama Lengkap</label>
              <input value="John Doe" type="text" disabled />
            </div>
            <div className="group-input-ip">
              <label>Jenis Kelamin</label>
              <input value="Laki-laki" type="text" disabled />
            </div>
          </div>
          <div className="group-content-informasi-pribadi">
            <div className="group-input-ip">
              <label>Goals</label>
              <input value="Menurunkan berat badan" type="text" disabled />
            </div>
            <div className="group-input-ip">
              <label>Berat Badan</label>
              <input value="95 kg" type="text" disabled />
            </div>
          </div>
          <div className="group-content-informasi-pribadi">
            <div className="group-input-ip">
              <label>Tinggi Badan</label>
              <input value="174 cm" type="text" disabled />
            </div>
            <div className="group-input-ip">
              <label>Umur</label>
              <input value="25 Tahun" type="text" disabled />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IformasiPribadi;
