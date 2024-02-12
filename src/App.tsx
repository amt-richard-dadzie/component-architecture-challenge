import React from "react";
import "./App.css";
import Photo from "./components/AddPhoto/Photo";
// import InterestPreference from "./components/Interest/InterestPreference";
import CreateAccount from "./components/Register/CreateAccount";
import person from "./assets/person.png"
import google from "./assets/Google logo.png"
import { useAppSelector } from "./app/store";
// import CreateAccount from "./components/Register/CreateAccount";

interface ComponentData {
  component: React.FC
  image:string
}

function App() {

  const { step }= useAppSelector((state) => state.steps);

  const getComponentsWithImages = (): Record<string, ComponentData> => {

    const components: Record<string, ComponentData>  = {
      Step_1: {
        component: CreateAccount,
        image: person
      },
      Step_2: {
        component: Photo,
        image: google
      }
    }

    return components;
  }

  const CurrentStepComponent = getComponentsWithImages()[step].component;

  return (
    <>
      <div className="one">
        <img src={getComponentsWithImages()['Step_1'].image} alt="" />
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
