import "./NavFooter.scss";
import homeIcon from "../../assets/icons/home.svg";
import searchIcon from "../../assets/icons/search.svg";
import projectIcon from "../../assets/icons/new-project.svg";
import userIcon from "../../assets/icons/user.svg";
import NewItemIcon from "../NewItemIcon/NewItemIcon";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavFooter() {
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
    <footer className="nav-footer">
      <div className="nav-footer__icons">
        <Link to="/posts">
          <img src={homeIcon} alt="Home" className="nav-footer__icon" />
        </Link>

        {/* <img src={searchIcon} alt="Magnifier" className="nav-footer__icon" /> */}
        <NewItemIcon handleCreateLink={handleCreateLink} />
        <Link to="/projects">
          <img src={projectIcon} alt="" className="nav-footer__icon" />
        </Link>
        {/* <img src={userIcon} alt="" className="nav-footer__icon" /> */}
      </div>
    </footer>
  );
}
