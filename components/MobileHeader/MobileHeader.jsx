import "./MobileHeader.scss";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  return (
    <header className="mobile-header">
      <Link to="/posts">
        <img src={logo} alt="" className="mobile-header__logo" />
      </Link>
    </header>
  );
}
