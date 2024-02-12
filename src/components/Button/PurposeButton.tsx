import addIcon from "../../assets/Vector.png";
import "./styles.css";

interface PurposeButtonProps {
  text: string;
}
const PurposeButton = ({ text }: PurposeButtonProps) => {
  return (
    <div className="purpose_button">
      <img src={addIcon} alt="add_icon" />
      <span>{text}</span>
    </div>
  );
};

export default PurposeButton;
