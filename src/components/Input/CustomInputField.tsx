import "./styles.css";

interface CustomInputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const CustomInputField = ({
  label,
  type,
  placeholder,
}: CustomInputFieldProps) => {
  return (
    <div className="form_field">
      <label htmlFor="" className="label">
        {label}
      </label>
      <input type={type} placeholder={placeholder} className="input_field" />
    </div>
  );
};

export default CustomInputField;
