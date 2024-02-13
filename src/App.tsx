import React from "react";
import "./App.css";
import Photo from "./components/AddPhoto/Photo";
import InterestPreference from "./components/Interest/InterestPreference";
import CreateAccount from "./components/Register/CreateAccount";
import step_1 from "./assets/step_1.png";
import step_2 from "./assets/step_2.png";
import step_3 from "./assets/step_3.png";
import { useSteps } from "./contexts/StepsContext";

// import { useAppSelector } from "./app/store";
// import CreateAccount from "./components/Register/CreateAccount";

interface ComponentData {
  component: React.FC;
  image: string;
}

function App() {
  // const { currentStep } = useAppSelector((state) => state.steps);

  const { currentStep } = useSteps();

  const getComponentsWithImages = (): Record<string, ComponentData> => {
    const components: Record<string, ComponentData> = {
      Step_1: {
        component: CreateAccount,
        image: step_1,
      },
      Step_2: {
        component: Photo,
        image: step_2,
      },

      Step_3: {
        component: InterestPreference,
        image: step_3,
      },
    };

    return components;
  };

  const CurrentStepComponent = getComponentsWithImages()[currentStep].component;

  return (
    <>
      <div className="one">
        <div className="image-container">
          <img src={getComponentsWithImages()[currentStep].image} alt="" />
        </div>
      </div>
      <div className="two">
        <nav className="nav">
          <span>Step 1 of 4</span>
          <span>Exit</span>
        </nav>
        {/* <CreateAccount /> */}
        {/* <Photo /> */}
        {/* <InterestPreference /> */}
        <CurrentStepComponent />
      </div>
    </>
  );
}

export default App;
