import React from "react";
import "./App.css";
import Photo from "./components/AddPhoto/Photo";
import InterestPreference from "./components/Interest/InterestPreference";
import CreateAccount from "./components/Register/CreateAccount";
import image_1 from "./assets/step_1.png";
import image_2 from "./assets/step_2.png";
import image_3 from "./assets/step_4.png";
import last_step from "./assets/step_3.png";
import { useSteps } from "./contexts/StepsContext";
import PickInterest from "./components/Interest/PickInterest";
import Success from "./components/Success/Success";
import { IoMdArrowBack } from "react-icons/io";

interface ComponentData {
  component: React.FC;
  image?: string;
}

function App() {
  const { currentStep, handlePrevStep } = useSteps();

  const getComponentsWithImages = (): Record<string, ComponentData> => {
    const components: Record<string, ComponentData> = {
      Step_1: {
        component: CreateAccount,
        // image: step_1,
      },
      Step_2: {
        component: Photo,
        image: image_1,
      },

      Step_3: {
        component: InterestPreference,
        image: image_2,
      },
      Step_4: {
        component: PickInterest,
        image: image_3,
      },
      Step_5: {
        component: Success,
        image: last_step,
      },
    };

    return components;
  };

  const currentStepIndex = parseInt(currentStep.split("_")[1]);
  const CurrentStepComponent = getComponentsWithImages()[currentStep].component;

  return (
    <>
      <div className="one">
        <div className="image-container">
          <img src={getComponentsWithImages()[currentStep].image} />
        </div>
      </div>
      <div className="two">
        <nav
          className="nav"
          style={{ display: `${currentStepIndex > 4 ? "none" : "flex"}` }}
        >
          <div
            style={{
              display: `${currentStepIndex > 1 ? "flex" : "none"}`,
              cursor: "pointer",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={handlePrevStep}
          >
            <IoMdArrowBack />
            <span>Back</span>
          </div>
          <span>Step {currentStepIndex} of 4</span>
          <span>Exit</span>
        </nav>
        <CurrentStepComponent />
      </div>
    </>
  );
}

export default App;
