import "./styles.css";

interface HeaderProps {
  title: string;
  paragraph?: string;
}

const Header = ({ title, paragraph }: HeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Header;
