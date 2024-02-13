import { useSteps } from "../../contexts/StepsContext";
import CustomButton from "../Button/CustomButton";
import Header from "../Header/Header";
import Interest from "./Interest";

const PickInterest = () => {
  const { handleNextStep } = useSteps();

  const interests = [
    { heading: "Gaming", btn_text: "Added", color: "rgba(223,155,224,0.3)" },
    { heading: "Fashion", btn_text: "Add", color: "rgba(204,255,204,0.4)" },
    { heading: "Music", btn_text: "Add", color: "rgba(255,194,153,0.4)" },
    { heading: "Reading", btn_text: "Add", color: "rgba(37,117,209,0.4)" },
  ];

  return (
    <div className="content">
      <Header
        title="Let’s get started by picking some interests"
        paragraph="Alright, let's pick something we're interested in and get started!"
      />
      <div className="container-interest">
        {interests.map((interest, index) => (
          <Interest
            key={index}
            heading={interest.heading}
            color={interest.color}
            btn_text={interest.btn_text}
          />
        ))}
      </div>
      <CustomButton text="Continue" handleClick={handleNextStep} />
    </div>
  );
};

export default PickInterest;
