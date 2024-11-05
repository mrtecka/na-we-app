import "./Loading.scss";
import naweIcon from "../../assets/icons/nawe.svg";
import MobileHeader from "../MobileHeader/MobileHeader";

export default function Loading() {
  return (
    <div className="container">
      <MobileHeader />
      <img src={naweIcon} alt="" className="logo" />
    </div>
  );
}
