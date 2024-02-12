interface CustomButtonProps {
  text: string;
}

const CustomButton = ({ text }: CustomButtonProps) => {
  return <button>{text}</button>;
};

export default CustomButton;
