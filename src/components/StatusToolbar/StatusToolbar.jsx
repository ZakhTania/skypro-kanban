import { StatusThemeInput, StatusThemeLabel } from "./StatusToolbar.styled";

function StatusToolbar({ status, index, onChange, checked }) {
  return (
    <>
      <StatusThemeInput
        type="radio"
        name="statusRadios"
        id={`statusRadio${index}`}
        value={status}
        checked={checked}
        onChange={onChange}
      />
      <StatusThemeLabel htmlFor={`statusRadio${index}`}>
        {status}
      </StatusThemeLabel>
    </>
  );
}
export default StatusToolbar;
