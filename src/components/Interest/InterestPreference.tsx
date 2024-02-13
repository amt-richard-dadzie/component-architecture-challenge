import { useSteps } from "../../contexts/StepsContext";
import CustomButton from "../Button/CustomButton";
import PurposeButton from "../Button/PurposeButton";
import Header from "../Header/Header";

const InterestPreference = () => {
  const { handleNextStep } = useSteps();

  return (
    <div className="content">
      <Header
        title="Hey there! What brings you here?"
        paragraph="This will help us make great recommendations."
      />
      <div className="container-purpose-btn">
        <PurposeButton text="Social Interaction" />
        <PurposeButton text="Personal Development" />
        <PurposeButton text="Entertainment and Fun" />
        <PurposeButton text="Rewards and recognition" />
      </div>
      <CustomButton text="Continue" handleClick={handleNextStep} />
    </div>
  );
};

export default InterestPreference;
