import { FaPlus } from "react-icons/fa6";
import "./styles.css";

interface PurposeButtonProps {
  text: string;
}
const PurposeButton = ({ text }: PurposeButtonProps) => {
  return (
    <div className="purpose_button">
     <FaPlus />
      <span>{text}</span>
    </div>
  );
};

export default PurposeButton;
