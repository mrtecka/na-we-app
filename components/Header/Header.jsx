import "./Header.scss";
import logo from "../../assets/logos/logo-white.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/home-white.svg";
import avatar from "../../assets/images/tecka.jpg";
import searchIcon from "../../assets/icons/search-white.svg";
import addIcon from "../../assets/icons/add.svg";
import projectIcon from "../../assets/icons/new-project-white.svg";
import userIcon from "../../assets/icons/user-white.svg";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleCreateLink = (event) => {
    event.preventDefault();

    if (location.pathname === "/posts" || location.pathname === "/posts/*") {
      navigate("/posts/new");
    }

    if (location.pathname === "/projects") {
      navigate("/projects/new");
    } else {
    }
  };

  return (
    <header className="header">
      <Link to="/posts">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <nav className="nav">
        <Link className="nav-link" to="/posts">
          <img src={homeIcon} alt="" className="nav-link__icon" />
          <span className="nav-link__text">Home</span>
        </Link>
        {/* <Link className="nav-link">
          <img src={searchIcon} alt="" className="nav-link__icon" />
          <span className="nav-link__text">Search</span>
        </Link> */}
        <Link className="nav-link" onClick={handleCreateLink}>
          <img src={addIcon} alt="" className="nav-link__icon" />
          <span className="nav-link__text">Create</span>
        </Link>
        <Link className="nav-link" to="/projects">
          <img src={projectIcon} alt="" className="nav-link__icon" />
          <span className="nav-link__text">Projects</span>
        </Link>
        {/* <Link className="nav-link">
          <img src={userIcon} alt="" className="nav-link__icon" />
          <span className="nav-link__text">Profile</span>
        </Link> */}
      </nav>
      <div className="header__user">
        <img src={avatar} alt="" className="header__user-avatar" />
        <div className="header__user-info-container">
          <span className="header__user-info">Aziz B</span>
          <span className="header__user-info--other">aziz@bstn.io</span>
        </div>
        <img src="" alt="" className="header__user-icon" />
      </div>
    </header>
  );
}
