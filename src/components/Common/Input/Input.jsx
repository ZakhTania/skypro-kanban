import { StyledInput } from "./Input.styled";

export default function Input({ type, name, placeholder, value, onChange }) {
  return <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>;
}
