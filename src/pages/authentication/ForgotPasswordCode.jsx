import React from "react";
import "../../login.css";
import images2 from "../../assets/logo.png";
const ForgotpasswordCode = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <form action="">
          <img width="50px" src={images2} />
          <h1>Lupa Password!</h1>
          <div className="input-box">
            <p>Masukkan Kode Verifikasi</p>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="button-submit">
            <button type="submit">Verifikasi</button>
          </div>
          <div className="register-link">
            <h>Tidak menerima kode?</h> <a href="#"> Kirim Ulang</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotpasswordCode;
