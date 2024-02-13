import { useContext, createContext, useState, ReactNode } from "react";

interface StepContextProps {
  currentStep: string;
  handleNextStep: () => void;
}

const StepContext = createContext<StepContextProps>({
  currentStep: "",
  handleNextStep: () => undefined,
});

interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<string>("Step_1");

  const handleNextStep = () => {
    const currentStepIndex = parseInt(currentStep.split("_")[1]);
    const nextStep = `Step_${currentStepIndex + 1}`;
    setCurrentStep(nextStep);
  };

  const stepContextValue: StepContextProps = {
    currentStep,
    handleNextStep,
  };

  return (
    <StepContext.Provider value={stepContextValue}>
      {children}
    </StepContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSteps = () => {
  const { currentStep, handleNextStep } = useContext(StepContext);

  return {
    currentStep,
    handleNextStep,
  };
};
