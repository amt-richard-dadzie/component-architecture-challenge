import Header from "../Header/Header";
import CustomInputField from "../Input/CustomInputField";
import googleIcon from "../../assets/Google logo.png";
import "./styles.css";
import { useSteps } from "../../contexts/StepsContext";
import CustomButton from "../Button/CustomButton";

const CreateAccount = () => {
  const { handleNextStep } = useSteps();
  return (
    <div className="content">
      <Header title="Create Account" />
      <form className="form">
        <CustomInputField
          label="Name"
          type="text"
          placeholder="Richard Dadzie"
        />
        <CustomInputField
          label="E-mail"
          type="email"
          placeholder="richard@gmail.com"
        />
        <CustomInputField
          label="Password"
          type="password"
          placeholder="**********"
        />
        <CustomButton text="Create Account" handleClick={handleNextStep} />
      </form>
      <div className="social-signUp">
        <img src={googleIcon} alt="google icon" width="30px" />
        <span>Sign up with Google</span>
      </div>
      <p className="center-text">
        Already have an account? <span className="login-text">Log In</span>
      </p>
    </div>
  );
};

export default CreateAccount;
