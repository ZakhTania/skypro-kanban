import { StyledInput } from "./Input.styled";

export default function Input({ type, name, placeholder, value, onChange, onClick, err }) {
  return <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} $err={err} onClick={onClick} required/>;
}
