import "./styles.css";

interface InterestProps {
  heading: string;
  btn_text: string;
  color: string;
}

const Interest = ({ heading, btn_text, color }: InterestProps) => {
  return (
    <div className="interest" style={{ backgroundColor: color }}>
      <h4>{heading}</h4>
      <p className="interest-btn">{btn_text}</p>
    </div>
  );
};

export default Interest;
