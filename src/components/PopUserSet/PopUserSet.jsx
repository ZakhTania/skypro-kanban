import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import {
  HeaderPopUserSet,
  PopUserSetBtn,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeInput,
  PopUserSetThemeP,
} from "./PopUserSet.styled";
import useUser from "../../hooks/useUser";
import useTheme from "../../hooks/useTheme";


function PopUserSet({ toggleDropdown }) {
  const { user } = useUser();
const { toggleTheme } = useTheme();

function setTheme() {
  toggleTheme();
  toggleDropdown();
}
  return (
    <HeaderPopUserSet>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
      <PopUserSetTheme>
        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
        <PopUserSetThemeInput type="checkbox" onClick={setTheme}/>
      </PopUserSetTheme>
      <Link to={AppRoutes.EXIT}>
        <PopUserSetBtn>Выйти</PopUserSetBtn>
      </Link>
    </HeaderPopUserSet>
  );
}

export default PopUserSet;
