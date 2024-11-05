import "./NewItemIcon.scss";
import addIcon from "../../assets/icons/add.svg";

export default function NewItemIcon({ handleCreateLink }) {
  return (
    <div className="new-item" onClick={handleCreateLink}>
      <img src={addIcon} alt="plus" className="new-item__icon" />
    </div>
  );
}
