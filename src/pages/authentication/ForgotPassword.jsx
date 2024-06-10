import React from "react";
import "../../login.css";
import images2 from "../../assets/logo.png";
const Forgotpassword = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <form action="">
          <img width="50px" src={images2} />
          <h1>Lupa Password!</h1>
          <div className="input-box">
            <p>Masukkan Email Anda</p>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="div-button-submit">
            <button type="submit">Get Verification Code</button>
          </div>
          <div className="register-link">
            <h>Kembali Ke</h> <a href="login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Forgotpassword;
