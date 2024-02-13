interface CustomButtonProps {
  text: string;
  handleClick: () => void;
}

const CustomButton = ({ text, handleClick }: CustomButtonProps) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default CustomButton;
