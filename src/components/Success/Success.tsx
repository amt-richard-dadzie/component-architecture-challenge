import CustomButton from "../Button/CustomButton";
import Header from "../Header/Header";
import hurray from "../../assets/hurray.png";

const Success = () => {
  return (
    <div className="content">
      <Header
        title="Woohoo!"
        paragraph="Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!"
      />
      <div>
        <img src={hurray} alt="success-image" />
      </div>
      <CustomButton text="Continue" handleClick={() => {}} />
    </div>
  );
};

export default Success;
