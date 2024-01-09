import { StyledInput } from "./Input.styled";

export default function Input({ type, name, placeholder }) {
  return <StyledInput type={type} name={name} placeholder={placeholder} />;
}
