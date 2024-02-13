import { useContext, createContext, useState, ReactNode } from "react";

interface StepContextProps {
  currentStep: string;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  handleSkipStep: () => void;
}

const StepContext = createContext<StepContextProps>({
  currentStep: "",
  handleNextStep: () => undefined,
  handlePrevStep: () => undefined,
  handleSkipStep: () => undefined,
});

interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<string>("Step_1");

  const currentStepIndex = parseInt(currentStep.split("_")[1]);

  const handleNextStep = () => {
    const nextStep = `Step_${currentStepIndex + 1}`;
    setCurrentStep(nextStep);
  };

  const handlePrevStep = () => {
    const prevStep = `Step_${currentStepIndex - 1}`;
    setCurrentStep(prevStep);
  };

  const handleSkipStep = () => {
    const prevStep = `Step_${currentStepIndex + 2}`;
    setCurrentStep(prevStep);
  };

  const stepContextValue: StepContextProps = {
    currentStep,
    handleNextStep,
    handlePrevStep,
    handleSkipStep,
  };

  return (
    <StepContext.Provider value={stepContextValue}>
      {children}
    </StepContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSteps = () => {
  const { currentStep, handleNextStep, handlePrevStep, handleSkipStep } =
    useContext(StepContext);

  return {
    currentStep,
    handleNextStep,
    handlePrevStep,
    handleSkipStep,
  };
};
