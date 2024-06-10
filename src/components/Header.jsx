import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.svg";
import "../App.css";

function Header(props) {
  const AvatarImage = <img src={Avatar} className="avatar-img"></img>;
  const BtnText = "masuk";
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav">
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
        </div>
        <div className="nav-group-link">
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav == "makanansehat" ? "nav-link-active" : ""
            }`}
            to="/"
          >
            Makanan Sehat
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav == "latihanfisik" ? "nav-link-active" : ""
            }`}
            to="/latihan-fisik"
          >
            Latihan Fisik
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav == "komunitas" ? "nav-link-active" : ""
            }`}
            to="/komunitas-guest"
          >
            Komunitas
          </Link>
        </div>
        <Link
          to={props.name ? "/informasi-pribadi" : "/login"}
          className="login nav-link-hover"
        >
          {props.name ? AvatarImage : BtnText}
        </Link>
      </nav>
    </>
  );
}

export default Header;
