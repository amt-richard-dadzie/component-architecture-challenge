import Header from "../Header/Header";
import person from "../../assets/person.png";
import "./styles.css";
import CustomButton from "../Button/CustomButton";

const Photo = () => {
  return (
    <div className="content">
      <Header
        title="Add Photo"
        paragraph="Add a photo so other members know who you are"
      />
      <div className="avatar">
        <img src={person} alt="avatar_placeholder" width="70%" />
      </div>
      <CustomButton text="Upload a photo" />
      <p className="skip_button">Skip</p>
    </div>
  );
};

export default Photo;
